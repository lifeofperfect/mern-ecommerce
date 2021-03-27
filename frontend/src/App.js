import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import BackDrop from './components/BackDrop'
import Navbar from './components/Navbar'
import SideDrawer from './components/SideDrawer'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'



const App = () => {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router>
      {/* Navbar */}
      <Navbar click={()=> setSideToggle(true)}></Navbar>
      {/* sidedrawer */}
      <SideDrawer show={sideToggle} click={()=> setSideToggle(false)}/>
      {/* backdrop */}
      <BackDrop show={sideToggle} click={()=> setSideToggle(false)}/>
      <main>
        <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
