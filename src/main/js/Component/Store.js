import React, { Component } from 'react'
import axios from 'axios'
import update from 'react-addons-update'

export default class Store extends Component {
state = {
  lists:[]
}
  handleClick=async()=>{
    const req = await axios.get("cafe.json")
    const res = await req.data;
    
    
    res.forEach(i => {
      const list = {
        id:null,
        state:i.SIGUN_NM,
        title:i.BIZPLC_NM,
        size:i.TOT_FACLT_SCALE,
        sort:i.SANITTN_BIZCOND_NM,
        address_land:i.REFINE_LOTNO_ADDR,
        address_road:i.REFINE_ROADNM_ADDR,
        post:i.REFINE_ZIP_CD,
        latitude:i.REFINE_WGS84_LAT,
        longitude:i.REFINE_WGS84_LOGT,
      }  
      this.setState({
        lists: update(this.state.lists, {$push:[list]})
      })
    })
    console.log(this.state.lists)
  }     
      
  handleSend=async()=>{
    var json = JSON.stringify(this.state.lists)
    console.log(json)
    const req = await axios.post('/api/storeDtoes',this.state.lists)
    const res = await req.data
  }
   

  


  render() {
    return (
      <div>
      <button onClick={this.handleClick}>Get Json</button>
      <button onClick={this.handleSend}>Send Json</button>
      </div>
    )
  }
}

