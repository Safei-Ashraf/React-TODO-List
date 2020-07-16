import React from 'react';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Layout/Header'
import AddTodo from './components/AddTodo';
//import {v4 as uuid} from 'uuid';
import About from './components/Pages/About';


//Main App Class:
class App extends React.Component {
  //State Obj that hold data:
  state = {
    todos:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(
      resp => this.setState({todos: resp.data})
    )
  }

  //Toggle Todo item:
  markComplete = (id)=>{
    this.setState({
      todos: this.state.todos.map( todo=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //Remove Item:
  delTodo = (id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      resp => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !==id)]
      })
    )
 
  }

  addTodo = (title)=>{
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    title: title,
    completed: false
  }).then(
    resp => this.setState({todos: [...this.state.todos, resp.data]})
  )}
  //Required Method, has to be there, used to render data:
  //<Todos/> is a component we made and todos inside it is called a "prop":
  render(){
  return (
    <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
            <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos  todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
            )}/>
          <Route path="/about" component={About}/>
         </div>
        </div>
    </Router>
  );
  }
}

export default App;
