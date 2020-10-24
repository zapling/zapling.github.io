import React from 'react';
import Typist from 'react-typist';
import './bootSequence.css'

export default class BootSequence extends React.Component {

    getBootTasks() {
        return [
            {text: 'Love for tacos',         status: 0},
            {text: 'Red bull junkie',        status: 0},
            {text: 'Love for coffe',         status: 1},
            {text: 'Love for dogs and cats', status: 0},
            {text: 'Speghetti code',         status: 1}
        ];
    }

    render() {
        const tasks = this.getBootTasks();

        return (
            <div className="boot">
                <Typist
                    cursor={this.props.cursor}
                    delayGenerator={() => 1 }
                    onTypingDone={this.props.onDone}
                >
                    Boot sequence
                    <ul>
                        {tasks.map(task => (
                            <li key={task.text}>
                                [ <span data={task.status}>{task.status === 0 ? 'OK' : 'ERROR'}</span> ] {task.text}
                            </li>
                        ))}
                    </ul>
                    <Typist.Delay ms={500} />
                </Typist>
            </div>
        );
    }
}
