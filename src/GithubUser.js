import React, { Component } from 'react'

export default class GithubUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData()
  }

  fetchUserData = () => {
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  render() {
    return (
      <div className="GithubUser">
        <h1>GitHub user: {this.props.match.params.username}</h1>
      </div>
    )
  }
}

