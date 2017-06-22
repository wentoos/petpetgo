import React, { Component } from 'react';
import '../../css/buy.css'
import { connect } from 'react-redux'
class Buy extends Component {
        render() {
            console.log(this.props);
            function isBigEnough(item) {
                return item.num > 0
            }
            return (
              <div className='main_buy'>
                  <p></p>
                  <a>去结算</a>
              </div>
            )
        }
}


let mapStateToProps = state => ({
    all:state.all
})
export default connect(mapStateToProps)(Buy)
