const initialState = {
  category: "",
  drawer: false,
  favorite: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "OPEN_DRAWER":
      return {
        ...state,
        drawer: action.payload,
      };
    case "SET_FAVORITE_INIT_VALUE":
      return {
        ...state,
        favorite: [...action.payload],
      };
    case "ADD_FAVORITE":
      const index = state.favorite.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(index);
      if (index === -1) {
        state.favorite.push(action.payload);
      } else {
        state.favorite.splice(index, 1);
      }
      window.localStorage.setItem("favorites", JSON.stringify(state.favorite));
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default categoryReducer;
