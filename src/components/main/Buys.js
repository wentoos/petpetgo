import React, { Component } from 'react';
import '../../css/buy.css'
import { connect } from 'react-redux'
import axios from 'axios'
class Buys extends Component {
        goBack(){
            window.history.back()
        }
        submit(){
            let userId=JSON.parse(sessionStorage.userId)
            let products = this.props.buy
            axios.post(`http://petapi.haoduoshipin.com/order/new`,{userId,products}).then(res=> alert(res.data.msg)).then(res=>this.props.history.push('/orders'))
        }
        render() {
            let nums=0
            this.props.buy.map(item=> item.num*item.price).forEach(item=>{
                nums+=item
            })
            console.log(this.props);
            return (
              <div className='orders_warp'>
                  <header>
                      <a onClick={this.goBack.bind(this)}>
                          <svg width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M280.992 533.504l416.672 416.768c12.544 12.48 32.8 12.512 45.312 0 12.544-12.512 12.544-32.832 0.032-45.312l-373.504-373.568c0 0 0.736 0.736-10.496-10.496-11.232-11.2 1.088-21.312 1.088-21.312l10.688-10.688 369.952-369.952c12.544-12.512 12.544-32.736 0-45.248-12.512-12.512-32.768-12.544-45.28 0l-412.032 412c-0.448 0.448-0.768 0.832-1.152 1.248-0.512 0.448-0.896 0.8-1.28 1.216C268.48 500.672 268.48 521.024 280.992 533.504z" /></svg>
                      </a>
                      <p style={{marginRight:'45vw'}}>我的订单</p>
                  </header>
                  <div className='orders_main'>
                      <div className='orders_tab'>
                          {
                              this.props.buy.map(
                                  item=>
                                      <div key={item._id}>
                                          <p>商品:</p>
                                          <div key={item._id} className='orders'>
                                              <img src={item.poster} alt='tupian'/>
                                              <span className='orders_name'>{item.name}</span>
                                              <span className='orders_price'>单价：{item.price}</span>
                                              <span className='orders_num'>数量：{item.num}</span>
                                          </div>
                                      </div>
                              )

                          }

                      </div>
                  </div>
                  <div className='main_buy'>
                      <p>
                          合计：<span>{'￥'+nums}</span>
                      </p>
                      <a to='/buys' onClick={this.submit.bind(this)}>提交订单</a>
                  </div>
              </div>
            )
        }
}


let mapStateToProps = state => ({
    buy:state.buy
})
export default connect(mapStateToProps)(Buys)
