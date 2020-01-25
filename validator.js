'use strict';

/************************************** Refactoring Validator.js ***********************************/

class ValidObject {

  constructor(str, num, arr, obj, func, bool) {

    this.str = str;
    this.num = num;
    this.arr = arr;
    this.obj = obj;
    this.func = func;
    this.bool = bool;
  }

  isValid(input, rules) {
    return true;
  };

  isString(input) {
    return typeof input === 'string';
  };

  isNumber(input) {
    return typeof input === 'number';
  };

  isArrOrNot(input) {
    return Array.isArray(input);
  };

  isObject(input) {
    return typeof input === 'object';
  };

  isBool(input) {
    return typeof input === 'boolean';
  };

  isFunct(input) {
    return typeof input === 'function';
  };

  objectLevels(input) {
    let mainObj = Object.keys(input);
    if (mainObj) {
      mainObj.every(value => {
        return this.isObject(value);
      })
    }
    return false;
  }

  inputKeys(input) {
    if (Object.keys(input)) { return true };
  }

  arrayValue(input) {
    if (!Object.values(input)) { return false };
    return Object.values(input).every(value => Array.isArray(value));
  }

  emptyArray(input) {
    if (!Object.values(input)) { return false };
    return Object.values(input).every(value => Array.isArray(value) && value.length === 0)
  }
} // end of ValidObject Class

module.exports = ValidObject;