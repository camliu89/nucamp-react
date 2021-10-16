import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, List } from 'reactstrap';

export default class TodosComponents extends Component {
  render() {
    const {todos, onFinish} = this.props;
    return (
      <div style={{marginTop: '20px'}}>
        <List>
          {
            todos.map(todo => 
              <>
                <li><Link to={`todo/${todo.id}`}>ID: {todo.id}</Link></li>
                <li>Name: {todo.name}</li>
                <li>
                  Done: <span style={{fontSize: '1rem', fontWeight: '700'}}>{String(todo.isDone)}</span>
                  {!todo.isDone && <Button onClick={() => onFinish(todo.id)}>Finish</Button>}
                </li>
                <hr/>
              </>
            )
          }
        </List>
      </div>
    )
  }
}
