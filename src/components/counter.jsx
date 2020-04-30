import React, { Component } from 'react';

class counter extends Component {

    componentDidUpdate(prevProps,prevState){
console.log("prevprops",prevProps);
console.log("prevState",prevState);
        if(prevProps.counter.value !== this.props.counter.value)
        {

        }

    }
componentWillMount() {
    console.log("counter-unmount");
}

        render() { 
        console.log('counter- rendered');
          return (
          <div>
              {/* <img src= {this.state.imageUrl} alt=""/> */}
              <h4>Item #{this.props.id}</h4>
              <h4>Item #{this.props.value}</h4>
             <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
              <button 
                    onClick= {() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm m-1">+</button> 
            {/*bindu--starts*/}
               <button onClick={()=> this.props.onDecrement(this.props.counter)}
                 className="btn btn-secondary btn-sm m-1">-</button> 
            {/*bindu--ends*/}
                <button 
                    onClick={()=> this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">Delete</button>

              {/* { this.state.tags.length ===0 && "Pleas add new tags" } 
              {this.renderTage()} */}
          </div>
          );
    }
 
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

formatCount()
{
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
}
}
export default counter;