import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { searchData } from '../../redux/action/Action'
import '../../css/search.css'
class Search extends Component {
    constructor (){
        super()
        this.search=this.search.bind(this)
        this.state={
            key:''
        }
    }
    search(e){
        let _name=e.target.value
        let key={key:_name}
        if(_name){
            this.setState({key:_name})
            this.props.searchData(key,'SEARCH')
        }
    }
    render() {
        let reg=new RegExp(this.state.key,'g')
        return (
            <div className='search_warp'>
                <header>
                    <Link to='/'>
                        <svg width="18px" height="18.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#8a8a8a" d="M280.992 533.504l416.672 416.768c12.544 12.48 32.8 12.512 45.312 0 12.544-12.512 12.544-32.832 0.032-45.312l-373.504-373.568c0 0 0.736 0.736-10.496-10.496-11.232-11.2 1.088-21.312 1.088-21.312l10.688-10.688 369.952-369.952c12.544-12.512 12.544-32.736 0-45.248-12.512-12.512-32.768-12.544-45.28 0l-412.032 412c-0.448 0.448-0.768 0.832-1.152 1.248-0.512 0.448-0.896 0.8-1.28 1.216C268.48 500.672 268.48 521.024 280.992 533.504z" /></svg>
                    </Link>
                    <div><input onChange={this.search}/></div>
                    <button onClick={this.search}>搜索</button>
                </header>
                <div>
                    <div className='main'>
                        <div>
                            <div>
                                {
                                    this.props.shops.map(item=>(
                                    <div key={item._id} dangerouslySetInnerHTML={{__html:item.name.replace(reg,`<span style='color:red'>${this.state.key}</span>`)
                                    }}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
let mapStateToProps = state => ({
    shops:state.shops
})
export default connect(mapStateToProps,{searchData})(Search)
