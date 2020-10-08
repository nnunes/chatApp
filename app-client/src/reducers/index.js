import { SET_USERNAME, SET_ERROR, UPDATE_CHAT_HISTORY, SET_CONNECTED } from '../actions';

const initialState = {
    chatLog: [],
    username: null,
    error: null,
    connected: false
}

export default function chatReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch(action.type){
        case SET_USERNAME:
            return {
                ...state,
                username: action.username
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
                connected: false
            }
        case SET_CONNECTED:
            return {
                ...state,
                connected: true
            }
        case UPDATE_CHAT_HISTORY:
            return {
                ...state,
                chatLog: [...state.chatLog, action.update]
            }
        default:
            return state;
    }
}