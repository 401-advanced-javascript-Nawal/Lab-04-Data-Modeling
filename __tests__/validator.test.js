'use strict';

const validator = require('../validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x:'y'};
  let func = () => {};
  let bool = false;

  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
  });

  it('numbers', () => {
    expect(validator.isNumber(num)).toBeTruthy();
  });

  it('arrays', () => {
    expect(validator.isArrOrNot(arr)).toBeTruthy();
  });

  it('objects', () => {
    expect(validator.isObject(obj)).toBeTruthy();
  });

  it('booleans', () => {
    expect(validator.isBool(bool)).toBeTruthy();
  });

  it('functions', () => {
    expect(validator.isFunct(func)).toBeTruthy();
  });

});

describe('validator module performs complex validations', () => {

    const objectTest = {
        "firstName": "Fred",
        "lastName": "Sample",
        "hair": {
        "type": "wavy",
        "color": "brown"
        },
        "favoriteFoods": [
        "pizza",
        "cupcakes",
        "salmon"
        ],
        "married": true,
        "kids": 3
        }

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(validator.objectLevels(objectTest)).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(validator.inputKeys(objectTest)).toBeTruthy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(validator.arrayValue(objectTest)).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(validator.emptyArray(objectTest)).toBeFalsy();
  });

});
