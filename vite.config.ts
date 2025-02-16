
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Connect } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      strict: false
    },
    middlewares: [
      ((req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
        // Set correct MIME type for JavaScript modules
        if (req.url?.endsWith('.js') || req.url?.endsWith('.ts') || req.url?.endsWith('.tsx')) {
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        }
        next();
      }) as Connect.NextHandleFunction
    ]
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
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    }
  }
}));
