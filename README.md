# Turismo - Frontend

Plataforma web de turismo desarrollada con React 18 + Vite.

## Tecnologías

- React 18
- React Router DOM
- Axios
- Bootstrap 5
- Vite

## Estructura del proyecto
src/

├── components/   # Componentes reutilizables (Navbar, Footer, DestinoCard)

├── pages/        # Vistas principales de la aplicación

├── services/     # Conexión con el API REST

└── data/         # Datos estáticos de referencia
## Instalación

```bash
npm install
npm run dev
```

## Build para producción

```bash
npm run build
```

## Variables de entorno

Configura la URL del backend en `src/services/api.js`:

```javascript
baseURL: 'http://localhost:8000/api'
```