const express = require("express");
const router = express.Router();

// Importar la conexión con MongoDB
const { getDB } = require("../config/database");

// GET: consultar todas las calificaciones
router.get("/", async (req, res) => {
    try {
        const db = getDB();

        // Consultar la colección 
        const calificaciones = await db
            .collection("Calificacion")
            .find({})
            .toArray();

        
        res.json({
            total: calificaciones.length,
            calificaciones: calificaciones
        });

    } catch (error) {
        console.error("Error al consultar calificaciones:", error);

        res.status(500).json({
            mensaje: "Error al consultar las calificaciones"
        });
    }
});

module.exports = router;
