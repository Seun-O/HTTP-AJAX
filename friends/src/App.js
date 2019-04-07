import React, { Component } from "react";
import { Route } from "react-router-dom";
import Menu from "./components/layout/Menu";
import FriendsList from "./components/FriendsList";
import FriendItem from "./components/FriendItem";
import EditFriend from "./components/EditFriend";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = { friends: [] };

  postFriend = friend => {
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  putFriend = (id, friend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Menu />
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              friends={this.state.friends}
              action={this.postFriend}
              {...props}
            />
          )}
        />

        <Route
          exact
          path="/friends/:id"
          render={props => (
            <FriendItem
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              {...props}
            />
          )}
        />
        <Route
          path="/friends/:id/edit"
          render={props => (
            <EditFriend
              friends={this.state.friends}
              editFriend={this.putFriend}
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
