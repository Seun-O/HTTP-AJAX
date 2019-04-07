import React, { Component } from "react";

export default class extends Component {
  state = { friend: { id: "", name: "", age: "", email: "" } };

  changeHandler = e => {
    e.persist();
    if (e.target.type === `number`) {
      let value = parseInt(e.target.value);
      this.setState(prevState => ({
        friend: { ...prevState.friend, [e.target.name]: value }
      }));
    } else {
      let value = e.target.value;
      this.setState(prevState => ({
        friend: { ...prevState.friend, [e.target.name]: value }
      }));
    }
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.props.friend) {
      this.props.action(this.props.friend.id, this.state.friend);
      this.props.history.push(`/friends/${this.state.friend.id}`);
    } else {
      this.props.action(this.state.friend);
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} action="">
        <input
          onChange={this.changeHandler}
          type="number"
          name="id"
          placeholder="Id"
          value={this.state.friend.id}
        />
        <input
          onChange={this.changeHandler}
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.friend.name}
        />
        <input
          onChange={this.changeHandler}
          type="number"
          name="age"
          placeholder="Age"
          value={this.state.friend.age}
        />
        <input
          onChange={this.changeHandler}
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.friend.email}
        />
        <button type="submit">{this.props.btnText}</button>
      </form>
    );
  }
  componentWillMount() {
    this.setState({ friend: { ...this.props.friend } });
  }
}
