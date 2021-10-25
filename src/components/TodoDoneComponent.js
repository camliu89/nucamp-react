import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import { connect } from "react-redux";


class TodoDoneComponent extends Component {
  render() {
    if(this.props.todos.every(todo => todo.isDone)) {
      return (
         <Alert style={{marginTop: '20px'}}>
           <strong>{this.props.firstName} {this.props.lastName}, You are done with your todos of the day!</strong>
          </Alert>
      )
    }

    return null;

  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
  };
};

export default connect(mapStateToProps)(TodoDoneComponent);