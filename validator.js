'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

/**
* Is this a string?
* @param input
* @returns {boolean}
*/
validator.isNumber = (input) => {
  return typeof input === 'number';
};

/**
* Is this a string?
* @param input
* @returns {boolean}
*/
validator.isArrOrNot = (input) => {
  return Array.isArray(input);
};

/**
* Is this a string?
* @param input
* @returns {boolean}
*/
validator.isObject = (input) => {
  return typeof input === 'object';
};

/**
* Is this a string?
* @param input
* @returns {boolean}
*/
validator.isBool = (input) => {
  return typeof input === 'boolean';
};

/**
* Is this a string?
* @param input
* @returns {boolean}
*/
validator.isFunct = (input) => {
  return typeof input === 'function';
};


/** 
* This is Function 
* Is this an Object has properties at any level  ?
* @param input
* @returns {boolean}
*/
validator.objectLevels = function (input) {
  let mainObj = Object.keys(input);
  if (mainObj) {
    mainObj.every(value => {
      return this.isObject(value);
    })
  }
  return false;
};

/**
* This is Function 
* Is Object have A keys or Null?
* @param input
* @returns {boolean}
*/
validator.inputKeys = function (input) {
  if (Object.keys(input)) { return true };
};

/**
* This is Function 
* Is Object has an array value?
* @param input
* @returns value
*/
validator.arrayValue = function (input) {
  // let obj = Object.values(input);
  if (!Object.values(input)) { return false };
  return Object.values(input).every(value => Array.isArray(value));
};

validator.emptyArray = function (input) {
  // let obj = Object.values(input);
  if (!Object.values(input)) { return false };
  return Object.values(input).every(value => Array.isArray(value) && value.length === 0)
};

// /************************************** Refactoring Validator.js ***********************************/

// class ValidObject {

//   constructor(str, num, arr, obj, func, bool) {

//     this.str = str;
//     this.num = num;
//     this.arr = arr;
//     this.obj = obj;
//     this.func = func;
//     this.bool = bool;
//   }

//   objectLevels(input) {
//     let mainObj = Object.keys(input);
//     if (mainObj) {
//       mainObj.every(value => {
//         return this.isObject(value);
//       })
//     }
//     return false;
//     }

//   inputKeys(input) {
//     if (Object.keys(input)) { return true };
//     return false;
//     }

//   arrayValue(input) {
//     if (!Object.values(input)) { return false };
//     return Object.values(input).every(value => Array.isArray(value));
//   }

//   emptyArray(input){
//     if (!Object.values(input)) { return false };
//     return Object.values(input).every(value => Array.isArray(value) && value.length === 0)
//   }
// } // end of Validator Class

