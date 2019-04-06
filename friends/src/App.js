import React, { Component } from "react";
import Menu from "./components/layout/Menu";
import FriendsList from "./components/FriendsList";
import FriendCard from "./components/FriendCard";
import UpdateFriend from "./components/UpdateFriend";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    friends: [],
    friend: {}
  };

  postFriend = () => {
    axios.post(`http://Localhost:5000/friends`, this.state.friend);
  };

  createFriend = friend => {
    const newFriend = {
      id: parseInt(friend.id),
      name: friend.name,
      age: parseInt(friend.age),
      email: friend.email
    };
    this.setState({
      friends: [...this.state.friends, newFriend],
      friend: newFriend
    });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  updateFriend = id => {
    axios
      .put(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <Menu />
        <Route
          exact
          path="/"
          component={props => (
            <FriendsList
              friends={this.state.friends}
              createFriend={this.createFriend}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/friends/:id"
          render={props => (
            <FriendCard
              friends={this.state.friends}
              {...props}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route
          path="/friends/:id/edit"
          render={props => (
            <UpdateFriend friends={this.state.friends} {...props} />
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
