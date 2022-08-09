const initialState = {
  mode:'light'
};
const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      window.localStorage.setItem("mode",JSON.stringify(action.payload));
      return {
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default modeReducer;