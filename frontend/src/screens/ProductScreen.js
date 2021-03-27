import React from 'react'
import "./ProductScreen.css"

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" 
                    alt="product name"/>

                    <div className="left__info">
                        <p className="left__name">Product</p>
                        <p>Price: $499.99</p>
                        <p>Description: lorem bcsh fryg fyfgdgdrud frgugurifgr ufgs usrug sugfsug ufgfg yyfgfuyy yurgyf</p>

                    </div>
                    <div className="productscreen__right">
                        <div className="right__info">
                            <p>
                                Price: <span>$499.9</span>
                            </p>
                            <p>
                                status: <span>In stock</span>
                            </p>
                            <p>
                                Qty
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    
                                </select>
                                <p>
                                    <button type="button">Add to cart</button>
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
