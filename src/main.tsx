import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Boot-time diagnostic (non-crashing) - logs once to help debug env issues
console.log('[Boot] Environment check:', {
  hasBackendUrl: Boolean(import.meta.env.VITE_SUPABASE_URL),
  hasBackendKey: Boolean(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY),
  mode: import.meta.env.MODE,
});

createRoot(document.getElementById("root")!).render(<App />);
