import axios from 'axios'
import $ from 'jquery'


export const addPosition=()=>(
  dispatch=>{
      let showPosition=(position)=>{
        $.ajax({
          url: `http://api.map.baidu.com/geocoder/v2/?output=json&ak=h60kMdXBxcFeuem79GOZQtctxg1O3QTA&location=${position.coords.latitude},${position.coords.longitude}`,
          type: 'GET',
          dataType: 'JSONP',
          success: data=>{
            dispatch({type:'POSITION',content:{...data.result.addressComponent}})
          }
        });
      }
      let showError=error=>{
          dispatch({type:'POSITION',content:{errorPosition:'定位失败...'}})
        }
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
      }else{alert('浏览器不支持定位')}
  }
)
//从百度地图API获取当前位置
export const signIn=(data,type,props)=>{
    return dispatch=>{
        switch (type) {
            case '1':
                axios.post('http://petapi.haoduoshipin.com/user/signin',data).then(res=>{
                    dispatch({type:'USER',user:res.data})
                    sessionStorage.userId=JSON.stringify(res.data.userId)
                    alert(res.data.msg)
                }).then(res=>props.history.push('/user')).catch(err=>{alert( JSON.parse(err.request.response).msg)})
                break;
            case '2':
                    axios.post('http://petapi.haoduoshipin.com/user/signup',data)
                    .then(res=>{
                      dispatch({type:'USER',user:res.data})
                      sessionStorage.userId=JSON.stringify(res.data.userId)
                      alert(res.data.msg)
                    }).then(res=>props.history.push('/user'))
                    .catch(err=>{alert( JSON.parse(err.request.response).msg)})
                break;
            case '3':
                axios.get(`http://petapi.haoduoshipin.com/user/${data}`)
                .then(res=>{dispatch({type:'USERNAME',username:res.data.user.username})})
                break;
            default:
                return false
        }
    }
}
//注册登录
export const searchData =(key,type)=>(
  dispatch =>{
      switch (type) {
          case 'SEARCH':
              axios.post('http://petapi.haoduoshipin.com/shop/search',key).then(res=>
                dispatch({type:'SHOPS',content:res.data.shops})
              )
                break;
          case 'SHOPS':
            axios.get('http://petapi.haoduoshipin.com/shops')
            .then(res=>
                dispatch({type:'SHOPS',content:res.data.shops})
            )
                break;
        default: return false
      }
  }
)
//搜索店铺
export const orderAction =(userId)=>(
    dispatch=>{
        axios.get(`http://petapi.haoduoshipin.com/orders`)
        .then(res=>dispatch({type:'ORDER',orders:{orders:res.data.orders,userId}}))
    }
)
export const shopAction =(url)=>(
    dispatch=>{
        axios.get(`http://petapi.haoduoshipin.com/shop/${url}/cats`)
        .then(res=>dispatch({type:'COMMODITY',data:res}))
    }
)
export const titleAction=(title,type)=>{
    switch (type) {
        case 'TITLE':
            return {type:'TITLE',title}
        case 'NULL':
            return {type:'NULL',title}
        default: return false
    }

}
