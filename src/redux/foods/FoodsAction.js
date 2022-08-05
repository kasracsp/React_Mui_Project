import axios from "axios";

const FetchFoodsRequest = () => {
  return {
    type: "FETCH_FOODS_REQUEST",
  };
};
const FetchFoodsSuccess = (foods) => {
  return {
    type: "FETCH_FOODS_SUCCESS",
    payload: foods,
  };
};
const FetchFoodsFailure = (error) => {
  return {
    type: "FETCH_FOODS_FAILURE",
    payload: error,
  };
};

const FetchFoods = (type) => {
  return (dispatch) => {
    dispatch(FetchFoodsRequest());
    axios
      .get(
        "https://api.spoonacular.com/food/search?apiKey=" +
          process.env.REACT_APP_SPOONACULAR_API_KEY +
          "&query=" +
          type +
          "&number=30"
      )
      .then((response) =>
        dispatch(FetchFoodsSuccess(response.data.searchResults[0].results))
      )
      .catch((error) => dispatch(FetchFoodsFailure(error.message)));
  };
};

export { FetchFoods, FetchFoodsSuccess };
