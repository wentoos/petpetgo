import React, { Component } from 'react'
import '../css/Login.css'
import Tabs from 'antd/lib/tabs';
// import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../redux/action/Action'
import  Checkbox  from 'antd/lib/checkbox'
import message from 'antd/lib/message'
const TabPane = Tabs.TabPane;

let img1 = <svg className='icon' width="15px" height="15px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path fill="#000" d="M511.955998 595.739193c-43.240827 0-86.256526-5.635347-127.851876-16.748453-40.392966-10.79281-79.626525-26.794249-116.611881-47.558156-72.420403-40.656979-136.251174-99.881848-184.594205-171.272805-3.169179-4.679579-1.944282-11.042497 2.735297-14.210653 4.679579-3.168156 11.042497-1.943258 14.210653 2.735297 46.568618 68.771293 108.003829 125.792984 177.666422 164.901701 35.494399 19.926842 73.134671 35.278481 111.87602 45.630247 39.872103 10.653641 81.110319 16.054651 122.568547 16.054651 41.458227 0 82.695421-5.40101 122.567523-16.054651 38.740326-10.350742 76.381621-25.703405 111.874997-45.629223 69.660546-39.107693 131.09678-96.129384 177.665399-164.899654 3.170203-4.679579 9.531074-5.903453 14.211676-2.735297 4.678556 3.169179 5.904477 9.531074 2.735297 14.210653-48.342008 71.38891-112.173802 130.61378-184.593182 171.270758-36.985356 20.762883-76.217892 36.763298-116.611881 47.556109C598.212524 590.103846 555.196825 595.739193 511.955998 595.739193zM511.955998 679.808914c-5.650697 0-10.233062-4.582365-10.233062-10.233062L501.722936 585.057923c0-5.650697 4.582365-10.233062 10.233062-10.233062s10.233062 4.582365 10.233062 10.233062l0 84.518952C522.18906 675.227572 517.606695 679.808914 511.955998 679.808914zM254.732635 626.183576c-1.403976 0-2.829442-0.290619-4.193509-0.904603-5.154393-2.319835-7.451716-8.377808-5.132904-13.531178l38.032198-84.518952c2.318812-5.15337 8.377808-7.451716 13.531178-5.132904 5.154393 2.318812 7.451716 8.377808 5.132904 13.531178l-38.032198 84.518952C262.364453 623.937418 258.635525 626.183576 254.732635 626.183576zM777.894859 626.183576c-3.90289 0-7.631818-2.246157-9.337669-6.036483l-38.032198-84.518952c-2.319835-5.15337-0.021489-11.212366 5.132904-13.531178 5.155417-2.319835 11.212366-0.020466 13.531178 5.132904l38.032198 84.518952c2.319835 5.15337 0.021489 11.211343-5.132904 13.531178C780.724301 625.892957 779.297812 626.183576 777.894859 626.183576zM47.895847 480.198713c-3.278673 0-6.499018-1.571798-8.477069-4.489244-3.173273-4.676509-1.954515-11.040451 2.723018-14.2127l87.151919-59.130725c4.676509-3.175319 11.040451-1.953492 14.2127 2.723018 3.173273 4.676509 1.954515 11.040451-2.723018 14.2127l-87.151919 59.130725C51.871391 479.626685 49.872874 480.198713 47.895847 480.198713zM976.104153 480.198713c-1.978051 0-3.976568-0.572028-5.735631-1.766226l-87.151919-59.130725c-4.676509-3.173273-5.89629-9.53619-2.723018-14.213723 3.174296-4.676509 9.537214-5.895267 14.213723-2.721994l87.151919 59.130725c4.676509 3.173273 5.89629 9.53619 2.723018 14.213723C982.602148 478.626915 979.381803 480.198713 976.104153 480.198713z" />
           </svg>
