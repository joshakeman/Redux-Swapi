import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions"
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // console.log(this.props)
    this.props.getCharacters()
  }

  render() {
    console.log(this.props)
    if (this.props.isFetching) {
      <p>Data is loading...</p>
    }

    return (
      <div className="CharactersList_wrapper">
      <h2>Character List</h2>
      {this.props.characters && (
        <CharacterList characters={this.props.characters} />
      )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  isFetching: state.charsReducer.isFetching
  }

}



// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, { getCharacters }
)(CharacterListView);
