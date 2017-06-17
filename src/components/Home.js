import React,{Component} from 'react'
import '../css/home-warp.css'
import Header from './main/Header'
import MainTab from './main/Main-tab'
import MainHot from './main/Main-hot'
import MainAbout from './main/Main-about'
import Footer from './main/Footer'


class Home extends Component {
    render(){
        return(
            <div className='home_warp'>
                <Header/>
                <MainTab/>
                <MainHot/>
                <MainAbout/>
                <Footer/>
            </div>
        )
    }
}
export default Home
