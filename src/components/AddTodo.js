import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e)=>{
        this.setState({ title: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {  
        return (
            <form onSubmit={this.onSubmit} style={{display : 'flex', width:'50%', margin:'auto', marginBottom:'1rem', border:'3px outset grey', padding:'3px'}}>
                <input type="text"  value={this.state.title} onChange={this.onChange} name="title" placeholder="add todo . . ." style={{flex: '10', padding:'3px'}}/>
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo
