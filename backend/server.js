const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'plufarm',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión a la base de datos establecida');
});

app.use(express.json()); // Middleware para analizar JSON

app.post('/login', (req, res) => {
 
  const { usuario, contrasena } = req.body;

  // Realiza la consulta a la base de datos aquí
  const sql = `SELECT * FROM login WHERE username = ? AND Password = ?`;
  db.query(sql, [usuario, contrasena], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error en la base de datos' });
    } else {
      if (result.length > 0) {
        res.json({ message: 'Inicio de sesión exitoso' });
      } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
      }
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor backend corriendo en el puerto 3000');
});

