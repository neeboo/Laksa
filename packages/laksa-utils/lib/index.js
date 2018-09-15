'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _typeof = _interopDefault(require('@babel/runtime/helpers/typeof'));
require('core-js/modules/es6.object.assign');
var validUrl = require('valid-url');
var bn_js = require('bn.js');
require('core-js/modules/es6.number.is-nan');
require('core-js/modules/es6.regexp.split');
require('core-js/modules/es6.regexp.replace');
require('core-js/modules/es6.number.constructor');
require('core-js/modules/es6.number.is-finite');
require('core-js/modules/es6.regexp.to-string');
var numToBN = _interopDefault(require('number-to-bn'));
var utf8 = _interopDefault(require('utf8'));
require('core-js/modules/es6.function.name');
require('core-js/modules/web.dom.iterable');
require('core-js/modules/es6.array.iterator');
require('core-js/modules/es6.object.keys');
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
var laksaCoreCrypto = require('laksa-core-crypto');

/**
 * [isNumber verify param is a Number]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */

var isNumber = function isNumber(obj) {
  return obj === +obj;
}; // assign validator string


Object.assign(isNumber, {
  validator: 'Number'
});
/**
 * [isString verify param is a String]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */

var isString = function isString(obj) {
  return obj === "".concat(obj);
}; // assign validator string


Object.assign(isString, {
  validator: 'String'
});
/**
 * [isBoolean verify param is a Boolean]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */

var isBoolean = function isBoolean(obj) {
  return obj === !!obj;
}; // assign validator string


Object.assign(isBoolean, {
  validator: 'Boolean'
});
/**
 * [isArray verify param input is an Array]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */

var isArray = function isArray(obj) {
  return Array.isArray(obj);
}; // assign validator string


Object.assign(isArray, {
  validator: 'Array'
});
/**
 * [isJson verify param input is a Json]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */

var isJson = function isJson(obj) {
  try {
    return !!JSON.parse(obj);
  } catch (e) {
    return false;
  }
}; // assign validator string


Object.assign(isJson, {
  validator: 'Json'
});
/**
 * [isObject verify param is an Object]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [boolean]
 */

var isObject = function isObject(obj) {
  return obj !== null && !Array.isArray(obj) && _typeof(obj) === 'object';
}; // assign validator string


Object.assign(isObject, {
  validator: 'Object'
});
/**
 * [isFunction verify param is a Function]
 * @param  {[type]}  obj [value]
 * @return {Boolean}     [description]
 */

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
}; // assign validator string


Object.assign(isFunction, {
  validator: 'Function'
});
/**
 * verify if param is correct
 * @param  {[hex|string]}  address [description]
 * @return {Boolean}         [description]
 */
// const isAddress = (address) => {
//   return !!address.match(/^[0-9a-fA-F]{40}$/)
// }

var isAddress = function isAddress(address) {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // check if it has the basic requirements of an address
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    // If it's all small caps or all all caps, return true
    return true;
  }
}; // assign validator string


Object.assign(isAddress, {
  validator: 'Address'
});
/**
 * verify if privateKey is correct
 * @param  {[hex|string]}  privateKey [description]
 * @return {Boolean}            [description]
 */

var isPrivateKey = function isPrivateKey(privateKey) {
  if (!/^(0x)?[0-9a-f]{64}$/i.test(privateKey)) {
    // check if it has the basic requirements of an privatekey
    return false;
  } else if (/^(0x)?[0-9a-f]{64}$/.test(privateKey) || /^(0x)?[0-9A-F]{64}$/.test(privateKey)) {
    // If it's all small caps or all all caps, return true
    return true;
  } // return !!privateKey.match(/^[0-9a-fA-F]{64}$/)

}; // assign validator string


Object.assign(isPrivateKey, {
  validator: 'PrivateKey'
});
/**
 * verify if public key is correct
 * @param  {[hex|string]}  pubkey [description]
 * @return {Boolean}        [description]
 */

