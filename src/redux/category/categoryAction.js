const setCategory = (key) => {
  return {
    type: "SET_CATEGORY",
    payload: key,
  };
};
const openDrawer = (key) => {
  return {
    type: "OPEN_DRAWER",
    payload: key,
  };
};

export {setCategory,openDrawer}