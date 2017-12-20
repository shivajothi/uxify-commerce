import  React, { Component } from 'react';
import Product from '../home/product/product'
import { Carousel } from 'antd';

class Home extends Component {
    constructor() {
        super();
        this.state = {}
    }

   
    
    componentWillMount () {
        
    }
    
    render(){
        let products;
        console.log(this.props);
        if(this.props.products) {
            products = this.props.products.map(product=>{
                    return (
                        <Product key={product.id} product={product} />
                    )
            });
        }
        
        return (
            <div className="Products">
                <Carousel vertical autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <ul className="flex-container">
                    {products}
                </ul>
            </div>
        );
    }
}
export default Home;