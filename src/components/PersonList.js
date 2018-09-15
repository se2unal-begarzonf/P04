import React, { Component } from 'react';
import axios from 'axios';


class PersonList extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person =>
            <div  className = "container ">
            <p>ID: {person.id}</p>
            <p>Name: {person.name}</p>
            <p>Username: {person.username}</p>
            <p>Email: {person.email}</p>
            <p>Phone: {person.phone}</p>
            <p>Website: {person.website}</p>
          </div>
        )}
      </ul>
    )
  }
}

export default PersonList;