var isPubkey = function isPubkey(pubkey) {
  if (!/^(0x)?[0-9a-f]{66}$/i.test(pubkey)) {
    // check if it has the basic requirements of an pubkey
    return false;
  } else if (/^(0x)?[0-9a-f]{66}$/.test(pubkey) || /^(0x)?[0-9A-F]{66}$/.test(pubkey)) {
    // If it's all small caps or all all caps, return true
    return true;
  } // return !!pubkey.match(/^[0-9a-fA-F]{66}$/)

}; // assign validator string


Object.assign(isPubkey, {
  validator: 'PublicKey'
});
/**
 * verify if url is correct
 * @param  {[string]}  url [description]
 * @return {Boolean}     [description]
 */

var isUrl = function isUrl(url) {
  return validUrl.isWebUri(url);
}; // assign validator string


Object.assign(isUrl, {
  validator: 'Url'
});
/**
 * verify if hash is correct
 * @param  {[string]}  txHash [description]
 * @return {Boolean}        [description]
 */

var isHash = function isHash(txHash) {
  if (!/^(0x)?[0-9a-f]{64}$/i.test(txHash)) {
    // check if it has the basic requirements of an txHash
    return false;
  } else if (/^(0x)?[0-9a-f]{64}$/.test(txHash) || /^(0x)?[0-9A-F]{64}$/.test(txHash)) {
    // If it's all small caps or all all caps, return true
    return true;
  } // return !!txHash.match(/^[0-9a-fA-F]{64}$/)

}; // assign validator string


Object.assign(isHash, {
  validator: 'Hash'
});
/**
 * Check if string is HEX
 *
 * @method isHex
 * @param {String} hex to be checked
 * @returns {Boolean}
 */

var isHex = function isHex(hex) {
  return (isString(hex) || isNumber(hex)) && /^0x?[0-9a-f]*$/i.test(hex);
}; // assign validator string


Object.assign(isHex, {
  validator: 'Hex'
});
/**
 * check Object isNull
 * @param  {[type]}  obj [description]
 * @return {Boolean}     [description]
 */

var isNull = function isNull(obj) {
  return obj === null;
};

Object.assign(isNull, {
  validator: 'Null'
});
/**
 * check object is undefined
 * @param  {[type]}  obj [description]
 * @return {Boolean}     [description]
 */

var isUndefined = function isUndefined(obj) {
  return obj === undefined;
};

Object.assign(isUndefined, {
  validator: 'Undefined'
}); // isBN
// imported

Object.assign(bn_js.isBN, {
  validator: 'BN'
});
/**
 * make sure each of the keys in requiredArgs is present in args
 * @param  {[type]} args         [description]
 * @param  {[type]} requiredArgs [description]
 * @param  {[type]} optionalArgs [description]
 * @return {[type]}              [description]
 */

function validateArgs(args, requiredArgs, optionalArgs) {
  for (var key in requiredArgs) {
    if (args[key] !== undefined) {
      for (var i = 0; i < requiredArgs[key].length; i += 1) {
        if (typeof requiredArgs[key][i] !== 'function') throw new Error('Validator is not a function');

        if (!requiredArgs[key][i](args[key])) {
          throw new Error("Validation failed for ".concat(key, ",should be ").concat(requiredArgs[key][i].validator));
        }
      }
    } else throw new Error("Key not found: ".concat(key));
  }

  for (var _key in optionalArgs) {
    if (args[_key]) {
      for (var _i = 0; _i < optionalArgs[_key].length; _i += 1) {
        if (typeof optionalArgs[_key][_i] !== 'function') throw new Error('Validator is not a function');

        if (!optionalArgs[_key][_i](args[_key])) {
          throw new Error("Validation failed for ".concat(_key, ",should be ").concat(optionalArgs[_key][_i].validator));
        }
      }
    }
  }

  return true;
}

function validateFunctionArgs(ArgsArray, validatorArray) {
  var argLength = ArgsArray.length;
  var valLength = validatorArray.length;
  if (argLength < valLength) throw new Error('Some args are required by function but missing');

  for (var i = 0; i < valLength; i += 1) {
    if (!validatorArray[i](ArgsArray[i])) {
      throw new Error("Validation failed for arguments[".concat(i, "], should be ").concat(validatorArray[i].validator));
    }
  }

  return true;
}

/**
 * convert number to array representing the padded hex form
 * @param  {[string]} val        [description]
 * @param  {[number]} paddedSize [description]
 * @return {[string]}            [description]
 */

