import { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({ isOn }) => {
            return {
                isOn: !isOn,
            };
        });
    }

    render() {
        const { state } = this;
        return (
            <div>
                <button
                    onClick={this.handleClick}
                    className={'btn ' + (state.isOn ? 'ligado' : 'desligado')}
                >
                    CLICK
                </button>
            </div>
        );
    }
}

export default App;
