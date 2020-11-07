import React, { Component } from 'react'
var dynamicDiv = []
export default class Flowchart extends Component {
state={
  data :{
    "root" : {
    "task1" : { "name" : "BuildFrame" , "prevTask" : "", "nextTask" : "task2" },
    "task2" : { "name" : "BuildBody" , "prevTask" : "task1" , "nextTask" : "task4" },
    "task3" : { "name" : "TestCar" , "prevTask" : "task4" , "nextTask" : "" },
    "task4" : { "name" : "FitTyre","prevTask" : "task2" , "nextTask" : "task3" }
    }
    }

}
componentWillMount(){
  this.getValfrmObj()
}
getValfrmObj=()=>{
   dynamicDiv = []
  var dataObj = this.state.data["root"]
  for(var[key,value] of Object.entries(dataObj)){
  dynamicDiv.push(<div><div className="arrow">
  <div className="line"></div>
  <div className="point"></div>
  </div><div key={key} className="innerDiv">{key}<br></br>{value["name"]}</div></div>)
       }
}

  render() {
    return (
      <div>
      <h2>Flow Chart</h2>
      <div id="upperDiv">
      {dynamicDiv}</div>
      </div>
    )
  }
}
