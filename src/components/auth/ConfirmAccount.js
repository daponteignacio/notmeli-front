
export const Confirm = () => {
  
  /*
   TODO: CUANDO SE APRIETA EL BOTON DE CONFIRMAR CUENTA SE HACE LA PETICION
   Y EN CASO DE SER CORRECTA SE REEMPLAZA LA VISTA DE CONFIRMAR POR LA VISTA DE CONFIRMADA
  */

  return (
    <div className='center-content'>
        <form className='bg-white p-2 rounded d-flex flex-column'>
            <h3 style={{textAlign: 'center'}}>Confirma tu cuenta para comprar y vender</h3>
            <button style={{margin: '0 auto'}} type='submit' className='btn btn-success'>Confirmar cuenta</button>
        </form>
    </div>
  )
}