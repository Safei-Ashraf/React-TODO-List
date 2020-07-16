import React, { Component } from 'react'

export class TodoItem extends Component {
    //Styling ToDo Items based on props > Dynamic Styling:
    getItemStyle = ()=>{
        return{
            fontWeight: 'bold',
            color: 'blue',
            backgroundColor: '#e2e2e2',
            padding: '10px',
            width:'50%',
            margin:'auto',
            marginBottom: '0.5rem', 
            border: '1px solid #ccc',
            borderRadius: '10px',
            textDecoration:this.props.todo.completed? 'line-through':'none'
        }
    }

    //Details of each TodoItem to display when called:
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getItemStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {''}
                <p>{title}</p>
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
            </div>
        )
    }
}
const btnStyle = {
    backgroundColor : '#ff0000',
    color: '#fff',
    border: 'inset 2px red',
    borderRadius : '50%',
    cursor: 'pointer',
    padding : '4px',
    float: 'right',
    marginTop: '-30px'
}

export default TodoItem
