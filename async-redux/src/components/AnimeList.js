import React from "react";
import Anime from './Anime'

import { connect } from "react-redux";

function AnimeList(props) {
  return (
    <div>
      AnimeList
      {props.animeArray.map(anime => (
        <Anime key={anime.id} anime={anime} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    animeArray: state.animeReducer.data.Page.media
  };
};

export default connect(
  mapStateToProps,
  {}
)(AnimeList);
