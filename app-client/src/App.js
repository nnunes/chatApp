import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import GroupChat from './pages/GroupChat'
import './App.css';
import WebSocketProvider from './WebSocket';
import rootReducer from './reducers'

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <WebSocketProvider>
      <GroupChat />
    </WebSocketProvider>
  </Provider>
)

export default App;
