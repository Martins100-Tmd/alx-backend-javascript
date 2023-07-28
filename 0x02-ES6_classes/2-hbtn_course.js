export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') this._name = name;
    else return new TypeError('Name must be a string');

    if (typeof length === 'number') this._length = length;
    else return new TypeError('Length must be a number');

    this._students = students;
  }

  set name(str) {
    if (typeof str === 'string') {
      this._name = str;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(num) {
    if (typeof num === 'number') {
      this._length = num;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(arr) {
    if (typeof arr === 'object') {
      if (arr.every((item) => typeof item === 'string')) {
        this._students = arr;
      } else {
        throw new TypeError('Students must be an array of strings');
      }
    }
  }

  get students() {
    return this._students;
  }
}

