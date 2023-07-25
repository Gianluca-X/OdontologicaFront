import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const {theme} =useContext(ContextGlobal); 
  const isDarkMode = theme === "dark" || false;

  return (
    <footer>
        <p>Powered by <b>Gianluca Fucci</b></p>
        <div className='redes'>
        <img src="./images/DH.png" alt='DH-logo' className={`${isDarkMode ? 'iconDark' : 'icon'}`} />
        <div>
         <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="./images/ico-facebook.png" alt="facebook icon" className={`${isDarkMode ? '' : 'icon'}`}/>
         </a>
         <a href="https://www.instagram.com/gianluca0597" target="_blank" rel="noopener noreferrer">
          <img src="./images/ico-instagram.png" alt="instagram icon" className={`${isDarkMode ? '' : 'icon'}`}/>
         </a>
         <a href="https://www.instagram.com/tu_instagram" target="_blank" rel="noopener noreferrer">
          <img src="./images/ico-whatsapp.png" alt="whatsapp icon" className={`${isDarkMode ? '' : 'icon'}`}/>
         </a>
         <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
          <img src="./images/ico-tiktok.png" alt="tiktok icon" className= {`${isDarkMode ? '' : 'icon'}`}/>
        </div>      
      </div>
    </footer>
  )
}

export default Footer
