import React from 'react';
import ReactDOM from 'react-dom';
import { Layout,Divider } from 'antd';
import './index.css';
import UxifyHeader from './widgets/header/header';
import UxifySubNav from './widgets/header/subNav';
import UxifyCarousel from './widgets/carousel/carousel';
import UxifyBestSellers from './pages/home/bestSellers/bestSellers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Row,Col } from 'antd/lib/grid';

const { Header, Footer, Sider, Content } = Layout;
ReactDOM.render(
    <div>
       <Layout>
        <Header>
            <UxifyHeader />
        </Header>
       
          <Content style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Row>
              <UxifyCarousel />
              </Row>
              <Divider dashed />
              <Row>
                <UxifyBestSellers />
             </Row>
             <Divider dashed />
            
          </Content>
        
        <Footer>Footer</Footer>
      </Layout>
  </div>
  , document.getElementById('Approot'));
registerServiceWorker();
