import React, { Component } from 'react';
import { List } from 'reactstrap';

export default class TodosComponents extends Component {
  render() {
    return (
      <div style={{marginTop: '20px'}}>
        <List>
          {
            this.props.todos.map(todo => 
              <>
                <li>ID: {todo.id}</li>
                <li>Name: {todo.name}</li>
                <li>
                  Done: <span style={{fontSize: '1rem', fontWeight: '700'}}>{String(todo.isDone)}</span>
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
