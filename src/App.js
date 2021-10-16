import React from 'react';
import {Button} from 'reactstrap';

import './App.css';
import TodoDoneComponent from './components/TodoDoneComponent';
import TodosListComponents from './components/TodoListComponents';

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      todos: [
        {
          id: 1,
          name: 'clean',
          isDone: true,
        },
        {
          id: 2,
          name: 'do homework',
          isDone: true,
        },
        {
          id: 3,
          name: 'cook',
          isDone: false,
        }
      ]
    }
  }

  finishAllTodos() {
    const todos = [...this.state.todos];
    todos.forEach(todo => todo.isDone = true);
    this.setState({todos: todos})
  }

  render() {
    return (
      <div className="App">
        <div><h1 className="display-3">My Todos</h1></div>
        <TodosListComponents todos={this.state.todos} />
        <Button color="primary" onClick={() => this.finishAllTodos()}>Finish all my todos</Button>
        <TodoDoneComponent todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
