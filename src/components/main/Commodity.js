import React, { Component } from 'react'
import '../../css/commodity.css'
import { connect } from 'react-redux'
import { shopAction ,ALLAction} from '../../redux/action/Action'
import { titleAction } from '../../redux/action/Action'
class Commodity extends Component {
    state={
        catch:false,
        num:0
    }
    componentWillMount(){
        let url=this.props.match.url.slice(11)
        this.props.dispatch(shopAction(url))
        this.props.dispatch(ALLAction())
        if(this.props.location.title){
            this.props.dispatch(titleAction(this.props.location.title,'TITLE'))
            sessionStorage.shoptitle=JSON.stringify(this.props.location.title)
        }else {
            this.props.dispatch(titleAction(null,'NULL'))
        }

    }

    goBack(){
        window.history.back()
    }
    changeQuantity(i,item){
        if(this.state.num>=0){
            this.setState({num:this.state.num + i})
        }
        this.props.dispatch({type:'ALTER_NUMBER',i,data:{_id:item._id,name:item.name,price:item.price,poster:item.poster}})

    }
    switchCats(item){
        this.props.dispatch({type:'CURRENTCATS',currentcat:{name:item.name,id:item._id}})
    }
    render() {
        console.log(this.props);
        return (
            <div className='commodity_warp'>
                <header>
                    <a onClick={this.goBack.bind(this)}>
                        <svg width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M280.992 533.504l416.672 416.768c12.544 12.48 32.8 12.512 45.312 0 12.544-12.512 12.544-32.832 0.032-45.312l-373.504-373.568c0 0 0.736 0.736-10.496-10.496-11.232-11.2 1.088-21.312 1.088-21.312l10.688-10.688 369.952-369.952c12.544-12.512 12.544-32.736 0-45.248-12.512-12.512-32.768-12.544-45.28 0l-412.032 412c-0.448 0.448-0.768 0.832-1.152 1.248-0.512 0.448-0.896 0.8-1.28 1.216C268.48 500.672 268.48 521.024 280.992 533.504z" /></svg>
                    </a>
                    <p>{this.props.title}</p>
                </header>
                <div className='commodity_main'>
                    <ul>
                        {
                            this.props.commodity.msg==='获取分类成功' &&
                            this.props.commodity.cats.length?this.props.commodity.cats.map(
                                item=><li key={item._id} onClick={this.switchCats.bind(this,item)}>{item.name}</li>
                            ):
                            <div className='commodity_out'>获取信息失败...</div>
                        }
                    </ul>
                    {   this.props.one && this.props.commodity.msg==='获取分类成功' &&
                        this.props.commodity.cats.length?
                            this.props.all.map(
                                item=>(item.cat === this.props.one[0] ?
                                    <div key={item._id} className="cat_tab">
                                        <img src={item.poster} alt='img'/>
                                        <h4>{item.name}</h4>
                                        <p>
                                            <span style={{color:'red'}}>￥{item.price}</span>
                                            <span >
                                                <button onClick={this.changeQuantity.bind(this,-1,item)}>-</button>
                                                <b>{this.state.num}</b>
                                                <button onClick={this.changeQuantity.bind(this,+1,item)}>+</button>
                                            </span>
                                        </p>
                                    </div>:null)

                            ):null
                    }

                </div>

            </div>
        )
    }
}
let mapStateToProps = state => ({
    commodity:state.commodity,
    title:state.title,
    all:state.all,
    one:state.one,
    nums:state.nums

})
export default connect(mapStateToProps)(Commodity)
