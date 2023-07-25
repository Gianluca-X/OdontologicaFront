  import React from "react";
  import { useEffect, useState, useContext } from "react";
  import { ContextGlobal } from "./utils/global.context";
  import { Link } from "react-router-dom";
  import { BiMenuAltRight } from "react-icons/bi";
  import { AiOutlineClose } from "react-icons/ai";
  //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

  const Navbar = () => {
    const { theme, setDark, setLight } = useContext(ContextGlobal);
    const isDarkMode = theme === "dark" || false;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const changeTheme = () => {
      if (isDarkMode) {
        setLight();
      } else {
        setDark();
      }
    };

    const [size, setSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    useEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (size.width > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }, [size.width, isMenuOpen]);

    const menuToggleHandler = () => {
      setIsMenuOpen((p) => !p);
    };

    return (
      <>
        <nav className={`${isDarkMode ? "dark" : ""}`}>
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          <div className="wrapper">
            <Link className={`navbarLogo ${isDarkMode ? "dark" : ""}`} to="/">
              DH Odonto
            </Link>
            <div className={`${size.width < 768 ? "fflex": ""}`}>
            <div className={`${size.width > 768 ? "hidden" : ""}`}>
            {!isMenuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
            </div>
          <div
            className={`${
              size.width > 768 ? "navBarLink" :
              (isMenuOpen && size.width < 768 ? "isMenu" : "hidden")
            } ${isDarkMode ? "dark" : ""}`}
          >
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>

              <Link className={``} to="/Favs">
                Favs
              </Link>

              {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
              <button
                style={isDarkMode ? { border: "groove" } : {}}
                onClick={changeTheme}
              >
                {" "}
                {isDarkMode ? "☀" : "🌙"}{" "}
              </button>
            </div>
           </div>
          </div>
        </nav>
        
        <hr style={isDarkMode ? { display: "block" } : { display: "none" }}></hr>
      </>
    );
  };
  export default Navbar;
