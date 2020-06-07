import React, { Component } from "react";
import * as p5 from "p5";

class Sketch extends Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }

    componentDidUpdate(prevProps) {
      //console.log('old props:', prevProps);
      //console.log('new props:', this.props);
    }
  
    Sketch = (p) => {

      let par = [];

      //  class template
      class myClass {
        constructor() {
          this.par = 1;
          this.myClassFunction();
        }  
        myClassFunction() {
          this.par += 1;
        }
      }
      // end class
  
      

      p.setup = () => {
        p.createCanvas(this.props.width, this.props.height);
   
      }

      p.draw = () => {
            
      }

      function myFunction(){
      
      }

      p.keyTyped = () => {
   
        if(p.key === 'r') p.setup();

      }

    }
  
    componentDidMount() {
      
      this.myP5 = new p5(this.Sketch, this.myRef.current)
    }
  
    render() {

      return (
        <div ref={this.myRef}>
  
        </div>
      )
    }
  }

export default Sketch;