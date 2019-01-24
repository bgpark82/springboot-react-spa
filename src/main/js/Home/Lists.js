import React, { Component } from 'react'

export default class Lists extends Component {

    handleClick=(e)=>{
        console.log(e)        
    }

  render() {
    return (
      <div>
        
      {this.props.cafes.map((cafe)=>{
          return(                                //it will create new function call handleClick 
            <div key={cafe.BIZPLC_NM} onClick={()=> this.handleClick(cafe.BIZPLC_NM)}>
              <hr/>
              이름 : {cafe.BIZPLC_NM} <br/>
              위치 : {cafe.REFINE_LOTNO_ADDR}
              <hr/>
            </div>
          )
        })}
      </div>
    )
  }
}
