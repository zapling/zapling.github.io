import React from 'react';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

class BootSequence extends React.Component {
    render() {
        return (
            <Typist
                cursor={this.props.cursor}
                delayGenerator={() => 1 }
                onTypingDone={this.props.onDone}
            >
                Boot sequence
                <ul>
                    <li>Love for tacos</li>
                    <li>Red bull junkie</li>
                    <li>Snacksman</li>
                    <li>Love for dogs and cats</li>
                    <li>Speghetti code</li>
                </ul>
                <Typist.Delay ms={500} />
            </Typist>
        );
    }
}

class Terminal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sequence: 0,
            cursor: {
                show: false
            }
        }
    }

    nextSequence() {
        this.setState({sequence: 1});
    }

    render() {
        if (this.state.sequence === 0) {
            return <BootSequence cursor={this.state.cursor} onDone={() => this.nextSequence()} />
        }

        return (
            <div>We should type the ssh part now</div>
        );
    }
}

ReactDOM.render(
    <Terminal />,
    document.getElementById('root')
);
