import React, { Component } from "react";
import * as p5 from "p5";

class GirosSimples extends Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }

    componentDidUpdate(prevProps) {
      //console.log('old props:', prevProps);
      //console.log('new props:', this.props);
    }
  
    Sketch = (p) => {

      let sides = 4; // number of polygon sides
      let x = [];
      let y = [];
      let variance = 25; // strength of polygon variation
      let iterations = 10; // amount of times program runs
      let radius = 150; // initial radius
      let angle = 2 * 3.1415 / sides;
        
      p.setup = () => {
        p.createCanvas(this.props.width, this.props.height);
        p.background(255,255,255);

        for (let i=0; i < sides; i++) { // coordinates of polygon
          x[i] = p.cos(angle*i+50) * radius;
          y[i] = p.sin(angle*i+50) * radius;
        }
        p.noFill();
        for (let a=0; a < iterations; a++) { // array of polygon coordinates
          for (let i=0; i < sides; i++) {
          x[i] += p.random(-variance, variance);
          y[i] += p.random(-variance, variance);
          }
          p.beginShape(); // draw polygon shape
          p.curveVertex(x[sides-1]+p.width/2, y[sides-1]+p.height/2);
          for (let i=0; i < sides; i++) {
          p.curveVertex(x[i]+p.width/2, y[i]+p.height/2);
          }
          p.curveVertex(x[0]+p.width/2, y[0]+p.height/2);
          p.curveVertex(x[1]+p.width/2, y[1]+p.height/2);
          p.endShape();
        }
        p.noLoop();
   
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

export default GirosSimples;