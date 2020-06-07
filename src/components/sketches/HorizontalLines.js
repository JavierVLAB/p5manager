import React, { Component } from "react";
import * as p5 from "p5";

class HorizontalLines extends Component {
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
        let a = 0.005;
        p.noFill();
        p.background(255);
        for (let j = 0; j< 100; j+=5) {
          p.beginShape();
          for (let i = 0; i< 10; i++) {
            p.curveVertex(70*i-20, p.height/2 +200*p.noise(i/2, j*a)-200+j*1);
            //curveVertex(20+40*i, height/2 +random(-150,150));
          }
          p.endShape();
        }
      }

      p.draw = () => {
            
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

export default HorizontalLines;