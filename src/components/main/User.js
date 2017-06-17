import React, { Component } from 'react'
import { Modal, Button ,Icon} from 'antd';
import {Link} from 'react-router-dom'
import '../../css/user.css'
import Footer from './Footer'
class User extends Component {
    constructor(){
        super()
        this.state ={
            visible: false
        }
    }
    goBack(){
        window.history.back()
    }
    showModal(){
        this.setState({visible: true})
    }
    hideModal(){
        this.setState({visible: false})
        sessionStorage.userId=""
        this.props.history.push('/')
    }

    render() {

        return (
            <div className='user'>
                <header>
                    <a onClick={this.goBack.bind(this)}>
                        <svg  width="16px" height="16px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M947.682335 121.44905c12.361539-12.362562 12.361539-32.567743 0-44.958958l-1.39579-1.362021c-12.357446-12.392238-32.562627-12.392238-44.925189-0.034792L534.278911 442.145026c-12.357446 12.357446-32.568766 12.357446-44.926212 0L122.175085 75.093279c-12.357446-12.357446-32.562627-12.357446-44.925189 0l-1.396813 1.430582c-12.356422 12.357446-12.356422 32.562627 0 44.924165l367.144868 367.017978c12.362562 12.357446 12.362562 32.564673 0 44.927235L75.853084 900.472616c-12.356422 12.357446-12.356422 32.56365 0 44.925189l1.396813 1.429559c12.362562 12.357446 32.567743 12.357446 44.925189 0l367.177614-367.086539c12.357446-12.356422 32.568766-12.356422 44.926212 0l367.081423 367.086539c12.362562 12.357446 32.567743 12.357446 44.925189-0.033769l1.39579-1.364067c12.361539-12.393261 12.328793-32.599466 0-44.957935L580.634682 533.394263c-12.362562-12.363585-12.362562-32.570813 0-44.927235L947.682335 121.44905 947.682335 121.44905zM947.682335 121.44905" />
                        </svg>
                    </a>
                    <p>个人中心</p>

                    <Button type="primary" onClick={this.showModal.bind(this)} id='out'><Icon type="ellipsis" /></Button>
                </header>
                <div className='user_main'>
                    <div className='userinfo'>
                        <div><img/></div>
                        <p>名字</p>
                    </div>
                    <div></div>
                </div>
                <Modal title="提示" visible={this.state.visible} onOk={this.hideModal.bind(this)} onCancel={this.hideModal.bind(this)} okText="Ok" cancelText="取消" >
                    <p>确认要退出吗...</p>
                </Modal>
                <Footer />
            </div>

        )
    }
}
export default User
