import React from 'react'
import Todo from './Todo';


export default ({col, todos}) => (
  <div>
    <h3>{col.title}</h3>
    {todos.map(todo => (
      <Todo todo={todo}/>
    ))}
  </div>
)