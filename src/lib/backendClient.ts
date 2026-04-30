/**
 * Lazy backend client loader
 * 
 * IMPORTANT: Do not import @/integrations/supabase/client directly in components.
 * Use this module's getBackendClient() function instead to avoid crashes when
 * environment variables are not available.
 */

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

let cachedClient: SupabaseClient<Database> | null = null;
let loadAttempted = false;

/**
 * Check if backend environment variables are present (safe boolean check)
 */
export const hasBackendEnv = (): boolean => {
  return Boolean(
    import.meta.env.VITE_SUPABASE_URL && 
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  );
};

/**
 * Lazily load and cache the Supabase client.
 * Returns null if environment variables are missing or if loading fails.
 */
export const getBackendClient = async (): Promise<SupabaseClient<Database> | null> => {
  // Return cached client if available
  if (cachedClient) {
    return cachedClient;
  }

  // If we already tried and failed, don't retry
  if (loadAttempted && !cachedClient) {
    return null;
  }

  // Check env vars before attempting import
  if (!hasBackendEnv()) {
    console.warn('[Backend] Environment variables not configured. AI features disabled.');
    loadAttempted = true;
    return null;
  }

  try {
    loadAttempted = true;
    const module = await import('@/integrations/supabase/client');
    cachedClient = module.supabase;
    return cachedClient;
  } catch (error) {
    console.error('[Backend] Failed to load client:', error);
    return null;
  }
};
