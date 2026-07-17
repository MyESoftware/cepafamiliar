import app from '../dist/server/node-build.mjs'; // Ajusta la ruta a donde tu servidor exporta la app
import serverless from 'serverless-http';

export default serverless(app);