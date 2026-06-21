// =====================================================
// Archivo: Footer.jsx
// Proyecto: Turismo - Frontend
// =====================================================

import { Link } from 'react-router-dom'

function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <h5 className="text-warning fw-bold mb-3">Turismo</h5>
            <p className="text-muted small">
              Tu guía de viajes en Colombia. Descubre destinos increíbles
              y crea experiencias inolvidables con nosotros.
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="text-warning fw-bold mb-3">Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/destinos" className="text-white-50 text-decoration-none">
                  Destinos
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/promociones" className="text-white-50 text-decoration-none">
                  Promociones
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/registro" className="text-white-50 text-decoration-none">
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="text-warning fw-bold mb-3">Contacto</h5>
            <p className="text-muted small mb-1">
              📧 info@turismoenred.com
            </p>
            <p className="text-muted small mb-1">
              📍 Colombia
            </p>
            <p className="text-muted small">
              Horario de atención: 24/7
            </p>
          </div>

        </div>
        <hr className="border-secondary my-4" />
        <p className="text-center text-muted small mb-0">
          © {anio} Turismo — Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer