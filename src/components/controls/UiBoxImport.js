import React, { Component } from "react";
//import TextInput from "../input/TextInput";
import SelectInput from "../input/SelectInput";
import RangeSlider from "../input/RangeSlider";

class UiBoxImport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: this.props.collapsed
        };
        this.collapseBox = this.collapseBox.bind(this);
    }

    collapseBox() {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        return (
            <div className="group">
                <div className="boxHead">
                    <h3
                        className={this.state.collapsed ? "lighten" : "active"}
                        onClick={this.collapseBox}
                    >
                        {this.props.name}
                    </h3>
                </div>

                {this.state.collapsed === false && (
                    <div className="boxBody">
                    <div className="boxBodyInner">
                        
                        <SelectInput
                            name="File"
                            value={this.props.sketchName}
                            options={this.props.sketches}
                            onChange={this.props.changeSketch}
                        />

                        <RangeSlider
							name="Width"
							value={this.props.width}
							min={100}
							max={900}
							step={20}
							onChange={this.props.changeWidth}
						/>

						<RangeSlider
							name="Height"
							value={this.props.height}
							min={100}
							max={900}
							step={20}
							onChange={this.props.changeHeight}
						/>  


                    </div>
                    </div>
                )}
            </div>
        );
    }
}

export default UiBoxImport;
