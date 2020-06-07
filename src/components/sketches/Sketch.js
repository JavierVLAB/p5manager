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

      let balls = [];
      let N = 10;
      let pause = false;
      let force = true;
      //let looping = true;

      //  class
      class Particle {
        constructor() {
          let a = p.random(2*p.PI);
          let r = p.random(100);
          this.pos = p.createVector(0,0);
          //this.pos.x = r * p.cos(a) + p.width/2;
          //this.pos.y = r * p.sin(a) + p.height/2;
          this.pos.x = r * p.cos(a);
          this.pos.y = r * p.sin(a);
          this.radius = p.random(5, 10);
          this.speed = p.createVector(0,0);
          this.speed.x = p.random(-2,2);
          this.speed.y = p.random(-2,2);
          
        }
        
        update() {
          this.move();
          //this.bordersConstrains();
        }

        move() {
          //let posToCenter = p.createVector(p.width/2 + p.random(-20,20),
          //                                p.height/2 + p.random(-20,20));
          let posToCenter = p.createVector(p.random(-20,20),
                                          p.random(-20,20));
          posToCenter.sub(this.pos);
          if(force) this.speed.add(p5.Vector.mult(posToCenter,0.0001));
          this.pos.add(this.speed);
          
        }
        
        
        bordersConstrains(){
          
          if(this.pos.x < this.radius) this.speed.x = -this.speed.x;
          if(this.pos.x > p.width-this.radius) this.speed.x = -this.speed.x;
          if(this.pos.y < this.radius) this.speed.y = -this.speed.y;
          if(this.pos.y > p.height-this.radius) this.speed.y = -this.speed.y;
          
        }

        display() {
          p.ellipse(this.pos.x, this.pos.y, 2*this.radius, 2*this.radius);
        }
      }
  
      function initialDraw() {
        p.background(255);
        p.stroke(0,10);
        updatePosition();
      }

      p.setup = () => {
        p.createCanvas(this.props.width, this.props.height);
        //p.createCanvas(p.windowWidth-400, p.windowHeight-80);
        for (let i = 0; i < N; i++){
          balls.push(new Particle());
        }
        initialDraw();    
      }

      p.draw = () => {
        if(p.frameCount % 1500 === 0) initialDraw();
        
        for (let i = 0; i < balls.length; i++){
          balls[i].update();
          //balls[i].display();
        }
        show3(this.props);    
      }

      function show3(props){
        p.push();
        //p.translate(p.mouseX,p.mouseY);
        let off_set_x = parseFloat(props.x)*p.width;
        let off_set_y = parseFloat(props.y)*p.height;

        p.translate(p.width/2 + off_set_x,p.height/2 + off_set_y);
        //console.log(props);
        
        //p.translate(p.width/2,p.height/2);
        p.rotate(p.frameCount*0.001);
  
        for (let i = balls.length - 1; i > 0; i--){
          for (let j = 0; j < i; j++){
            let d = p5.Vector.dist(balls[i].pos, balls[j].pos);                       
            if(d < 80 && d > 20){
              //random(1) < 0.2 ? stroke(0,100) : stroke(255, 10);    
              p.line(balls[i].pos.x,balls[i].pos.y,
                   balls[j].pos.x,balls[j].pos.y);
            }
          }
        }
        p.pop();
      }

      function updatePosition(){

        for (let i = 0; i < balls.length; i++){
          balls[i].speed.set(p.random(-2,2),p.random(-2,2));
        } 
      
      }

      p.keyTyped = () => {

        if(p.key === 'r') initialDraw();
        if(p.key === 'R') p.setup();
        if(p.key === 'p'){
          pause = !pause;
          pause ? p.noLoop() : p.loop();
        }
        if(p.key === 'u') updatePosition();
        if(p.key === 'f') force = !force;
        if(p.key === 's') p.save();
      
      }

/*      p.keyPressed  = () => {
        if(looping) {
          p.noLoop();
          looping = false;
        } else {
          p.loop(); 
          looping = true;
        }
      }*/
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