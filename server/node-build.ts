import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { createServer } from "./index";

const app = createServer();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "../spa");

app.use(express.static(distPath));

app.get("/{*splat}", (req, res) => {
  if (req.path === "/api" || req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  res.sendFile(path.join(distPath, "index.html"));
});

export default app;

// A deployed Vercel function imports the app; a direct `npm start` invocation starts it.
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`Fusion Starter server running on port ${port}`);
  });
}
