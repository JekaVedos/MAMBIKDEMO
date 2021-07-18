const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
   DialogsD: [
      {id: 1, name: 'mambik'},
      {id: 2, name: 'kozak'},
      {id: 3, name: 'pitsa'},
      {id: 4, name: 'pena'},
      {id: 4, name: 'pena'},
      {id: 4, name: 'pena'},
      {id: 4, name: 'pena'},
      {id: 4, name: 'pena'},
      {id: 4, name: 'pena'},
      {id: 4, name: 'pena'}
   ],
   MessageD: [
      {id: 1, message: 'hi, mamba'},
      {id: 2, message: 'i love pitsa'},
      {id: 3, message: 'mambasale'},
      {id: 3, message: 'mambasale'},
      {id: 3, message: 'mambasale'},
      {id: 3, message: 'mambasale'},
      {id: 3, message: 'mambasale'}
   ]
}

const messageReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE: {
         let messValue = {
            id: 6,
            message: action.newMessValue
         }
         return {
            ...state,
            MessageD: [...state.MessageD, messValue]
         }
      }
      default:
         return state;
   }
}

export let sendMessageActionCreator = (newMessValue) => ({type: SEND_MESSAGE, newMessValue})

export default messageReducer;