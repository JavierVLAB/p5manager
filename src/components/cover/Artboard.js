import React, { Component } from "react";
import Skecth   from "../sketches/Sketch.js";
import Skecth02 from "../sketches/Sketch02.js";
import GirosSimples from "../sketches/GirosSimples.js";
import HorizontalLines from "../sketches/HorizontalLines.js";
import CircleofLines from "../sketches/CircleofLines.js";

class Artboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null
        };
    }
   
    renderSwitchSketch(sketchName){
        switch(sketchName){
            case "Sketch":
                return <Skecth 
                    x={this.props.translateX}
                    y={this.props.translateY}
                    width = {this.props.width}
                    height = {this.props.height}
                />;
            case "Sketch02":
                return   <Skecth02 
                    x={this.props.translateX}
                    y={this.props.translateY}
                    width = {this.props.width}
                    height = {this.props.height}
                />;
            case "Giros Simples":
                return   <GirosSimples 
                    x={this.props.translateX}
                    y={this.props.translateY}
                    width = {this.props.width}
                    height = {this.props.height}
                />;
            case "Horizontal Lines":
                return   <HorizontalLines 
                    x={this.props.translateX}
                    y={this.props.translateY}
                    width = {this.props.width}
                    height = {this.props.height}
                />;
            case "Circle of Lines":
                return   <CircleofLines 
                    x={this.props.translateX}
                    y={this.props.translateY}
                    width = {this.props.width}
                    height = {this.props.height}
                />;
            default:
                return null;
        }
    }
    render() {

        return (
            <section id="artboard" className={"view1"}>
                <div className='skecth'>
                    {this.renderSwitchSketch(this.props.sketchName)}
                </div>
                    
            </section>
        );
    }
}

export default Artboard;
