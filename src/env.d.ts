// Replace `astro/client` with `@astrojs/image/client`
/// <reference types="@astrojs/image/client" />
interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
