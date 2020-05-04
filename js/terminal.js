async function outputTerminal(element) {
  let t = new TerminalTyper(element);

  t.instant(_getCommandLine());
  await t.sleep(1000).then(t => {
    t.type('ssh andreaspalm.se')
     .then(async (t) => {
        await t.sleep(1000);
        t._speed = 1;
        t.type(
          `<div>
            <pre>${_getAsciiArt()}</pre>
          </div>`)
         .then(async (t) => {
           t.instant(_getCommandLine('remote'));
           await t.sleep(1000);
           t._speed = 30;
           t.type('cat palm.txt').then(t => {
            t._speed = 5;
            t.type(_getText()).then(t => {
              t.instant(_getCommandLine('remote'));
            });
           });
         });
     });
  })
}

function _getText() {
  return `
  <div class="palm-txt">
    <p>Hi there! I am Andreas Palm.</p>
    <p>
      I'm currently a ${_getHighlight('[System Developer]')} at ${_getLink('[Abicart]', 'https://abicart.com')}.
    </p>
    <p>
      I love working with code and you could say that I'm a terminal junkie. I'm a ${_getHighlight('back-end')}
       developer and have experience with ${_getHighlight('PHP')} and ${_getHighlight('Python')}. Currently striving to learn more ${_getHighlight('Go')}.
    </p>
    <p>
      I navigate between servers reguarly and are no newcomer to the Terminal, I even prefer it most of the times.
    </p>
    <p>
      I'm always looking for new opportunities and challenges to make me an even better coder.
      Don't hesitate to contact me at ${_getHighlight('me[a]andreaspalm.se')}
    </p>
    <p>Here is some hyperlinks ↩️</p>
    <ul>
      <li>${_getLink('[LinkedIn]', 'https://linkedin.com/in/palm-andreas')}</li>
      <li>${_getLink('[Github]', 'https://github.com/zapling')}</li>
    </ul>
    <p>Cheers!</p>
  </div>
  `;
};

function _getHighlight(text) {
  return `<span class="highlight">${text}</span>`;
}

function _getLink(text, href) {
  return `<a href="${href}" target="_blank">${text}</a>`
}

function _getAsciiArt() {
  return `<span class="leaves">            ___   ____
          /' --;^/ ,-_\\       <span class="sun">\\ | /</span>
         / /--o\\ o-\\   \\     <span class="sun">--(_)--</span>
        /-/-/|o<span class="bark">|-|</span>\\-\\|  \\     <span class="sun">/ | \\</span>
         '\`  \` <span class="bark">|-|</span> \`\` '</span>
               <span class="bark">|-|</span>
               <span class="bark">|-|</span>O
               <span class="bark">|-</span>(\\,__
            <span class="sand">...</span><span class="bark">|-|</span>\\--,\\_<span class="sand">....
        ,;;;;;;;;;;;;;;;;;;;;;;;;,.</span>
  <span class="water">~~</span><span class="sand">,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,</span><span class="water">~~~
  ~</span><span class="sand">;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,</span><span class="water">~~~~~</span>`;
}

function _getCommandLine(server = 'local') {
  if (server === 'remote') server = 'andreaspalm.se';

  return `<span class="host">me@${server}</span>:<span class="tilda">~</span><span class="dollar">$</span> `
}