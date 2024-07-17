// Importar las dependencias necesarias
const express = require('express');
const app = express();
const port = 3000;

// Endpoint de bienvenida
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Bienvenido</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
          h1 { color: #333; }
          p { font-size: 18px; }
          img { width: 200px; margin-top: 20px; }
          a { display: block; margin: 10px 0; color: #007BFF; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>¡Bienvenido a mi API de predicción de seguridad vial!</h1>
        <p>Utiliza los siguientes enlaces para acceder a los datos:</p>
        <a href="/predict">Predicción de Seguridad Vial</a>
        <a href="/statistics">Estadísticas de Incidentes Viales</a>
        <img src="https://100seguro.com.ar/wp-content/uploads/2020/12/agente-seguros-resolviendo-accidente-automovilistico_53876-43055.jpg" alt="Imagen ilustrativa">
      </body>
    </html>
  `);
});

// Endpoint de predicción de seguridad vial
app.get('/predict', (req, res) => {
  const municipios = ['Cordoba', 'Orizaba', 'Cuitlahuac', 'Yanga'];
  const municipio = municipios[Math.floor(Math.random() * municipios.length)];
  const esPeligroso = Math.random() > 0.5 ? 'Sí' : 'No';
  res.send(`
    <html>
      <head>
        <title>Predicción de Seguridad Vial</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
          h1 { color: #333; }
          p { font-size: 18px; }
          .peligroso { color: red; }
          .seguro { color: green; }
        </style>
      </head>
      <body>
        <h1>Predicción de Seguridad Vial</h1>
        <p>Municipio: <strong>${municipio}</strong></p>
        <p class="${esPeligroso === 'Sí' ? 'peligroso' : 'seguro'}">
          Este municipio ${esPeligroso === 'Sí' ? 'es peligroso' : 'no es peligroso'} en materia de incidentes viales.
        </p>
      </body>
    </html>
  `);
});

// Nuevo endpoint para estadísticas de incidentes viales
app.get('/statistics', (req, res) => {
  const statistics = [
    { municipio: 'Cordoba', incidentes: 120, accidentesGraves: 30 },
    { municipio: 'Orizaba', incidentes: 80, accidentesGraves: 20 },
    { municipio: 'Cuitlahuac', incidentes: 150, accidentesGraves: 50 },
    { municipio: 'Yanga', incidentes: 60, accidentesGraves: 10 }
  ];
  let statsHtml = statistics.map(stat => `
    <tr>
      <td>${stat.municipio}</td>
      <td>${stat.incidentes}</td>
      <td>${stat.accidentesGraves}</td>
    </tr>
  `).join('');
  res.send(`
    <html>
      <head>
        <title>Estadísticas de Incidentes Viales</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
          h1 { color: #333; }
          table { margin: 0 auto; border-collapse: collapse; width: 80%; }
          th, td { border: 1px solid #ddd; padding: 8px; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <h1>Estadísticas de Incidentes Viales</h1>
        <table>
          <tr>
            <th>Municipio</th>
            <th>Incidentes</th>
            <th>Accidentes Graves</th>
          </tr>
          ${statsHtml}
        </table>
      </body>
    </html>
  `);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:3000`);
});