var intToByteArray = function intToByteArray(val, paddedSize) {
  var arr = [];
  var hexVal = val.toString(16);
  var hexRep = [];
  var i;

  for (i = 0; i < hexVal.length; i += 1) {
    hexRep[i] = hexVal[i].toString();
  }

  for (i = 0; i < paddedSize - hexVal.length; i += 1) {
    arr.push('0');
  }

  for (i = 0; i < hexVal.length; i += 1) {
    arr.push(hexRep[i]);
  }

  return arr;
};
/**
 * Converts value to it's hex representation
 *
 * @method numberToHex
 * @param {String|Number|BN} value
 * @return {String}
 */


var numberToHex = function numberToHex(value) {
  if (isNull(value) || isUndefined(value)) {
    return value;
  }

  if (!Number.isFinite(value) && !isHex(value) && !bn_js.isBN(value) && !isString(value)) {
    throw new Error("Given input \"".concat(value, "\" is not a number."));
  }

  var number = bn_js.isBN(value) ? value : toBN(value);
  var result = number.toString(16);
  return number.lt(toBN(0)) ? "-0x".concat(result.substr(1)) : "0x".concat(result);
};

var toUtf8 = function toUtf8() {// to utf 8
};

var toAscii = function toAscii() {// to be implemented
};

var fromUtf8 = function fromUtf8() {// to be implemented
};

var fromAscii = function fromAscii() {// to be implemented
};

var toBN = function toBN(data) {
  try {
    return numToBN(data);
  } catch (e) {
    throw new Error("".concat(e, " of \"").concat(data, "\""));
  } // to be implemented

};
/**
 * Converts value to it's number representation
 *
 * @method hexToNumber
 * @param {String|Number|BN} value
 * @return {String}
 */


var hexToNumber = function hexToNumber(value) {
  if (!value) {
    return value;
  }

  return toBN(value).toNumber();
};
/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method utf8ToHex
 * @param {String} str
 * @returns {String} hex representation of input string
 */


var utf8ToHex = function utf8ToHex(str) {
  var hex = '';
  var newString = utf8.encode(str);
  var str1 = newString.replace(/^(?:\u0000)*/, '');
  var str2 = str1.split('').reverse().join('');
  var str3 = str2.replace(/^(?:\u0000)*/, '');
  var str4 = str3.split('').reverse().join('');

  for (var i = 0; i < str4.length; i += 1) {
    var code = str4.charCodeAt(i); // if (code !== 0) {

    var n = code.toString(16);
    hex += n.length < 2 ? "0".concat(n) : n; // }
  }

  return "0x".concat(hex);
};
/**
 * Auto converts any given value into it's hex representation.
 *
 * And even stringifys objects before.
 *
 * @method toHex
 * @param {String|Number|BN|Object} value
 * @param {Boolean} returnType
 * @return {String}
 */


var toHex = function toHex(value, returnType) {
  /* jshint maxcomplexity: false */
  if (isAddress(value)) {
    // strip 0x from address
    return returnType ? 'address' : "0x".concat(value.toLowerCase().replace(/^0x/i, ''));
  }

  if (isBoolean(value)) {
    return returnType ? 'bool' : value ? '0x01' : '0x00';
  }

  if (isObject(value) && !bn_js.isBN(value)) {
    return returnType ? 'string' : utf8ToHex(JSON.stringify(value));
  }

  if (bn_js.isBN(value)) {
    return returnType ? 'BN' : numberToHex(value);
  } // if its a negative number, pass it through numberToHex


  if (isString(value)) {
    if (isHex(value) || !Number.isNaN(Number(value))) {
      return returnType ? value < 0 ? 'int256' : 'uint256' : numberToHex(value);
    } else if (!Number.isFinite(value) && !isUndefined(value) && Number.isNaN(Number(value))) {
      return returnType ? 'string' : add0x(value);
    }
  }

  return returnType ? value < 0 ? 'int256' : 'uint256' : numberToHex(value);
};

var strip0x = function strip0x(value) {
  var newString = toHex(value);
  return "".concat(newString.replace(/^0x/i, ''));
};

