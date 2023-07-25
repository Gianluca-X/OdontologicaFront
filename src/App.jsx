import {Route, Routes} from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from "./Components/utils/global.context";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import React, { useContext } from "react";

function App() {
  const { theme} = useContext(ContextGlobal)
  return (
      <div className={"App " + theme}>
          <Navbar/>
          <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
