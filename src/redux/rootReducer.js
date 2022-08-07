import { combineReducers } from "redux";
import foodsReducer from "./foods/FoodsReducer";
import recipeReducer from "./recipe/RecipeReducer";
import categoryReducer from "./category/categoryReducer";
import modeReducer from './mode/ModeReducer'

const rootReducer = combineReducers({
  foodsState: foodsReducer,
  recipeState: recipeReducer,
  categoryState: categoryReducer,
  modeState: modeReducer,
});

export default rootReducer