/* eslint-disable */
import React, { Component } from 'react'
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Button, Input, Label } from 'reactstrap';

export class TodoFormComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLocalSubmit = this.handleLocalSubmit.bind(this);
  }


  handleLocalSubmit(values) {
    console.log(values);
    this.props.addTodo({name: values.todoName, isDone: values.isDone})
  }

  render() {
    return (
      <LocalForm onSubmit={(values) => this.handleLocalSubmit(values)}>
        <Label htmlFor="todoName">Todo Name</Label>
        <Control.text 
          model=".todoName"
          id="todoName"
          name="todoName"
          placeholder="Todo Name"
          className="form-control"
          defaultValue={""}
          validators={{
            required: (val) => val && val.length,
          }}
        />
        <Errors
          className="text-danger"
          model=".todoName"
          show="touched"
          component="div"
          messages={{
            required: "A todo name is required",
          }}
        />
        <Label check htmlFor="isDone">
        <Control.checkbox
          model=".isDone"
          id="isDone"
          name="isDone"
          placeholder="Done"
          className="form-check-input"
          defaultValue={false}
        />
        Done</Label>
        <Button type="submit">Add Todo</Button>
      </LocalForm>
    )
  }
}

export default TodoFormComponent
