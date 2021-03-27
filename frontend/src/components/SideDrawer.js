import React from 'react'
import { Link } from 'react-router-dom';
import "./SideDrawar.css"

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"]

    if(show){
        sideDrawerClass.push("show");
    }

    return (

        <div className={sideDrawerClass.join(" ")}> 
          <ul className="sidedrawer__links" onClick={click}>
              <li>
                  <Link to="/cart">
                  Cart
                        <span className="sidedrawer__cartbadge">0</span>
                  </Link>
              </li>
              <li>
                  <Link to="/">
                  shop
                  </Link>
              </li>
          </ul>
        </div>
    )
}

export default SideDrawer
