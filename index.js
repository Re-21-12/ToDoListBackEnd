import express from "express";
import cors from "cors"; // Asegúrate de importar cors

import { PORT } from "./config.js";
import indexRoutes from "../Backend/Server/Routes/test.routes.js";
import notasRoutes from "../Backend/Server/Routes/notas.routes.js";

const app = express();

// Configuración de CORS para permitir solicitudes desde cualquier origen
app.use(cors({
    origin: '*'
}));

// Middleware para analizar JSON
app.use(express.json());

// Rutas
app.use(indexRoutes);
app.use(notasRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
    