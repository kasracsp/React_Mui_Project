const initialState = {
  recent: [],
};
const recentSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECENT_SEARCH":
      const isInState=state.recent.includes(action.payload)
      if(!isInState){
        state.recent.push(action.payload)
      }
      window.localStorage.setItem("recent", JSON.stringify(state.recent));
      return {
        ...state
      };
    case "SET_RECENT_SEARCH":
      return {
        recent:[...action.payload]
      }
    case "REMOVE_RECENT_SEARCH":
      const newState = state.recent.filter((item) => item !== action.payload);
        window.localStorage.setItem("recent", JSON.stringify(newState));
        return {
          recent: [...newState],
        }

    default:
      return state;
  }
};

export default recentSearchReducer;
