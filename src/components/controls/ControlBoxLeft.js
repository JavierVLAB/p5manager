import React, { Component } from "react";
import UiBoxImport from "./UiBoxImport";


class ControlBoxLeft extends Component {
	test() {
		alert("a");
	}
	render() {
		return (
			<main id="main">
				<section id="controlsLeft">
					
					<UiBoxImport
						name="Import Sketch"
						collapsed={true}

						sketchName = {this.props.sketchName}
						sketches = {this.props.sketches}
						changeSketch = {this.props.changeSketch} 
						width = {this.props.width}
						changeWidth = {this.props.changeWidth}
						height = {this.props.height}
						changeHeight = {this.props.changeHeight}
						
					/>  

					        

					
				</section>

			</main>
		);
	}
}

export default ControlBoxLeft;
