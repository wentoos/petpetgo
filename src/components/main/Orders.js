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
        console.log(this.props);
        return(
            <div className='orders_warp'>
                <header>

                    <p style={{textAlign:'center',width:'100vw'}}>订单</p>
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
