const setCategory = (key) => {
  return {
    type: "SET_CATEGORY",
    payload: key,
  };
};
const openDrawer = (key) => {
  return {
    type: "OPEN_DRAWER",
    payload: key,
  };
};
const setFavoriteInitValue = (favorites) => {
  return {
    type: "SET_FAVORITE_INIT_VALUE",
    payload: favorites,
  };
};
const setFavorites=()=>{
  return (dispatch)=>{
    const initialFavoritesState = JSON.parse(
      window.localStorage.getItem("favorites")
    );
    if (initialFavoritesState) {
      dispatch(setFavoriteInitValue(initialFavoritesState));
    }
  }
}
const addFavorite = (key) => {
  return {
    type: "ADD_FAVORITE",
    payload: key,
  };
};

export { setCategory, openDrawer, addFavorite, setFavorites };