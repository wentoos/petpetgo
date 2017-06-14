import axios from 'axios'
export function statusUser(userId,username){
    let data={
        userId,
        username
    }
    return dispatch=>dispatch({type:'USER',data})
}
// export function searchData(key){
//     console.log(key)
//     return dispatch=>{
//      axios.post('http://petapi.haoduoshipin.com/shop/search',key).then(res=>dispatch({type:'SHOPS',content:res.data.shops}))
//     }
// }
export const searchData =(key)=>(
  dispatch =>{

    axios.post('http://petapi.haoduoshipin.com/shop/search',key).then(res=>
      dispatch({type:'SHOPS',content:res.data.shops})
    )
  }
)
