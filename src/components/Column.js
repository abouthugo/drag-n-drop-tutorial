import React from 'react'
import Todo from './Todo';
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  background-color: tomato;
`

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 5px;
  color: white;
  font-size: 36px;
`

export default ({col, todos}) => (
  <Container>
    <Title>{col.title}</Title>
    {todos.map(todo => (
      <Todo todo={todo}/>
    ))}
  </Container>
)