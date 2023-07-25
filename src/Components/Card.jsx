import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";



const Card = ({ name, username, id }) => {
  const { theme, favs, addFav, removeFav } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const isFavorite = favs.some((dentist) => dentist.id === id);

  const handleFav = () => {
    if (isFavorite) {
      removeFav(id);
    } else {
      const payload = {
        name,
        username,
        id,
      };
      addFav(payload);
    }
  };
  

 
     

  return (
    <div className={`card ${isDarkMode ? 'dark' : ''}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <div key={id}>
           <img src="./images/doctor.jpg" alt="dentist"/>
           <Link to={`/dentist/${id}`}>
           <h3 style={{textAlign:"center"}} className={`detail ${isDarkMode ? 'dark' : ''}`}>{name}</h3>
           </Link>
           <p style={{textAlign:"center"}}>{username}</p>
        </div>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={handleFav} className="favButton" style={isDarkMode ? {color : "wheat"} : {}}>{isFavorite ? '⭐' : '✰'}</button>
    </div>
  );
};

export default Card;
