'use strict';

var validateNumber = function validateNumber(num) {
  return !!(num || num === 0) && typeof num === 'number' && !Number.isNaN(Number(num));
};
var validateString = function validateString() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return !!(typeof str === 'string' && str);
};
var isRequired = function isRequired() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'param';
  throw new Error("".concat(param, " is required"));
};
var invalidType = function invalidType() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'param';
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'type';
  throw new Error("".concat(param, " must be a valid ").concat(type));
};
var minutesToMiliseconds = function minutesToMiliseconds() {
  var minutes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var parseMinutes = !validateNumber(minutes) || minutes < 1 ? 5 : minutes;
  return parseMinutes * 60000;
};

var getItem = function getItem() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : isRequired('name localstorage');
  if (!validateString(name)) invalidType('name', 'string');
  var itemStr = localStorage.getItem(name);

  if (!itemStr) {
    return null;
  }

  var item = JSON.parse(itemStr);

  if (item.expiry < new Date().getTime()) {
    localStorage.removeItem(name);
    return null;
  }

  return item.value;
};

var setItem = function setItem() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : isRequired('name for localStorage');
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isRequired('value for localStorage');
  var expiry = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
  if (!validateString(name)) invalidType('name', 'string');
  var validExpiry = !validateNumber(expiry) ? 60000 : minutesToMiliseconds(expiry);
  var item = {
    value: value,
    expiry: new Date().getTime() + validExpiry
  };
  localStorage.setItem(name, JSON.stringify(item));
};

var browserLocalstorage = function browserLocalstorage() {
  return {
    getItem: getItem,
    setItem: setItem
  };
};

module.exports = browserLocalstorage;
//# sourceMappingURL=index.js.map
