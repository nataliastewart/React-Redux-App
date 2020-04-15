import React from "react";
import { connect } from "react-redux";

const BreakingBadQuote = (props) => {
  return (
    <div>
      <h1> Breaking Bad Quotes</h1>
      {props.quote && <h3>"{props.quote}"</h3>}
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

export default connect(mapStateToProps, {})(BreakingBadQuote);
