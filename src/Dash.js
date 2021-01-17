import React, {useState,useEffect} from 'react'
import "./Dash.css"
import logo from './logo with bg.png'
import Form from './Form';
import TodoList from './TodoList';

function Dash() {

   
    const [inputText,setInputText]=useState("");
    const [todos, setTodos] = useState([]);
    const [status,setStatus] = useState("all")
    const [filteredTodos, setFilteredTodos]=useState([])
    useEffect(() => {
        filterHandler()
       },[todos,status])

    const filterHandler =() => {
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
             case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos)
                break


        }

    }
    const saveLocalTodos = () => {
        if(localStorage.getItem('todos')== null){
            localStorage.setItem('todos',JSON.stringify([]));
        }else{
            localStorage.setItem('todos',JSON.stringify(todos))
        }
    }
    return (
        <div>
            
           <div className='header1'>
           <img className='logo' src={logo} alt="Logo"/>
           
           TasksBoard
           <img className='profilepic' src="https://picsum.photos/80?random=2"></img>
           </div> 
           <header>My Tasks </header>
           <Form inputText={inputText}
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText} 
            setStatus={setStatus} 
             />
           <TodoList filteredTodos={filteredTodos}
           setTodos={setTodos}
            todos={todos} />

        </div>
    )
}

export default Dash
