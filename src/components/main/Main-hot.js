import React, { Component } from 'react';
import '../../css/main-hot.css'
import img from '../../image/dog.jpg'
import img1 from '../../image/timg.jpg'
import img2 from '../../image/dogchi.jpg'
class MainHot extends Component {
  render() {
    return (
      <div className='main_hot'>
          <p>热门推荐</p>
          <div>
              <div className='main_hot_top'>
                  <a><img src={img} alt='dog'/></a>
              </div>
              <div className='main_hot_up'>
                  <a>
                      <img src={img1} alt='img'/>
                      <p>
                          <span>铲屎官入门</span><br/>
                          <span>领劵满99减5</span>
                      </p>
                  </a>
                  <div>
                      <a>
                          <img src={img2} alt='img'/>
                          <p>
                              <span>限时折扣</span>
                              <br/>
                              <span>3.9元秒杀</span>
                          </p></a>
                      <a>
                          <img src={img2} alt='img'/>
                          <p>
                              <span>医疗大作战</span>
                              <br/>
                              <span>满99送大礼</span>
                          </p>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default MainHot
