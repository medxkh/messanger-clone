import React, {useState,useEffect} from 'react';
import {Button, FormControl,InputLabel,Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>( {id : doc.id, message: doc.data()}) ))
    })
   
  }, [])

  useEffect(() => {
    setUsername(prompt('please enter ur name'))
  }, [])
  
  
  const sendMessage=(event) =>{
    event.preventDefault()
    db.collection('messages').add({
      message : input,
      username : username,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()

    })
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
          <hr/>
          <Button disabled={!input} varient='contained' color='primary' type='submit' onClick={sendMessage}>send message</Button>
        </FormControl>
      
      
      </form>
      <FlipMove>
      {messages.map(({id,message})=>
        <Message key={id} username={username} message={message}/>
        
        )}

      </FlipMove>
      
      
    </div>
  );
}


export default App;
