const RecentSearch = (item) => {
  return {
    type: "RECENT_SEARCH",
    payload: item,
  };
};

const setRecentSearch = (items) => {
  return {
    type: "SET_RECENT_SEARCH",
    payload: items,
  };
};
const removeRecentSearch = (item) => {
  return {
    type: "REMOVE_RECENT_SEARCH",
    payload: item,
  };
};

const setInitialRecentSearch = (items) => {
  return (dispatch) => {
    const initialRecentSearchState = JSON.parse(window.localStorage.getItem("recent"));
    if (initialRecentSearchState) {
      dispatch(setRecentSearch(initialRecentSearchState));
    }
  };
};

export { RecentSearch, setInitialRecentSearch, removeRecentSearch };
