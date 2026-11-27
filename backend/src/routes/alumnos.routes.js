const express = require("express");
const router = express.Router();

// Importar la conexión con MongoDB
const { getDB } = require("../config/database");

// GET: consultar todos los alumnos 
router.get("/", async (req, res) => {
    try {
        const db = getDB();

        
        const buscar = req.query.buscar;

      
        let filtro = {};

        if (buscar) {
            const texto = buscar.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

            filtro = {
                $or: [
                    { nombre_alumno: { $regex: texto, $options: "i" } },
                    { correo_alumno: { $regex: texto, $options: "i" } }
                ]
            };
        }

        // Consultar la colección Alumno
        const alumnos = await db
            .collection("Alumno")
            .find(filtro)
            .toArray();

        // Enviar los resultados
        res.json({
            total: alumnos.length,
            alumnos: alumnos
        });

    } catch (error) {
        console.error("Error al consultar alumnos:", error);

        res.status(500).json({
            mensaje: "Error al consultar los alumnos"
        });
    }
});

module.exports = router;
