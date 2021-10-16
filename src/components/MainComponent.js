import React, { Component } from 'react';
import {Button} from 'reactstrap';

import TodoDoneComponent from './TodoDoneComponent';
import TodosListComponents from './TodoListComponents';

export default class MainComponent extends Component {
  render() {
    return (
      <>
        <div><h1 className="display-3">My Todos</h1></div>
        <TodosListComponents todos={this.props.todos} onFinish={this.props.onFinish} />
        <Button color="primary" onClick={() => this.props.onFinishAll()}>Finish all my todos</Button>
        <TodoDoneComponent todos={this.props.todos} />
      </>
    )
  }
}
