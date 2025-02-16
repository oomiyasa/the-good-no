export default defineConfig(({ mode }) => ({
    base: './', // Fixes Path for GitHub Pages
    server: {
        host: "::",
        port: 8080,
        fs: {
            strict: false
        }
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
    ],
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
