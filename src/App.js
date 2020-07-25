import React, {useState,useEffect} from 'react';
import {Button, FormControl,InputLabel,Input} from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{username : 'hamma', text : 'holla'},{username : 'fuck you', text : 'asba'}])
  const [username, setUsername] = useState('')


  useEffect(() => {
    setUsername(prompt('please enter ur name'))
  }, [])
  const sendMessage=(event) =>{
    event.preventDefault()
    setMessages([...messages,{username : username ,text : input}])
    setInput('')
  
  }


 
  return (
    <div className="App">
      <h1>hello {username}</h1>
      <form>
        <FormControl>
          <InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}/></InputLabel>
          <hr/>
          <Button disabled={!input} varient='contained' color='primary' type='submit' onClick={sendMessage}>send message</Button>
        </FormControl>
      
      
      </form>
      {messages.map(message=>
        <Message username={message.username} text={message.text}/>
        
        )}
      
    </div>
  );
}


export default App;
