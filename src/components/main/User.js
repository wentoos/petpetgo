import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import { connect } from 'react-redux'
import { signIn } from '../../redux/action/Action'
import '../../css/user.css'
import Footer from './Footer'
class User extends Component {
    constructor(){
        super()
        this.state = { visible: false }
    }
    componentWillMount(){
        this.props.dispatch(signIn(JSON.parse(sessionStorage.userId),'3',this.props))
    }
    goBack(){
        window.history.back()
    }

    showModal(){
        this.setState({
          visible: true,
        })
    }
    handleOk(){
        this.setState({
          visible: false,
        })
        sessionStorage.userId=''
        this.props.history.push('/')
    }
    handleCancel(e){
        this.setState({
          visible: false,
        });
    }
    render() {
        return (
            <div className='user'>
                <header>
                    <a onClick={this.goBack.bind(this)}>
                        <svg width="16px" height="16.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M280.992 533.504l416.672 416.768c12.544 12.48 32.8 12.512 45.312 0 12.544-12.512 12.544-32.832 0.032-45.312l-373.504-373.568c0 0 0.736 0.736-10.496-10.496-11.232-11.2 1.088-21.312 1.088-21.312l10.688-10.688 369.952-369.952c12.544-12.512 12.544-32.736 0-45.248-12.512-12.512-32.768-12.544-45.28 0l-412.032 412c-0.448 0.448-0.768 0.832-1.152 1.248-0.512 0.448-0.896 0.8-1.28 1.216C268.48 500.672 268.48 521.024 280.992 533.504z" /></svg>
                    </a>
                    <p>用户</p>
                    <Button onClick={this.showModal.bind(this)} id='out'>退出</Button>
                </header>
                <div className='user_main'>
                    <div>
                        <div className='user_name'>
                            <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497894305453&di=db8899ceeea2adaceba3e487d98f19cb&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160927%2F035d8f26db3d4d7fa85385b232e5623b.jpg'/>
                            <p>{this.props.userName}</p>
                        </div>
                    </div>

                    <a>我的收藏</a>
                    <a>我的订单</a>
                    <a>我的钱包</a>
                    <a>我的评价</a>
                    <a>我的地址</a>
                </div>
                <Footer />
                <Modal
                    title="提示"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <p>确定要退出吗？？</p>
                </Modal>
            </div>

        )
    }
}
let mapStateToProps=(state)=>({
    userName:state.userName
})
export default connect(mapStateToProps)(User)
