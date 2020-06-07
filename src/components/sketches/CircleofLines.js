import React, { Component } from "react";
import * as p5 from "p5";

class CircleofLines extends Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }

    componentDidUpdate(prevProps) {
      //console.log('old props:', prevProps);
      //console.log('new props:', this.props);
    }
  
    Sketch = (p) => {

    

      p.setup = () => {
        p.createCanvas(this.props.width, this.props.height);
   
        let num = 200; // amount of lines to be drawn

        p.background(255);
        p.stroke(0);
        let radius = p.height/2-80; // set radius of circle
        p.translate(p.width/2, p.height/2); // move the origin to the center
        for (let i = 0; i < num; i++) {
          let angle1 = p.random(0, p.TWO_PI); // set random number between 0 and 360
          let x1 = p.sin(angle1) * radius; // first point on circle
          let y1 = p.cos(angle1) * radius;
          let angle2 = p.random(0, p.TWO_PI);
          let x2 = p.sin(angle2) * radius; // second point on circle
          let y2 = p.cos(angle2) * radius;
          p.line(x1, y1, x2, y2); // line between first and second point
        }
        //p.save();
      }
      
      p.keyTyped = () => {
   
        if(p.key === 'r') p.setup();
        if(p.key === 's') p.save();

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

export default CircleofLines;