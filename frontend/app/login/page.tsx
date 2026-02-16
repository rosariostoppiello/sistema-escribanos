'use client'
import { useState } from 'react'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h1>
          <p>{isLogin ? 'Bienvenido de vuelta' : 'Creá tu cuenta gratuita'}</p>
        </div>

        <form className="login-form">
          {!isLogin && (
            <>
              <div className="form-group">
                <label>Nombre completo</label>
                <input type="text" placeholder="Juan Pérez" />
              </div>
              <div className="form-group">
                <label>Cédula de Identidad</label>
                <input type="text" placeholder="1234567-8" />
              </div>
            </>
          )}

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="tu@email.com" />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="••••••••" />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirmar contraseña</label>
              <input type="password" placeholder="••••••••" />
            </div>
          )}

          <button type="submit" className="login-button">
            {isLogin ? 'Ingresar' : 'Crear cuenta'}
          </button>
        </form>

        <div className="login-toggle">
          <p>
            {isLogin ? '¿No tenés cuenta?' : '¿Ya tenés cuenta?'}
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Registrate' : 'Iniciá sesión'}
            </button>
          </p>
        </div>
      </div>
    </main>
  )
}