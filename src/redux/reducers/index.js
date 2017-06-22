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

function oneReducer(state=[],action){
    switch (action.type) {
        case 'ONE':
            return action.data.slice(0,1).map(item=>item._id)
        case 'CURRENTCATS':
            return [action.currentcat.id]
        default:
        return state
    }
}
function allReducer(state=[],action){
    switch (action.type) {
        case 'ALL':
            return action.data.products.map(
                function a(item){
                        item.num=0
                        return item
                }
            )
        case 'ALTER_NUMBER':
            let a = action.all.findIndex(function shop(item){
                return item._id === action.id
            })
            return [...action.all.slice(0,a),{...action.all[a],num:action.all[a].num+action.i},...action.all.slice(a+1,action.all.length+1)]
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
    title:titleReducer,
    all:allReducer,
    one:oneReducer

})
export default rootReducer
