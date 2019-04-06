import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  margin: 10px 0;
  background-color: #fafafa;
  padding: 10px 0;
`

export default ({todo}) => (
  <Container>{todo.content}</Container>
)