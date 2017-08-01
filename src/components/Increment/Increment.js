import React, {Component} from 'react';
import './Increment.scss';

class Increment extends Component {
    state = {
        count: 0
    }

    buttonClicked = () => {
        var newState = {
            count: this.state.count + 1
        }
        this.setState(newState);
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Count: {this.state.count}</h1>
                <div className="button" onClick={this.buttonClicked}>
                    Increment
                </div>
            </div>
        )
    }
}

export default Increment;