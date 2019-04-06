import React, { Component } from 'react';
import initialState from './data.sample'
import Column from './components/Column';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    const { columnOrder, columns, todos } = this.state;
    return (
      <div className="App">
        {columnOrder.map(colId => {
          const col = columns[colId];
          console.log(col);
          const todoList = col.todoIds.map(id => todos[id])
          console.log(todoList);
          return <Column todos={todoList} col={col} />
        })}
      </div>
    );
  }
}

export default App;
