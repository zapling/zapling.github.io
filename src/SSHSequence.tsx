import { useState } from 'react';
import Typist from 'react-typist-component';
import { TerminalCommand } from './components/TerminalCommand';
import './SSHSequence.css';

export const SSHSequence = () => {
    const [asciiArt, printAsciiArt] = useState(false);
    const [commandCatPalmText, printCatPalmTxtCommand] = useState(false);
    const [palmTxt, printPalmTxt] = useState(false);

    return (
        <div className="terminal">
            <TerminalCommand remoteConnection={false} onTypingDone={() => printAsciiArt(true)}>
                <Typist.Delay ms={500} />
                ssh andreaspalm.se
                <Typist.Delay ms={1000} />
            </TerminalCommand>

            { asciiArt && <AsciiArt onTypingDone={() => printCatPalmTxtCommand(true)} /> }

            { commandCatPalmText && (
                <TerminalCommand remoteConnection={true} onTypingDone={() => printPalmTxt(true)}>
                    <Typist.Delay ms={500} />
                    cat palm.txt
                    <Typist.Delay ms={500} />
                </TerminalCommand>
            )}

            { palmTxt && <PalmTxt /> }
        </div>
    );
}

const PalmTxt = () => {
    return (
        <div className="palmTxt">
            <Typist cursor={''} typingDelay={10}>
                <p>Hi there! I am Andreas Palm.</p>
                <p>
                  I currently work as a <span className="highlight">[Software Developer]</span> at <a href="https://zimpler.com" target="_blank" rel="noopener noreferrer">[Zimpler]</a>.
                </p>
                <p>
                  Working with code and learning new things is my passion, and I spend most of my days in a terminal.
                  I see myself as a <span className="highlight">back-end</span> developer, but I also know my way around a front-end.
                  I'm currently exploring <span className="highlight">Go</span>, but have previous experience in <span className="highlight">PHP</span> and <span className="highlight">Python</span>.
                </p>
                <p>
                  Navigating the seas of the web is nothing new to me and I travel reguarly between servers both via SSH and HTTP(S).
                </p>
                <p>
                  I'm always interested in hearing about new opportunities and challenges.
                  Don't hesitate to contact me at <span className="highlight">me[a]andreaspalm.se</span>
                </p>
                <p>Here is some helpful hyperlinks ⤦️</p>
                <ul>
                    <li>
                        <a href="https://linkedin.com/in/palm-andreas"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            [LinkedIn]
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/zapling"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            [Github]
                        </a>
                    </li>
                </ul>
                <p>Cheers!</p>
                <TerminalCommand remoteConnection={true} />
                &nbsp;
            </Typist>
        </div>
    );
}

interface IAsciiArtProps {
  onTypingDone: () => void;
}

const AsciiArt = ({onTypingDone} : IAsciiArtProps) => {
    return (
        <Typist cursor={''} typingDelay={1} onTypingDone={onTypingDone}>
            <pre>
                <span className="leaves">
                    {`            ___   ____`}<br/>
                    {`          /' --;^/ ,-_\\     `}<span className="sun">{`\\ | /`}</span><br/>
                    {`         / /--o\\ o-\\ \\ \\   `}<span className="sun">{`--(_)--`}</span><br/>
                    {`        /-/-/|o`}<span className="bark">{`|-|`}</span>{`\\-\\-\\-\\   `}<span className="sun">{`/ | \\`}</span><br/>
                    {`         '\`  \` `}<span className="bark">{`|-|`}</span>{` \`\` '`}<br/>
                    {`               `}<span className="bark">{`|-|`}</span><br/>
                    {`               `}<span className="bark">{`|-|`}</span><span className="human">O</span><br/>
                    {`               `}<span className="bark">{`|-`}</span><span className="human">(\\,__</span><br/>
                    {'            '}<span className="sand">...</span><span className="bark">|-|</span><span className="human">\\--,\\_</span><span className="sand">....<br/>
                    {'        '},;;;;;;;;;;;;;;;;;;;;;;;;,.</span><br/>
                    {'  '}<span className="water">~~</span><span className="sand">,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,</span><span className="water">~~~<br/>
                    {'  '}~</span><span className="sand">;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,</span><span className="water">~~~~~</span>                </span>
            </pre>
        </Typist>
    );
}
