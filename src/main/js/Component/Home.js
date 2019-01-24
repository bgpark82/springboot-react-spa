import React, { Component } from 'react'
import axios from 'axios'
import Lists from '../Home/Lists'

export default class Home extends Component {
  state = {
    cafes:[]
  }

  componentWillMount=async()=>{
    const req = await axios.get('https://openapi.gg.go.kr/Genrestrtcate?type=json')
    const res = req.data
    console.log(res.Genrestrtcate[1].row);
    this.setState({
      cafes:res.Genrestrtcate[1].row
    })
  }

  render() {
    return (
      <div>
        <Lists cafes={this.state.cafes}/>
      </div>
    )
  }
}
