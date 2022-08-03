import { combineReducers } from "redux";
import foodsReducer from "./foods/FoodsReducer";
import recipeReducer from "./recipe/RecipeReducer";

const rootReducer=combineReducers({
  foodsState:foodsReducer,
  recipeState:recipeReducer
})

export default rootReducer