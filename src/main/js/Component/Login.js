import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    state = {
        username:'',
        password:''
    }

    handleChange = (e) => {
        let temp = {}
        temp[e.target.name]=e.target.value;
        this.setState(temp);
    }

    handleSubmit = async() => {
       const req = await axios("/login",{
            method: 'POST',
            auth:{
                username:this.state.username,
                password:this.state.password
            }})   
       const res = req.data;
        console.log(res);
    }

  render() {
    return (
      <form>
          아이디 : <input type="text" name="username" onChange={this.handleChange}/>
          비밀번호 : <input type="password" name="password" onChange={this.handleChange}/>
          <button>로그인</button>
      </form>
    )
  }
}

