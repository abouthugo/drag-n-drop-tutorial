const initialState = {
  todos: {
    1: { id: 1, content: 'Do the groceries' },
    2: { id: 2, content: 'Wash the dishes' },
    3: { id: 3, content: 'Take car to car wash' },
    4: { id: 4, content: 'Buy some wine' },
  },
  columns: {
    'col-1': {
      id: 'col-1',
      title: 'Todos',
      todoIds: [1, 2, 3, 4],
    },
    // "col-2": {
    //   id: "col-2",
    //   title: "Done",
    //   todoIds: []
    // }
  },
  columnOrder: ['col-1'],
};

export default initialState;
