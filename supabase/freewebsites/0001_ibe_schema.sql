-- FreeWebsites (ref nxhwqtqroyerbbklywyn): Industrial Bakery Equipment moves into
-- its own `ibe` schema. Tables match the old IBEWebsite project (vaimupbyosltsvhyptah)
-- column for column, verified against the live DB on 2026-10-17.
--
-- Access model:
-- - The browser reads products/events/categories with the shared publishable key.
-- - Everything else (contact inserts, admin edits, uploads) goes through server
--   routes that send `x-admin-token`; only a token whose sha256 is in
--   private.ibe_admin_token passes. That token can't reach any other client.
-- The token hash itself is inserted out of band, never committed.

create schema if not exists ibe;
revoke all on schema ibe from public;
grant usage on schema ibe to anon, service_role;

create table ibe.categories (
  id         text primary key,
  name       text not null,
  sort_order integer default 0,
  created_at timestamptz default now()
);

create table ibe.products (
  id          text primary key,
  name        text not null,
  description text not null,
  image_url   text default ''::text,
  category    text not null default 'bakery'::text,
  sort_order  integer default 0,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now(),
  pdf_url     text default ''::text,
  archived    boolean default false
);

create table ibe.events (
  id          text primary key,
  title       text not null,
  date        text not null,
  location    text not null,
  description text not null,
  link        text default ''::text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now(),
  pdf_url     text default ''::text,
  archived    boolean default false
);

create table ibe.contacts (
  id               uuid primary key default gen_random_uuid(),
  name             text not null,
  email            text not null,
  company          text default ''::text,
  phone            text default ''::text,
  message          text not null,
  product_interest text default ''::text,
  products         text default ''::text,
  created_at       timestamptz default now()
);

-- Admin token (house pattern, see Jeronimo / Whole Heart / JSC).
create table private.ibe_admin_token (
  token_hash text primary key,
  label      text,
  created_at timestamptz not null default now()
);
alter table private.ibe_admin_token enable row level security;
revoke all on table private.ibe_admin_token from public, anon, authenticated;

create or replace function private.ibe_admin_ok(candidate text)
returns boolean
language sql stable security definer
set search_path to 'private', 'extensions', 'pg_temp'
as $$
  select exists (
    select 1 from private.ibe_admin_token
    where candidate is not null
      and token_hash = encode(extensions.digest(candidate, 'sha256'), 'hex')
  );
$$;

create or replace function private.ibe_request_is_admin()
returns boolean
language sql stable
set search_path to 'private', 'pg_temp'
as $$
  select private.ibe_admin_ok(
    nullif(current_setting('request.headers', true), '')::json ->> 'x-admin-token'
  );
$$;

revoke all on function private.ibe_admin_ok(text), private.ibe_request_is_admin() from public;
grant execute on function private.ibe_admin_ok(text), private.ibe_request_is_admin() to anon;

-- Table access, all gated by RLS below.
alter table ibe.categories enable row level security;
alter table ibe.products   enable row level security;
alter table ibe.events     enable row level security;
alter table ibe.contacts   enable row level security;

grant select, insert, update, delete on all tables in schema ibe to anon, service_role;

create policy "Public can read categories" on ibe.categories for select to anon using (true);
create policy "Public can read products"   on ibe.products   for select to anon using (true);
create policy "Public can read events"     on ibe.events     for select to anon using (true);

create policy "IBE admin full access" on ibe.categories for all to anon
  using (private.ibe_request_is_admin()) with check (private.ibe_request_is_admin());
create policy "IBE admin full access" on ibe.products for all to anon
  using (private.ibe_request_is_admin()) with check (private.ibe_request_is_admin());
create policy "IBE admin full access" on ibe.events for all to anon
  using (private.ibe_request_is_admin()) with check (private.ibe_request_is_admin());
create policy "IBE admin full access" on ibe.contacts for all to anon
  using (private.ibe_request_is_admin()) with check (private.ibe_request_is_admin());

-- Storage: public bucket for product photos and spec-sheet PDFs.
insert into storage.buckets (id, name, public)
values ('ibe-media', 'ibe-media', true)
on conflict (id) do nothing;

create policy "Public can view IBE media" on storage.objects for select
  using (bucket_id = 'ibe-media');
create policy "Admin can upload IBE media" on storage.objects for insert to anon
  with check (bucket_id = 'ibe-media' and private.ibe_request_is_admin());
create policy "Admin can replace IBE media" on storage.objects for update to anon
  using (bucket_id = 'ibe-media' and private.ibe_request_is_admin())
  with check (bucket_id = 'ibe-media' and private.ibe_request_is_admin());
create policy "Admin can delete IBE media" on storage.objects for delete to anon
  using (bucket_id = 'ibe-media' and private.ibe_request_is_admin());
