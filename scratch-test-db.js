const sql = require("mssql");
require("dotenv").config({ path: ".env.local" });

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER || "localhost",
  port: parseInt(process.env.DB_PORT || "1433"),
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: true,
  },
};

async function test() {
  console.log("Intentando conectar con:", {
    server: config.server,
    database: config.database,
    user: config.user,
    encrypt: config.options.encrypt
  });
  try {
    const pool = await sql.connect(config);
    console.log("✅ ¡Conectado con éxito a SQL Server!");
    const result = await pool.request().query("SELECT TOP 5 ID_Producto, Nombre_Equipo FROM MPR.Equipos");
    console.log("Registros encontrados:", result.recordset);
    await pool.close();
  } catch (err) {
    console.error("❌ Error de conexión o query:", err);
  }
}

test();
