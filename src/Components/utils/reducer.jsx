export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_DARK':
        return { ...state, theme: 'dark' };
      case 'SET_LIGHT':
        return { ...state, theme: 'light' };
      case 'ADD_DENTISTS':
        return { dentists: action.payload };
      case 'ADD_FAVS':
        return {...state, favs: action.payload};  
      
      default:
        return state;
    }
  };