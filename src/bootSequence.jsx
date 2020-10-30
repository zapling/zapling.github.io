import React from 'react';
import Typist from 'react-typist';
import './bootSequence.css'

export default class BootSequence extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            section: 0
        };
    }

    getBootTasks() {
        return [
            {text: 'Love for tacos',         status: 0},
            {text: 'Red bull junkie',        status: 0},
            {text: 'Love for coffe',         status: 1},
            {text: 'Love for dogs and cats', status: 0},
            {text: 'Speghetti code',         status: 1}
        ];
    }

    getDots() {
        const num = Math.floor(Math.random() * (10 - 3 + 1)) + 3;

        let dots="";
        for (let i = 0; i < num; i++) {
            dots = dots + ".";
        }

        return dots;
    }

    render() {
        const tasks = this.getBootTasks();
        const dots = this.getDots();

        return (
            <div className="boot">
                <Typist
                    cursor={this.props.cursor}
                    delayGenerator={() => 1 }
                    onTypingDone={() => this.setState({section: 1})}
                >
                    Boot sequence
                    <ul>
                        {tasks.map(task => (
                            <li key={task.text}>
                                [ <span data={task.status}>{task.status === 0 ? 'OK' : 'ERROR'}</span> ] {task.text}
                            </li>
                        ))}
                    </ul>
                </Typist>

                { this.state.section === 1 ? (
                    <Typist
                        cursor={this.props.cursor}
                        delayGenerator={() => 100}
                        onTypingDone={this.props.onDone}
                    >
                        { dots }
                        <Typist.Delay ms={500} />
                    </Typist>
                ) : null }

            </div>
        );
    }
}
