const initialState = {
  category:'',
  drawer:false
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
      case "OPEN_DRAWER":
        return {
        ...state,
        drawer: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;