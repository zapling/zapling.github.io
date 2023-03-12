import React, { ReactNode } from "react";
import Typist from "react-typist-component";

interface IProps {
	remoteConnection: boolean;
	onTypingDone?: () => void;
	children?: ReactNode;
}

export const TerminalCommand = ({
	remoteConnection,
	onTypingDone,
	children,
}: IProps) => {
	return (
		<>
			{getTerminalPrefix(remoteConnection)}
			{children !== undefined && (
				<Typist cursor={""} typingDelay={10} onTypingDone={onTypingDone}>
					{children}{" "}
				</Typist>
			)}
		</>
	);
};

const getTerminalPrefix = (remoteConnection: boolean) => {
	return (
		<span className="prefix">
			<span className="host">
				me@{remoteConnection ? "andreaspalm.se" : "local"}
			</span>
			:<span className="tilda">~</span>
			<span className="dollar">$</span>&nbsp;
		</span>
	);
};
