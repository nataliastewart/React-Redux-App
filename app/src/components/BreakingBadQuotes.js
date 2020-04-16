import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader";
import { fetchQuote } from "../store/actions/BreakingBadActions";

const BreakingBadQuote = (props) => {
  useEffect(() => {
    props.fetchQuote();
  }, []);

  //   if (props.isFetching) {
  //     return <Loader />;
  //   }
  console.log("PROPS", props);

  return (
    <div>
      <h1> Breaking Bad Quotes</h1>
      {props.isFetching && (
        <Loader type="Circles" color="darkGreen" height={100} width={50} />
      )}
      {props.quote && <h3>"{props.quote}"</h3>}
      {props.author && <h3>"{props.author}"</h3>}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("STATE", state);
  return {
    quote: state.quotes.quote,
    author: state.quotes.author,
    isFetching: state.quotes.isFetching,
    error: state.quotes.error,
  };
};

export default connect(mapStateToProps, { fetchQuote })(BreakingBadQuote);
