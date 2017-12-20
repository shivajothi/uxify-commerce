import React, { Component } from 'react';
import {Row,Col} from 'antd'
import UxifySearch from '../autocomplete/autocomplete';
import UxifySubNav from '../header/subNav';
import UxifyCart from '../header/cart/cart';
import  '../header/header.css';
import logo from '../../logo.svg';



class UxifyHeader extends Component {
    render() {
     
      return (
          <div className="uxify-nav">
            <div className="primary-nav">
                <Row gutter={16}>
                  <Col span={4}>
                      <img src={logo} alt="Logo" className="uxify-logo" style={{height:'64px',width: '100%'}} />
                  </Col>
                  <Col span={12}>
                  <div className="uxify-search">
                    <UxifySearch />
                  </div>
                  </Col>
                  <Col span={8}>
                    <UxifyCart />
                  </Col>
                  </Row>
                  <Row>
                  <Col span={12}>
                  <UxifySubNav />
                  </Col>
                </Row>
            </div>
            
           
      
         </div>
          );
    }
  }
  
export default UxifyHeader;