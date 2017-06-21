import React, { Component } from 'react';
import '../../css/main-about.css'
import { connect } from 'react-redux'
import { shopAction } from '../../redux/action/Action'
import { titleAction } from '../../redux/action/Action'
class Commodity extends Component {
    componentDidMount(){
        let url=this.props.match.url.slice(11)
        this.props.dispatch(shopAction(url))

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
    render() {
        return (
            <div className='commodity_warp'>
                <header>
                    <a onClick={this.goBack.bind(this)}>
                        <svg width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M280.992 533.504l416.672 416.768c12.544 12.48 32.8 12.512 45.312 0 12.544-12.512 12.544-32.832 0.032-45.312l-373.504-373.568c0 0 0.736 0.736-10.496-10.496-11.232-11.2 1.088-21.312 1.088-21.312l10.688-10.688 369.952-369.952c12.544-12.512 12.544-32.736 0-45.248-12.512-12.512-32.768-12.544-45.28 0l-412.032 412c-0.448 0.448-0.768 0.832-1.152 1.248-0.512 0.448-0.896 0.8-1.28 1.216C268.48 500.672 268.48 521.024 280.992 533.504z" /></svg>
                    </a>
                    <p>{this.props.title}</p>
                </header>

                {
                    this.props.commodity.length>0?
                        this.props.commodity.map(item=><div>{item.name}</div>):
                        <div>没有相关商品偶</div>
                }
            </div>
        )
    }
}
let mapStateToProps = state => ({
    commodity:state.commodity,
    title:state.title
})
export default connect(mapStateToProps)(Commodity)
