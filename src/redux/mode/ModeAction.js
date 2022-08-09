const ChangeMode = (mode) => {
  return {
    type: "CHANGE_MODE",
    payload:mode
  };
};

const setStoredMode=()=>{
  return (dispatch)=>{
    const initialModeState = JSON.parse(
      window.localStorage.getItem("mode")
    );
    if (initialModeState) {
      dispatch(ChangeMode(initialModeState));
    }
  }
}

export { ChangeMode, setStoredMode };