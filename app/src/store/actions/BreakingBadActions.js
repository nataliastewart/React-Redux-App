//thunk
//Redux is synvhronous
//we need perfom a asynch oparation
import axios from "axios";

export const fetchQuote = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_QUOTE_START" });
    axios
      .get("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
      .then((res) => {
        console.log("RES", res);
        dispatch({
          type: "FETCH_QUOTE_SUCCESS",
          payload: res.data[0].quote,
          // payload: res.data[0].author,
        });

        // console.log("res.data.quote", res.data.quote);
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_QUOTE_FAILURE",
          payload: `Error ${err.response.status}: ${err.response.data}`,
        });
      });
    //  console.log("ERROR CATCH", err.response);
  };
};

export const updateTitle = (newTitle) => {
  return {};
};
