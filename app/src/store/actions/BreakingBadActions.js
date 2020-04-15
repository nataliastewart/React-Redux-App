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
        //console.log("RES", res.data.quote)
      })
      .catch((err) => console.log(err.response));
  };
};

export const updateTitle = (newTitle) => {
  return {};
};
