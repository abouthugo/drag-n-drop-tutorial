import React from 'react'
import Todo from './Todo';
import styled from 'styled-components'

const Container = styled.div`
  font-family: Helvetica;
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px 20px;
  background-color: black;
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