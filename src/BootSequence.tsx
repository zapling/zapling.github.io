import { useState } from 'react';
import Typist from 'react-typist-component';
import './bootSequence.css'

interface IProps {
  onDone: () => void;
}

export const BootSequence = ({onDone}: IProps) => {
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
            <Typist key={'tasks'} typingDelay={15} cursor={''} onTypingDone={() => setInitDone(true)}>
                Boot sequence
                <ul key={'tasks'}>
                    { bootTasks.map((task, index) => (
                        <li key={index}>
                            [
                            <span key={index} data-status={task.status}>
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
                <Typist key={'loading'} cursor={''} onTypingDone={() => onDone()}>
                    ..........
                    <Typist.Delay key={'loading'} ms={500} />
                </Typist>
            ) }
        </div>
    );
}
