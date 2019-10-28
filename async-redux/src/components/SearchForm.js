import React from "react";
import { connect } from "react-redux";

import { handleChange, handleSubmit } from "../actions";

function Search(props) {
  React.useEffect(() => {
    props.handleSubmit(props.searchString);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(props.searchString);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search your favorite Anime!
        <input
          type="text"
          placeholder={props.searchString}
          value={props.searchString}
          onChange={e => props.handleChange(e.target.value)}
        />
      </label>
      <button type="submit" disabled={props.isLoading}>
        Submit
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    searchString: state.formReducer.searchString,
    isLoading: state.animeReducer.isLoading
    // error: state.animeReducer.error
  };
};

const mapDispatchToProps = { handleChange, handleSubmit };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
