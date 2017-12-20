import React, { Component } from 'react';
import { Card } from 'antd';
const { Meta } = Card;

class UxifyPromo extends Component {
    constructor(){
        super();
        this.state = {
            path: ""
          }
    }
    
    componentWillMount () {
        console.log(this.props);
        this.setPath();
    }
    
    setPath() {
        this.setState({path:this.props.src},function(){
            console.log(this.state.path);
        });
    }
    
    render() {
       
        return (
            <Card
            hoverable
            style={{ height: 240 }}
            cover={<img alt="example" src={this.state.path} style={{ height: '100%',overflow:'hidden' }} />}>
            </Card>
        );
    }
}

export default UxifyPromo;

