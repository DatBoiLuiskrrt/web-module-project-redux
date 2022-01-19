import {
  TOGGLE_FAVORITES,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
} from "../actions/favoritesActions";
const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  //   console.log("favorites reducer ", action);
  switch (action.type) {
    case "TOGGLE_FAVORITES": {
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    }
    case "ADD_FAVORITES": {
      return {
        ...state,
        displayFavorites: [...state.favorites, action.payload],
      };
    }
    case "REMOVE_FAVORITES": {
      return {
        ...state,
        favorites: state.filter((item) => item.id != action.payload),
      };
    }
    default:
      return state;
  }
};

export default favoritesReducer;
