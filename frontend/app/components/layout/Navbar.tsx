'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'

export default function Navbar() {
  const pathname = usePathname()
  const { user, logout, isAuthenticated } = useAuth()
  
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <img src="/logo.jpg" alt="Logo" />
      </div>

      <div className="navbar-links">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>
          Inicio
        </Link>
        <Link href="/simulador" className={pathname === '/simulador' ? 'active' : ''}>
          Simulador Arancel Notarial
        </Link>
        <Link href="/planes" className={pathname === '/planes' ? 'active' : ''}>
          Planes
        </Link>
        <Link href="/sobre-nosotros" className={pathname === '/sobre-nosotros' ? 'active' : ''}>
          Sobre Nosotros
        </Link>
      </div>

      <div className="navbar-auth">
        {isAuthenticated ? (
          <>
            <Link href="/perfil" className="navbar-perfil">
              👤 {user?.nombre}
            </Link>
            <button onClick={logout} className="navbar-logout">
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link href="/login">Iniciar Sesión / Registrarse</Link>
        )}
      </div>

    </nav>
  )
}