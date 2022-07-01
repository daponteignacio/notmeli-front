export const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='footer'>
      <p> Todos los derechos reservados {year} </p>
    </div>
  )
}
