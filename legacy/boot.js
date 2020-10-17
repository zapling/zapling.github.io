function bootSequence(element) {
  return new Promise((resolve, reject) => _outputBootSequence(resolve, reject, element));
}

function _outputBootSequence(resolve, reject, element) {
  let t = new TerminalTyper(element, 100);
  t._speed = 5;

  let boot_sequence = [
    {text: 'Love for tacos', status: 'OK'},
    {text: 'Red bull junkie', status: 'OK'},
    {text: 'Love for coffe', status: 'ERROR'},
    {text: 'Snacksman', status: 'OK'},
    {text: 'Love for dogs and cats', status: 'OK'},
    {text: 'Spaghetti code', status: 'ERROR'}
  ];

  let list = '';
  boot_sequence.forEach(function(item) {
    list += _getSequenceList(item.text, item.status)
  });

  t.instant('Boot sequence<br>');
  t.type(list).then(t => {
    let r = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    let dots = '.';
    for (let i = 0; i < r; i++) {
      dots += '.';
    }

    t._speed = 100;

    t.type(dots).then(async (t) => {
      await t.sleep(500);
      element.innerHTML = '';
      await t.sleep(200);
      return resolve();
    });
  });
}

function _getSequenceList(text, status) {
  return `<div>[ <span class="${status.toLowerCase()}">${status}</span> ] ${text}</div>`;
}