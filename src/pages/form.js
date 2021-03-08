
import React from 'react';

class Form extends React.Component{

constructor(props){
    super(props);
    this.state={name:'', age:'', address:'' };
}

name= (event) =>{
    onchange= this.setState({name:event.target.value});
    
}
age= (event) =>{
    
    onchange= this.setState({age:event.target.value});
    
}
address= (event) =>{
    
    onchange= this.setState({address:event.target.value});
}

    

render(){
    return (
    <div><h1>Application Form</h1>
    <form name="myform">
    Name &nbsp;<input type="text" value={this.state.name} onChange={this.name} ></input><br />
    Age &nbsp;<input type="number" value={this.state.age} onChange={this.age} ></input><br />
    Address &nbsp;<textarea type="text" value={this.state.address} onChange={this.address}></textarea><br />
    <button type="submit"  >Submit</button><br />
    </form>
    <br></br>
    <br></br>
    <div id="details" style={{marginLeft:10}}>
    <p >your Name is {this.state.name}</p>
    <p>your Age is {this.state.age}</p>
    <p>your Address is {this.state.address}</p>
    </div>

    

   
   
    </div>
    

)
}
}
export default Form;

