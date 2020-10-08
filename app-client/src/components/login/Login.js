import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux'
import { setUsername } from '../../actions';

import './Login.css'

const Login = ({ ws }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const dispatch = useDispatch();

  //TODO dont allow same username

  return (
    <div className="login centered">

      <TextField /* TODO remove materialui and implement own form input */
          label="Type your username"
          placeholder="Username"
          onChange={(e) => setUsernameInput(e.target.value)} //TODO use debounce
          margin="normal"
        />
        
        <button /* TODO disable button when there's no username */
          onClick={ () => {
            dispatch(setUsername(usernameInput))
            ws.addUser(usernameInput);
          }}> 
          Enter Chat 
        </button>
    </div>
  )
}

export default Login;