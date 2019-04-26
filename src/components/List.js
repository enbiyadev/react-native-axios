import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
//
import Detail from "./Detail";

class List extends Component {
  state = { data: [] }

  componentWillMount() {
    axios.get("https://rallycoding.herokuapp.com/api/music_albums")
    .then(response => this.setState({ data: response.data }) );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  renderData() {
    return this.state.data.map((responseData, Id) =>
      <Detail key={ Id } data={ responseData } />
    );
  }

  render() {
    console.log("Gelen data " + this.state );
    console.log("render");

    const { viewStyle } = styles;

    return (
      <ScrollView style={ viewStyle }>
        { this.renderData() }
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 10
  }
}

export default List;