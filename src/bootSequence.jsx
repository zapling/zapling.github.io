import React from 'react';
import Typist from 'react-typist';

export default class BootSequence extends React.Component {
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
