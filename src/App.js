import React, { Component } from 'react';
import NavBar from'./components/navbar';

//import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters: [
    {id:1,value: 0},
    {id:2,value: 0},
    {id:3,value: 0},
    {id:4,value: 0},
    {id:5,value: 0}
]
 };
 
//  constructor(props){
// super(props);
// console.log("app- constructor");
//  }
// componentDidMount() {
//    console.log('app- mounted');
//  }

 handleDelete =(counterId) =>
 {
   const counters=this.state.counters.filter(c => c.id !== counterId);
   this.setState({counters});
 };

 handleReset=() => {
    const counters = this.state.counters.map( c=> { c.value = 0;   return c;   });
    this.setState({ counters});
 };
handleIncrement = counter =>
{
const counters =[...this.state.counters];
const index =counters.indexOf(counter);
counters[index]={...counter};
counters[index].value++;
this.setState({counters});
//console.log(this.state.counters[0]);
};
//bindu--starts
handleDecrement = counter =>
{
const counters =[...this.state.counters];
const index =counters.indexOf(counter);
counters[index]={...counter};
counters[index].value--;
this.setState({counters});
//console.log(this.state.counters[0]);
};

cartValue = counter =>
{
const counters =[...this.state.counters];
const index =counters.indexOf(counter);

this.setState({counters});
//console.log(this.state.counters[0]);
};

//bindu--ends
  render() { 
//console.log('app-rendeered');

    return ( 
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=>c.value >0).length} />

     <main className = "container">
     <Counters 
        counters ={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement ={this.handleDecrement}
        onDelete={this.handleDelete}
    />
     </main> 
   </React.Fragment>
     );
  }
}
 
export default App;
