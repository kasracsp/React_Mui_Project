const initialState = {
  loading: false,
  recipe: {},
  error: "",
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RECIPE_REQUEST":
      return {
        loading: true,
        recipe:[]
      };
    case "FETCH_RECIPE_SUCCESS":
      return {
        loading: false,
        recipe: {...action.payload},
      };
    case "FETCH_RECIPE_FAILURE":
      return {
        loading: false,
        recipe: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
