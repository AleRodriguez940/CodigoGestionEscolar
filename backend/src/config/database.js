const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

let database;

async function connectDB() {
    try {
        const client = new MongoClient(uri);

        // Hace la conexión
        await client.connect();

        // Es para seleccionar la base de datos
        database = client.db(dbName);

        console.log("Conexión exitosa con MongoDB Atlas");
        console.log(`Base de datos: ${dbName}`);

        return database;

    } catch (error) {
        console.error("Error al conectar con MongoDB:", error.message);
        throw error;
    }
}

// Obtener la conexión para utilizarla en las consultas
function getDB() {
    if (!database) {
        throw new Error("La base de datos todavía no está conectada");
    }

    return database;
}

module.exports = { connectDB, getDB };
