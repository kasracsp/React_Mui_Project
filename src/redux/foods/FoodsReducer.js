const initialState={
  loading:false,
  foods:[],
  error:''
}

const foodsReducer=(state=initialState,action)=>{
  switch (action.type) {
    case "FETCH_FOODS_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_FOODS_SUCCESS":
      return {
        loading: false,
        foods: action.payload,
      };
    case "FETCH_FOODS_FAILURE":
      return {
        loading: false,
        foods: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default foodsReducer