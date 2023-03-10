import React, { useState } from 'react';
import Typist from 'react-typist';
import './bootSequence.css'

export const BootSequence = ({ cursor, onDone }) => {
    const [initDone, setInitDone] = useState(false);

    const bootTasks = [
        {text: 'Love for tacos',         status: 'ok'},
        {text: 'Red bull junkie',        status: 'ok'},
        {text: 'Love for coffe',         status: 'error'},
        {text: 'Love for dogs and cats', status: 'ok'},
        {text: 'Speghetti code',         status: 'error'}
    ];

    return (
        <div className="boot">
            <Typist cursor={cursor} delayGenerator={() => 1} onTypingDone={() => setInitDone(true)}>
                Boot sequence
                <ul>
                    { bootTasks.map((task, index) => (
                        <li key={index}>
                            [
                            <span data={task.status === 'ok' ? 0 : 1}>
                                { task.status.toUpperCase() }
                            </span>
                            ]
                            &nbsp;
                            { task.text }
                        </li>
                    ))}
                </ul>
            </Typist>

            { initDone && (
                <Typist cursor={cursor} onTypingDone={() => onDone()}>
                    ..........
                    <Typist.Delay ms={500} />
                </Typist>
            ) }
        </div>
    );
}
