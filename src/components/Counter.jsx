import { Component } from "react";

export class Counter extends Component {
    state = {
        message: "Повідомлення",
    }

    render() {
        // console.log(this.props.getMessage);
        // this.props.getMessage(this.state.message);
        console.log(this.props);
        console.log(this.props.number);

        return (
            <>
                <button onClick={this.props.addScore}>+</button>
                <button onClick={this.props.remScore}>-</button>
                <button onClick={() => {this.props.getMessage(this.state.message)}}>Надіслати повідомлення</button>
            </>
        );
    }
}