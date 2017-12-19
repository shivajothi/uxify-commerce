import React, { Component } from 'react';
import './productDetail.css'

class ProductDetail extends Component {
    render() {
        return (
            <div className="ProductDetail">
                <div className="breadcrumb">
                    breadcrumb
                </div>
                <div className="flex-container">
                    <div className="left-col">
                            Image Loading Here !!
                        <div className="image-wrapper">
                            <div className="thumbnail">
                                    Thumbnail
                            </div>
                            <div className="image">
                                    Image
                            </div>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="info">
                            Info Shows up Here !!
                        </div>
                        <div className="details">
                            Detailed Info Comes Here !!
                        </div>
                    </div>
                </div>
             </div>
            
        )
        
    }

}

export default ProductDetail;