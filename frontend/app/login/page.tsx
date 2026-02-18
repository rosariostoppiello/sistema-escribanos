'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { login, register } = useAuth()

  // Estado del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    ci: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('') // Limpiar error al escribir
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (isLogin) {
        // LOGIN
        await login(formData.email, formData.password)
        router.push('/perfil') // Redirigir al perfil
      } else {
        // REGISTRO
        if (formData.password !== formData.confirmPassword) {
          setError('Las contraseñas no coinciden')
          setLoading(false)
          return
        }

        await register({
          email: formData.email,
          password: formData.password,
          nombre: formData.nombre,
          apellido: formData.apellido,
          ci: formData.ci,
        })
        router.push('/perfil') // Redirigir al perfil
      }
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h1>
          <p>{isLogin ? 'Bienvenido de vuelta' : 'Creá tu cuenta gratuita'}</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-group">
                <label>Nombre</label>
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Juan" 
                  required
                />
              </div>
              <div className="form-group">
                <label>Apellido</label>
                <input 
                  type="text" 
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Pérez" 
                  required
                />
              </div>
              <div className="form-group">
                <label>Cédula de Identidad</label>
                <input 
                  type="text" 
                  name="ci"
                  value={formData.ci}
                  onChange={handleChange}
                  placeholder="1234567-8" 
                  required
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com" 
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••" 
              required
              minLength={6}
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirmar contraseña</label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••" 
                required
                minLength={6}
              />
            </div>
          )}

          {isLogin && (
            <div className="forgot-password-link">
              <a href="/restablecer-contrasena">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          )}

          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Cargando...' : (isLogin ? 'Ingresar' : 'Crear cuenta')}
          </button>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
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