import React from 'react';
import Typist from 'react-typist';

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

    render() {
        return (
            <div>me@local:~$
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
                        <Typist.Delay ms={300} />
                    </Typist>
                ) : null}

                { this.state.sections.includes('palm.txt') ? (
                    <div>
                        me@andreaspalm.se:~$
                        <Typist
                            cursor={this.props.cursor}
                        >
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
{'               '}<span class="bark">|-|</span>O<br/>
{'               '}<span class="bark">|-</span>(\\,__<br/>
{'            '}<span class="sand">...</span><span class="bark">|-|</span>\\--,\\_<span class="sand">....<br/>
{'        '},;;;;;;;;;;;;;;;;;;;;;;;;,.</span><br/>
{'  '}<span class="water">~~</span><span class="sand">,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,</span><span class="water">~~~<br/>
{'      '}~</span><span class="sand">;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,</span><span class="water">~~~~~</span></span><br/>
            </pre>
        );
    }
}
