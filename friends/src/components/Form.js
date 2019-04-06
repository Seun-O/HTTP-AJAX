import React, { Component } from "react";
import axios from "axios";
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

export default class extends Component {
  state = { friend: { id: "", name: "", age: "", email: "" } };
  changeHandler = e => {
    e.persist();
    let value = e.target.value;
    this.setState(prevState => ({
      friend: { ...prevState.friend, [e.target.name]: value }
    }));
  };
  render() {
    console.log(this.props.id);
    return (
      <div>
        <Form action="">
          <div>
            <input
              onChange={this.changeHandler}
              type="number"
              name="id"
              placeholder={this.props.id}
            />
          </div>
          <div>
            <input
              onChange={this.changeHandler}
              type="text"
              name="name"
              placeholder={this.props.name}
              value={this.props.name}
            />
          </div>
          <div>
            <input
              onChange={this.changeHandler}
              type="number"
              name="age"
              placeholder={this.props.age}
            />
          </div>
          <div>
            <input
              onChange={this.changeHandler}
              type="email"
              name="email"
              placeholder={this.props.email}
            />
          </div>
          <button onClick={this.postForm}>Submit</button>
        </Form>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(`http://Localhost:5000/friends/${this.props.id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
}
