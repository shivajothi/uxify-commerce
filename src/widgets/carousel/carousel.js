import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../carousel/carousel.css'
import bigBanner1 from '../../assets/images/bigBanner1.jpg';
import bigBanner2 from '../../assets/images/bigBanner2.jpg';
import bigBanner3 from '../../assets/images/bigBanner3.jpg';
import bigBanner4 from '../../assets/images/bigBanner4.jpg';
import bigBanner5 from '../../assets/images/bigBanner5.jpg';
class UxifyCarousel extends Component {
    render(){
        return (
            <Carousel autoplay>
                <div>
                    <img src={bigBanner1} alt="banner1" style={{width:"100%",height:"100%"}}/>
                    <h3>1</h3>
                </div>
                <div>
                    <img src={bigBanner2} alt="banner1" style={{width:"100%",height:"100%"}}/>
                    <h3>1</h3>
                </div>
                <div>
                    <img src={bigBanner3} alt="banner2" style={{width:"100%",height:"100%"}}/>
                    <h3>2</h3>
                    </div>
                <div>
                    <img src={bigBanner4} alt="banner3" style={{width:"100%",height:"100%"}}/>
                    <h3>3</h3>
                </div>
                <div>
                    <img src={bigBanner5} alt="banner3" style={{width:"100%",height:"100%"}}/>
                    <h3>3</h3>
                </div>
            </Carousel>
        )
    }
    
}

export default UxifyCarousel;