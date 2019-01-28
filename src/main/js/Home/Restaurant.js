import React, { Component } from 'react'

export default class Restaurant extends Component {
  render() {
    return (
      <div>
        this is {this.props.location.state.title}
      </div>
    )
  }
}
