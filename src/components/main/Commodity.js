import React, { Component } from 'react'
import '../../css/commodity.css'
import { connect } from 'react-redux'
import { shopAction ,ALLAction} from '../../redux/action/Action'
import { titleAction } from '../../redux/action/Action'
import Buy from './Buy'
class Commodity extends Component {
    state={
        catch:false,
        num:0,
        style:0
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
    changeQuantity(i,id){
        function isBigEnough(item) {
            return item._id === id
        }

        this.props.dispatch({type:'ALTER_NUMBER',i,id,all:this.props.all})
        this.props.dispatch({type:'BUY_NUMBER',i,id,all:this.props.all})

    }
    switchCats(item,index){
        this.props.dispatch({type:'CURRENTCATS',currentcat:{name:item.name,id:item._id}})
        this.setState({style:index})
    }
    render() {
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
                                (item,index)=>
                                    <li key={item._id} style={{background:this.state.style===index?'#CCCCCC':'white'}} onClick={this.switchCats.bind(this,item,index)}>{item.name}</li>
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
                                                <button onClick={this.changeQuantity.bind(this,-1,item._id)} style={{opacity:item.num>0?'1':'0'}}>-</button>
                                                <b style={{opacity:item.num>0?'1':'0'}}>{item.num}</b>
                                                <button onClick={this.changeQuantity.bind(this,+1,item._id)} >+</button>
                                            </span>
                                        </p>
                                    </div>:null
                                )
                            ):null
                    }
                </div>
                <Buy push={this.props}/>
            </div>
        )
    }
}
let mapStateToProps = state => ({
    commodity:state.commodity,
    title:state.title,
    all:state.all,
    one:state.one

})
export default connect(mapStateToProps)(Commodity)
