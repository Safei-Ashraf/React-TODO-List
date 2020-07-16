import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}>
            <h1>TO-DO List</h1>
            <Link to="/" className="link">HOME</Link>
            <Link to="/about" className="link">ABOUT</Link>
        </header>
    )
}

const headerStyle ={
    backgroundColor: '#222639',
    color: '#fff',
    textAlign : 'center',
    padding : '10px',
    margin: 'auto',
    width: '60%',
    borderRadius: '12px',
    marginBottom: '2rem'
}

export default Header;