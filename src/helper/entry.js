export class Entry {
  constructor(title, date, img_url, content) {
    this._title = title;
    this._date = date;
    this._img_url = img_url;
    this._content = content;
  }

  get title() {
    return this._title;
  }

  get date() {
    return this._date;
  }

  get img_url() {
    return this._img_url;
  }

  get content() {
    return this._content;
  }

  set title(title) {
    this._title = title;
  }

  set date(date) {
    this._date = date;
  }

  set img_url(img_url) {
    this._img_url = img_url;
  }

  set content(content) {
    this._content = content;
  }
}
