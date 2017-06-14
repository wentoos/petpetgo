import React,{Component} from 'react'
import '../css/home-warp.css'
import Header from './main/Header'
import MainTab from './main/Main-tab'
import MainHot from './main/Main-hot'
import MainAbout from './main/Main-about'
class Home extends Component {
    render(){
        return(
            <div className='home_warp'>
                <Header/>
                <MainTab/>
                <MainHot/>
                <MainAbout/>
                <footer></footer>
            </div>
        )
    }
}
export default Home
