import React, { Component } from "react";
import "./style.css";
import Artboard from "./components/cover/Artboard";
import ControlBoxLeft from "./components/controls/ControlBoxLeft";

class App extends Component {
  constructor(props) {
      super(props);

        this.sketches = [
           // 'Sketch', 
           // 'Sketch02',
            "Giros Simples",
            "Horizontal Lines",
            "Circle of Lines"
        ];

        this.state = {
            
            width: 600,
            height: 400,
            translateX: 0,
            translateY: 0,

            sketchName: this.sketches[2]

        };

      this.changeSketch = this.changeSketch.bind(this);

      this.changeTranslateX = this.changeTranslateX.bind(this);
      this.changeTranslateY = this.changeTranslateY.bind(this);
      this.changeWidth = this.changeWidth.bind(this);
      this.changeHeight = this.changeHeight.bind(this);

  }

    changeSketch(event) {
        this.setState({ sketchName: event.target.value });
    }

    changeTranslateX(event) {
        this.setState({ translateX: event.target.value });
    }

    changeTranslateY(event) {
        this.setState({ translateY: event.target.value });
    }

    changeWidth(event) {
        this.setState({ width: event.target.value });
    }

    changeHeight(event) {
        this.setState({ height: event.target.value });
    }

  render() {
      return (
          <div className="App">
              <ControlBoxLeft
                  sketches={this.sketches}
                  sketchName={this.state.sketchName}
                  changeSketch={this.changeSketch}
                  width = {this.state.width}
                  changeWidth = {this.changeWidth}
                  height = {this.state.height} 
                  changeHeight = {this.changeHeight}
              />

              <Artboard
                  sketchName={this.state.sketchName}
                  translateX={this.state.translateX}
                  translateY={this.state.translateY}  
                  width = {this.state.width}
                  height = {this.state.height}                
              />

          </div>
      );
  }
}

export default App;
