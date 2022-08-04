import { combineReducers } from "redux";
import foodsReducer from "./foods/FoodsReducer";
import recipeReducer from "./recipe/RecipeReducer";
import categoryReducer from "./category/categoryReducer";

const rootReducer = combineReducers({
  foodsState: foodsReducer,
  recipeState: recipeReducer,
  categoryState: categoryReducer,
});

export default rootReducer