var add0x = function add0x(value) {
  var newString;

  if (!isString(value)) {
    newString = String(value);
    return "0x".concat(newString.replace(/^0x/i, ''));
  }

  newString = "0x".concat(value.replace(/^0x/i, ''));
  return newString;
};
/**
 * Should be called to pad string to expected length
 *
 * @method padLeft
 * @param {String} string to be padded
 * @param {Number} characters that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */


var padLeft = function padLeft(string, chars, sign) {
  return new Array(chars - string.length + 1).join(sign || '0') + string;
};
/**
 * Should be called to pad string to expected length
 *
 * @method padRight
 * @param {String} string to be padded
 * @param {Number} characters that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */


var padRight = function padRight(string, chars, sign) {
  return string + new Array(chars - string.length + 1).join(sign || '0');
};

var validatorArray = {
  isNumber: [isNumber],
  isString: [isString],
  isBoolean: [isBoolean],
  isArray: [isArray],
  isJson: [isJson],
  isObject: [isObject],
  isFunction: [isFunction],
  isHash: [isHash],
  isUrl: [isUrl],
  isPubkey: [isPubkey],
  isPrivateKey: [isPrivateKey],
  isBN: [bn_js.isBN],
  isAddress: [isAddress]
};
var transformerArray = {
  toBn: toBN,
  toNumber: function toNumber(string) {
    return Number(string);
  },
  toString: function toString(string) {
    return String(string);
  }
};

var Method = function Method(options) {
  var _this = this;

  _classCallCheck(this, Method);

  _defineProperty(this, "setMessanger", function (msg) {
    _this.messanger = msg;
  });

  _defineProperty(this, "generateValidateObjects", function () {
    var validatorObject = _this.params;
    var requiredArgs = {};
    var optionalArgs = {};

    for (var index in validatorObject) {
      if (index !== undefined) {
        var newObjectKey = index;
        var newObjectValid = validatorObject[index][0];
        var isRequired = validatorObject[index][1];

        if (isRequired === 'required') {
          requiredArgs[newObjectKey] = validatorArray[newObjectValid];
        } else {
          optionalArgs[newObjectKey] = validatorArray[newObjectValid];
        }
      }
    }

    return {
      requiredArgs: requiredArgs,
      optionalArgs: optionalArgs
    };
  });

  _defineProperty(this, "validateArgs", function (args, requiredArgs, optionalArgs) {
    var reArgs = requiredArgs === undefined ? {} : requiredArgs;
    var opArgs = optionalArgs === undefined ? {} : optionalArgs;

    if (args && _this.params !== {}) {
      return validateArgs(args, reArgs, opArgs);
    }

    return true;
  });

  _defineProperty(this, "extractParams", function (args) {
    var paramsObject = isObject(args) ? args : {};
    var result;
    var keyArrayLength = Object.keys(paramsObject).length;
    if (keyArrayLength === 0) result = [];

    if (keyArrayLength === 1 && !_this.isSendJson) {
      var resultKey = Object.keys(paramsObject)[0];
      result = [_this.transformedBeforeSend(paramsObject[resultKey], resultKey)];
    } else if (keyArrayLength > 0 && _this.isSendJson) {
      var newObject = {};
      Object.keys(paramsObject).map(function (k) {
        newObject[k] = _this.transformedBeforeSend(paramsObject[k], k);
        return false;
      });
      result = [newObject];
    }

    return result;
  });

  _defineProperty(this, "transformedBeforeSend", function (value, key) {
    var transformMethod = _this.transformer[key];

    if (transformMethod !== undefined) {
      return transformerArray[transformMethod](value);
    } else return value;
  });

  _defineProperty(this, "assignToObject", function (object) {
    var newObject = {};
    newObject[_this.name] = _this.methodBuilder();
    return Object.assign(object, newObject);
  });

  _defineProperty(this, "methodBuilder", function () {
    if (_this.messanger !== null && _this.endpoint === 'client') {
      return function (args, callback) {
        var _this$generateValidat = _this.generateValidateObjects(),
            requiredArgs = _this$generateValidat.requiredArgs,
            optionalArgs = _this$generateValidat.optionalArgs;

        _this.validateArgs(args, requiredArgs, optionalArgs);

        var params = _this.extractParams(args);

        if (callback) {
          return _this.messanger.sendAsync({
            method: _this.call,
            params: params
          }, callback);
        }

        return _this.messanger.send({
          method: _this.call,
          params: params
        });
      };
    }

    if (_this.messanger !== null && _this.endpoint !== 'client') {
      return function (args, callback) {
        var _this$generateValidat2 = _this.generateValidateObjects(),
            requiredArgs = _this$generateValidat2.requiredArgs,
            optionalArgs = _this$generateValidat2.optionalArgs;

        _this.validateArgs(args, requiredArgs, optionalArgs);

        if (callback) {
          return _this.messanger.sendAsyncServer(_this.endpoint, args, callback);
        }

        return _this.messanger.sendServer(_this.endpoint, args);
      };
    }
  });

  var name = options.name,
      call = options.call,
      _params = options.params,
      endpoint = options.endpoint,
      transformer = options.transformer,
      isSendJson = options.isSendJson;
  this.name = name;
  this.call = call;
  this.messanger = null;
  this.params = _params;
  this.transformer = transformer || {};
  this.endpoint = endpoint || 'client';
  this.isSendJson = isSendJson || false;
};

