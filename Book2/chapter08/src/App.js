import React, { useReducer } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

const todosInitialState = {
  todos: [
    { id: 1, text: "finishing writing hooks chapter" },
    { id: 2, text: "play with kids" },
    { id: 3, text: "read bible" },
  ],
};

export const TodosContext = React.createContext(); 

function App() {

  const [state, dispatch] = useReducer(todosReducer, todosInitialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  );
  
}

export default App;

function todosReducer(state, action) {
  switch (action.type) {
    case "edit":
      const updatedToDo = { ...action.payload };
      const updatedToDoIndex = state.todos.findIndex(
        (t) => t.id === action.payload.id,
      );
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1),
      ];
      return { ...state, todos: updatedToDos };
    case "delete":
      const filteredTodoState = state.todos.filter(
        (todo) => todo.id !== action.payload.id,
      );
      return { ...state, todos: filteredTodoState };
    case "add":
      const newToDo = { id: uuidv4(), text: action.payload };
      // add new todo onto array
      const addedToDos = [...state.todos, newToDo];
      // spread our state and assign todos
      return { ...state, todos: addedToDos };
    default:
      return todosInitialState;
  }
}


// import React, { useContext, useReducer } from 'react';
// import Products from './Products';
// import JumboTronComponent from './JumboTronComponent';
// import UserForm from './UserForm';
// import GitHub from './GitHub';
// import { UserContext } from "./index"
// import { Button } from "react-bootstrap";

// const initialState = {
//  count: 0
// }

// function App(props) {
// const value = useContext(UserContext);

// const [state, dispatch] = useReducer(reducer, initialState);

//  return (
//    <div>
//      {/* Example1 Props Driiling */}
//      {/* {props.username} */}
//      {/* Example2 cConsuming data from Context Object */}
//      {/* <UserContext.Consumer>
//        {(value) => <div>Received, {value}</div>}
//      </UserContext.Consumer> */}
//      {/* Example1 using Props drilling */}
//      {/* <App  username={username} /> */}
//      {/* Example using Context Object*/}
//      {/* <UserContext.Provider value={username}>
//       <App />
//     </UserContext.Provider> */}
//      {/* Example3 Using UserContext Hook */}
//      {/* Received, {value} */}
//      {/* <GitHub /> */}
//      Count: {state.count}
//      <br />
//      <Button onClick={() => dispatch({ type: "increment" })}>Increment</Button>
//      <Button
//        variant="secondary"
//        onClick={() => dispatch({ type: "decrement" })}
//      >
//        Decrement
//      </Button>
//      <Button variant="success" onClick={() => dispatch({ type: "reset" })}>
//        Reset
//      </Button>
//    </div>
//  );
//  }
// export default App;

// function reducer(state, action){
// switch(action.type){
//   case "increment":
//     return {count : state.count + 1}
//   case "decrement":
//     return {count : state.count - 1}
//   case "reset":
//     return initialState;
//   default:
//     return initialState
// }
// }
