const initialState = {
  quote: "",
  author: "",
  isFetching: false,
  error: "",
};

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
    case "FETCH_QUOTE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_QUOTE_SUCCESS":
      return {
        ...state,
        isFetching: false,
        quote: action.payload,
        // author: action.payload.author,
        error: "",
      };

      return state;
  }
};
