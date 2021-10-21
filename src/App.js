import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer/>
      </header>
    </div>
  );
}

const TodoContainer = () => {
    const initialState = [
        {   id: 1,
            text: "this is my first item"
        },
        {   id: 2,
            text: "this is my second"
        },
        {   id: 3,
            text: "this is my third"
        }
    ]
    const [todoList, setTodoList] = useState(initialState);
    return <div style={{backgroundColor: 'blue', display:'flex', flexDirection:'column', alignItems: 'start', padding: 10, height:  300, position:'relative'}}>
        {
            todoList.map(item => {
                return <div>
                    <p>{item.text}</p>
                </div>
            })
        }
        <button style={{position:'absolute', bottom: 0, right:0}}>add</button>
    </div>
}

export default App;
