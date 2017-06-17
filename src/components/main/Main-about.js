import React, { Component } from 'react';
import '../../css/main-about.css'
import { connect } from 'react-redux'
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
                  this.props.shops.map(item=><div key={item._id}><p>{item.name}</p></div>)
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
