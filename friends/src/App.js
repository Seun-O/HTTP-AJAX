import React, { Component } from "react";
import FriendsList from "./components/FriendsList";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = { friends: [], friend: {} };

  updateFriend = () => {
    axios.post(`http://Localhost:5000/friends`, this.state.friend);
  };

  createFriend = friend => {
    const newFriend = {
      name: friend.name,
      age: parseInt(friend.age),
      email: friend.email,
      id: parseInt(friend.id)
    };
    this.setState({
      friends: [...this.state.friends, newFriend],
      friend: newFriend
    });
  };

  changeFriend = friend => {
    console.log(friend.id);
    axios.put(`http://Localhost:5000/friends/${friend.id}`);
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          component={props => (
            <FriendsList
              friends={this.state.friends}
              createFriend={this.createFriend}
              {...props}
            />
          )}
        />
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
