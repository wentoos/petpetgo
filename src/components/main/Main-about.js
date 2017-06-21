import React, { Component } from 'react';
import '../../css/main-about.css'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { searchData } from '../../redux/action/Action'
class MainAbout extends Component {
    componentWillMount(){
        let key
        this.props.searchData(key,'SHOPS')
    }
  render() {
    return (
      <div className='main_about'>
          <p>附近商家</p>
          <div>
              {
                  this.props.shops.map(item=><div key={item._id}><Link to={{pathname:`/commodity/${item._id}`,title:item.name}} >{item.name}</Link></div>)
              }
          </div>
      </div>
    )
  }
}
let mapStateToProps = state => ({
    shops:state.shops
})
export default connect(mapStateToProps,{searchData})(MainAbout)
