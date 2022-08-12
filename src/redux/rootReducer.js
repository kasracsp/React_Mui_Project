import { combineReducers } from "redux";
import foodsReducer from "./foods/FoodsReducer";
import recipeReducer from "./recipe/RecipeReducer";
import categoryReducer from "./category/categoryReducer";
import modeReducer from './mode/ModeReducer'
import recentSearchReducer from "./recentSearch/RecentSearchReducer";

const rootReducer = combineReducers({
  foodsState: foodsReducer,
  recipeState: recipeReducer,
  categoryState: categoryReducer,
  modeState: modeReducer,
  recentSearchState: recentSearchReducer,
});

export default rootReducer