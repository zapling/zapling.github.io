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
            <p>Welcome back!</p>
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
      I'm currently a <span class="highlight">[System Developer]</span> at 
      ${_getLink('[Abicart]', 'https://abicart.com')}.
    </p>
    <p>
      I love working with code and you could say that I'm a terminal junkie. I am mainly a back-end
       developer but know my way around a front-end.
    </p>
    <p>
      I'm very familiar with linux and have no problem navigating between servers and services.
      I also use a custom keyboard ${_getLink('[Atreus62]', 'https://github.com/zapling/qmk-atreus62')}
      and have problems even using a regular keyboard nowdays :(
    </p>
    <p>
      I'm always looking for new opportunities and challenges to make be an even better coder.
      Don't hesitate to contact me at <span class="highlight">me[a]andreaspalm.se</span>
    </p>
    <p>Here is some hyperlinks ↩️</p>
    <ul>
      <li>${_getLink('[LinkedIn]', 'https://linkedin.com/in/palm-andreas')}</li>
      <li>${_getLink('[Github]', 'https://github.com/zapling')}</li>
      <li>${_getLink('[Projects]', '')}</li>
    </ul>
    <p>Cheers!</p>
  </div>
  `;
};

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