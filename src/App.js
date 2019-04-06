import React, { Component } from 'react';
import {DragDropContext} from 'react-beautiful-dnd'
import initialState from './data.sample'
import Column from './components/Column';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onDragEnd = () => {
    //TODO implement this for persistent reordering
  }

  render() {
    const { columnOrder, columns, todos } = this.state;
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        {columnOrder.map(colId => {
          const col = columns[colId];
          console.log(col);
          const todoList = col.todoIds.map(id => todos[id])
          console.log(todoList);
          return <Column todos={todoList} col={col} />
        })}
      </DragDropContext>
    );
  }
}

export default App;
