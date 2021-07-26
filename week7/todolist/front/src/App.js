import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

let todos = [
  {
    id: 1,
    content: "lakjfdoilskajfelka"
  },
  {
    id: 2,
    content: "laksjfdlajseoiljkflg"
  },
  {
    id: 3,
    content: "lakjfdoilsglkdjagagfljaoiejfkajfelka"
  }
]

function Todo({todo}) {
  const ctmHandleComplete = () => {
    for(let i of todos) {
      if(i.id === todo.id) {
        todos.splice(todos.indexOf(i), 1);
      }
    }
  }

  const ctmHandleEdit = () => {
    // setInputTodo(todo.content)
  }

  return (
    <tr>
      <td className={"todo-each-content"}>
        <li>{todo.content}</li>
      </td>
      <td onClick={ctmHandleEdit}><img src={"https://image.flaticon.com/icons/png/512/1782/1782709.png"}/></td>
      <td onClick={ctmHandleComplete}><img src={"https://image.flaticon.com/icons/png/512/1617/1617543.png"}/></td>
    </tr>
  );
}

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const ctmHandleInput = (event) => setInputTodo(event.target.value);
  const ctmHandleAdd = () => {
    todos.push({
      id: todos[todos.length-1]+1,
      content: inputTodo
    })
    setTodos(todos);
  }

  // useEffect(
  //   axios.get("https://localhost:8080")
  //     .then(r => todos = r.data)
  //     .catch(r => todos = [])
  // );

  return (
    <div className="App">
      <h1>To List</h1>

      <form onSubmit={ctmHandleAdd}>
        <input className={"todo-input"} type={"text"} value={inputTodo} onChange={ctmHandleInput}/>
        <input className={"todo-btn"} type={"submit"} value={"추가"}/>
      </form>

      <table className={"todo-list"}>
        {todos.map(todo => <Todo todo={todo} />)}
      </table>
    </div>
  );
}

export default App;
