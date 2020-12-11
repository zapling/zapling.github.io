import React from 'react';
import Typist from 'react-typist';
import './SSHSequence.css';

export default class SSHSequence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: []
        }
    }

    typeSection(section) {
        let sections = this.state.sections;
        sections.push(section);
        this.setState({sections: sections});
    }

    getTerminalPrefix(ssh=false) {
        let server = ssh === true ? 'andreaspalm.se' : 'local';
        return (
            <span className="prefix">
                <span className="host">me@{server}</span>:
                <span className="tilda">~</span>
                <span className="dollar">$</span>&nbsp;
            </span>
        );
    }

    render() {
        return (
            <div className="terminal">
                {this.getTerminalPrefix()}
                <Typist
                    style={{display: "inline"}}
                    cursor={this.props.cursor}
                    delayGenerator={() => 30 }
                    onTypingDone={() => this.typeSection('ascii_art')}
                >
                    ssh andreaspalm.se
                </Typist>

                { this.state.sections.includes('ascii_art') ? (
                    <Typist
                        cursor={this.props.cursor}
                        delayGenerator={() => 1 }
                        onTypingDone={() => this.typeSection('palm.txt') }
                    >
                        { this.getAsciiArt() }
                    </Typist>
                ) : null}

                { this.state.sections.includes('palm.txt') ? (
                    <div>
                        {this.getTerminalPrefix(true)}
                        <Typist
                            cursor={this.props.cursor}
                            delayGenerator={() => 30}
                            onTypingDone={() => this.typeSection('content')}
                        >
                            <Typist.Delay ms={700} />
                            cat palm.text
                        </Typist>
                    </div>
                ) : null}

                { this.state.sections.includes('content') ? (
                    <div className="palmTxt">
                        <Typist
                            cursor={this.props.cursor}
                            delayGenerator={() => 10}
                            onTypingDone={() => this.typeSection('end')}
                        >
                            <p>Hi there! I am Andreas Palm.</p>
                            <p>
                                I'm currently a <span className="highlight">[System Developer]</span> at <a href="https://abicart.com" target="_blank" rel="noopener noreferrer">[Abicart]</a>.
                            </p>
                            <p>
                                I love working with code and learning new things, and I spend most of my days in the terminal.
                                I'm a <span className="highlight">back-end</span> developer currently exploring <span className="highlight">Go</span>, with previous experience in <span className="highlight">PHP</span> and <span className="highlight">Python</span>.
                            </p>
                            <p>
                              Navigating the seas of the web is nothing new to me and I travel reguarly between servers both via SSH and HTTP(S).
                            </p>
                            <p>
                              I'm always interested in opportunities and challenges to make me an even better coder.
                                Don't hesitate to contact me at <span className="highlight">me[a]andreaspalm.se</span>
                                , feel free to encrypt your message if you feel sneaky <a className="gpg" href="public_key.txt" target="_blank" rel="noopener noreferrer">[GPG Key]</a>.
                            </p>
                            <p>Here is some hyperlinks ⤦️</p>
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
                        </Typist>
                    </div>
                ) : null }

                { this.state.sections.includes('end') ? (
                    <div>
                        {this.getTerminalPrefix(true)}
                    </div>
                ) : null }
            </div>
        );
    }

    getAsciiArt() {
        return (
            <pre>
                <span className="leaves">
                    {'            '}___{'   '}____<br/>
                    {'          '}/' --;^/ ,-_\       <span className="sun">\ | /</span><br/>
                    {'         '}/ /--o\ o-\   \     <span className="sun">--(_)--</span><br/>
                    {'        '}/-/-/|o<span className="bark">|-|</span>\-\|  \{'     '}<span className="sun">/ | \</span><br/>
                    {'         '}'`  ` <span className="bark">|-|</span> `` '<br/>
                    {'               '}<span className="bark">|-|</span><br/>
                    {'               '}<span className="bark">|-|</span><span className="human">O</span><br/>
                    {'               '}<span className="bark">|-</span><span className="human">(\\,__</span><br/>
                    {'            '}<span className="sand">...</span><span className="bark">|-|</span><span className="human">\\--,\\_</span><span className="sand">....<br/>
                    {'        '},;;;;;;;;;;;;;;;;;;;;;;;;,.</span><br/>
                    {'  '}<span className="water">~~</span><span className="sand">,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,</span><span className="water">~~~<br/>
                    {'  '}~</span><span className="sand">;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,</span><span className="water">~~~~~</span>
                </span>
            </pre>
        );
    }
}
