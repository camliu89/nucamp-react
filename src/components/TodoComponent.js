import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function TodoComponent({todo, onFinish}) {
  const id = "id";
  return (
    <div>
      <h2><Link to="/">Go Home</Link></h2>
      <li>ID: {todo[id]}</li>
      <li>Name: {todo["name"]}</li>
      <li>
        Done: <span style={{fontSize: '1rem', fontWeight: '700'}}>{String(todo["isDone"])}</span>
        {!todo.isDone && <Button onClick={() => onFinish(todo.id)}>Finish</Button>}
      </li>
    </div>
  )
}
