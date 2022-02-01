
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
// import uuidv4 from 'uuid/v4';
function App() {
  // const [todos,setTodos] = useState([{id:1, name: 'task 1', completed: true}])
  const [todos,setTodos] = useState([])
  const todoNameRef = useRef()
  const LOCAL_STORAGE_KEY = 'todos.todo';
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodos) {
      setTodos(storedTodos);
    }
  },[])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])
  function handleToggle (id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed;
    setTodos(newTodos)
  }
  function handleClearList(){
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }
  function handleAddTask(e){
    const name = todoNameRef.current.value;
    if(name ==='')return;
    setTodos(prevTodo =>{
      return [...prevTodo, {id:Math.floor(Math.random() * 100),  name:name, completed:false}]
    })
    todoNameRef.current.value =  null
  }
    return (
      <>
        <h3>ToDo List</h3>
        <TodoList todos={todos} handleToggle = {handleToggle}/>  
        <span>Enter task to add list:  </span>
        <input ref={todoNameRef} type="text"/>
        <button onClick={handleAddTask}>Add Task</button>
        <button onClick={handleClearList}>Clear list</button>
        <div>{todos.filter(todo => !todo.completed).length} left to do</div>
      </>  
    )
  }
  export default App;

  
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World, This is CS-66
//         </p>
//         <a
//           className="App-link"

//           href="https:iba-suk.edu.pk"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Go to Sukkur IBA Website
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// export class ComponentA extends React.Component {
//   person = {name:'Yamin', age:12, gender:'M'}
//   result = '';
//   render() {
//     if(this.person.gender==='M'){
//       this.result = (<div style={{backgroundColor:'blue'}}>
//       <h1>Hello {this.person.name}</h1>
//       <p>Your gender is {this.person.gender}</p>
//       </div>)
//     }else{
//       this.result = (<div style={{backgroundColor:'pink'}}>
//       <h1>Hello {this.person.name}</h1>
//       <p>Your gender is {this.person.gender}</p>
//       </div>)
//     }
//     return(<>
//       {this.result}
//       <p>Paragraph</p>
//     </>)
//   }
// }


