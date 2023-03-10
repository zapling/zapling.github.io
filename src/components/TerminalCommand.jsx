import Typist from "react-typist";

export const TerminalCommand = ({remoteConnection, cursor, onTypingDone, children}) => {
    return (
        <>
            { getTerminalPrefix(remoteConnection) }
            { children !== undefined &&
                <Typist style={{display: "inline"}} cursor={cursor} delayGenerator={() => 30 } onTypingDone={onTypingDone}>
                    { children }
                </Typist>
            }
        </>
    );
}

const getTerminalPrefix = (remoteConnection) => {
    return (
        <span className="prefix">
            <span className="host">me@{remoteConnection ? 'andreaspalm.se' : 'local'}</span>:
            <span className="tilda">~</span>
            <span className="dollar">$</span>&nbsp;
        </span>
    );
}
