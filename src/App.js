import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import MainComponent from './components/MainComponent';
import NotFoundComponent from './components/NotFoundComponent';
import TodoComponent from './components/TodoComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       todos: [
         {
           id: 1,
           name: 'clean',
           isDone: false,
         },
         {
           id: 2,
           name: 'do homework',
           isDone: false,
         },
         {
           id: 3,
           name: 'cook',
           isDone: false,
         }
       ]
     }

    this.finishAllTodos = this.finishAllTodos.bind(this);
    this.finishTodo = this.finishTodo.bind(this);
  }

  finishAllTodos() {
  const todos = [...this.state.todos];
  todos.forEach(todo => todo.isDone = true);
  this.setState({todos: todos})
  }

  finishTodo(todoId) {
    const todos = [...this.state.todos];
    const index = todos.findIndex(t => t.id === todoId);
    todos[index].isDone = true;
    this.setState({todos: todos})
  }

  render() {

    const HomePage = () => {
      return <MainComponent todos={this.state.todos} onFinishAll={this.finishAllTodos} onFinish={this.finishTodo}/>
    }

    const Todo = ({match}) => {
      const todo = this.state.todos.find(t => t.id === +match.params.id);
      return <TodoComponent todo={todo} onFinish={this.finishTodo}/>
    }

    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/todo/:id" component={Todo} />
          <Route exact path="/not-found" component={NotFoundComponent} />
          <Redirect to="/not-found" />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
