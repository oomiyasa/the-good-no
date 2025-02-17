import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { IncomingMessage, ServerResponse } from "http"; // ✅ Fix missing imports
import type { NextHandleFunction } from "connect"; // ✅ Fix missing import

export default defineConfig(({ mode }) => ({
    base: './', // ✅ Fixes Path for GitHub Pages
    server: {
        host: "::",
        port: 8080,
        fs: {
            strict: false
        }
    },
    middlewares: [
        ((req: IncomingMessage, res: ServerResponse, next: NextHandleFunction) => {
            // Handle all JavaScript-related files
            if (req.url?.match(/\.(js|jsx|ts|tsx|mjs)$/)) {
                res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
            }
            // Handle source map files
            if (req.url?.endsWith('.map')) {
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
            }
            next();
        }) as NextHandleFunction
    ],
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        outDir: "docs", // ✅ Ensures GitHub Pages uses /docs
        emptyOutDir: true, // ✅ Clears old files before building
    }
}));
