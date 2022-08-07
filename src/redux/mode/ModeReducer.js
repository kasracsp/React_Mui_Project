const initialState = {
  mode:'light'
};
const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return {
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default modeReducer;