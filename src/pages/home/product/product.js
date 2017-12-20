import  React, { Component } from 'react';
import { Card,Icon,Rate } from 'antd';
const { Meta } = Card;



class Product extends Component {
    constructor() {
        super();
        this.state = {}
    }

   
    
    componentWillMount () {
        
    }
    
    render(){
        let product;
        product = this.props.product;
        console.log(product);
        return (
            <Card hoverable style={{ width: 240 }} cover={<img alt={product.name} src={product.images}/>}>
            <Meta title={product.name} description={product.price} 
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]} />
            
            <span> {product.color} </span>
            <Rate allowHalf defaultValue={2.5} />
           </Card>
           
        );
    }
}
export default Product;