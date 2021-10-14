import React, { useState } from 'react';
import Greeter from "./components/Greeter";


const App = () => {
    const [username, setUsername] = useState('');
    const usernameChange = e => {
        setUsername(e.target.value);
    }
    // const [username, setUsername] = useState('');
    // const usernameChange = e => {
    //     setUsername(e.target.value);
    // }
    return (
        
        <>
            <Greeter phrase="Hello there " name="Ray"/>
            <Greeter phrase="What's up " name="Jay"/>
            <Greeter phrase="Please yell " name="John"/>
            <input value={username} onChange={usernameChange}></input>
            <p>You are logging in as: {username}</p>
        </>
    );
}

export default App;
//ReactDom.render(<Greeter />, document.getElementById('root'));