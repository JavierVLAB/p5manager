import React, { Component } from "react";
import Skecth from "./Sketch.js";

class Artboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null
        };
    }
   

    render() {

        return (
            <section id="artboard" className={"view" + this.props.view}>
                <div className='skecth'>
                    <Skecth 
                        x={this.props.translateX}
                        y={this.props.translateY}/>
                        
                </div>
                    
            </section>
        );
    }
}

export default Artboard;
