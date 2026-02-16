'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
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
        <Link href="/sobre-nosotros" className={pathname === '/sobre-nosotros' ? 'active' : ''}>
          Sobre Nosotros
        </Link>
      </div>

      <div className="navbar-auth">
        <Link href="/login">Iniciar Sesión / Registrarse</Link>
      </div>

    </nav>
  )
}