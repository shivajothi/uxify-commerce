import React, { Component } from 'react';
import UxifyPromo from '../../../widgets/promo/promoImage/promo';
import {Row,Col} from 'antd'
import banner1 from '../../../assets/images/banner1.jpg';
import banner3 from '../../../assets/images/banner3.jpg';
import banner4 from '../../../assets/images/banner4.jpg';
import banner5 from '../../../assets/images/banner5.jpg';
class UxifyBestSellers extends Component {
    constructor(){
        super();
        this.state={
            bestSellers: []
        }
    }
   
    componentWillMount() {
        
       this.renderBestSellers();
    }

    renderBestSellers() {
        let banners = [banner1,banner3,banner4,banner5];
        console.log(banners);
        this.setState(
            {bestSellers:banners},function(){
                console.log(this.state.bestSellers);
            }
        );
            

    }
    render() {
        return (
           
            <Row gutter={16} style={{marginTop:8,marginBottom:8, height: 280,overflow:'hidden'}}>
                <h3 className="h2">
                    Best Sellers 
               </h3>
                <Col span={8}>
                    <UxifyPromo src={this.state.bestSellers[0]}/>
                </Col>
                <Col span={8}>
                    <UxifyPromo src={this.state.bestSellers[1]}/>
                </Col>
                <Col span={8}>
                    <UxifyPromo src={this.state.bestSellers[2]}/>
                 </Col>
          </Row>
        );
    }
}

export default UxifyBestSellers;