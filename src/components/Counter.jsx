import { Component } from "react";

export class Counter extends Component {
    render() {
        console.log(this.props);
        console.log(this.props.number);

        return (
            <>
                <button onClick={this.props.addScore}>+</button>
                <button onClick={this.props.remScore}>-</button>
            </>
        );
    }
}