import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd'
import Home from './pages/home/home';


class App extends Component {
  constructor(){
    super();
    this.state = {
      products : []
    }
  }
 componentWillMount() {
  this.getAllProducts();
  
}

  getAllProducts(){
    fetch('http://localhost:3000/products')
    .then((response) =>{
       if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
    response.json().then((data) =>{
          this.setState({products: data},function(){
            console.log(this.state);
          });
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  
  }

 
  
  render() {
    return (
      <div className="App">
       
        <Home products={this.state.products} />
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
