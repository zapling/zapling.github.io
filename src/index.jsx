import React from 'react';
import ReactDOM from 'react-dom';

class Website extends React.Component {
    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

ReactDOM.render(
    <Website />,
    document.getElementById('root')
);
