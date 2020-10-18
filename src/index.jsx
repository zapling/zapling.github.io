import React from 'react';
import ReactDOM from 'react-dom';
import BootSequence from './bootSequence.jsx';
import SSHSequence from './SSHSequence.jsx';

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

    render() {
        switch (this.state.sequence) {
            case 0: // Boot Sequence
                return (
                    <BootSequence
                        cursor={this.state.cursor}
                        onDone={() => this.setState({sequence: 1})}
                    />
                );
            case 1: // SSH Sequence
            default:
                return (
                    <SSHSequence cursor={this.state.cursor} />
                );
        }
    }
}

ReactDOM.render(
    <Terminal />,
    document.getElementById('root')
);