var Property = function Property(options) {
  var _this = this;

  _classCallCheck(this, Property);

  _defineProperty(this, "setMessanger", function (msg) {
    _this.messanger = msg;
  });

  _defineProperty(this, "assignToObject", function (object) {
    var zilName = _this.name;

    var asyncGetterName = function asyncGetterName(getName) {
      return "get".concat(getName.charAt(0).toUpperCase()).concat(getName.slice(1));
    };

    var zilObject = {
      get: _this.propertyBuilder(),
      enumerable: true
    };
    var newZilObject = {};
    newZilObject[asyncGetterName(zilName)] = _this.propertyBuilder();
    Object.defineProperty(object, zilName, zilObject); //

    Object.assign(object, newZilObject);
  });

  _defineProperty(this, "propertyBuilder", function () {
    if (_this.messanger !== null) {
      return function (callback) {
        if (callback) {
          return _this.messanger.sendAsync({
            method: _this.getter
          }, callback);
        }

        return _this.messanger.send({
          method: _this.getter
        });
      };
    }
  });

  var name = options.name,
      getter = options.getter,
      setter = options.setter;
  this.name = name;
  this.getter = getter;
  this.setter = setter;
  this.messanger = null;
};

exports.isBN = bn_js.isBN;
exports.generatePrivateKey = laksaCoreCrypto.generatePrivateKey;
exports.getAddressFromPrivateKey = laksaCoreCrypto.getAddressFromPrivateKey;
exports.getPubKeyFromPrivateKey = laksaCoreCrypto.getPubKeyFromPrivateKey;
exports.compressPublicKey = laksaCoreCrypto.compressPublicKey;
exports.getAddressFromPublicKey = laksaCoreCrypto.getAddressFromPublicKey;
exports.verifyPrivateKey = laksaCoreCrypto.verifyPrivateKey;
exports.encodeTransaction = laksaCoreCrypto.encodeTransaction;
exports.createTransactionJson = laksaCoreCrypto.createTransactionJson;
exports.randomBytes = laksaCoreCrypto.randomBytes;
exports.Method = Method;
exports.Property = Property;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isBoolean = isBoolean;
exports.isArray = isArray;
exports.isJson = isJson;
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.isHash = isHash;
exports.isUrl = isUrl;
exports.isPubkey = isPubkey;
exports.isPrivateKey = isPrivateKey;
exports.isAddress = isAddress;
exports.isHex = isHex;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.validateArgs = validateArgs;
exports.validateFunctionArgs = validateFunctionArgs;
exports.intToByteArray = intToByteArray;
exports.toHex = toHex;
exports.toUtf8 = toUtf8;
exports.toAscii = toAscii;
exports.fromUtf8 = fromUtf8;
exports.fromAscii = fromAscii;
exports.toBN = toBN;
exports.hexToNumber = hexToNumber;
exports.utf8ToHex = utf8ToHex;
exports.numberToHex = numberToHex;
exports.padLeft = padLeft;
exports.padRight = padRight;
exports.strip0x = strip0x;
exports.add0x = add0x;
