// Cargar las variables del archivo .env
require("dotenv").config();

// Importar Express
const express = require("express");
const { connectDB } = require("./config/database");
const app = express();


app.use(express.json());

const cors = require("cors");
app.use(cors());

// Importar las rutas 
const alumnosRoutes = require("./routes/alumnos.routes");
const calificacionesRoutes = require("./routes/calificaciones.routes");
// Registrar las rutas 
app.use("/api/alumnos", alumnosRoutes);
app.use("/api/calificaciones", calificacionesRoutes);


// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor y conectar con MongoDB
async function startServer() {
    try {
        // Primero conectamos con MongoDB Atlas
        await connectDB();

        // Después iniciamos el servidor
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("No fue posible iniciar el servidor");
        process.exit(1);
    }
}

startServer();
