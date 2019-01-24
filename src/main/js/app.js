import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './Component/Home'
import Store from './Component/Store'
import Order from './Component/Order'
import MyPage from './Component/MyPage'
import Navigation from './Component/Navigation'
import Register from './Component/Register'
import Login from './Component/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/store" component={Store}/>
            <Route path="/order" component={Order}/>
            <Route exact path="/mypage" component={MyPage}/>   
              <Route path="/mypage/register" component={Register}/>
              <Route path="/mypage/login" component={Login}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

ReactDOM.render(<App/>,document.getElementById("root"));