let img2 =<svg  className='icon' width="15px" height="15px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path fill="#8a8a8a" d="M507.559363 377.157919c-244.047272 0-441.895339 156.776649-441.895339 194.548928 0 42.645263 197.848067 194.750519 441.895339 194.750519 244.048295 0 441.897386-155.354254 441.897386-194.750519C949.456748 533.934568 751.607658 377.157919 507.559363 377.157919zM507.559363 741.073232c-222.522026 0-396.162762-132.227534-396.162762-169.264055 0-32.79594 173.641759-168.657234 396.162762-168.657234 222.521003 0 398.791635 135.862317 398.791635 168.657234C906.350998 606.027513 730.080366 741.073232 507.559363 741.073232zM494.563374 402.949328c-93.313246 0-168.960133 75.569116-168.960133 168.757518 0 93.210915 75.646887 168.782078 168.960133 168.782078s168.95911-75.572186 168.95911-168.782078C663.522484 478.517421 587.87662 402.949328 494.563374 402.949328zM494.563374 715.281823c-78.971609 0-142.966109-64.12139-142.966109-143.17077 0-79.047334 63.9945-143.116535 142.966109-143.116535 78.971609 0 142.967132 64.069201 142.967132 143.116535C637.530506 651.160433 573.534983 715.281823 494.563374 715.281823zM80.843748 384.189056l21.6286-14.392802 51.987025 77.879742-21.627577 14.419408L80.843748 384.189056zM245.413897 302.136272l21.627577-14.391778 51.988048 77.878718-21.6286 14.392802L245.413897 302.136272zM713.606159 373.783055l22.031782 15.153118 52.978609-81.864496-22.034852-15.155165L713.606159 373.783055zM872.60543 452.148867l19.132756 18.661012 66.145489-71.619154-19.129686-18.688641L872.60543 452.148867zM494.562351 247.291153l25.993001 0 0 103.8226-25.993001 0L494.562351 247.291153z" /></svg>
class Login extends Component {
    constructor(){
        super()
        this.state={
            user:'',
            password:'',
            clearText:0,
            clearPassword:0,
            passwordShow:true,
            confirmDirty:false,
            checked:false,
            inUp:'1'
        }
        this.SubmitLogin=this.SubmitLogin.bind(this)
        this.disabledSubmit=this.disabledSubmit.bind(this)
        this.passwordShow=this.passwordShow.bind(this)
        this.clearText=this.clearText.bind(this)
        this.clearPassword=this.clearPassword.bind(this)
        this.handleConfirmBlur=this.handleConfirmBlur.bind(this)
        this.handleBlur=this.handleBlur.bind(this)
        this.checkboxonChange=this.checkboxonChange.bind(this)
        this.handleUserName=this.handleUserName.bind(this)
    }
    SubmitLogin(e){
        e.preventDefault()
        //数据提交
        let data={
            username:this.state.user,
            password:this.state.password
        }
        if(this.state.inUp === '2'){
            if(this.state.user.length===0 &&this.state.password.length>0){
                this.warning('账号不能为空')
            }else if(this.state.password.length === 0 &&this.state.user.length>0){
                this.warning('请输入密码')
            }else if(this.pass.value !== this.state.password){
                this.warning('您输入的两个密码不一致！')
            }else if(this.state.password.length === 0 &&this.state.user.length === 0){
                this.warning('请输入账号和密码')
            }else if(this.state.checked === false){
                this.warning('请阅读爱宠用户协议')
            }else if(this.state.user.length>0 && this.state.password.length>0 && this.state.checked === true){
                this.props.dispatch(signIn(data,this.state.inUp,this.props))
            }
        }else {
            if(this.state.user.length===0 &&this.state.password.length>0){
                this.warning('账号不能为空')
            }else if(this.state.password.length === 0 &&this.state.user.length>0){
                this.warning('请输入密码')
            }else if(this.state.password.length === 0 &&this.state.user.length === 0){
                this.warning('请输入账号和密码')
            }else if(this.state.user.length>0 && this.state.password.length>0 ){
                this.props.dispatch(signIn(data,this.state.inUp,this.props))
            }
        }

        //判断提交填写情况
    }
    warning=(text)=>{
        message.config({ top: 47, duration: 1.8 })
        message.warning(text)
    }
    success = (text) => {
        message.config({ top: 47})
        message.success(text,1.5)
    }
    onTabClick(key){
        this.setState({inUp:key})
    }
    //保存tab焦点是登录还是提交
    disabledSubmit(e){
        let aa = e.target.name
        this.setState({[aa]:e.target.value})
        //保存用户密码到state
        this.user.value.length? this.setState({clearText:1}) : this.setState({clearText:0})
        this.password.value.length? this.setState({clearPassword:1}) : this.setState({clearPassword:0})
        //判断清空用户名和密码后按钮  show
    }
    passwordShow(){
        if(this.password.type === 'password'){
            this.password.type = 'text'
        }else{
            this.password.type = 'password'
        }
        this.setState({passwordShow:!this.state.passwordShow})
    }
    //修改密码显示隐藏
    clearText(e){
        this.user.value = ''
        this.setState({clearText:0})
        this.setState({user:''})
        //清空用户名
        this.submit.disabled = true
        //设置按钮不能点击
    }
    clearPassword(e){
        this.password.value = ''
        this.setState({clearPassword:0})
        this.setState({password:''})
        //清空密码
        this.submit.disabled = true
        //设置按钮不能点击
    }
    goBack(){
        window.history.back()
    }
    //返回历史地址
    //以下是注册
    handleConfirmBlur(e){
        let patt=/\s/
        const value = e.target.value
        if(patt.test(value)){
            this.warning('您的密码不能有空格！')
        }
        this.setState({
            confirmDirty: this.state.confirmDirty || !!value,
            password:value
        })
    }
    handleUserName(e){
        const value = e.target.value
        this.setState({user:value})
    }
    handleBlur(e){
        const value = e.target.value;
        if(value !== this.state.password){
            this.warning('您输入的两个密码不一致！')
        }
    }
    //注册输入密码
    checkboxonChange(){
        this.setState({checked:!this.state.checked})
    }
    render() {
        return (
            <div className='login'>
                <header>
                    <a onClick={this.goBack.bind(this)}>
                        <svg  width="16px" height="16px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M947.682335 121.44905c12.361539-12.362562 12.361539-32.567743 0-44.958958l-1.39579-1.362021c-12.357446-12.392238-32.562627-12.392238-44.925189-0.034792L534.278911 442.145026c-12.357446 12.357446-32.568766 12.357446-44.926212 0L122.175085 75.093279c-12.357446-12.357446-32.562627-12.357446-44.925189 0l-1.396813 1.430582c-12.356422 12.357446-12.356422 32.562627 0 44.924165l367.144868 367.017978c12.362562 12.357446 12.362562 32.564673 0 44.927235L75.853084 900.472616c-12.356422 12.357446-12.356422 32.56365 0 44.925189l1.396813 1.429559c12.362562 12.357446 32.567743 12.357446 44.925189 0l367.177614-367.086539c12.357446-12.356422 32.568766-12.356422 44.926212 0l367.081423 367.086539c12.362562 12.357446 32.567743 12.357446 44.925189-0.033769l1.39579-1.364067c12.361539-12.393261 12.328793-32.599466 0-44.957935L580.634682 533.394263c-12.362562-12.363585-12.362562-32.570813 0-44.927235L947.682335 121.44905 947.682335 121.44905zM947.682335 121.44905" />
                        </svg>
                    </a>
                    <p>登录</p>
                </header>
                <form onSubmit={this.SubmitLogin}>
                    <Tabs defaultActiveKey="1"  onTabClick={this.onTabClick.bind(this)}>
                        <TabPane tab="账号登录" key="1">
                            <div className='form_box'>
                                <div>
                                    <label>
                                        <span>账号</span>
                                        <input type='text'  onChange={this.disabledSubmit} name='user' ref={user=>this.user=user} placeholder='请输入账号'/>
                                        <a className='btn' onClick={this.clearText} style={{opacity:this.state.clearText}} name='clearText'>
                                            <svg  name='clearText' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path name='clearText' fill="#000" d="M947.682335 121.44905c12.361539-12.362562 12.361539-32.567743 0-44.958958l-1.39579-1.362021c-12.357446-12.392238-32.562627-12.392238-44.925189-0.034792L534.278911 442.145026c-12.357446 12.357446-32.568766 12.357446-44.926212 0L122.175085 75.093279c-12.357446-12.357446-32.562627-12.357446-44.925189 0l-1.396813 1.430582c-12.356422 12.357446-12.356422 32.562627 0 44.924165l367.144868 367.017978c12.362562 12.357446 12.362562 32.564673 0 44.927235L75.853084 900.472616c-12.356422 12.357446-12.356422 32.56365 0 44.925189l1.396813 1.429559c12.362562 12.357446 32.567743 12.357446 44.925189 0l367.177614-367.086539c12.357446-12.356422 32.568766-12.356422 44.926212 0l367.081423 367.086539c12.362562 12.357446 32.567743 12.357446 44.925189-0.033769l1.39579-1.364067c12.361539-12.393261 12.328793-32.599466 0-44.957935L580.634682 533.394263c-12.362562-12.363585-12.362562-32.570813 0-44.927235L947.682335 121.44905 947.682335 121.44905zM947.682335 121.44905" />
                                            </svg>
                                        </a>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <span>密码</span>
                                        <input type='password'  onChange={this.disabledSubmit} name='password' ref={password=>this.password=password} placeholder='请输入密码'/>
                                        <a className='btn' onClick={this.clearPassword}  name='clearPassword' style={{opacity: this.state.clearPassword}}>
                                            <svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M947.682335 121.44905c12.361539-12.362562 12.361539-32.567743 0-44.958958l-1.39579-1.362021c-12.357446-12.392238-32.562627-12.392238-44.925189-0.034792L534.278911 442.145026c-12.357446 12.357446-32.568766 12.357446-44.926212 0L122.175085 75.093279c-12.357446-12.357446-32.562627-12.357446-44.925189 0l-1.396813 1.430582c-12.356422 12.357446-12.356422 32.562627 0 44.924165l367.144868 367.017978c12.362562 12.357446 12.362562 32.564673 0 44.927235L75.853084 900.472616c-12.356422 12.357446-12.356422 32.56365 0 44.925189l1.396813 1.429559c12.362562 12.357446 32.567743 12.357446 44.925189 0l367.177614-367.086539c12.357446-12.356422 32.568766-12.356422 44.926212 0l367.081423 367.086539c12.362562 12.357446 32.567743 12.357446 44.925189-0.033769l1.39579-1.364067c12.361539-12.393261 12.328793-32.599466 0-44.957935L580.634682 533.394263c-12.362562-12.363585-12.362562-32.570813 0-44.927235L947.682335 121.44905 947.682335 121.44905zM947.682335 121.44905" />
                                            </svg>
                                        </a>
                                        <a onClick={this.passwordShow} className='passwordShow' style={{backgroundColor:'none'}}>{this.state.passwordShow? img1:img2}</a>
                                    </label>
                                </div>

                            </div>
                        </TabPane>
                        <TabPane tab="注册账号" key="2">
                            <div className='form_box login-up'>
                                <div>
                                    <label className='mobile'>
                                        <span>账号</span>
                                        <input type='text' placeholder='请输入账号' onChange={this.handleUserName}/>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <span>密码</span>
                                        <input type='text'  placeholder='请输入8-16位密码' onChange={this.handleConfirmBlur}/>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <span>确认密码</span>
                                        <input type='text' ref={input=>this.pass=input} placeholder='请确认密码' onBlur={this.handleBlur}/>
                                    </label>
                                </div>
                                <div style={{borderBottom: 'none'}}>
                                    <Checkbox onChange={this.checkboxonChange} checked={this.state.checked}>我已阅读并同意<a href="">《爱宠网用户协议》</a></Checkbox>
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>
                    <div style={{borderBottom: 'none'}}>
                        <input type='submit' value={this.state.inUp === '1'?'登录':'注册'} ref={submit=>this.submit=submit}  className='submit' />
                    </div>
                </form>
                <div className='last'><a>遇到问题？</a></div>
            </div>
        )
    }
}
let mapStateToProps=(state)=>({
    user:state.user
})
export default connect(mapStateToProps)(Login)
