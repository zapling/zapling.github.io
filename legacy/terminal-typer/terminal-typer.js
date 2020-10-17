class TerminalTyper {
  constructor(element, speed = 30) {
    this._speed = speed;
    // The HTML element we should type to
    this._element = element;
    this._interval = null;

    // Internal value to keep track of where we are in a string
    this._cursor = 0;

    // Internal array to keep track of which element we are currently adding text to
    this._elements = [];
  }

  // Type will go through the text and type out each character at a time.
  // If we encounter any HTML we will try and output it first and then type each
  // character found inside thoose tags.
  type(html) {
    this._cursor = 0;
    this._elements = [];
    return new Promise((resolve, reject) => {
      this._interval = setInterval(() => {
        this._terminal_type(resolve, reject, html);
      }, this._speed);
    });
  }

  instant(html) {
    let element = this._getCurrentElement();
    element.innerHTML += html;
  }

  async sleep(time) {
    await new Promise(r => setTimeout(r, time));
    return this;
  }

  _clearState() {
    this._cursor = 0;
    this._elements = [];
  }

  _terminal_type(resolve, reject, text) {
    if (this._cursor >= text.length) {
      clearInterval(this._interval);
      this._clearState();
      return resolve(this);
    }

    let text_left = text.substring(this._cursor);
    let char = text_left.slice(0, 1);

    // Do tags!
    if (char === "<") {
      // TODO: Move logic to its own function
      let isClosing = text.slice(this._cursor + 1, this._cursor + 2) === "/";
      if (isClosing) {
        let tag = text_left.substring(0, text_left.indexOf(">") + 1);
        this._elements.pop();
        this._cursor += tag.length;
        return;
      }

      return this._outputHTMLTag(text);
    }

    let element = this._getCurrentElement();

    element.innerHTML += char;
    this._cursor++;
  }

  // Output the HTML tag found on the cursor.
  _outputHTMLTag(text) {
    let left = text.substring(this._cursor);                 // text left to the right of cursor
    let tag  = left.substring(0, left.indexOf(">") + 1);     // the full tag
    let singleTag = tag.substring(tag.length - 2, tag.length - 1) === "/"; // if the tag is closed

    // TODO: Some tags can be single and don't need any close.
    // Add those here, or if you can, implement a way to detect them.
    if (tag === "<br>") singleTag = true;

    // Output single tag and increment cursor to skip over it.
    if (singleTag) {
      //this._element.innerHTML += tag;
      this._getCurrentElement().innerHTML += tag;
      this._cursor += tag.length;
      return;
    }

    let template = document.createElement("template");

    template.innerHTML = tag;

    let new_html_element = template.content.firstChild;

    let element = this._getCurrentElement();

    this._elements.push(new_html_element);

    element.appendChild(new_html_element);
    this._cursor += tag.length;
  }

  // Get the current element
  _getCurrentElement() {
    if (this._elements.length == 0) return this._element;

    let parent_element = this._element;

    // This might need some tweaking
    this._elements.forEach((element) => {
      let e = parent_element.lastElementChild;
      if (e === null) return;

      parent_element = e;
    });

    return parent_element;

  }
}