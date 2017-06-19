import { combineReducers } from 'redux'

function userReducer(state = {},action){
    switch (action.type) {
        case 'USER':
            return action.user
        default:
            return state
    }
}

function userName(state = '',action){
    switch (action.type) {
        case 'USERNAME':
            return action.username
        default:
            return state
    }
}
function positionReducer(state={},action){
  switch(action.type){
    case 'POSITION':
      return action.content
    default:
      return state
  }
}
function shopReducer (state=[],action){
  switch(action.type){
    case 'SHOPS' : return action.content
    default : return state
  }
}

function ordersReducer(state={},action){
    switch (action.type) {
        case 'ORDER':
            return state
        default:
            return state
    }
}
const rootReducer = combineReducers({
    user:userReducer,
    shops:shopReducer,
    position:positionReducer,
    userName
})


export default rootReducer
