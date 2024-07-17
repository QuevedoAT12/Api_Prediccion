# API de Predicción de Seguridad Vial

## Información del Servicio

Este servicio REST API simula el uso de un modelo de predicción para determinar si un municipio es peligroso en materia de incidentes viales. La API está configurada mediante el uso de contenedores Docker.

## Requerimientos

- Node.js (versión 14 o superior)
- Docker

## Instalación

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/APIPrediccion.git
cd APIPrediccion
```

### Construir la Imagen Docker

```bash
docker build -t apiprediccion .
```

### Ejecutar el Contenedor Docker

```bash
docker run -p 3000:3000 apiprediccion
```

## Uso (Producción)

### Endpoint de Bienvenida

- **URL:** /
- **Método:** GET
- **Descripción:** Muestra una página de bienvenida con enlaces a los otros endpoints.

**Ejemplo de Respuesta:**

```html
<!DOCTYPE html>
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
  <img src="https://via.placeholder.com/200" alt="Imagen ilustrativa">
</body>
</html>
```

### Endpoint de Predicción de Seguridad Vial

- **URL:** /predict
- **Método:** GET
- **Descripción:** Devuelve una predicción sobre si un municipio es peligroso en materia de incidentes viales.

**Ejemplo de Respuesta:**

```json
{
  "municipio": "Cordoba",
  "esPeligroso": "Sí",
  "mensaje": "Este municipio es peligroso en materia de incidentes viales."
}
```

### Endpoint de Estadísticas de Incidentes Viales

- **URL:** /statistics
- **Método:** GET
- **Descripción:** Devuelve estadísticas simuladas sobre incidentes viales en diferentes municipios.

**Ejemplo de Respuesta:**

```json
{
  "totalMunicipios": 4,
  "detalles": [
    { "municipio": "Cordoba", "incidentes": 120, "accidentesGraves": 30 },
    { "municipio": "Orizaba", "incidentes": 80, "accidentesGraves": 20 },
    { "municipio": "Cuitlahuac", "incidentes": 150, "accidentesGraves": 50 },
    { "municipio": "Yanga", "incidentes": 60, "accidentesGraves": 10 }
  ]
}
```

## Uso (Desarrollo)

### Ejecutar Localmente

#### Instalar Dependencias

```bash
npm install
```

#### Iniciar el Servidor

```bash
node index.js
```

### Acceder a la API

Abre tu navegador y navega a [http://localhost:3000](http://localhost:3000).



## Enlace al Repositorio Público

[Repositorio en GitHub](https://github.com/tu-usuario/APIPrediccion)

