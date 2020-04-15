const initialState = {
  quote: "Everyone sounds like Meryl Streep with a gun to their head.",
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

      return state;
  }
};
