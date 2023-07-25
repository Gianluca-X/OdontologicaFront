import { createContext,  useEffect, useMemo, useReducer } from "react";
import { reducer } from "./reducer";
import { favoriteReducer } from "./favoriteReducer";
 

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = { theme: "light", dentists:[]}
  const [state, dispatch] = useReducer(reducer, initialState)
  const [favoriteDentists, dispatchFavorites] = useReducer(favoriteReducer,[])
  
  useEffect(() => {
    // Lógica para obtener los favoritos del almacenamiento local (localStorage) y establecer el estado inicial
    const storedFavs = localStorage.getItem("favs");
    if (storedFavs) {
      dispatchFavorites({ type: "SET_FAVORITES", payload: JSON.parse(storedFavs) });
    }
  }, []);
  
  useEffect(() => {
    async function fetchData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/users")
      let info = await response.json()
      return info
      
    }
    fetchData().then((data) => {
      dispatch({type: "ADD_DENTISTS",
      payload:data})
    })
  }, [])

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favoriteDentists))
  }, [favoriteDentists])
const addFav = (payload) => {
  dispatchFavorites({ type: "ADD", payload });
};

const removeFav = (id) => {
  dispatchFavorites({ type: "REMOVE", payload: { id } });
};

  const states = useMemo(() => ({
    
        theme : state.theme,
        dentists : state.dentists,
        favs : favoriteDentists,
    
        setDark:()=>{
          dispatch({type:"SET_DARK"})},
        setLight:()=>{
          dispatch({type:"SET_LIGHT"})},
         addFav,
         removeFav,
          }),[state.theme, state.dentists,favoriteDentists]);
  return (
    <ContextGlobal.Provider value={states}>
      {children}
    </ContextGlobal.Provider>
  );
};
