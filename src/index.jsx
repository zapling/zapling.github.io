import React from 'react';
import ReactDOM from 'react-dom';
import BootSequence from './bootSequence.jsx'

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
        if (this.state.sequence === 0) {
            return (
                <BootSequence
                    cursor={this.state.cursor}
                    onDone={() => this.setState({sequence: 1})}
                />
            );
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
