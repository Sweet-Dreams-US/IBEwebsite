import { createClient } from "@supabase/supabase-js";

function createBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }
  return createClient(supabaseUrl, supabaseAnonKey, {
    // IBE tables live in the `ibe` schema on the shared FreeWebsites project.
    db: { schema: process.env.NEXT_PUBLIC_SUPABASE_DB_SCHEMA || "public" },
  });
}

type BrowserClient = ReturnType<typeof createBrowserClient>;

let _client: BrowserClient | null = null;

export function getSupabase(): BrowserClient {
  if (!_client) _client = createBrowserClient();
  return _client;
}

export const supabase = new Proxy({} as BrowserClient, {
  get(_target, prop) {
    return (getSupabase() as unknown as Record<string | symbol, unknown>)[prop];
  },
});
