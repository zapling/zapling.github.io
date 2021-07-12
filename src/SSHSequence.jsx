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
