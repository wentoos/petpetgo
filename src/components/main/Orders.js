import React,{Component} from 'react'
import Footer from './Footer'
import {orderAction} from '../../redux/action/Action'
import { connect } from 'react-redux'
import '../../css/orders.css'
class Orders extends Component {
    constructor() {
        super()
        this.state={
            catch:true
        }
    }
    componentWillMount(){
        if(sessionStorage.userId){
            let userId=JSON.parse(sessionStorage.userId)
            this.props.dispatch(orderAction(userId))
        }else {
            this.setState({catch:false})
        }

    }
    goBack(){
        window.history.back()
    }
    render(){
        return(
            <div className='orders_warp'>
                <header>
                    <a onClick={this.goBack.bind(this)}>
                        <svg width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M280.992 533.504l416.672 416.768c12.544 12.48 32.8 12.512 45.312 0 12.544-12.512 12.544-32.832 0.032-45.312l-373.504-373.568c0 0 0.736 0.736-10.496-10.496-11.232-11.2 1.088-21.312 1.088-21.312l10.688-10.688 369.952-369.952c12.544-12.512 12.544-32.736 0-45.248-12.512-12.512-32.768-12.544-45.28 0l-412.032 412c-0.448 0.448-0.768 0.832-1.152 1.248-0.512 0.448-0.896 0.8-1.28 1.216C268.48 500.672 268.48 521.024 280.992 533.504z" /></svg>
                    </a>
                    <p style={{marginRight:'45vw'}}>订单</p>
                </header>
                <div className='orders_main'>
                    <div className='orders_tab'>
                        {   this.state.catch?
                            this.props.orders.map(
                                item=>
                                    <div key={item._id}>
                                        <p>店铺</p>
                                        <div>
                                            <p>商品:</p>
                                            {
                                                item.products.map(item=>
                                                    <div key={item._id} className='orders'>
                                                        <img src={item.poster} alt='tupian'/>
                                                        <span className='orders_name'>{item.name}</span>
                                                        <span className='orders_price'>单价：{item.price}</span>
                                                        <span className='orders_num'>数量：{item.num}</span>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                            )
                        :<div>您还没有登录...</div>
                        }
                    </div>
                    <div className='orders_num'>

                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
let mapStateToProps=(state)=>({
    orders:state.orders
})
export default connect(mapStateToProps)(Orders)
