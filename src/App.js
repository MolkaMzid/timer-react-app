import React, {Component} from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  constructor (props){
    super(props);
    this.state={
      nombre:0,
    IsOn:false}
    }
  
  Increment=()=>{
    this.val=setInterval(()=>this.setState({nombre:this.state.nombre+1}),1)
    this.setState({IsOn:true})
  }
  Stop=()=>{
    clearInterval(this.val)
    this.setState({IsOn:false})
  }
  Reset=()=>{
    clearInterval(this.val)
    this.setState({nombre:0,
      IsOn:false,})
  }
  render(){
    return(
    <div className="clockdiv" >
      <div>
    <span className="hours">{(Math.floor(this.state.nombre/3600)).toString().padStart(2,'0')}</span>
    <div className="smalltext">Hours</div>
  </div>
  <div>
    <span className="minutes">{(Math.floor((this.state.nombre%3600)/60)).toString().padStart(2,'0')}</span>
    <div className="smalltext">Minutes</div>
  </div>
  <div>
    <span className="seconds">{((this.state.nombre%3600)%60).toString().padStart(2,'0')}</span>
    <div className="smalltext">Seconds</div>
  </div>
     
      <button  className="btn1" onClick={(this.state.IsOn)?this.Stop:this.Increment}>Start</button>
      <button className="btn2" onClick={this.Reset}>Reset</button>
  </div>
    );
  }
}
export default App;
