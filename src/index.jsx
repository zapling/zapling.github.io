import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {BootSequence} from './BootSequence.jsx';
import {SSHSequence} from './SSHSequence.jsx';
import './index.css';

const Terminal = () => {
    const [initDone, setInitDone] = useState(false);

    const cursor = {show: false};

    return (
        <div>
            { !initDone
                ? <BootSequence cursor={cursor} onDone={() => setInitDone(true)} />
                : <SSHSequence cursor={cursor} />
            }
        </div>
    );
}

ReactDOM.render(
    <Terminal />,
    document.getElementById('root')
);
