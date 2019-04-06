import React from 'react'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'


const Container = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  margin: 5px 0;
  background-color: #fafafa;
  padding: 5px 10px;
`

export default ({todo, index}) => (
  <Draggable
    draggableId={todo.id} index={index}
  >
    {provided => (
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {todo.content}
      </Container>
    )}
  </Draggable>
)