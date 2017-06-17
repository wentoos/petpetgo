import { combineReducers } from 'redux'

function userReducer(state = {},action){
    switch (action.type) {
        case 'USER':
            return action.user
        default:
            return state
    }
}
let userState=false
function userState(state = userState,action){
    switch (action.type) {
        case 'USER':
            return state = true
        default:

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

const rootReducer = combineReducers({
    user:userReducer,
    shops:shopReducer,
    position:positionReducer,
    userState
})


export default rootReducer
