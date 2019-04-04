import React, { Component } from "react";

class FriendForm extends Component {
  state = { friend: { name: "", age: undefined, email: "", id: undefined } };
  postForm = e => {
    e.preventDefault();
    this.props.btnAction(this.state.friend);
  };
  updateName = e => {
    this.setState({ friend: { ...this.state.friend, name: e.target.value } });
  };
  updateEmail = e => {
    this.setState({
      friend: { ...this.state.friend, email: e.target.value }
    });
  };
  updateAge = e => {
    this.setState({ friend: { ...this.state.friend, age: e.target.value } });
  };
  updateId = e => {
    this.setState({ friend: { ...this.state.friend, id: e.target.value } });
  };
  render() {
    return (
      <div>
        <form action="">
          <div>
            <label htmlFor="id">Id</label>
            <input onChange={this.updateId} type="number" name="id" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.updateName}
              type="text"
              name="name"
              value={this.state.friend.name}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input onChange={this.updateAge} type="number" name="age" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={this.updateEmail}
              type="email"
              name="email"
              value={this.state.friend.email}
            />
          </div>
        </form>
        <button onClick={this.postForm}>Submit</button>
      </div>
    );
  }
}

export default FriendForm;
