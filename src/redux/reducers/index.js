import { combineReducers } from 'redux'

let user = {}
function userReducer(state = user,action){
    switch (action.type) {
        case 'USER':
            return {...action.data}
        default:
            return state
    }
}

let shops=[]
function shopReducer (state=shops,action){
  switch(action.type){
    case 'SHOPS' : return action.content
    default : return state
  }
}




const rootReducer = combineReducers({
    user:userReducer,
    shops:shopReducer
})


export default rootReducer
