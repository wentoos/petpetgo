import React from 'react'

import  Form  from 'antd/lib/form'
import  Input  from 'antd/lib/input'
import  Checkbox  from 'antd/lib/checkbox'
import  Button  from 'antd/lib/button'
import message from 'antd/lib/message';

import '../css/login-up.css'
//此header样式在login.css中
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
// import { signIn } from '../redux/action/Action'
import axios from 'axios'
const FormItem = Form.Item
class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  }
warning=(text)=>{
    message.config({ top: 47, duration: 1.8 })
    message.warning(text)
}
//警告信息提示框
success = (text) => {
    message.config({ top: 47})
    message.success(text,1.5)
}
//注册成功提示框
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
        if(!values.agreement){this.warning('请阅读并同意爱宠网用户协议')}
        if (!err && values.agreement) {
        const data = {
            username:values.username,
            password:values.password
        }
        axios.post(`http://petapi.haoduoshipin.com/user/signup`,data).then(res=>{
            this.success(res.data.msg + ' 正在登录...')
            sessionStorage.userId=JSON.stringify(res.data.userId)
        })
        .then(res=>{this.props.history.push('/')})
        .catch(err=>{this.warning(err.response.data.msg)})
      }
    })
  }
  //注册信息提交 判断单选按钮是否点击
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('您输入的两个密码不一致！');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value,callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback()
  }
  goBack(){
       window.history.back()
  }
  //返回历史地址
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login_up'>
          <header>
              <a onClick={this.goBack.bind(this)}>
                  <svg  width="16px" height="16px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M947.682335 121.44905c12.361539-12.362562 12.361539-32.567743 0-44.958958l-1.39579-1.362021c-12.357446-12.392238-32.562627-12.392238-44.925189-0.034792L534.278911 442.145026c-12.357446 12.357446-32.568766 12.357446-44.926212 0L122.175085 75.093279c-12.357446-12.357446-32.562627-12.357446-44.925189 0l-1.396813 1.430582c-12.356422 12.357446-12.356422 32.562627 0 44.924165l367.144868 367.017978c12.362562 12.357446 12.362562 32.564673 0 44.927235L75.853084 900.472616c-12.356422 12.357446-12.356422 32.56365 0 44.925189l1.396813 1.429559c12.362562 12.357446 32.567743 12.357446 44.925189 0l367.177614-367.086539c12.357446-12.356422 32.568766-12.356422 44.926212 0l367.081423 367.086539c12.362562 12.357446 32.567743 12.357446 44.925189-0.033769l1.39579-1.364067c12.361539-12.393261 12.328793-32.599466 0-44.957935L580.634682 533.394263c-12.362562-12.363585-12.362562-32.570813 0-44.927235L947.682335 121.44905 947.682335 121.44905zM947.682335 121.44905" />
                  </svg>
              </a>
              <p>注册</p>
              <Link to='login' style={{color:'#fff'}}>登录</Link>
          </header>
          <Form onSubmit={this.handleSubmit}>
              <FormItem  label='用户账号' hasFeedback>
                  {getFieldDecorator('username', {
                      rules: [{ required: true, message: '请输入你的用户名！', whitespace: true }],
                  })(
                      <Input />
                  )}
              </FormItem>
              <FormItem  label="用户密码" hasFeedback>
                  {getFieldDecorator('password', {
                      rules: [{
                          required: true, message: '请输入你的密码！',
                      }, {
                          validator: this.checkConfirm,
                      }],
                  })(
                      <Input type="password" />
                  )}
              </FormItem>
              <FormItem label="确认密码" hasFeedback>
                  {getFieldDecorator('confirm', {
                      rules: [{
                          required: true, message: '请确认密码！',
                      }, {
                          validator: this.checkPassword,
                      }],
                  })(
                      <Input type="password" onBlur={this.handleConfirmBlur} />
                  )}
              </FormItem>
              <FormItem>
                  <Button type="primary" htmlType="submit" size="large">注册</Button>
              </FormItem>
              <FormItem  style={{ marginBottom: 8 }}>
                  {getFieldDecorator('agreement', {
                      valuePropName: 'checked',
                  })(
                      <Checkbox>我已阅读并同意<a href="">《爱宠网用户协议》</a></Checkbox>
                  )}
              </FormItem>
          </Form>
      </div>
    )
  }
}
let mapStateToProps = state => ({
    root:state
})
export default connect(mapStateToProps)(Form.create()(RegistrationForm))
