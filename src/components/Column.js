import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
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

const TaskList = styled.div`
  padding: 8px;
  border: 1px solid white;
  border-radius: 4px;
`

export default ({col, todos}) => (
  <Container>
    <Title>{col.title}</Title>
    <Droppable droppableId={col.id}>
      {provided => (
        <TaskList
          ref={provided.innerRef}
          {...provided.dropabbleProps}
        >
          {todos.map((todo, index) => (<Todo todo={todo} index={index} />))}
          {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
  </Container>
)