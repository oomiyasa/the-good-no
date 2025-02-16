
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      strict: false // Disable strict file serving
    },
    headers: {
      // Ensure proper MIME types for JavaScript modules
      "*.js": {
        "Content-Type": "application/javascript"
      },
      "*.ts": {
        "Content-Type": "application/javascript"
      },
      "*.tsx": {
        "Content-Type": "application/javascript"
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  }
}));
