// =====================================================
// Archivo: api.js
// Proyecto: Turismo - Frontend
// Descripcion: Conexion con el API REST del backend
//              Backend: https://darkorchid-mandrill-934066.hostingersite.com/api
// =====================================================

import axios from 'axios'

// Instancia de Axios apuntando al backend
const API = axios.create({
  baseURL: 'https://darkorchid-mandrill-934066.hostingersite.com/api',
  headers: { 'Content-Type': 'application/json' }
})

// ── AUTENTICACION ─────────────────────────────────
export const registrarUsuario = (datos) =>
  API.post('/auth/registro', datos)

export const loginUsuario = (credenciales) =>
  API.post('/auth/login', credenciales)

// ── DESTINOS ──────────────────────────────────────
export const obtenerDestinos = () =>
  API.get('/destinos')

export const obtenerDestinoPorId = (id) =>
  API.get(`/destinos/${id}`)

// ── RESERVAS ──────────────────────────────────────
export const crearReserva = (datos) =>
  API.post('/reservas', datos)

export const obtenerReservasPorUsuario = (email) =>
  API.get(`/reservas/usuario/${email}`)

export const cancelarReserva = (id) =>
  API.put(`/reservas/${id}/estado`, { estado: 'CANCELADA' })