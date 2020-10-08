export const SET_USERNAME = "SET_USERNAME"
export const SET_CONNECTED = "SET_CONNECTED"
export const SET_ERROR = "SET_ERROR"
export const UPDATE_CHAT_HISTORY = "UPDATE_CHAT_HISTORY"


export function setUsername(username){
    return {
        type: SET_USERNAME,
        username
    }
}

export function connectSuccess(){
    return {
        type: SET_CONNECTED,
    }
}

export function connectError(error){
    return {
        type: SET_ERROR,
        error
    }
}

export function updateChatLog(update){
    return {
        type: UPDATE_CHAT_HISTORY,
        update
    }
}