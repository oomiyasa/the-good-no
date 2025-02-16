
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { Connect } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';

export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
    fs: {
      strict: false
    },
    middlewares: [
      ((req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
        // Handle all JavaScript-related files
        if (req.url?.match(/\.(js|jsx|ts|tsx|mjs)$/)) {
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        }
        // Handle source map files
        if (req.url?.endsWith('.map')) {
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
        }
        next();
      }) as Connect.NextHandleFunction
    ]
  },
  plugins: [react()],
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
