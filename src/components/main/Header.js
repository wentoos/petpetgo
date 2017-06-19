import React,{Component} from 'react'
import Carousel from 'antd/lib/carousel';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { addPosition } from '../../redux/action/Action'
import '../../css/header.css'
import banner from '../../image/banner.gif'
import banner1 from '../../image/banner1.gif'
import banner2 from '../../image/banner.jpg'
import banner3 from '../../image/banner2.jpg'
let gps=<svg  width="14px" height="14.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path fill="#8a8a8a" d="M531.833856 79.148032c-170.108928 0-308.534272 134.647808-308.534272 300.13952 0 271.005696 284.091392 584.477696 296.183808 597.69344l12.381184 13.55776 12.350464-13.584384c12.116992-13.299712 296.128512-328.682496 296.128512-597.66784C840.342528 213.79584 701.94688 79.148032 531.833856 79.148032L531.833856 79.148032zM531.78368 941.442048c-55.185408-64.17408-275.386368-334.577664-275.386368-562.153472 0-147.733504 123.584512-267.922432 275.43552-267.922432 151.830528 0 275.386368 120.188928 275.386368 267.922432C807.220224 605.053952 586.939392 876.949504 531.78368 941.442048L531.78368 941.442048zM535.40352 267.98592c-65.04448 0-117.971968 51.506176-117.971968 114.808832 0 63.323136 52.927488 114.818048 117.971968 114.818048 65.069056 0 117.991424-51.494912 117.991424-114.818048C653.400064 319.491072 600.472576 267.98592 535.40352 267.98592L535.40352 267.98592zM535.40352 465.395712c-46.761984 0-84.873216-37.047296-84.873216-82.60608 0-45.513728 38.106112-82.57024 84.873216-82.57024 46.81216 0 84.896768 37.056512 84.896768 82.57024C620.301312 428.348416 582.21568 465.395712 535.40352 465.395712L535.40352 465.395712z" /></svg>
let right = <svg  width="14px" height="14.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path fill="#8a8a8a" d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z" /></svg>
let search=<svg  width="14px" height="14.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path fill="#8a8a8a" d="M703.873 232.437c-130.172-130.232-341.269-130.232-471.502 0s-130.233 341.33 0 471.502c60.328 60.346 143.68 97.672 235.751 97.672 92.070 0 175.422-37.327 235.75-97.672 60.347-60.329 97.673-143.681 97.673-235.751 0-92.070-37.327-175.422-97.672-235.75zM159.787 776.525c-78.944-78.924-127.773-187.968-127.773-308.416 0-240.856 195.253-436.109 436.109-436.109 240.856 0 436.109 195.253 436.109 436.109 0 120.448-48.83 229.492-127.773 308.415-78.917 78.897-187.928 127.694-308.336 127.694-120.409 0-229.419-48.797-308.336-127.694zM974.418 974.484c-10.772 10.789-25.662 17.463-42.112 17.463s-31.34-6.674-42.111-17.462l-84.163-84.223c-10.77-10.77-17.431-25.648-17.431-42.082 0-32.868 26.645-59.512 59.512-59.512 16.433 0 31.312 6.661 42.082 17.43l84.222 84.163c10.818 10.759 17.512 25.653 17.512 42.111s-6.695 31.353-17.51 42.109z" /></svg>

class Home extends Component {
    constructor() {
        super()
        this.state={
            show:'block',
            width:74,
            bgc:'white',
            boxBgc:'',
        }

    }
    componentDidMount() {
        this.props.addPosition()
        window.addEventListener('scroll', this.orderScroll.bind(this));
    }

    orderScroll() {
        // if(document.body.scrollTop>=135){
        //     this.setState({show:'none'})
        //     this.setState({width:100,bgc:'#d9d9d9',boxBgc:'white'})
        // }else{
        //     this.setState({width:74,bgc:'white',boxBgc:''})
        //     this.state.width === 74?this.setState({show:'block'}):this.setState({show:'none'})
        // }
    }
    render(){
        let position=this.props.position
        return(
            <header>
                <div className='top clearfix' style={{background:this.state.boxBgc}}>
                    <a className='clearfix' style={{display:this.state.show}}>{gps}<span>{
                        position.city?
                            <span>{position.street}.......</span>
                        :position.errorPosition?
                            position.errorPosition
                        :'加载中...'
                    }</span>{right}</a>
                    <Link to='/search' style={{width:this.state.width+'%',background:this.state.bgc}}>{search}请输入商家名称</Link>
                </div>
                <Carousel autoplay >
                    <a><img src={banner} alt='img'/></a>
                    <a><img src={banner1} alt='img'/></a>
                    <a><img src={banner2} alt='img'/></a>
                    <a><img src={banner3} alt='img'/></a>
                </Carousel>
            </header>
        )
    }
}
const mapStateToProps=store=>({
  position:store.position
})
export default connect(mapStateToProps,{addPosition})(Home)
