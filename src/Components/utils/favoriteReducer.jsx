  export const favoriteReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload]
      case "REMOVE":
        return state.filter((dentist) => dentist.id !== action.payload.id)
      default:
        return state    }
  }
