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
    case 'SHOPS' :
        return action.content
    default :
        return state
  }
}

function ordersReducer(state=[],action){
    let userOrder=item=>{
        return item.userId ===action.orders.userId
    }
    switch (action.type) {
        case 'ORDER':
            return action.orders.orders.filter(userOrder)
        default:
            return state
    }
}
function CommodityReducer(state=[],action){
    switch (action.type) {
        case 'COMMODITY':
            return action.data
        default:
            return state
    }
}
function titleReducer(state='',action){

    switch (action.type) {
        case 'TITLE':
            return action.title
        case 'NULL':
            return JSON.parse(sessionStorage.shoptitle)
        default:
        return state

    }
}
const rootReducer = combineReducers({
    user:userReducer,
    shops:shopReducer,
    position:positionReducer,
    userName:userName,
    orders:ordersReducer,
    commodity:CommodityReducer,
    title:titleReducer
})
export default rootReducer
