import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getPerson } from "../actions"
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // console.log(this.props)
    this.props.getPerson()
  }

  render() {
    console.log(this.props)
    if (this.props.fetching) {
      <p>Data is loading...</p>
    }

    return (
      <div className="CharactersList_wrapper">
      <h2>Character List</h2>
      {/* {this.props.charsReducer.characters && (
        <CharacterList characters={this.props.charsReducer.characters} />
      )} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
  characters: state.characters,
  error: state.error,
  isFetching: state.isFetching
  }
}



// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, { getPerson }
)(CharacterListView);
