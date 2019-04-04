import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;

    input {
      background: slategray;
      color: white;
      font-size: 1.6rem;
      padding: 0 0 0 1rem;
      border: none;
      outline: none;
      border-bottom: 2px solid purple;
      margin: 1rem 0;

      ::placeholder {
        color: lightgray;
      }
    }
  }
`;
class FriendForm extends Component {
  state = { friend: { name: "", age: undefined, email: "", id: undefined } };
  postForm = e => {
    e.preventDefault();
    this.props.createFriend(this.state.friend);
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
        <Form action="">
          <div>
            <input
              onChange={this.updateId}
              type="number"
              name="id"
              placeholder="Id"
            />
          </div>
          <div>
            <input
              onChange={this.updateName}
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.friend.name}
            />
          </div>
          <div>
            <input
              onChange={this.updateAge}
              type="number"
              name="age"
              placeholder="Age"
            />
          </div>
          <div>
            <input
              onChange={this.updateEmail}
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.friend.email}
            />
          </div>
          <button onClick={this.postForm}>Submit</button>
        </Form>
      </div>
    );
  }
}

export default FriendForm;
