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
                        >
                            <Typist.Delay ms={700} />
                            cat palm.text
                        </Typist>
                    </div>
                ) : null}
            </div>
        );
    }

    getAsciiArt() {
        return (
            <pre>
            <span class="leaves">{'            '}___{'   '}____<br/>
{'          '}/' --;^/ ,-_\       <span class="sun">\ | /</span><br/>
{'         '}/ /--o\ o-\   \     <span class="sun">--(_)--</span><br/>
{'        '}/-/-/|o<span class="bark">|-|</span>\-\|  \{'     '}<span class="sun">/ | \</span><br/>
{'         '}'`  ` <span class="bark">|-|</span> `` '<br/>
{'               '}<span class="bark">|-|</span><br/>
{'               '}<span class="bark">|-|</span><span class="human">O</span><br/>
{'               '}<span class="bark">|-</span><span class="human">(\\,__</span><br/>
{'            '}<span class="sand">...</span><span class="bark">|-|</span><span class="human">\\--,\\_</span><span class="sand">....<br/>
{'        '},;;;;;;;;;;;;;;;;;;;;;;;;,.</span><br/>
{'  '}<span class="water">~~</span><span class="sand">,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,</span><span class="water">~~~<br/>
{'  '}~</span><span class="sand">;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,</span><span class="water">~~~~~</span></span><br/>
            </pre>
        );
    }
}
