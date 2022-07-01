import React from 'react'

export const ResetPassword = () => {
  return (
    <div className='tarjeta'>
        
        <form className='form'>

            <label>Crea un nuevo password</label>
            <input 
              className='formulario__input' 
              type='password' 
              placeholder='Nuevo password'
            />
            
            <label>Vuelve a escribir tu password</label>
            <input 
              className='formulario__input' 
              type='password' 
              placeholder='Confirmar password'
            />

            
            <button type='submit' className='btn'>Guardar password</button>

        </form>
        <div className='formulario__opciones'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
            <p>¿Todavía no tenes cuenta? Crea una.</p>
        </div>
    </div>
  )
}
