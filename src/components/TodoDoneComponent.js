import React, { Component } from 'react'
import { Alert } from 'reactstrap';

export default class TodoDoneComponent extends Component {
  render() {
    if(this.props.todos.every(todo => todo.isDone)) {
      return (
         <Alert style={{marginTop: '20px'}}><strong>I am done with my todos of the day!</strong></Alert>
      )
    }

    return null;

  }
}
