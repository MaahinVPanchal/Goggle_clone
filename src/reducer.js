// actions.js
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

export const setSearchTerm = (payload) => ({
  type: actionTypes.SET_SEARCH_TERM,
  payload,
});

// reducer.js
export const initialState = {
  term: null,
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return { ...state, term: action.term };
    default:
      return state;
  }
};

export default reducer;
