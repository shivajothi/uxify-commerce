import React, { Component } from 'react';
import { Icon, Input, Menu } from 'antd';



class UxifySubNav extends Component {

        render () {
            return (
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}>
                <Menu.Item key="1"><a href="#">Whats New !</a></Menu.Item>
                <Menu.Item key="2"><a href="#">Men</a></Menu.Item>
                <Menu.Item key="3"><a href="#">Women</a></Menu.Item>
                <Menu.Item key="4"><a href="#">Kids</a></Menu.Item>
                <Menu.Item key="5"><a href="#">Deals</a></Menu.Item>
              </Menu>
            );
        }
}

export default UxifySubNav;