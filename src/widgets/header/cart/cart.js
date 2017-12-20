import React, { Component } from 'react';
import { Avatar, Badge } from 'antd';
import {Row,Col} from 'antd'

class UxifyCart extends Component {
    state = {  }
    render() {
        return (
            <Row type="flex" justify="end">
            <Col>
                <span style={{ marginRight: 24 }}>
                <Badge count={1}><Avatar shape="square" icon="shopping-cart" style={{ backgroundColor: '#5cc7e5' }} /></Badge>
                </span>
                <span>
                <Badge dot><Avatar shape="square" icon="user" style={{ backgroundColor: '#5cc7e5' }}/></Badge>
                </span>
            </Col>
          </Row>
        );
    }
}

export default UxifyCart;