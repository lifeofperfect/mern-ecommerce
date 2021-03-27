import React from 'react'
import Products from '../components/Products'
import "./HomeScreen.css"

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>

            <div className="homescreen__products">
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
            </div>
        </div>
    )
}

export default HomeScreen
