import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BootSequence } from "./BootSequence";
import { SSHSequence } from "./SSHSequence";
import "./index.css";

const Terminal = () => {
	const [initDone, setInitDone] = useState(false);
	return (
		<div>
			{!initDone ? (
				<BootSequence onDone={() => setInitDone(true)} />
			) : (
				<SSHSequence />
			)}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
	<React.StrictMode>
		<Terminal />
	</React.StrictMode>,
);
