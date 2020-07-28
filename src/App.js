import React, {useState,useEffect} from 'react';
import { FormControl,InputLabel,Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
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
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt=''/>
      <h1>hello {username}</h1>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <InputLabel className='app__input'>
          <Input className='app__input' value={input} onChange={event=>setInput(event.target.value)}/></InputLabel>
          
          <IconButton className="app__IconButton" disabled={!input} type="submit" onClick={sendMessage} variant="contained" color="primary">
            <SendIcon />
          </IconButton>
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