import React, { Component } from "react";
import Friends from "./components/Friends";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = { friends: [] };

  render() {
    return (
      <div className="App">
        <Friends />
        {this.state.friends.map(friend => {
          return (
            <Friends
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
            />
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("http://Localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }
}

export default App;
