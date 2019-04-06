import React, { Component } from 'react';
import {DragDropContext} from 'react-beautiful-dnd'
import initialState from './data.sample'
import Column from './components/Column';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onDragEnd = result => {
    const {draggableId, source, destination} = result;
    console.log("Result:")
    console.log(result);
    if(!destination) return;
    if(source.droppableId === destination.droppableId && source.index === destination.index) return ;

    console.log("Passed test");
    // Reorder
    const column = this.state.columns[source.droppableId];
    const newTodos = Array.from(column.todoIds);
    newTodos.splice(source.index, 1); // remove the item from the list
    newTodos.splice(destination.index, 0, draggableId); // add item to the list, 0 means remove nothing
    const newCol = {
      ...column,
      todoIds: newTodos
    };
    const newState = {
      ...this.state,
      columns:{
        ...this.state.columns,
        [newCol.id]: newCol
      }
    };

    this.setState(newState);

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
