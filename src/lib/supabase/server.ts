import { createClient } from "@supabase/supabase-js";

// Server-side client for admin routes and the contact form.
//
// On the shared FreeWebsites project it uses the publishable key plus
// SUPABASE_ADMIN_TOKEN (sent as `x-admin-token`). RLS only lets requests whose
// token hash is in private.ibe_admin_token write IBE data, and that token
// can't reach any other client's tables. On the original standalone project
// it falls back to SUPABASE_SERVICE_KEY.

/** Storage bucket for product photos and spec-sheet PDFs. */
export const MEDIA_BUCKET = process.env.SUPABASE_STORAGE_BUCKET || "Media";

function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;
  const adminToken = process.env.SUPABASE_ADMIN_TOKEN;
  const serviceKey = process.env.SUPABASE_SERVICE_KEY;
  const useAdminToken = Boolean(publishableKey && adminToken);

  if (!supabaseUrl || !(useAdminToken || serviceKey)) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY + SUPABASE_ADMIN_TOKEN (or SUPABASE_SERVICE_KEY)"
    );
  }

  return createClient(supabaseUrl, useAdminToken ? publishableKey! : serviceKey!, {
    auth: { persistSession: false, autoRefreshToken: false },
    db: { schema: process.env.NEXT_PUBLIC_SUPABASE_DB_SCHEMA || "public" },
    global: useAdminToken ? { headers: { "x-admin-token": adminToken! } } : undefined,
  });
}

type AdminClient = ReturnType<typeof createAdminClient>;

let _client: AdminClient | null = null;

export function getSupabaseAdmin(): AdminClient {
  if (!_client) _client = createAdminClient();
  return _client;
}

// Keep named export for convenience — lazy getter
export const supabaseAdmin = new Proxy({} as AdminClient, {
  get(_target, prop) {
    return (getSupabaseAdmin() as unknown as Record<string | symbol, unknown>)[prop];
  },
});
