import React from "react";
import { connect } from "react-redux";

import { handleChange, handleSubmit } from "../actions";

function Search(props) {
  return (
    <form onSubmit={() => props.handleSubmit(props.searchString)}>
      <label>
        Search your favorite Anime!
        <input
          type="text"
          placeholder={props.searchString}
          value={props.searchString}
          onChange={e => props.handleChange(e.target.value)}
        />
      </label>
      <button type="submit" disabled={props.start}>
        Submit
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    searchString: state.formReducer.searchString,
    start: state.animeReducer.start,
    success: state.animeReducer.success,
    error: state.animeReducer.error
  };
};

const mapDispatchToProps = { handleChange, handleSubmit };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
