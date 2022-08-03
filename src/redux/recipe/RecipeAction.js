import axios from "axios";

const FetchRecipeRequest = () => {
  return {
    type: "FETCH_RECIPE_REQUEST",
  };
};
const FetchRecipeSuccess = (recipe) => {
  return {
    type: "FETCH_RECIPE_SUCCESS",
    payload: recipe,
  };
};
const FetchRecipeFailure = (error) => {
  return {
    type: "FETCH_RECIPE_FAILURE",
    payload: error,
  };
};
const FetchRecipe = (id) => {
  return (dispatch) => {
    dispatch(FetchRecipeRequest());
    axios
      .get(
        "https://api.spoonacular.com/recipes/" +
          id +
          "/information?apiKey=" +
          process.env.REACT_APP_SPOONACULAR_API_KEY
      )
      .then((response) => dispatch(FetchRecipeSuccess(response.data)))
      .catch((error) => dispatch(FetchRecipeFailure(error.message)));
  };
};

export default FetchRecipe;
