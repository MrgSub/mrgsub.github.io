_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cab0ud%5CWebstormProjects%5Cmrgsub%5Cpages%5Cindex.js!./":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cab0ud%5CWebstormProjects%5Cmrgsub%5Cpages%5Cindex.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(880);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-icons/fc/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/fc/index.esm.js ***!
  \**************************************************/
/*! exports provided: FcAbout, FcAcceptDatabase, FcAddColumn, FcAddDatabase, FcAddImage, FcAddRow, FcAddressBook, FcAdvance, FcAdvertising, FcAlarmClock, FcAlphabeticalSortingAz, FcAlphabeticalSortingZa, FcAndroidOs, FcAnswers, FcApproval, FcApprove, FcAreaChart, FcAssistant, FcAudioFile, FcAutomatic, FcAutomotive, FcBadDecision, FcBarChart, FcBbc, FcBearish, FcBinoculars, FcBiohazard, FcBiomass, FcBiotech, FcBookmark, FcBriefcase, FcBrokenLink, FcBullish, FcBusinessContact, FcBusiness, FcBusinessman, FcBusinesswoman, FcButtingIn, FcCableRelease, FcCalculator, FcCalendar, FcCallTransfer, FcCallback, FcCamcorderPro, FcCamcorder, FcCameraAddon, FcCameraIdentification, FcCamera, FcCancel, FcCandleSticks, FcCapacitor, FcCdLogo, FcCellPhone, FcChargeBattery, FcCheckmark, FcCircuit, FcClapperboard, FcClearFilters, FcClock, FcCloseUpMode, FcCloth, FcCollaboration, FcCollapse, FcCollect, FcComboChart, FcCommandLine, FcComments, FcCompactCamera, FcConferenceCall, FcContacts, FcCopyleft, FcCopyright, FcCrystalOscillator, FcCurrencyExchange, FcCursor, FcCustomerSupport, FcDam, FcDataBackup, FcDataConfiguration, FcDataEncryption, FcDataProtection, FcDataRecovery, FcDataSheet, FcDatabase, FcDebian, FcDebt, FcDecision, FcDeleteColumn, FcDeleteDatabase, FcDeleteRow, FcDepartment, FcDeployment, FcDiploma1, FcDiploma2, FcDisapprove, FcDisclaimer, FcDislike, FcDisplay, FcDoNotInhale, FcDoNotInsert, FcDoNotMix, FcDocument, FcDonate, FcDoughnutChart, FcDownLeft, FcDownRight, FcDown, FcDownload, FcDribbble, FcDvdLogo, FcEditImage, FcElectricalSensor, FcElectricalThreshold, FcElectricity, FcElectroDevices, FcElectronics, FcEmptyBattery, FcEmptyFilter, FcEmptyTrash, FcEndCall, FcEngineering, FcEnteringHeavenAlive, FcExpand, FcExpired, FcExport, FcExternal, FcFactoryBreakdown, FcFactory, FcFaq, FcFeedIn, FcFeedback, FcFile, FcFilingCabinet, FcFilledFilter, FcFilmReel, FcFilm, FcFinePrint, FcFlashAuto, FcFlashOff, FcFlashOn, FcFlowChart, FcFolder, FcFrame, FcFullBattery, FcFullTrash, FcGallery, FcGenealogy, FcGenericSortingAsc, FcGenericSortingDesc, FcGlobe, FcGoodDecision, FcGoogle, FcGraduationCap, FcGrid, FcHeadset, FcHeatMap, FcHighBattery, FcHighPriority, FcHome, FcIcons8Cup, FcIdea, FcImageFile, FcImport, FcInTransit, FcInfo, FcInspection, FcIntegratedWebcam, FcInternal, FcInvite, FcIpad, FcIphone, FcKey, FcKindle, FcLandscape, FcLeave, FcLeftDown, FcLeftDown2, FcLeftUp, FcLeftUp2, FcLeft, FcLibrary, FcLightAtTheEndOfTunnel, FcLikePlaceholder, FcLike, FcLineChart, FcLink, FcLinux, FcList, FcLockLandscape, FcLockPortrait, FcLock, FcLowBattery, FcLowPriority, FcMakeDecision, FcManager, FcMediumPriority, FcMenu, FcMiddleBattery, FcMindMap, FcMinus, FcMissedCall, FcMms, FcMoneyTransfer, FcMultipleCameras, FcMultipleDevices, FcMultipleInputs, FcMultipleSmartphones, FcMusic, FcNegativeDynamic, FcNeutralDecision, FcNeutralTrading, FcNews, FcNext, FcNfcSign, FcNightLandscape, FcNightPortrait, FcNoIdea, FcNoVideo, FcNook, FcNumericalSorting12, FcNumericalSorting21, FcOk, FcOldTimeCamera, FcOnlineSupport, FcOpenedFolder, FcOrgUnit, FcOrganization, FcOvertime, FcPackage, FcPaid, FcPanorama, FcParallelTasks, FcPhoneAndroid, FcPhone, FcPhotoReel, FcPicture, FcPieChart, FcPlanner, FcPlus, FcPodiumWithAudience, FcPodiumWithSpeaker, FcPodiumWithoutSpeaker, FcPortraitMode, FcPositiveDynamic, FcPrevious, FcPrint, FcPrivacy, FcProcess, FcPuzzle, FcQuestions, FcRadarPlot, FcRating, FcRatings, FcReadingEbook, FcReading, FcReddit, FcRedo, FcRefresh, FcRegisteredTrademark, FcRemoveImage, FcReuse, FcRightDown, FcRightDown2, FcRightUp, FcRightUp2, FcRight, FcRotateCamera, FcRotateToLandscape, FcRotateToPortrait, FcRuler, FcRules, FcSafe, FcSalesPerformance, FcScatterPlot, FcSearch, FcSelfServiceKiosk, FcSelfie, FcSerialTasks, FcServiceMark, FcServices, FcSettings, FcShare, FcShipped, FcShop, FcSignature, FcSimCardChip, FcSimCard, FcSlrBackSide, FcSmartphoneTablet, FcSms, FcSoundRecordingCopyright, FcSpeaker, FcSportsMode, FcStackOfPhotos, FcStart, FcStatistics, FcSteam, FcStumbleupon, FcSupport, FcSurvey, FcSwitchCamera, FcSynchronize, FcTabletAndroid, FcTemplate, FcTimeline, FcTodoList, FcTouchscreenSmartphone, FcTrademark, FcTreeStructure, FcTwoSmartphones, FcUndo, FcUnlock, FcUpLeft, FcUpRight, FcUp, FcUpload, FcUsb, FcVideoCall, FcVideoFile, FcVideoProjector, FcViewDetails, FcVip, FcVlc, FcVoicePresentation, FcVoicemail, FcWebcam, FcWiFiLogo, FcWikipedia, FcWorkflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAbout", function() { return FcAbout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAcceptDatabase", function() { return FcAcceptDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAddColumn", function() { return FcAddColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAddDatabase", function() { return FcAddDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAddImage", function() { return FcAddImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAddRow", function() { return FcAddRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAddressBook", function() { return FcAddressBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAdvance", function() { return FcAdvance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAdvertising", function() { return FcAdvertising; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAlarmClock", function() { return FcAlarmClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAlphabeticalSortingAz", function() { return FcAlphabeticalSortingAz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAlphabeticalSortingZa", function() { return FcAlphabeticalSortingZa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAndroidOs", function() { return FcAndroidOs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAnswers", function() { return FcAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcApproval", function() { return FcApproval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcApprove", function() { return FcApprove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAreaChart", function() { return FcAreaChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAssistant", function() { return FcAssistant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAudioFile", function() { return FcAudioFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAutomatic", function() { return FcAutomatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcAutomotive", function() { return FcAutomotive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBadDecision", function() { return FcBadDecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBarChart", function() { return FcBarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBbc", function() { return FcBbc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBearish", function() { return FcBearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBinoculars", function() { return FcBinoculars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBiohazard", function() { return FcBiohazard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBiomass", function() { return FcBiomass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBiotech", function() { return FcBiotech; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBookmark", function() { return FcBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBriefcase", function() { return FcBriefcase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBrokenLink", function() { return FcBrokenLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBullish", function() { return FcBullish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBusinessContact", function() { return FcBusinessContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBusiness", function() { return FcBusiness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBusinessman", function() { return FcBusinessman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcBusinesswoman", function() { return FcBusinesswoman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcButtingIn", function() { return FcButtingIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCableRelease", function() { return FcCableRelease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCalculator", function() { return FcCalculator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCalendar", function() { return FcCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCallTransfer", function() { return FcCallTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCallback", function() { return FcCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCamcorderPro", function() { return FcCamcorderPro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCamcorder", function() { return FcCamcorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCameraAddon", function() { return FcCameraAddon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCameraIdentification", function() { return FcCameraIdentification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCamera", function() { return FcCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCancel", function() { return FcCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCandleSticks", function() { return FcCandleSticks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCapacitor", function() { return FcCapacitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCdLogo", function() { return FcCdLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCellPhone", function() { return FcCellPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcChargeBattery", function() { return FcChargeBattery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCheckmark", function() { return FcCheckmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCircuit", function() { return FcCircuit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcClapperboard", function() { return FcClapperboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcClearFilters", function() { return FcClearFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcClock", function() { return FcClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCloseUpMode", function() { return FcCloseUpMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCloth", function() { return FcCloth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCollaboration", function() { return FcCollaboration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCollapse", function() { return FcCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCollect", function() { return FcCollect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcComboChart", function() { return FcComboChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCommandLine", function() { return FcCommandLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcComments", function() { return FcComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCompactCamera", function() { return FcCompactCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcConferenceCall", function() { return FcConferenceCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcContacts", function() { return FcContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCopyleft", function() { return FcCopyleft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCopyright", function() { return FcCopyright; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCrystalOscillator", function() { return FcCrystalOscillator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCurrencyExchange", function() { return FcCurrencyExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCursor", function() { return FcCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcCustomerSupport", function() { return FcCustomerSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDam", function() { return FcDam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDataBackup", function() { return FcDataBackup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDataConfiguration", function() { return FcDataConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDataEncryption", function() { return FcDataEncryption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDataProtection", function() { return FcDataProtection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDataRecovery", function() { return FcDataRecovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDataSheet", function() { return FcDataSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDatabase", function() { return FcDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDebian", function() { return FcDebian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDebt", function() { return FcDebt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDecision", function() { return FcDecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDeleteColumn", function() { return FcDeleteColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDeleteDatabase", function() { return FcDeleteDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDeleteRow", function() { return FcDeleteRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDepartment", function() { return FcDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDeployment", function() { return FcDeployment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDiploma1", function() { return FcDiploma1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDiploma2", function() { return FcDiploma2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDisapprove", function() { return FcDisapprove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDisclaimer", function() { return FcDisclaimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDislike", function() { return FcDislike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDisplay", function() { return FcDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDoNotInhale", function() { return FcDoNotInhale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDoNotInsert", function() { return FcDoNotInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDoNotMix", function() { return FcDoNotMix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDocument", function() { return FcDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDonate", function() { return FcDonate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDoughnutChart", function() { return FcDoughnutChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDownLeft", function() { return FcDownLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDownRight", function() { return FcDownRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDown", function() { return FcDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDownload", function() { return FcDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDribbble", function() { return FcDribbble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcDvdLogo", function() { return FcDvdLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcEditImage", function() { return FcEditImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcElectricalSensor", function() { return FcElectricalSensor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcElectricalThreshold", function() { return FcElectricalThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcElectricity", function() { return FcElectricity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcElectroDevices", function() { return FcElectroDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcElectronics", function() { return FcElectronics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcEmptyBattery", function() { return FcEmptyBattery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcEmptyFilter", function() { return FcEmptyFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcEmptyTrash", function() { return FcEmptyTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcEndCall", function() { return FcEndCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcEngineering", function() { return FcEngineering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcEnteringHeavenAlive", function() { return FcEnteringHeavenAlive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcExpand", function() { return FcExpand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcExpired", function() { return FcExpired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcExport", function() { return FcExport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcExternal", function() { return FcExternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFactoryBreakdown", function() { return FcFactoryBreakdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFactory", function() { return FcFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFaq", function() { return FcFaq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFeedIn", function() { return FcFeedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFeedback", function() { return FcFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFile", function() { return FcFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFilingCabinet", function() { return FcFilingCabinet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFilledFilter", function() { return FcFilledFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFilmReel", function() { return FcFilmReel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFilm", function() { return FcFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFinePrint", function() { return FcFinePrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFlashAuto", function() { return FcFlashAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFlashOff", function() { return FcFlashOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFlashOn", function() { return FcFlashOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFlowChart", function() { return FcFlowChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFolder", function() { return FcFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFrame", function() { return FcFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFullBattery", function() { return FcFullBattery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcFullTrash", function() { return FcFullTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcGallery", function() { return FcGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcGenealogy", function() { return FcGenealogy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcGenericSortingAsc", function() { return FcGenericSortingAsc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcGenericSortingDesc", function() { return FcGenericSortingDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcGlobe", function() { return FcGlobe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcGoodDecision", function() { return FcGoodDecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcGoogle", function() { return FcGoogle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcGraduationCap", function() { return FcGraduationCap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcGrid", function() { return FcGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcHeadset", function() { return FcHeadset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcHeatMap", function() { return FcHeatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcHighBattery", function() { return FcHighBattery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcHighPriority", function() { return FcHighPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcHome", function() { return FcHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcIcons8Cup", function() { return FcIcons8Cup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcIdea", function() { return FcIdea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcImageFile", function() { return FcImageFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcImport", function() { return FcImport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcInTransit", function() { return FcInTransit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcInfo", function() { return FcInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcInspection", function() { return FcInspection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcIntegratedWebcam", function() { return FcIntegratedWebcam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcInternal", function() { return FcInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcInvite", function() { return FcInvite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcIpad", function() { return FcIpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcIphone", function() { return FcIphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcKey", function() { return FcKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcKindle", function() { return FcKindle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLandscape", function() { return FcLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLeave", function() { return FcLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLeftDown", function() { return FcLeftDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLeftDown2", function() { return FcLeftDown2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLeftUp", function() { return FcLeftUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLeftUp2", function() { return FcLeftUp2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLeft", function() { return FcLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLibrary", function() { return FcLibrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLightAtTheEndOfTunnel", function() { return FcLightAtTheEndOfTunnel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLikePlaceholder", function() { return FcLikePlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLike", function() { return FcLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLineChart", function() { return FcLineChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLink", function() { return FcLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLinux", function() { return FcLinux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcList", function() { return FcList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLockLandscape", function() { return FcLockLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLockPortrait", function() { return FcLockPortrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLock", function() { return FcLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLowBattery", function() { return FcLowBattery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcLowPriority", function() { return FcLowPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMakeDecision", function() { return FcMakeDecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcManager", function() { return FcManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMediumPriority", function() { return FcMediumPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMenu", function() { return FcMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMiddleBattery", function() { return FcMiddleBattery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMindMap", function() { return FcMindMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMinus", function() { return FcMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMissedCall", function() { return FcMissedCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMms", function() { return FcMms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMoneyTransfer", function() { return FcMoneyTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMultipleCameras", function() { return FcMultipleCameras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMultipleDevices", function() { return FcMultipleDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMultipleInputs", function() { return FcMultipleInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMultipleSmartphones", function() { return FcMultipleSmartphones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcMusic", function() { return FcMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNegativeDynamic", function() { return FcNegativeDynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNeutralDecision", function() { return FcNeutralDecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNeutralTrading", function() { return FcNeutralTrading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNews", function() { return FcNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNext", function() { return FcNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNfcSign", function() { return FcNfcSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNightLandscape", function() { return FcNightLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNightPortrait", function() { return FcNightPortrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNoIdea", function() { return FcNoIdea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNoVideo", function() { return FcNoVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNook", function() { return FcNook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNumericalSorting12", function() { return FcNumericalSorting12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcNumericalSorting21", function() { return FcNumericalSorting21; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcOk", function() { return FcOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcOldTimeCamera", function() { return FcOldTimeCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcOnlineSupport", function() { return FcOnlineSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcOpenedFolder", function() { return FcOpenedFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcOrgUnit", function() { return FcOrgUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcOrganization", function() { return FcOrganization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcOvertime", function() { return FcOvertime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPackage", function() { return FcPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPaid", function() { return FcPaid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPanorama", function() { return FcPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcParallelTasks", function() { return FcParallelTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPhoneAndroid", function() { return FcPhoneAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPhone", function() { return FcPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPhotoReel", function() { return FcPhotoReel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPicture", function() { return FcPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPieChart", function() { return FcPieChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPlanner", function() { return FcPlanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPlus", function() { return FcPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPodiumWithAudience", function() { return FcPodiumWithAudience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPodiumWithSpeaker", function() { return FcPodiumWithSpeaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPodiumWithoutSpeaker", function() { return FcPodiumWithoutSpeaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPortraitMode", function() { return FcPortraitMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPositiveDynamic", function() { return FcPositiveDynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPrevious", function() { return FcPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPrint", function() { return FcPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPrivacy", function() { return FcPrivacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcProcess", function() { return FcProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcPuzzle", function() { return FcPuzzle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcQuestions", function() { return FcQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRadarPlot", function() { return FcRadarPlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRating", function() { return FcRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRatings", function() { return FcRatings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcReadingEbook", function() { return FcReadingEbook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcReading", function() { return FcReading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcReddit", function() { return FcReddit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRedo", function() { return FcRedo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRefresh", function() { return FcRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRegisteredTrademark", function() { return FcRegisteredTrademark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRemoveImage", function() { return FcRemoveImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcReuse", function() { return FcReuse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRightDown", function() { return FcRightDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRightDown2", function() { return FcRightDown2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRightUp", function() { return FcRightUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRightUp2", function() { return FcRightUp2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRight", function() { return FcRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRotateCamera", function() { return FcRotateCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRotateToLandscape", function() { return FcRotateToLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRotateToPortrait", function() { return FcRotateToPortrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRuler", function() { return FcRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRules", function() { return FcRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSafe", function() { return FcSafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSalesPerformance", function() { return FcSalesPerformance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcScatterPlot", function() { return FcScatterPlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSearch", function() { return FcSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSelfServiceKiosk", function() { return FcSelfServiceKiosk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSelfie", function() { return FcSelfie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSerialTasks", function() { return FcSerialTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcServiceMark", function() { return FcServiceMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcServices", function() { return FcServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSettings", function() { return FcSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcShare", function() { return FcShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcShipped", function() { return FcShipped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcShop", function() { return FcShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSignature", function() { return FcSignature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSimCardChip", function() { return FcSimCardChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSimCard", function() { return FcSimCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSlrBackSide", function() { return FcSlrBackSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSmartphoneTablet", function() { return FcSmartphoneTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSms", function() { return FcSms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSoundRecordingCopyright", function() { return FcSoundRecordingCopyright; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSpeaker", function() { return FcSpeaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSportsMode", function() { return FcSportsMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcStackOfPhotos", function() { return FcStackOfPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcStart", function() { return FcStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcStatistics", function() { return FcStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSteam", function() { return FcSteam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcStumbleupon", function() { return FcStumbleupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSupport", function() { return FcSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSurvey", function() { return FcSurvey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSwitchCamera", function() { return FcSwitchCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcSynchronize", function() { return FcSynchronize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcTabletAndroid", function() { return FcTabletAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcTemplate", function() { return FcTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcTimeline", function() { return FcTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcTodoList", function() { return FcTodoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcTouchscreenSmartphone", function() { return FcTouchscreenSmartphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcTrademark", function() { return FcTrademark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcTreeStructure", function() { return FcTreeStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcTwoSmartphones", function() { return FcTwoSmartphones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcUndo", function() { return FcUndo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcUnlock", function() { return FcUnlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcUpLeft", function() { return FcUpLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcUpRight", function() { return FcUpRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcUp", function() { return FcUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcUpload", function() { return FcUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcUsb", function() { return FcUsb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcVideoCall", function() { return FcVideoCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcVideoFile", function() { return FcVideoFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcVideoProjector", function() { return FcVideoProjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcViewDetails", function() { return FcViewDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcVip", function() { return FcVip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcVlc", function() { return FcVlc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcVoicePresentation", function() { return FcVoicePresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcVoicemail", function() { return FcVoicemail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcWebcam", function() { return FcWebcam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcWiFiLogo", function() { return FcWiFiLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcWikipedia", function() { return FcWikipedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcWorkflow", function() { return FcWorkflow; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/react-icons/lib/esm/index.js");
// THIS FILE IS AUTO GENERATED

function FcAbout (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"}},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"22","y":"20","width":"4","height":"11"}},{"tag":"circle","attr":{"cx":"24","cy":"15","r":"2"}}]}]})(props);
};
function FcAcceptDatabase (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"}},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"}},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"}}]},{"tag":"circle","attr":{"fill":"#43A047","cx":"38","cy":"38","r":"10"}},{"tag":"polygon","attr":{"fill":"#DCEDC8","points":"42.5,33.3 36.8,39 34.1,36.3 32,38.5 36.8,43.3 44.6,35.5"}}]})(props);
};
function FcAddColumn (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M30,5H18c-2.2,0-4,1.8-4,4v30c0,2.2,1.8,4,4,4h12c2.2,0,4-1.8,4-4V9C34,6.8,32.2,5,30,5z M18,39V9h12l0,30 H18z"}},{"tag":"circle","attr":{"fill":"#43A047","cx":"38","cy":"38","r":"10"}},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36","y":"32","width":"4","height":"12"}},{"tag":"rect","attr":{"x":"32","y":"36","width":"12","height":"4"}}]}]})(props);
};
function FcAddDatabase (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"}},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"}},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"}}]},{"tag":"circle","attr":{"fill":"#43A047","cx":"38","cy":"38","r":"10"}},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36","y":"32","width":"4","height":"12"}},{"tag":"rect","attr":{"x":"32","y":"36","width":"12","height":"4"}}]}]})(props);
};
function FcAddImage (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8CBCD6","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"}},{"tag":"circle","attr":{"fill":"#B3DDF5","cx":"35","cy":"16","r":"3"}},{"tag":"polygon","attr":{"fill":"#9AC9E3","points":"20,16 9,32 31,32"}},{"tag":"polygon","attr":{"fill":"#B3DDF5","points":"31,22 23,32 39,32"}},{"tag":"circle","attr":{"fill":"#43A047","cx":"38","cy":"38","r":"10"}},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36","y":"32","width":"4","height":"12"}},{"tag":"rect","attr":{"x":"32","y":"36","width":"12","height":"4"}}]}]})(props);
};
function FcAddRow (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M43,30V18c0-2.2-1.8-4-4-4H9c-2.2,0-4,1.8-4,4v12c0,2.2,1.8,4,4,4h30C41.2,34,43,32.2,43,30z M9,18h30v12 L9,30V18z"}},{"tag":"circle","attr":{"fill":"#43A047","cx":"38","cy":"38","r":"10"}},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"32","y":"36","width":"12","height":"4"}},{"tag":"rect","attr":{"x":"36","y":"32","width":"4","height":"12"}}]}]})(props);
};
function FcAddressBook (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#673AB7","d":"M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"}},{"tag":"path","attr":{"fill":"#311B92","d":"M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"}},{"tag":"path","attr":{"fill":"#fff","d":"M36,24.2c-0.1,4.8-3.1,6.9-5.3,6.7c-0.6-0.1-2.1-0.1-2.9-1.6c-0.8,1-1.8,1.6-3.1,1.6c-2.6,0-3.3-2.5-3.4-3.1 c-0.1-0.7-0.2-1.4-0.1-2.2c0.1-1,1.1-6.5,5.7-6.5c2.2,0,3.5,1.1,3.7,1.3L30,27.2c0,0.3-0.2,1.6,1.1,1.6c2.1,0,2.4-3.9,2.4-4.6 c0.1-1.2,0.3-8.2-7-8.2c-6.9,0-7.9,7.4-8,9.2c-0.5,8.5,6,8.5,7.2,8.5c1.7,0,3.7-0.7,3.9-0.8l0.4,2c-0.3,0.2-2,1.1-4.4,1.1 c-2.2,0-10.1-0.4-9.8-10.8C16.1,23.1,17.4,14,26.6,14C35.8,14,36,22.1,36,24.2z M24.1,25.5c-0.1,1,0,1.8,0.2,2.3 c0.2,0.5,0.6,0.8,1.2,0.8c0.1,0,0.3,0,0.4-0.1c0.2-0.1,0.3-0.1,0.5-0.3c0.2-0.1,0.3-0.3,0.5-0.6c0.2-0.2,0.3-0.6,0.4-1l0.5-5.4 c-0.2-0.1-0.5-0.1-0.7-0.1c-0.5,0-0.9,0.1-1.2,0.3c-0.3,0.2-0.6,0.5-0.9,0.8c-0.2,0.4-0.4,0.8-0.6,1.3S24.2,24.8,24.1,25.5z"}}]})(props);
};
function FcAdvance (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"polygon","attr":{"points":"46.1,24 33,35 33,13"}},{"tag":"rect","attr":{"x":"10","y":"20","width":"4","height":"8"}},{"tag":"rect","attr":{"x":"4","y":"20","width":"4","height":"8"}},{"tag":"rect","attr":{"x":"16","y":"20","width":"4","height":"8"}},{"tag":"rect","attr":{"x":"22","y":"20","width":"14","height":"8"}}]}]})(props);
};
function FcAdvertising (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#90CAF9"},"child":[{"tag":"path","attr":{"d":"M17.4,33H15v-4h4l0.4,1.5C19.7,31.8,18.7,33,17.4,33z"}},{"tag":"path","attr":{"d":"M37,36c0,0-11.8-7-18-7V15c5.8,0,18-7,18-7V36z"}}]},{"tag":"g","attr":{"fill":"#283593"},"child":[{"tag":"circle","attr":{"cx":"9","cy":"22","r":"5"}},{"tag":"path","attr":{"d":"M40,19h-3v6h3c1.7,0,3-1.3,3-3S41.7,19,40,19z"}},{"tag":"path","attr":{"d":"M18.6,41.2c-0.9,0.6-2.5,1.2-4.6,1.4c-0.6,0.1-1.2-0.3-1.4-1L8.2,27.9c0,0,8.8-6.2,8.8,1.1 c0,5.5,1.5,8.4,2.2,9.5c0.5,0.7,0.5,1.6,0,2.3C19,41,18.8,41.1,18.6,41.2z"}}]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M9,29h10V15H9c-1.1,0-2,0.9-2,2v10C7,28.1,7.9,29,9,29z"}},{"tag":"path","attr":{"fill":"#42A5F5","d":"M38,38L38,38c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v28C40,37.1,39.1,38,38,38z"}}]})(props);
};
function FcAlarmClock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"path","attr":{"d":"M38.5,44.6l-4-4l2.1-2.1l4,4c0.6,0.6,0.6,1.5,0,2.1l0,0C40.1,45.1,39.1,45.1,38.5,44.6z"}},{"tag":"path","attr":{"d":"M9.5,44.6l4-4l-2.1-2.1l-4,4c-0.6,0.6-0.6,1.5,0,2.1l0,0C7.9,45.1,8.9,45.1,9.5,44.6z"}}]},{"tag":"circle","attr":{"fill":"#C62828","cx":"24","cy":"24","r":"20"}},{"tag":"circle","attr":{"fill":"#eee","cx":"24","cy":"24","r":"16"}},{"tag":"rect","attr":{"x":"19","y":"22.1","transform":"matrix(-.707 -.707 .707 -.707 12.904 62.537)","fill":"#E53935","width":".8","height":"13"}},{"tag":"rect","attr":{"x":"23","y":"11","width":"2","height":"13"}},{"tag":"rect","attr":{"x":"26.1","y":"22.7","transform":"matrix(-.707 .707 -.707 -.707 65.787 27.25)","width":"2.3","height":"9.2"}},{"tag":"circle","attr":{"cx":"24","cy":"24","r":"2"}},{"tag":"circle","attr":{"fill":"#C62828","cx":"24","cy":"24","r":"1"}},{"tag":"rect","attr":{"x":"22","y":"1","fill":"#37474F","width":"4","height":"3"}},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"path","attr":{"d":"M44.4,16.2c2.5-3.5,2.1-8.4-1-11.5c-3.1-3.1-8-3.5-11.5-1L44.4,16.2z"}},{"tag":"path","attr":{"d":"M3.6,16.2c-2.5-3.5-2.1-8.4,1-11.5c3.1-3.1,8-3.5,11.5-1L3.6,16.2z"}}]}]})(props);
};
function FcAlphabeticalSortingAz (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#546E7A","points":"38,33 38,5 34,5 34,33 28,33 36,43 44,33"}},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"path","attr":{"d":"M16.8,17.2h-5.3l-1.1,3H6.9L12.6,5h2.9l5.7,15.2h-3.2L16.8,17.2z M12.2,14.5H16l-1.9-5.7L12.2,14.5z"}},{"tag":"path","attr":{"d":"M12.4,40.5H20V43H8.4v-1.9L16,30.3H8.4v-2.5h11.4v1.7L12.4,40.5z"}}]}]})(props);
};
function FcAlphabeticalSortingZa (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"path","attr":{"d":"M16.8,40h-5.3l-1.1,3H6.9l5.7-15.2h2.9L21.1,43h-3.2L16.8,40z M12.2,37.3H16l-1.9-5.7L12.2,37.3z"}},{"tag":"path","attr":{"d":"M12.4,17.7H20v2.5H8.4v-1.9L16,7.5H8.4V5h11.4v1.7L12.4,17.7z"}}]},{"tag":"polygon","attr":{"fill":"#546E7A","points":"38,33 38,5 34,5 34,33 28,33 36,43 44,33"}}]})(props);
};
function FcAndroidOs (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#7CB342","d":"M12,29.001c0,1.104-0.896,2-2,2l0,0c-1.104,0-2-0.896-2-2v-9c0-1.104,0.896-2,2-2l0,0c1.104,0,2,0.896,2,2\r\n\t\tV29.001z"}},{"tag":"path","attr":{"fill":"#7CB342","d":"M40,29.001c0,1.104-0.896,2-2,2l0,0c-1.104,0-2-0.896-2-2v-9c0-1.104,0.896-2,2-2l0,0c1.104,0,2,0.896,2,2\r\n\t\tV29.001z"}},{"tag":"path","attr":{"fill":"#7CB342","d":"M22,40c0,1.104-0.896,2-2,2l0,0c-1.104,0-2-0.896-2-2v-9c0-1.104,0.896-2,2-2l0,0c1.104,0,2,0.896,2,2V40z"}},{"tag":"path","attr":{"fill":"#7CB342","d":"M30,40c0,1.104-0.896,2-2,2l0,0c-1.104,0-2-0.896-2-2v-9c0-1.104,0.896-2,2-2l0,0c1.104,0,2,0.896,2,2V40z"}},{"tag":"path","attr":{"fill":"#7CB342","d":"M14,18.001V33c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V18.001H14z"}},{"tag":"path","attr":{"fill":"#7CB342","d":"M24,8c-6,0-9.655,3.645-10,8h20C33.654,11.645,30,8,24,8z M20,13.598c-0.552,0-1-0.448-1-1s0.448-1,1-1\r\n\t\ts1,0.448,1,1S20.552,13.598,20,13.598z M28,13.598c-0.553,0-1-0.448-1-1s0.447-1,1-1s1,0.448,1,1S28.553,13.598,28,13.598z"}},{"tag":"line","attr":{"fill":"none","stroke":"#7CB342","strokeWidth":"2","strokeLinecap":"round","x1":"30","y1":"7","x2":"28.334","y2":"9.499"}},{"tag":"line","attr":{"fill":"none","stroke":"#7CB342","strokeWidth":"2","strokeLinecap":"round","x1":"18","y1":"7","x2":"19.333","y2":"9.082"}}]}]})(props);
};
function FcAnswers (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#42A5F5","points":"36,44 8,44 8,8 28,8 36,16"}},{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,40 12,40 12,4 32,4 40,12"}},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,13 31,13 31,5.5"}},{"tag":"path","attr":{"fill":"#1976D2","d":"M23.4,29.9c0-0.2,0-0.4,0.1-0.6s0.2-0.3,0.3-0.5s0.3-0.2,0.5-0.3s0.4-0.1,0.6-0.1s0.5,0,0.7,0.1 s0.4,0.2,0.5,0.3s0.2,0.3,0.3,0.5s0.1,0.4,0.1,0.6s0,0.4-0.1,0.6s-0.2,0.3-0.3,0.5s-0.3,0.2-0.5,0.3s-0.4,0.1-0.7,0.1 s-0.5,0-0.6-0.1s-0.4-0.2-0.5-0.3s-0.2-0.3-0.3-0.5S23.4,30.1,23.4,29.9z M26.1,26.8h-2.3L23.4,17h3L26.1,26.8z"}}]})(props);
};
function FcApproval (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#8BC34A","points":"24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"}},{"tag":"polygon","attr":{"fill":"#CCFF90","points":"34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"}}]})(props);
};
function FcApprove (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"}},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"}},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"}},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"}}]},{"tag":"polygon","attr":{"fill":"#4CAF50","points":"32.6,18.6 22.3,28.9 17.4,24 14.6,26.8 22.3,34.5 35.4,21.4"}}]})(props);
};
function FcAreaChart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"42,37 6,37 6,25 16,10 30,17 42,6"}},{"tag":"polygon","attr":{"fill":"#00BCD4","points":"42,42 6,42 6,32 16,24 30,26 42,17"}}]})(props);
};
function FcAssistant (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"}},{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"}}]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"}},{"tag":"path","attr":{"fill":"#FF5722","d":"M24,3C14.6,3,7,10.6,7,20c0,1.2,0,3.4,0,3.4L9,25v-3l21-9.8l9,9.8v3l2-1.6c0,0,0-2.1,0-3.4 C41,12,35.3,3,24,3z"}},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"31","cy":"26","r":"2"}},{"tag":"circle","attr":{"cx":"17","cy":"26","r":"2"}}]},{"tag":"path","attr":{"fill":"#757575","d":"M43,24c-0.6,0-1,0.4-1,1v-7c0-8.8-7.2-16-16-16h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c7.7,0,14,6.3,14,14v10 c0,0.6,0.4,1,1,1s1-0.4,1-1v2c0,3.9-3.1,7-7,7H24c-0.6,0-1,0.4-1,1s0.4,1,1,1h11c5,0,9-4,9-9v-5C44,24.4,43.6,24,43,24z"}},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"path","attr":{"d":"M43,22h-1c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2v-4C45,22.9,44.1,22,43,22z"}},{"tag":"circle","attr":{"cx":"24","cy":"38","r":"2"}}]}]})(props);
};
function FcAudioFile (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"204","fill":"none","width":"48","height":"48"}},{"tag":"polygon","attr":{"fill":"#90CAF9","points":"244,45 212,45 212,3 234,3 244,13"}},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"242.5,14 233,14 233,4.5"}},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"circle","attr":{"cx":"227","cy":"30","r":"4"}},{"tag":"polygon","attr":{"points":"234,21 229,19 229,30 231,30 231,22.9 234,24"}}]},{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,45 8,45 8,3 30,3 40,13"}},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,14 29,14 29,4.5"}},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"circle","attr":{"cx":"23","cy":"30","r":"4"}},{"tag":"polygon","attr":{"points":"30,21 25,19 25,30 27,30 27,22.9 30,24"}}]}]})(props);
};
function FcAutomatic (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M39,43H9c-2.2,0-4-1.8-4-4V9c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v30C43,41.2,41.2,43,39,43z"}},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M33.6,25.4c0.1-0.4,0.1-0.9,0.1-1.4s0-0.9-0.1-1.4l2.8-2c0.3-0.2,0.4-0.6,0.2-0.9l-2.7-4.6 c-0.2-0.3-0.5-0.4-0.8-0.3L30,16.3c-0.7-0.6-1.5-1-2.4-1.4l-0.3-3.4c0-0.3-0.3-0.6-0.6-0.6h-5.3c-0.3,0-0.6,0.3-0.6,0.6L20.4,15 c-0.9,0.3-1.6,0.8-2.4,1.4l-3.1-1.4c-0.3-0.1-0.7,0-0.8,0.3l-2.7,4.6c-0.2,0.3-0.1,0.7,0.2,0.9l2.8,2c-0.1,0.4-0.1,0.9-0.1,1.4 s0,0.9,0.1,1.4l-2.8,2c-0.3,0.2-0.4,0.6-0.2,0.9l2.7,4.6c0.2,0.3,0.5,0.4,0.8,0.3l3.1-1.4c0.7,0.6,1.5,1,2.4,1.4l0.3,3.4 c0,0.3,0.3,0.6,0.6,0.6h5.3c0.3,0,0.6-0.3,0.6-0.6l0.3-3.4c0.9-0.3,1.6-0.8,2.4-1.4l3.1,1.4c0.3,0.1,0.7,0,0.8-0.3l2.7-4.6 c0.2-0.3,0.1-0.7-0.2-0.9L33.6,25.4z M24,29c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C29,26.8,26.8,29,24,29z"}}]})(props);
};
function FcAutomotive (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#F44336","strokeWidth":"4","strokeMiterlimit":"10","d":"M7,20v-8c0-2.2,1.8-4,4-4h14c1.2,0,2.4,0.6,3.2,1.6 L35,18"}},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"35","cy":"37","r":"5"}},{"tag":"circle","attr":{"cx":"13","cy":"37","r":"5"}}]},{"tag":"path","attr":{"fill":"#F44336","d":"M40.2,17L33,14H7c-1.2,0-2,0.8-2,2v10c0,1.2,0.8,2,2,2h1c0-2.8,2.2-5,5-5s5,2.2,5,5h12c0-2.8,2.2-5,5-5 s5,2.2,5,5h1c1.2,0,2-0.8,2-2v-5.2C43,19.2,41.8,17.6,40.2,17z"}},{"tag":"g","attr":{"fill":"#546E7A"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"37","r":"3"}},{"tag":"circle","attr":{"cx":"35","cy":"37","r":"2"}},{"tag":"circle","attr":{"cx":"13","cy":"37","r":"2"}},{"tag":"path","attr":{"d":"M30.4,39c-0.3-0.6-0.4-1.3-0.4-2s0.2-1.4,0.4-2H17.6c0.3,0.6,0.4,1.3,0.4,2s-0.2,1.4-0.4,2H30.4z"}}]}]})(props);
};
function FcBadDecision (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"}},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"}},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"}},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"}}]},{"tag":"rect","attr":{"x":"16","y":"24","fill":"#F44336","width":"16","height":"4"}}]})(props);
};
function FcBarChart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"rect","attr":{"x":"19","y":"22","width":"10","height":"20"}},{"tag":"rect","attr":{"x":"6","y":"12","width":"10","height":"30"}},{"tag":"rect","attr":{"x":"32","y":"6","width":"10","height":"36"}}]}]})(props);
};
function FcBbc (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M0,17v14h14V17H0z M34,17v14h14V17H34z M17,17v14h14V17H17z"}},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M8.2,23.7c0,0,1.3-0.5,1.3-2c0,0,0.2-2.4-3-2.7H3v10h4c0,0,3.4,0,3.4-2.8C10.4,26.2,10.5,24.3,8.2,23.7z\r\n\t M4.8,20.6h1.4c1.5,0.1,1.4,1.2,1.4,1.2c0,1.4-1.6,1.4-1.6,1.4H4.8V20.6z M6.7,27.5H4.8v-2.7h1.9c1.9,0,1.9,1.3,1.9,1.3\r\n\tC8.5,27.5,6.7,27.5,6.7,27.5z M25.2,23.7c0,0,1.3-0.5,1.3-2c0,0,0.2-2.4-3-2.7H20v10h4c0,0,3.4,0,3.4-2.8\r\n\tC27.4,26.2,27.5,24.3,25.2,23.7z M21.8,20.6h1.4c1.5,0.1,1.4,1.2,1.4,1.2c0,1.4-1.6,1.4-1.6,1.4h-1.2V20.6z M23.7,27.5h-1.9v-2.7\r\n\th1.9c1.9,0,1.9,1.3,1.9,1.3C25.5,27.5,23.7,27.5,23.7,27.5z M45.3,28.1c0,0-2.9,1.8-6.3,0.4c0,0-2.9-1.1-3-4.5c0,0-0.1-3.5,3.7-4.7\r\n\tc0,0,1-0.4,2.8-0.2c0,0,1.1,0.1,2.7,0.8v1.8c0,0-1.7-1.1-3.7-1.1c0,0-3.6-0.1-3.8,3.5c0,0-0.1,3.3,3.7,3.4c0,0,1.6,0.2,3.8-1.2\r\n\tL45.3,28.1L45.3,28.1z"}}]})(props);
};
function FcBearish (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#F44336"},"child":[{"tag":"rect","attr":{"x":"40","y":"34","width":"4","height":"10"}},{"tag":"rect","attr":{"x":"34","y":"29","width":"4","height":"15"}},{"tag":"rect","attr":{"x":"28","y":"33","width":"4","height":"11"}},{"tag":"rect","attr":{"x":"22","y":"25","width":"4","height":"19"}},{"tag":"rect","attr":{"x":"16","y":"28","width":"4","height":"16"}},{"tag":"rect","attr":{"x":"10","y":"24","width":"4","height":"20"}},{"tag":"rect","attr":{"x":"4","y":"19","width":"4","height":"25"}}]},{"tag":"g","attr":{"fill":"#D32F2F"},"child":[{"tag":"polygon","attr":{"points":"34,13.2 30,17.2 20,7.2 15,12.2 7.4,4.6 4.6,7.4 15,17.8 20,12.8 30,22.8 34,18.8 40.1,24.9 42.9,22.1"}},{"tag":"polygon","attr":{"points":"44,26 35,26 44,17"}}]}]})(props);
};
function FcBinoculars (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"16","r":"6"}},{"tag":"circle","attr":{"cx":"15","cy":"16","r":"6"}},{"tag":"path","attr":{"d":"M46.7,25l-15.3,3H16.7L1.4,25l4.3-7.9c1.1-1.9,3.1-3.1,5.3-3.1h26.2c2.2,0,4.2,1.2,5.3,3.1L46.7,25z"}},{"tag":"circle","attr":{"cx":"38","cy":"30","r":"10"}},{"tag":"circle","attr":{"cx":"10","cy":"30","r":"10"}},{"tag":"circle","attr":{"cx":"24","cy":"28","r":"5"}}]},{"tag":"circle","attr":{"fill":"#546E7A","cx":"24","cy":"28","r":"2"}},{"tag":"g","attr":{"fill":"#a0f"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"30","r":"7"}},{"tag":"circle","attr":{"cx":"10","cy":"30","r":"7"}}]},{"tag":"g","attr":{"fill":"#CE93D8"},"child":[{"tag":"path","attr":{"d":"M41.7,27.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1 c1.2-1.3,3.3-1.3,4.5,0c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C42.1,28.7,42.1,28.1,41.7,27.7z"}},{"tag":"path","attr":{"d":"M10,26c-1.4,0-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1c1.2-1.3,3.3-1.3,4.5,0 c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0.1-1.4C12.8,26.6,11.4,26,10,26z"}}]}]})(props);
};
function FcBiohazard (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#00A344","d":"M24,13c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S31.2,13,24,13z M24,35c-5,0-9-4-9-9s4-9,9-9s9,4,9,9 S29,35,24,35z"}},{"tag":"path","attr":{"fill":"#00C853","d":"M8.5,25.4c4-2.2,9-1.1,11.5,2.5c0.1,0.1,0.2,0.1,0.3,0.1l1.2-0.7c0.1-0.1,0.2-0.2,0.1-0.3 c0-0.2-0.1-0.4-0.1-0.6c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2l0,0 c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1 c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1 c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1,0c0.2-0.1,0.4-0.2,0.5-0.2c0.1,0,0.2-0.1,0.2-0.3v-1.3c0-0.1-0.1-0.2-0.2-0.2 c-4.5-0.4-8-4.1-8-8.6c0-4.1,3-7.6,6.9-8.4c0.1,0,0.2-0.1,0.2-0.3V4.8c0-0.1-0.1-0.2-0.2-0.2C16.4,5.5,12,10.4,12,16.3 c0,1.3,0.2,2.6,0.6,3.8c-1.2,0.2-2.5,0.7-3.6,1.3c-5.2,3-7.3,9.2-5.2,14.5C3.9,36,4,36,4.1,36l0.3-0.2c0.1-0.1,0.2-0.2,0.1-0.3 C3.3,31.7,4.8,27.4,8.5,25.4L8.5,25.4z M39,21.4c-1.2-0.7-2.4-1.1-3.6-1.3c0.4-1.2,0.6-2.4,0.6-3.8c0-5.9-4.4-10.8-10.2-11.7 c-0.1,0-0.2,0.1-0.2,0.2v0.4c0,0.1,0.1,0.2,0.2,0.3c4,0.8,6.9,4.3,6.9,8.4c0,4.5-3.5,8.2-8,8.6c-0.1,0-0.2,0.1-0.2,0.2v1.3 c0,0.1,0.1,0.2,0.2,0.3c0.2,0.1,0.4,0.1,0.6,0.2c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0.1,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0 c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1 c0,0,0,0.1,0.1,0.1c0,0,0,0,0,0c0,0.1,0,0.1,0.1,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1 c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.2,0,0.4-0.1,0.6c0,0.1,0,0.2,0.1,0.3l1.2,0.7c0.1,0.1,0.2,0,0.3-0.1c2.6-3.6,7.6-4.8,11.5-2.5 c3.6,2.1,5.2,6.3,3.9,10.1c0,0.1,0,0.2,0.1,0.3l0.3,0.2c0.1,0.1,0.2,0,0.3-0.1C46.3,30.5,44.2,24.3,39,21.4L39,21.4z M30.8,40.3 c-4-2.2-5.5-7.1-3.5-11.1c0.1-0.1,0-0.2-0.1-0.3L26,28.2c-0.1-0.1-0.2,0-0.3,0c-0.2,0.1-0.3,0.3-0.5,0.3c0,0,0,0,0,0 c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.3,0.1-0.4,0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0 c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0 c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2-0.1c0,0,0,0,0,0c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1,0c-0.2-0.1-0.3-0.2-0.5-0.3 c-0.1-0.1-0.2-0.1-0.3,0l-1.2,0.7c-0.1,0.1-0.1,0.2-0.1,0.3c1.9,4,0.4,8.8-3.5,11.1c-3.6,2.1-8.2,1.3-10.9-1.7 c-0.1-0.1-0.2-0.1-0.3-0.1l-0.3,0.2c-0.1,0.1-0.1,0.2-0.1,0.3c3.6,4.5,10.2,5.8,15.4,2.8c1.2-0.7,2.2-1.5,3-2.4 c0.8,0.9,1.8,1.8,3,2.4c5.2,3,11.7,1.6,15.4-2.8c0.1-0.1,0-0.2-0.1-0.3L42,38.5c-0.1-0.1-0.2,0-0.3,0.1C39,41.5,34.4,42.3,30.8,40.3 L30.8,40.3z"}}]})(props);
};
function FcBiomass (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#9CCC65","d":"M32,15V7H16v8L6.2,40c-0.6,1.5,0.5,3,2.1,3h31.5c1.6,0,2.6-1.6,2.1-3L32,15z"}},{"tag":"path","attr":{"fill":"#8BC34A","d":"M32,9H16c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v0C34,8.1,33.1,9,32,9z"}},{"tag":"path","attr":{"fill":"#2E7D32","d":"M28,30c0,4.4-4,8-4,8s-4-3.6-4-8s4-8,4-8S28,25.6,28,30z"}},{"tag":"path","attr":{"fill":"#388E3C","d":"M31.1,32.6c-2,4-7.1,5.4-7.1,5.4s-2-5,0-8.9s7.1-5.4,7.1-5.4S33.1,28.6,31.1,32.6z"}},{"tag":"path","attr":{"fill":"#43A047","d":"M16.9,32.6c2,4,7.1,5.4,7.1,5.4s2-5,0-8.9s-7.1-5.4-7.1-5.4S14.9,28.6,16.9,32.6z"}}]})(props);
};
function FcBiotech (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#AD1457","d":"M36,4c0,9.3-6,13.2-12.8,17.8C16.1,26.5,8,31.8,8,44h4c0-10.1,6.5-14.4,13.4-18.9C32.2,20.6,40,15.4,40,4 H36z"}},{"tag":"path","attr":{"fill":"#AD1457","d":"M38,41H11c-0.6,0-1-0.4-1-1s0.4-1,1-1h27c0.6,0,1,0.4,1,1S38.6,41,38,41z"}},{"tag":"path","attr":{"fill":"#AD1457","d":"M36,37H12c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S36.6,37,36,37z"}},{"tag":"path","attr":{"fill":"#AD1457","d":"M34,33H14c-0.6,0-1-0.4-1-1s0.4-1,1-1h20c0.6,0,1,0.4,1,1S34.6,33,34,33z"}},{"tag":"path","attr":{"fill":"#AD1457","d":"M29,29H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h10c0.6,0,1,0.4,1,1S29.6,29,29,29z"}},{"tag":"path","attr":{"fill":"#E91E63","d":"M37,9H10C9.4,9,9,8.6,9,8s0.4-1,1-1h27c0.6,0,1,0.4,1,1S37.6,9,37,9z"}},{"tag":"path","attr":{"fill":"#E91E63","d":"M36,13H12c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S36.6,13,36,13z"}},{"tag":"path","attr":{"fill":"#E91E63","d":"M34,17H14c-0.6,0-1-0.4-1-1s0.4-1,1-1h20c0.6,0,1,0.4,1,1S34.6,17,34,17z"}},{"tag":"path","attr":{"fill":"#E91E63","d":"M29,21H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h10c0.6,0,1,0.4,1,1S29.6,21,29,21z"}},{"tag":"path","attr":{"fill":"#E91E63","d":"M40,44h-4c0-10.1-6.5-14.4-13.4-18.9C15.8,20.6,8,15.4,8,4h4c0,9.3,6,13.2,12.8,17.8 C31.9,26.5,40,31.8,40,44z"}}]})(props);
};
function FcBookmark (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M37,43l-13-6l-13,6V9c0-2.2,1.8-4,4-4h18c2.2,0,4,1.8,4,4V43z"}}]})(props);
};
function FcBriefcase (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#424242","d":"M27,7h-6c-1.7,0-3,1.3-3,3v3h2v-3c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v3h2v-3C30,8.3,28.7,7,27,7z"}},{"tag":"path","attr":{"fill":"#E65100","d":"M40,43H8c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,41.2,42.2,43,40,43z"}},{"tag":"path","attr":{"fill":"#FF6E40","d":"M40,28H8c-2.2,0-4-1.8-4-4v-9c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v9C44,26.2,42.2,28,40,28z"}},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M26,26h-4c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v2C27,25.6,26.6,26,26,26z"}}]})(props);
};
function FcBrokenLink (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"path","attr":{"d":"M17.5,27c-1.1,1.2-2.7,2-4.5,2h-3c-3.3,0-6-2.7-6-6s2.7-6,6-6h3c1.8,0,3.4,0.8,4.5,2h4.7 c-1.5-3.5-5.1-6-9.2-6h-3C4.5,13,0,17.5,0,23s4.5,10,10,10h3c4.1,0,7.6-2.5,9.2-6H17.5z"}},{"tag":"path","attr":{"d":"M38,13h-3c-4.1,0-7.6,2.5-9.2,6h4.7c1.1-1.2,2.7-2,4.5-2h3c3.3,0,6,2.7,6,6s-2.7,6-6,6h-3 c-1.8,0-3.4-0.8-4.5-2h-4.7c1.5,3.5,5.1,6,9.2,6h3c5.5,0,10-4.5,10-10S43.5,13,38,13z"}}]},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"polygon","attr":{"points":"19.5,4 16,6 22.1,14.1 23.4,13.3"}},{"tag":"polygon","attr":{"points":"28.5,4 32,6 25.9,14.1 24.6,13.3"}},{"tag":"polygon","attr":{"points":"28.5,44 32,42 25.9,33.9 24.6,34.7"}},{"tag":"polygon","attr":{"points":"19.5,44 16,42 22.1,33.9 23.4,34.7"}}]}]})(props);
};
function FcBullish (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#4CAF50"},"child":[{"tag":"rect","attr":{"x":"40","y":"21","width":"4","height":"23"}},{"tag":"rect","attr":{"x":"34","y":"28","width":"4","height":"16"}},{"tag":"rect","attr":{"x":"28","y":"23","width":"4","height":"21"}},{"tag":"rect","attr":{"x":"22","y":"29","width":"4","height":"15"}},{"tag":"rect","attr":{"x":"16","y":"32","width":"4","height":"12"}},{"tag":"rect","attr":{"x":"10","y":"30","width":"4","height":"14"}},{"tag":"rect","attr":{"x":"4","y":"34","width":"4","height":"10"}}]},{"tag":"g","attr":{"fill":"#388E3C"},"child":[{"tag":"polygon","attr":{"points":"40.1,9.1 34,15.2 30,11.2 20,21.2 15,16.2 4.6,26.6 7.4,29.4 15,21.8 20,26.8 30,16.8 34,20.8 42.9,11.9"}},{"tag":"polygon","attr":{"points":"44,8 35,8 44,17"}}]}]})(props);
};
function FcBusinessContact (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#673AB7","d":"M40,7H8c-2.2,0-4,1.8-4,4v26c0,2.2,1.8,4,4,4h5v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2 c0,0.7-0.4,1.4-1,1.7V41h18v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.7-0.4,1.4-1,1.7V41h5c2.2,0,4-1.8,4-4V11 C44,8.8,42.2,7,40,7z"}},{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"18","r":"4"}},{"tag":"path","attr":{"d":"M31,28c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V28z"}}]}]})(props);
};
function FcBusiness (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#263238"},"child":[{"tag":"path","attr":{"d":"M11,44H9c-0.6,0-1-0.4-1-1v-2h4v2C12,43.6,11.6,44,11,44z"}},{"tag":"path","attr":{"d":"M39,44h-2c-0.6,0-1-0.4-1-1v-2h4v2C40,43.6,39.6,44,39,44z"}}]},{"tag":"path","attr":{"fill":"#37474F","d":"M27,7h-6c-1.7,0-3,1.3-3,3v3h2v-3c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v3h2v-3C30,8.3,28.7,7,27,7z"}},{"tag":"path","attr":{"fill":"#78909C","d":"M40,43H8c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,41.2,42.2,43,40,43z"}}]})(props);
};
function FcBusinessman (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FF9800","points":"24,37 19,31 19,25 29,25 29,31"}},{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"19","r":"2"}},{"tag":"circle","attr":{"cx":"15","cy":"19","r":"2"}}]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z"}},{"tag":"path","attr":{"fill":"#424242","d":"M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z"}},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"28","cy":"19","r":"1"}},{"tag":"circle","attr":{"cx":"20","cy":"19","r":"1"}}]},{"tag":"polygon","attr":{"fill":"#fff","points":"24,43 19,31 24,32 29,31"}},{"tag":"polygon","attr":{"fill":"#D32F2F","points":"23,35 22.3,39.5 24,43.5 25.7,39.5 25,35 26,34 24,32 22,34"}},{"tag":"path","attr":{"fill":"#546E7A","d":"M29,31L29,31l-5,12l-5-12c0,0-11,2-11,13h32C40,33,29,31,29,31z"}}]})(props);
};
function FcBusinesswoman (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"16","y":"15","fill":"#BF360C","width":"16","height":"18"}},{"tag":"path","attr":{"fill":"#78909C","d":"M40,44H8c0-11,11-13,11-13h10C29,31,40,33,40,44z"}},{"tag":"path","attr":{"fill":"#FF9800","d":"M24,37c-2.2,0-5-6-5-6v-6h10v6C29,31,26.2,37,24,37z"}},{"tag":"path","attr":{"fill":"#FFB74D","d":"M33,14c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,19.9,33,15.1,33,14z"}},{"tag":"path","attr":{"fill":"#FF5722","d":"M24,4C17.9,4,9,7.4,9,27.3l7,4.7V19l12-7l4,5v15l7-6c0-4-0.7-20-11-20l-1-2H24z"}},{"tag":"path","attr":{"fill":"#FFB74D","d":"M24,38c-4.4,0-5-7-5-7s2.5,4,5,4s5-4,5-4S28.4,38,24,38z"}},{"tag":"circle","attr":{"fill":"#784719","cx":"28","cy":"21","r":"1"}},{"tag":"circle","attr":{"fill":"#784719","cx":"20","cy":"21","r":"1"}}]})(props);
};
function FcButtingIn (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M24,3C12.4,3,3,12.4,3,24c0,11.6,9.4,21,21,21c0.3,0,0.7,0,1-0.1V3.1C24.7,3,24.3,3,24,3z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M25,3.1v41.9c4.1-0.2,7.9-1.5,11-3.7V6.8C32.9,4.6,29.1,3.2,25,3.1z"}},{"tag":"path","attr":{"fill":"#FFB74D","d":"M20.5,13C14.1,13.3,8.9,18.7,9,25.1c0,2.8,1,5.4,2.7,7.5c1.4,1.7,2.3,3.9,2.3,6.1v3.8c3,1.6,6.4,2.5,10,2.5 c0.3,0,0.7,0,1-0.1c0.7,0,1.3-0.1,2-0.2v-9.4c3.6-2.1,6-5.9,6-10.4C33,18.2,27.4,12.7,20.5,13z"}},{"tag":"path","attr":{"fill":"#FFB74D","d":"M29,38.6L25,38v-9h8l-0.7,7C32.1,37.6,30.7,38.8,29,38.6z"}},{"tag":"polygon","attr":{"fill":"#FFB74D","points":"39,29 32,31 31,26 32,22"}},{"tag":"circle","attr":{"fill":"#784719","cx":"29.5","cy":"25.5","r":"1.5"}},{"tag":"path","attr":{"fill":"#FF5722","d":"M21,12c-7.2,0-13,5.8-13,13c0,7.6,5.1,9,6,13l4-3v-8l5-2l1-4c3.2,0,6-3.9,6-6.1C27.9,13,24.4,12,21,12z"}},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"19","cy":"27","r":"3"}},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M45,24c0-7.1-3.6-13.4-9-17.2v34.4C41.4,37.4,45,31.1,45,24z"}},{"tag":"path","attr":{"fill":"#FF9800","d":"M20,44.6c1.3,0.2,2.6,0.4,4,0.4c0.3,0,0.7,0,1-0.1c0.7,0,1.3-0.1,2-0.2v-6.5l-7-1V44.6z"}}]})(props);
};
function FcCableRelease (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M34.9,29.1c-2.7-2.7-7.1-2.7-9.8,0l-4,4c-1.7,1.7-4.5,1.7-6.2,0c-1.7-1.7-1.7-4.5,0-6.2l4.5-4.5l-2.8-2.8 l-4.5,4.5c-3.3,3.3-3.3,8.6,0,11.8c3.3,3.3,8.6,3.3,11.8,0l4-4c1.2-1.1,3-1.1,4.2,0c1.1,1.2,1.1,3,0,4.2L27,41.2l2.8,2.8l5.1-5.1 C37.6,36.2,37.6,31.8,34.9,29.1z"}},{"tag":"path","attr":{"fill":"#0277BD","d":"M16.1,22.9L16.1,22.9c-2.8-2.8-2.8-7.3,0-10l6.8-6.8c2.8-2.8,7.3-2.8,10,0l0,0c2.8,2.8,2.8,7.3,0,10 l-6.8,6.8C23.3,25.7,18.9,25.7,16.1,22.9z"}},{"tag":"circle","attr":{"fill":"#B3E5FC","cx":"28","cy":"11","r":"4"}}]})(props);
};
function FcCalculator (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#616161","d":"M40,16H8v24c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V16z"}},{"tag":"path","attr":{"fill":"#424242","d":"M36,4H12C9.8,4,8,5.8,8,8v9h32V8C40,5.8,38.2,4,36,4z"}},{"tag":"path","attr":{"fill":"#9CCC65","d":"M36,14H12c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h24c0.6,0,1,0.4,1,1v5C37,13.6,36.6,14,36,14z"}},{"tag":"g","attr":{"fill":"#33691E"},"child":[{"tag":"rect","attr":{"x":"33","y":"10","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"29","y":"10","width":"2","height":"2"}}]},{"tag":"path","attr":{"fill":"#FF5252","d":"M36,23h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C37,22.6,36.6,23,36,23z"}},{"tag":"g","attr":{"fill":"#E0E0E0"},"child":[{"tag":"path","attr":{"d":"M15,23h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C16,22.6,15.6,23,15,23z"}},{"tag":"path","attr":{"d":"M22,23h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C23,22.6,22.6,23,22,23z"}},{"tag":"path","attr":{"d":"M29,23h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C30,22.6,29.6,23,29,23z"}},{"tag":"path","attr":{"d":"M15,29h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C16,28.6,15.6,29,15,29z"}},{"tag":"path","attr":{"d":"M22,29h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C23,28.6,22.6,29,22,29z"}},{"tag":"path","attr":{"d":"M29,29h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C30,28.6,29.6,29,29,29z"}},{"tag":"path","attr":{"d":"M15,35h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C16,34.6,15.6,35,15,35z"}},{"tag":"path","attr":{"d":"M22,35h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C23,34.6,22.6,35,22,35z"}},{"tag":"path","attr":{"d":"M29,35h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C30,34.6,29.6,35,29,35z"}},{"tag":"path","attr":{"d":"M15,41h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C16,40.6,15.6,41,15,41z"}},{"tag":"path","attr":{"d":"M22,41h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C23,40.6,22.6,41,22,41z"}},{"tag":"path","attr":{"d":"M29,41h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C30,40.6,29.6,41,29,41z"}}]},{"tag":"g","attr":{"fill":"#BDBDBD"},"child":[{"tag":"path","attr":{"d":"M36,29h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C37,28.6,36.6,29,36,29z"}},{"tag":"path","attr":{"d":"M36,35h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C37,34.6,36.6,35,36,35z"}},{"tag":"path","attr":{"d":"M36,41h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C37,40.6,36.6,41,36,41z"}}]}]})(props);
};
function FcCalendar (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M5,38V14h38v24c0,2.2-1.8,4-4,4H9C6.8,42,5,40.2,5,38z"}},{"tag":"path","attr":{"fill":"#F44336","d":"M43,10v6H5v-6c0-2.2,1.8-4,4-4h30C41.2,6,43,7.8,43,10z"}},{"tag":"g","attr":{"fill":"#B71C1C"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"10","r":"3"}},{"tag":"circle","attr":{"cx":"15","cy":"10","r":"3"}}]},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"path","attr":{"d":"M33,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C35,3.9,34.1,3,33,3z"}},{"tag":"path","attr":{"d":"M15,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C17,3.9,16.1,3,15,3z"}}]},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"rect","attr":{"x":"13","y":"20","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"19","y":"20","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"25","y":"20","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"31","y":"20","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"13","y":"26","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"19","y":"26","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"25","y":"26","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"31","y":"26","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"13","y":"32","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"19","y":"32","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"25","y":"32","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"31","y":"32","width":"4","height":"4"}}]}]})(props);
};
function FcCallTransfer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#009688","d":"M39.2,8.4l-1.8,1.8c-6.3,6.5-5.4,22,0,27.6l1.8,1.8c0.5,0.5,1.3,0.5,1.8,0l3.6-3.7c0.5-0.5,0.5-1.3,0-1.8 l-3.4-3.4h-4.8c-1.3-1.3-1.3-12.1,0-13.4h4.8l3.3-3.4c0.5-0.5,0.5-1.3,0-1.8L41,8.4C40.5,7.9,39.7,7.9,39.2,8.4z"}},{"tag":"path","attr":{"fill":"#009688","d":"M11.2,8.4l-1.8,1.8c-6.3,6.5-5.4,22,0,27.6l1.8,1.8c0.5,0.5,1.3,0.5,1.8,0l3.6-3.7c0.5-0.5,0.5-1.3,0-1.8 l-3.4-3.4H8.5c-1.3-1.3-1.3-12.1,0-13.4h4.8l3.3-3.4c0.5-0.5,0.5-1.3,0-1.8L13,8.4C12.5,7.9,11.7,7.9,11.2,8.4z"}},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"polygon","attr":{"points":"25.3,18.6 30.7,24 25.3,29.4"}},{"tag":"rect","attr":{"x":"16","y":"22","width":"11","height":"4"}}]}]})(props);
};
function FcCallback (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M26.4,33.9c0,0,4-2.6,4.8-3c0.8-0.4,1.7-0.6,2.2-0.2c0.8,0.5,7.5,4.9,8.1,5.3c0.6,0.4,0.8,1.5,0.1,2.6 c-0.8,1.1-4.3,5.5-5.8,5.4c-1.5,0-8.4,0.4-20.3-11.4C3.6,20.7,4,13.8,4,12.3c0-1.5,4.3-5.1,5.4-5.8c1.1-0.8,2.2-0.5,2.6,0.1 c0.4,0.6,4.8,7.3,5.3,8.1c0.3,0.5,0.2,1.4-0.2,2.2c-0.4,0.8-3,4.8-3,4.8s0.7,2.8,5,7.2C23.5,33.2,26.4,33.9,26.4,33.9z"}},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"path","attr":{"d":"M35,9H25v4h10c1.1,0,2,0.9,2,2v10h4V15C41,11.7,38.3,9,35,9z"}},{"tag":"polygon","attr":{"points":"28,16 21.3,11 28,6"}}]}]})(props);
};
function FcCamcorderPro (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"27","y":"8","fill":"#37474F","width":"10","height":"4"}},{"tag":"path","attr":{"fill":"#607D8B","d":"M27,8h-9.7c-1.5,0-2.8,0.8-3.5,2.1l-3.3,6L14,18l3.3-6H27v7.2h4V12C31,9.8,29.2,8,27,8z"}},{"tag":"path","attr":{"fill":"#607D8B","d":"M30,40H6c-2.2,0-4-1.8-4-4V20c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v16C34,38.2,32.2,40,30,40z"}},{"tag":"path","attr":{"fill":"#607D8B","d":"M38,35l5,5h3V18h-3l-5,5V35z"}},{"tag":"path","attr":{"fill":"#546E7A","d":"M22,35H8c-1.1,0-2-0.9-2-2V23c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v10C24,34.1,23.1,35,22,35z"}},{"tag":"rect","attr":{"x":"34","y":"23","fill":"#455A64","width":"4","height":"12"}},{"tag":"path","attr":{"fill":"#263238","d":"M41,13h-4c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h4c1.7,0,3,1.3,3,3v0C44,11.7,42.7,13,41,13z"}},{"tag":"rect","attr":{"x":"8","y":"23","fill":"#03A9F4","width":"14","height":"10"}},{"tag":"polygon","attr":{"fill":"#4FC3F7","points":"13.5,25.5 9,32 18,32"}},{"tag":"g","attr":{"fill":"#B3E5FC"},"child":[{"tag":"circle","attr":{"cx":"19.5","cy":"25.5","r":"1.5"}},{"tag":"polygon","attr":{"points":"17.5,27.6 14,32 21,32"}}]}]})(props);
};
function FcCamcorder (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M20,42H10c-2.2,0-4-1.8-4-4V15c0-5,4-9,9-9h0c5,0,9,4,9,9v23C24,40.2,22.2,42,20,42z"}},{"tag":"circle","attr":{"fill":"#455A64","cx":"15","cy":"15","r":"7"}},{"tag":"circle","attr":{"fill":"#42A5F5","cx":"15","cy":"15","r":"5.2"}},{"tag":"path","attr":{"fill":"#90CAF9","d":"M18.3,13c-0.8-0.9-2-1.5-3.3-1.5S12.6,12,11.7,13c-0.3,0.4-0.3,0.9,0.1,1.2c0.4,0.3,0.9,0.3,1.2-0.1 c1-1.2,2.9-1.2,3.9,0c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.4-0.1,0.6-0.2C18.6,13.9,18.6,13.3,18.3,13z"}},{"tag":"path","attr":{"fill":"#607D8B","d":"M40,31H28c-1.1,0-2-0.9-2-2V19c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v10C42,30.1,41.1,31,40,31z"}},{"tag":"rect","attr":{"x":"24","y":"19","fill":"#455A64","width":"2","height":"10"}},{"tag":"rect","attr":{"x":"28","y":"19","fill":"#03A9F4","width":"12","height":"10"}},{"tag":"polygon","attr":{"fill":"#4FC3F7","points":"33,22.2 29,28 37,28"}},{"tag":"g","attr":{"fill":"#B3E5FC"},"child":[{"tag":"circle","attr":{"cx":"37.5","cy":"21.5","r":"1"}},{"tag":"polygon","attr":{"points":"36,24.2 33,28 39,28"}}]},{"tag":"circle","attr":{"fill":"#455A64","cx":"15","cy":"35","r":"3"}},{"tag":"circle","attr":{"fill":"#F44336","cx":"15","cy":"35","r":"2"}}]})(props);
};
function FcCameraAddon (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#512DA8","d":"M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"}},{"tag":"path","attr":{"fill":"#8667C4","d":"M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"}},{"tag":"path","attr":{"fill":"#5E35B1","d":"M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"}},{"tag":"circle","attr":{"fill":"#512DA8","cx":"24","cy":"26","r":"12"}},{"tag":"circle","attr":{"fill":"#B388FF","cx":"24","cy":"26","r":"9"}},{"tag":"path","attr":{"fill":"#C7A7FF","d":"M28.8,23c-1.2-1.4-3-2.2-4.8-2.2s-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.2,24.4,29.3,23.5,28.8,23z"}},{"tag":"ellipse","attr":{"fill":"#8667C4","cx":"11","cy":"13.5","rx":"2","ry":"1.5"}},{"tag":"path","attr":{"fill":"#8BC34A","d":"M48,33.8c0-1.3-1.1-2.4-2.4-2.4H42c-0.4,0-0.7-0.5-0.4-0.8c0.4-0.6,0.5-1.3,0.4-2.1 c-0.2-1.2-1.1-2.1-2.3-2.4C37.7,25.7,36,27.1,36,29c0,0.6,0.2,1.1,0.4,1.6c0.2,0.4,0,0.8-0.5,0.8h-3.6c-1.3,0-2.4,1.1-2.4,2.4V37 c0,0.4,0.5,0.7,0.8,0.4c0.6-0.4,1.3-0.5,2.1-0.4c1.2,0.2,2.1,1.1,2.4,2.3c0.4,1.9-1.1,3.6-2.9,3.6c-0.6,0-1.1-0.2-1.6-0.4 c-0.4-0.2-0.8,0-0.8,0.5v2.6c0,1.3,1.1,2.4,2.4,2.4h13.2c1.3,0,2.4-1.1,2.4-2.4V33.8z"}}]})(props);
};
function FcCameraIdentification (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#512DA8","d":"M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"}},{"tag":"path","attr":{"fill":"#8667C4","d":"M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"}},{"tag":"path","attr":{"fill":"#5E35B1","d":"M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"}},{"tag":"circle","attr":{"fill":"#512DA8","cx":"24","cy":"26","r":"12"}},{"tag":"circle","attr":{"fill":"#B388FF","cx":"24","cy":"26","r":"9"}},{"tag":"g","attr":{"fill":"#616161"},"child":[{"tag":"rect","attr":{"x":"42.2","y":"38.3","transform":"matrix(.707 -.707 .707 .707 -18.002 43.46)","width":"2.4","height":"10.4"}},{"tag":"circle","attr":{"cx":"35","cy":"35","r":"10"}}]},{"tag":"rect","attr":{"x":"43.9","y":"42.4","transform":"matrix(.707 -.707 .707 .707 -18.709 45.167)","fill":"#37474F","width":"2.4","height":"5.6"}},{"tag":"circle","attr":{"fill":"#64B5F6","cx":"35","cy":"35","r":"8"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M39.3,31.4c-1.1-1.3-2.6-2-4.2-2s-3.2,0.7-4.2,2c-0.2,0.3-0.2,0.6,0.1,0.9c0.3,0.2,0.6,0.2,0.9-0.1 c0.8-1,2-1.5,3.3-1.5s2.5,0.6,3.3,1.5c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3,0,0.4-0.1C39.5,32.1,39.5,31.7,39.3,31.4z"}},{"tag":"path","attr":{"fill":"#C7A7FF","d":"M29,23c-1.2-1.4-3-2.2-4.8-2.2c-1.8,0-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.4,24.4,29.5,23.5,29,23z"}},{"tag":"ellipse","attr":{"fill":"#8667C4","cx":"11","cy":"13.5","rx":"2","ry":"1.5"}}]})(props);
};
function FcCamera (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#512DA8","d":"M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"}},{"tag":"path","attr":{"fill":"#8667C4","d":"M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"}},{"tag":"path","attr":{"fill":"#5E35B1","d":"M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"}},{"tag":"circle","attr":{"fill":"#512DA8","cx":"24","cy":"26","r":"12"}},{"tag":"circle","attr":{"fill":"#B388FF","cx":"24","cy":"26","r":"9"}},{"tag":"path","attr":{"fill":"#C7A7FF","d":"M29,23c-1.2-1.4-3-2.2-4.8-2.2c-1.8,0-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.4,24.4,29.5,23.5,29,23z"}},{"tag":"ellipse","attr":{"fill":"#8667C4","cx":"11","cy":"13.5","rx":"2","ry":"1.5"}}]})(props);
};
function FcCancel (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#D50000","d":"M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18s18-8.1,18-18S33.9,6,24,6z M24,10c3.1,0,6,1.1,8.4,2.8L12.8,32.4 C11.1,30,10,27.1,10,24C10,16.3,16.3,10,24,10z M24,38c-3.1,0-6-1.1-8.4-2.8l19.6-19.6C36.9,18,38,20.9,38,24C38,31.7,31.7,38,24,38 z"}}]})(props);
};
function FcCandleSticks (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#546E7A"},"child":[{"tag":"rect","attr":{"x":"38","y":"4","width":"2","height":"20"}},{"tag":"rect","attr":{"x":"15","y":"7","width":"2","height":"17"}},{"tag":"rect","attr":{"x":"8","y":"27","width":"2","height":"17"}},{"tag":"rect","attr":{"x":"28","y":"19","width":"2","height":"22"}}]},{"tag":"path","attr":{"fill":"#4CAF50","d":"M36,7h6c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2V9C34,7.9,34.9,7,36,7z"}},{"tag":"path","attr":{"fill":"#4CAF50","d":"M13,10h6c1.1,0,2,0.9,2,2v7c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2v-7C11,10.9,11.9,10,13,10z"}},{"tag":"path","attr":{"fill":"#F44336","d":"M6,30h6c1.1,0,2,0.9,2,2v7c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-7C4,30.9,4.9,30,6,30z"}},{"tag":"path","attr":{"fill":"#F44336","d":"M26,22h6c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2V24C24,22.9,24.9,22,26,22z"}}]})(props);
};
function FcCapacitor (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"rect","attr":{"y":"27","width":"25","height":"4"}},{"tag":"rect","attr":{"y":"17","width":"25","height":"4"}}]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"path","attr":{"d":"M46,35c1.1,0,2-0.9,2-2V15c0-1.1-0.9-2-2-2H27v22H46z"}},{"tag":"path","attr":{"d":"M21,13c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h2V13H21z"}}]},{"tag":"path","attr":{"fill":"#303F9F","d":"M25,33c1.1,0,2,0.9,2,2V13c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2v22C23,33.9,23.9,33,25,33z"}}]})(props);
};
function FcCdLogo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M17.814,18H20.2c0.5,0,0.8,0.4,0.8,0.8v16.4c0,0.399-0.4,0.8-0.8,0.8h-2.384c-0.4,0-0.8-0.4-0.8-0.8V18.8\r\n\t\tC16.916,18.3,17.314,18,17.814,18z"}},{"tag":"path","attr":{"fill":"#2196F3","d":"M14.2,11h-3.3c-0.5,0-0.9,0.403-0.9,0.807V17H2.2C1.6,17,1,17.605,1,18.21v16.58C1,35.396,1.6,36,2.2,36h12\r\n\t\tc0.4,0,0.8-0.305,0.8-0.809V11.807C15,11.403,14.7,11,14.2,11z M10,31.283c0,0.398-0.4,0.8-0.8,0.8H6.8c-0.4,0-0.8-0.399-0.8-0.8\r\n\t\tV21.8C6,21.4,6.3,21,6.8,21h2.4c0.5,0,0.8,0.4,0.8,0.8V31.283z"}},{"tag":"path","attr":{"fill":"#2196F3","d":"M33.2,25c0.5,0,0.8,0.6,0.8,0.8v9.4c0,0.399-0.422,0.8-0.8,0.8h-9.4c-0.425,0-0.8-0.4-0.8-0.8v-2.386\r\n\t\tc0-0.5,0.4-0.799,0.8-0.799L30,32v-3h-6.2c-0.331,0-0.8-0.4-0.8-0.801V18.8c0-0.5,0.4-0.8,0.8-0.8h9.4c0.399,0,0.8,0.4,0.8,0.8v2.4\r\n\t\tc0,0.3-0.266,0.8-0.8,0.8H27v3H33.2z"}},{"tag":"path","attr":{"fill":"#2196F3","d":"M48,28v7.2c0,0.399-0.4,0.8-0.801,0.8H36.8c-0.2,0-0.8-0.4-0.8-0.8V18.8c0-0.5,0.432-0.8,0.831-0.8H47.2\r\n\t\tc0,0,0.8,0,0.8,0.8V25h-4v-2.2c0,0,0.1-0.8-0.8-0.8h-2.4c-0.5,0-0.8,0.4-0.8,0.8v8.4c0,0.399,0.5,0.8,0.8,0.8h2.4\r\n\t\tc0.399,0,0.8-0.4,0.8-0.8V28H48z"}}]},{"tag":"g","attr":{},"child":[{"tag":"polygon","attr":{"fill":"#0D47A1","points":"45.799,15.98 46.9,15.98 46.9,12.881 48,12.881 48,11.98 44.799,11.98 44.799,12.881 \r\n\t\t45.799,12.881 \t"}},{"tag":"path","attr":{"fill":"#0D47A1","d":"M44.014,14.476h-1.143v0.095c0,0.382-0.096,0.573-0.572,0.573c-0.475,0-0.57-0.191-0.57-0.762v-0.668\r\n\t\tc0-0.572,0-0.762,0.57-0.762c0.381,0,0.572,0.095,0.572,0.477v0.095h1.047v-0.095c0-1.047-0.381-1.429-1.523-1.429h-0.287\r\n\t\tc-1.141,0-1.523,0.382-1.523,1.618v0.764c0,1.142,0.381,1.618,1.523,1.618h0.383c1.047,0,1.428-0.477,1.428-1.43v-0.095H44.014z"}},{"tag":"polygon","attr":{"fill":"#0D47A1","points":"29.516,12 28.717,14.9 27.816,12 26.217,12 26.217,16 27.316,16 27.316,13 28.115,16 29.217,16 \r\n\t\t30.115,13.1 30.115,16 31.115,16 31.115,12 \t"}},{"tag":"path","attr":{"fill":"#0D47A1","d":"M38.713,12h-0.9h-0.898l-1.199,4h1.199l0.199-0.7h0.602h0.799l0.199,0.7h1.199L38.713,12z M37.914,14.5\r\n\t\th-0.4l0.4-1.7l0,0l0,0l0.398,1.7H37.914z"}},{"tag":"path","attr":{"fill":"#0D47A1","d":"M33.92,12h-0.199H32.02v4h1.102v-1.1h0.6h0.199c1.102,0,1.5-0.4,1.5-1.4v-0.3C35.42,12.3,35.02,12,33.92,12\r\n\t\tz M34.32,13.6c0,0.4-0.1,0.5-0.4,0.5h-0.199h-0.6v-1.2h0.6h0.1c0.4,0,0.5,0.1,0.5,0.4V13.6z"}},{"tag":"path","attr":{"fill":"#0D47A1","d":"M23.594,12h-0.286h-0.286c-1.143,0-1.523,0.382-1.523,1.618v0.762c0,1.144,0.381,1.62,1.523,1.62h0.286\r\n\t\th0.286c1.143,0,1.523-0.477,1.523-1.62v-0.762C25.117,12.382,24.737,12,23.594,12z M23.975,14.19c0,0.571,0,0.763-0.571,0.763\r\n\t\th-0.095h-0.095c-0.571,0-0.571-0.191-0.571-0.763v-0.572c0-0.57,0-0.762,0.571-0.762h0.095h0.095c0.571,0,0.571,0.191,0.571,0.762\r\n\t\tV14.19z"}},{"tag":"path","attr":{"fill":"#0D47A1","d":"M20.422,14.477h-1.144v0.095c0,0.382-0.095,0.571-0.571,0.571c-0.476,0-0.571-0.189-0.571-0.762v-0.666\r\n\t\tc0-0.573,0-0.762,0.571-0.762c0.381,0,0.571,0.095,0.571,0.475v0.096h1.048v-0.096c0-1.047-0.381-1.428-1.523-1.428h-0.286\r\n\t\tc-1.143,0-1.524,0.381-1.524,1.618v0.763c0,1.143,0.381,1.619,1.524,1.619h0.381c1.048,0,1.429-0.477,1.429-1.429v-0.095H20.422z"}}]}]})(props);
};
function FcCellPhone (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#546E7A","d":"M12,40V10h20c2.2,0,4,1.8,4,4v26c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"}},{"tag":"path","attr":{"fill":"#4FC3F7","d":"M32,13H16c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-8C33,13.4,32.6,13,32,13z"}},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M19,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,29.6,19.6,30,19,30z"}},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M25,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,29.6,25.6,30,25,30z"}},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M31,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,29.6,31.6,30,31,30z"}},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M19,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,34.6,19.6,35,19,35z"}},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M25,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,34.6,25.6,35,25,35z"}},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M31,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,34.6,31.6,35,31,35z"}},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M19,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,39.6,19.6,40,19,40z"}},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M25,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,39.6,25.6,40,25,40z"}},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M31,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,39.6,31.6,40,31,40z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M16,10h-4V4c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2V10z"}}]})(props);
};
function FcChargeBattery (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#8BC34A"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"}},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"}}]},{"tag":"polygon","attr":{"fill":"#FFEB3B","points":"30,24 24.5,24 26.7,13 18,26 23.5,26 21.3,37"}}]})(props);
};
function FcCheckmark (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#43A047","points":"40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"}}]})(props);
};
function FcCircuit (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M6,10v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V10c0-2.2-1.8-4-4-4H10C7.8,6,6,7.8,6,10z"}},{"tag":"g","attr":{"fill":"#FFC107"},"child":[{"tag":"path","attr":{"d":"M6.6,8l6,6c-0.4,0.6-0.6,1.3-0.6,2c0,2.2,1.8,4,4,4s4-1.8,4-4s-1.8-4-4-4c-0.7,0-1.4,0.2-2,0.6l-6-6 C7.4,6.9,6.9,7.4,6.6,8z M16,14.5c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5S15.2,14.5,16,14.5z"}},{"tag":"path","attr":{"d":"M41.4,40l-6-6c0.4-0.6,0.6-1.3,0.6-2c0-2.2-1.8-4-4-4s-4,1.8-4,4s1.8,4,4,4c0.7,0,1.4-0.2,2-0.6l6,6 C40.6,41.1,41.1,40.6,41.4,40z M32,33.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S32.8,33.5,32,33.5z"}},{"tag":"path","attr":{"d":"M16,36c2.2,0,4-1.8,4-4c0-0.7-0.2-1.4-0.6-2L30,19.4c0.6,0.4,1.3,0.6,2,0.6c2.2,0,4-1.8,4-4s-1.8-4-4-4 s-4,1.8-4,4c0,0.7,0.2,1.4,0.6,2L18,28.6c-0.6-0.4-1.3-0.6-2-0.6c-2.2,0-4,1.8-4,4S13.8,36,16,36z M32,14.5c0.8,0,1.5,0.7,1.5,1.5 s-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5S31.2,14.5,32,14.5z M16,30.5c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5 S15.2,30.5,16,30.5z"}}]}]})(props);
};
function FcClapperboard (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M43.4,8.3L4,15l-0.3-2c-0.4-2.2,1.1-4.2,3.3-4.6l31.6-5.3c2.2-0.4,4.2,1.1,4.6,3.3L43.4,8.3z"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M40,41H8c-2.2,0-4-1.8-4-4V15h40v22C44,39.2,42.2,41,40,41z"}},{"tag":"g","attr":{"fill":"#9FA8DA"},"child":[{"tag":"polygon","attr":{"points":"18.8,6.4 23.7,11.7 27.7,11 22.7,5.7"}},{"tag":"polygon","attr":{"points":"10.9,7.7 15.8,13 19.8,12.3 14.8,7.1"}},{"tag":"polygon","attr":{"points":"26.7,5.1 31.6,10.3 35.5,9.7 30.6,4.4"}},{"tag":"polygon","attr":{"points":"34.5,3.8 39.5,9 43.4,8.3 38.5,3.1"}}]},{"tag":"circle","attr":{"fill":"#9FA8DA","cx":"7.5","cy":"11.5","r":"1.5"}},{"tag":"g","attr":{"fill":"#9FA8DA"},"child":[{"tag":"polygon","attr":{"points":"40,15 36,21 40,21 44,15"}},{"tag":"polygon","attr":{"points":"32,15 28,21 32,21 36,15"}},{"tag":"polygon","attr":{"points":"24,15 20,21 24,21 28,15"}},{"tag":"polygon","attr":{"points":"16,15 12,21 16,21 20,15"}},{"tag":"polygon","attr":{"points":"8,15 4,21 8,21 12,15"}}]}]})(props);
};
function FcClearFilters (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#F57C00","points":"29,23 19,23 7,9 41,9"}},{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"polygon","attr":{"points":"29,38 19,44 19,23 29,23"}},{"tag":"path","attr":{"d":"M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z"}}]},{"tag":"circle","attr":{"fill":"#F44336","cx":"38","cy":"38","r":"10"}},{"tag":"rect","attr":{"x":"32","y":"36","fill":"#fff","width":"12","height":"4"}}]})(props);
};
function FcClock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#00ACC1","cx":"24","cy":"24","r":"20"}},{"tag":"circle","attr":{"fill":"#eee","cx":"24","cy":"24","r":"16"}},{"tag":"rect","attr":{"x":"23","y":"11","width":"2","height":"13"}},{"tag":"rect","attr":{"x":"26.1","y":"22.7","transform":"matrix(-.707 .707 -.707 -.707 65.787 27.25)","width":"2.3","height":"9.2"}},{"tag":"circle","attr":{"cx":"24","cy":"24","r":"2"}},{"tag":"circle","attr":{"fill":"#00ACC1","cx":"24","cy":"24","r":"1"}}]})(props);
};
function FcCloseUpMode (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2E7D32","d":"M5,24c0,18.9,14.8,19,17,19s4,0,4,0S24.1,26.5,5,24z"}},{"tag":"rect","attr":{"x":"22","y":"26","fill":"#388E3C","width":"4","height":"17"}},{"tag":"path","attr":{"fill":"#C62828","d":"M34,16c0,5.1-5.2,8.2-8,8.2s-2-3.1-2-8.2s5-9.2,5-9.2S34,10.9,34,16z"}},{"tag":"path","attr":{"fill":"#C62828","d":"M14,16c0,5.1,5.2,8.2,8,8.2s2-3.1,2-8.2s-5-9.2-5-9.2S14,10.9,14,16z"}},{"tag":"path","attr":{"fill":"#E53935","d":"M24,27c-2.2-1.6-1.9-4.5,2.4-8.8C30.8,13.8,32,7,32,7s5,3.4,5,9C37,21.9,31.3,27,24,27z"}},{"tag":"path","attr":{"fill":"#E53935","d":"M24,27c2.2-1.6,1.9-4.5-2.4-8.8C17.2,13.8,16,7,16,7s-5,3.4-5,9C11,21.9,16.7,27,24,27z"}},{"tag":"path","attr":{"fill":"#F44336","d":"M30,16c0,6.1-2.7,11-6,11s-6-4.9-6-11s6-11,6-11S30,9.9,30,16z"}},{"tag":"path","attr":{"fill":"#4CAF50","d":"M22,43c0,0,1.8,0,4,0s17-0.1,17-19C23.9,26.5,22,43,22,43z"}}]})(props);
};
function FcCloth (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF5722","d":"M6,10v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V10c0-2.2-1.8-4-4-4H10C7.8,6,6,7.8,6,10z"}},{"tag":"g","attr":{"fill":"#BF360C"},"child":[{"tag":"rect","attr":{"x":"6","y":"35","width":"36","height":"2"}},{"tag":"rect","attr":{"x":"6","y":"31","width":"36","height":"2"}},{"tag":"path","attr":{"d":"M6.1,39c0.2,0.8,0.6,1.5,1.2,2h33.2c0.6-0.5,1-1.2,1.2-2H6.1z"}},{"tag":"path","attr":{"d":"M6.1,9h35.7c-0.2-0.8-0.6-1.5-1.2-2H7.4C6.8,7.5,6.3,8.2,6.1,9z"}},{"tag":"rect","attr":{"x":"6","y":"23","width":"36","height":"2"}},{"tag":"rect","attr":{"x":"6","y":"27","width":"36","height":"2"}},{"tag":"rect","attr":{"x":"6","y":"15","width":"36","height":"2"}},{"tag":"rect","attr":{"x":"6","y":"11","width":"36","height":"2"}},{"tag":"rect","attr":{"x":"6","y":"19","width":"36","height":"2"}}]},{"tag":"g","attr":{"fill":"#FF8A65"},"child":[{"tag":"rect","attr":{"x":"27","y":"6","width":"2","height":"5"}},{"tag":"rect","attr":{"x":"27","y":"13","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"27","y":"29","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"31","y":"6","width":"2","height":"1"}},{"tag":"rect","attr":{"x":"19","y":"29","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"31","y":"9","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"23","y":"6","width":"2","height":"1"}},{"tag":"rect","attr":{"x":"23","y":"25","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"23","y":"9","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"19","y":"21","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"23","y":"17","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"23","y":"33","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"27","y":"21","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"39","y":"33","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"39","y":"17","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"39","y":"25","width":"2","height":"6"}},{"tag":"path","attr":{"d":"M39,6.1V7h1.6C40.2,6.6,39.6,6.3,39,6.1z"}},{"tag":"rect","attr":{"x":"31","y":"17","width":"2","height":"6"}},{"tag":"path","attr":{"d":"M40.6,41H39v0.9C39.6,41.7,40.2,41.4,40.6,41z"}},{"tag":"rect","attr":{"x":"35","y":"13","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"31","y":"33","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"35","y":"29","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"39","y":"9","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"35","y":"21","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"31","y":"25","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"35","y":"37","width":"2","height":"5"}},{"tag":"rect","attr":{"x":"35","y":"6","width":"2","height":"5"}},{"tag":"rect","attr":{"x":"31","y":"41","width":"2","height":"1"}},{"tag":"rect","attr":{"x":"23","y":"41","width":"2","height":"1"}},{"tag":"rect","attr":{"x":"27","y":"37","width":"2","height":"5"}},{"tag":"rect","attr":{"x":"19","y":"37","width":"2","height":"5"}},{"tag":"rect","attr":{"x":"7","y":"17","width":"2","height":"6"}},{"tag":"path","attr":{"d":"M9,41H7.4c0.5,0.4,1,0.7,1.6,0.9V41z"}},{"tag":"path","attr":{"d":"M7.4,7H9V6.1C8.4,6.3,7.8,6.6,7.4,7z"}},{"tag":"rect","attr":{"x":"7","y":"33","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"7","y":"25","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"7","y":"9","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"11","y":"29","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"15","y":"17","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"15","y":"33","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"15","y":"9","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"15","y":"6","width":"2","height":"1"}},{"tag":"rect","attr":{"x":"19","y":"6","width":"2","height":"5"}},{"tag":"rect","attr":{"x":"15","y":"25","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"15","y":"41","width":"2","height":"1"}},{"tag":"rect","attr":{"x":"11","y":"21","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"11","y":"6","width":"2","height":"5"}},{"tag":"rect","attr":{"x":"11","y":"37","width":"2","height":"5"}},{"tag":"rect","attr":{"x":"19","y":"13","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"11","y":"13","width":"2","height":"6"}}]}]})(props);
};
function FcCollaboration (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#1565C0","d":"M25,22h13l6,6V11c0-2.2-1.8-4-4-4H25c-2.2,0-4,1.8-4,4v7C21,20.2,22.8,22,25,22z"}},{"tag":"path","attr":{"fill":"#2196F3","d":"M23,19H10l-6,6V8c0-2.2,1.8-4,4-4h15c2.2,0,4,1.8,4,4v7C27,17.2,25.2,19,23,19z"}},{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"31","r":"5"}},{"tag":"circle","attr":{"cx":"36","cy":"31","r":"5"}}]},{"tag":"g","attr":{"fill":"#607D8B"},"child":[{"tag":"path","attr":{"d":"M20,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z"}},{"tag":"path","attr":{"d":"M44,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z"}}]}]})(props);
};
function FcCollapse (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#2196F3","points":"5,30.9 8.1,34 24,18.1 39.9,34 43,30.9 24,12"}}]})(props);
};
function FcCollect (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"rect","attr":{"x":"22","y":"35","width":"4","height":"11"}},{"tag":"polygon","attr":{"points":"24,29.6 31,38 17,38"}}]},{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"rect","attr":{"x":"22","y":"2","width":"4","height":"11"}},{"tag":"polygon","attr":{"points":"24,18.4 17,10 31,10"}}]},{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"rect","attr":{"x":"2","y":"22","width":"11","height":"4"}},{"tag":"polygon","attr":{"points":"18.4,24 10,31 10,17"}}]},{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"rect","attr":{"x":"35","y":"22","width":"11","height":"4"}},{"tag":"polygon","attr":{"points":"29.6,24 38,17 38,31"}}]},{"tag":"circle","attr":{"fill":"#F44336","cx":"24","cy":"24","r":"3"}}]})(props);
};
function FcComboChart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"rect","attr":{"x":"37","y":"18","width":"6","height":"24"}},{"tag":"rect","attr":{"x":"29","y":"26","width":"6","height":"16"}},{"tag":"rect","attr":{"x":"21","y":"22","width":"6","height":"20"}},{"tag":"rect","attr":{"x":"13","y":"32","width":"6","height":"10"}},{"tag":"rect","attr":{"x":"5","y":"28","width":"6","height":"14"}}]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"circle","attr":{"cx":"8","cy":"16","r":"3"}},{"tag":"circle","attr":{"cx":"16","cy":"18","r":"3"}},{"tag":"circle","attr":{"cx":"24","cy":"11","r":"3"}},{"tag":"circle","attr":{"cx":"32","cy":"13","r":"3"}},{"tag":"circle","attr":{"cx":"40","cy":"9","r":"3"}},{"tag":"polygon","attr":{"points":"39.1,7.2 31.8,10.9 23.5,8.8 15.5,15.8 8.5,14.1 7.5,17.9 16.5,20.2 24.5,13.2 32.2,15.1 40.9,10.8"}}]}]})(props);
};
function FcCommandLine (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M41,6H7C6.4,6,6,6.4,6,7v35h36V7C42,6.4,41.6,6,41,6z"}}]},{"tag":"rect","attr":{"x":"8","y":"13","fill":"#263238","width":"32","height":"27"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#76FF03","d":"M22,27.6c-0.1,1.1-0.4,1.9-1,2.5c-0.6,0.6-1.4,0.9-2.5,0.9c-1.1,0-2-0.4-2.6-1.1c-0.6-0.7-0.9-1.8-0.9-3.1\r\n\t\tv-1.6c0-1.3,0.3-2.4,0.9-3.1c0.6-0.7,1.5-1.1,2.6-1.1c1.1,0,1.9,0.3,2.5,0.9c0.6,0.6,0.9,1.4,1,2.6h-2c0-0.7-0.1-1.2-0.3-1.4\r\n\t\tc-0.2-0.3-0.6-0.4-1.1-0.4c-0.5,0-0.9,0.2-1.2,0.6c-0.2,0.4-0.3,1-0.4,1.8v1.8c0,1,0.1,1.6,0.3,2c0.2,0.4,0.6,0.5,1.1,0.5\r\n\t\tc0.5,0,0.9-0.1,1.1-0.4c0.2-0.3,0.3-0.7,0.3-1.4H22z"}},{"tag":"path","attr":{"fill":"#76FF03","d":"M24,24c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3c0.2,0.2,0.3,0.4,0.3,0.7\r\n\t\tc0,0.3-0.1,0.5-0.3,0.7S25.3,25,25,25c-0.3,0-0.5-0.1-0.7-0.3S24,24.3,24,24z"}},{"tag":"path","attr":{"fill":"#76FF03","d":"M24,30c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3c0.2,0.2,0.3,0.4,0.3,0.7\r\n\t\tc0,0.3-0.1,0.5-0.3,0.7S25.3,31,25,31c-0.3,0-0.5-0.1-0.7-0.3S24,30.3,24,30z"}},{"tag":"path","attr":{"fill":"#76FF03","d":"M28,21h2l3,10h-2L28,21z"}}]},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"fill":"#90A4AE","cx":"13.5","cy":"9.5","r":"1.5"}},{"tag":"circle","attr":{"fill":"#90A4AE","cx":"9.5","cy":"9.5","r":"1.5"}}]}]})(props);
};
function FcComments (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8BC34A","d":"M37,39H11l-6,6V11c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,36.3,40.3,39,37,39z"}}]})(props);
};
function FcCompactCamera (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M40,39H8c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v22C44,37.2,42.2,39,40,39z"}},{"tag":"circle","attr":{"fill":"#455A64","cx":"29","cy":"24","r":"12"}},{"tag":"circle","attr":{"fill":"#42A5F5","cx":"29","cy":"24","r":"9"}},{"tag":"path","attr":{"fill":"#90CAF9","d":"M33.8,21c-1.2-1.4-3-2.2-4.8-2.2s-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C34.2,22.4,34.3,21.5,33.8,21z"}},{"tag":"rect","attr":{"x":"8","y":"13","fill":"#ADD8FB","width":"6","height":"3"}}]})(props);
};
function FcConferenceCall (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#FFA726","cx":"12","cy":"21","r":"5"}},{"tag":"g","attr":{"fill":"#455A64"},"child":[{"tag":"path","attr":{"d":"M2,34.7c0,0,2.8-6.3,10-6.3s10,6.3,10,6.3V38H2V34.7z"}},{"tag":"path","attr":{"d":"M46,34.7c0,0-2.8-6.3-10-6.3s-10,6.3-10,6.3V38h20V34.7z"}}]},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"24","cy":"17","r":"6"}},{"tag":"path","attr":{"fill":"#607D8B","d":"M36,34.1c0,0-3.3-7.5-12-7.5s-12,7.5-12,7.5V38h24V34.1z"}},{"tag":"circle","attr":{"fill":"#FFA726","cx":"36","cy":"21","r":"5"}},{"tag":"circle","attr":{"fill":"#FFA726","cx":"12","cy":"21","r":"5"}},{"tag":"circle","attr":{"fill":"#FFA726","cx":"36","cy":"21","r":"5"}}]})(props);
};
function FcContacts (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF7043","d":"M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"}},{"tag":"path","attr":{"fill":"#BF360C","d":"M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"}},{"tag":"g","attr":{"fill":"#AB300B"},"child":[{"tag":"circle","attr":{"cx":"26","cy":"20","r":"4"}},{"tag":"path","attr":{"d":"M33,30c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V30z"}}]}]})(props);
};
function FcCopyleft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"}},{"tag":"path","attr":{"fill":"#E1BEE7","d":"M19.3,28.1c0.3,1.3,0.2,4.1,4.6,4.1c0.9,0,4.8,0.2,4.7-7.2v-1.6c0-6.7-3.2-7.2-4.8-7.2 c-2.3,0-4.2,0.6-4.5,4.3h-4.8c0.1-1.2,0.8-8.2,9.3-8.2c4.2,0,9.7,2.5,9.7,11.2V25c0,9.6-6.5,11.2-9.6,11.2c-3.7,0-8.7-1.6-9.3-8.1 H19.3z"}}]})(props);
};
function FcCopyright (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"}},{"tag":"path","attr":{"fill":"#E1BEE7","d":"M33.5,28.1c-0.6,6.4-5.6,8.1-9.3,8.1c-3.1,0-9.6-1.6-9.6-11.2v-1.5c0-8.7,5.5-11.2,9.7-11.2 c8.5,0,9.2,7,9.3,8.2h-4.8c-0.3-3.6-2.2-4.3-4.5-4.3c-1.6,0-4.8,0.5-4.8,7.2V25c-0.1,7.5,3.8,7.2,4.7,7.2c4.3,0,4.3-2.9,4.6-4.1 H33.5z"}}]})(props);
};
function FcCrystalOscillator (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"rect","attr":{"x":"3","y":"28","width":"26","height":"4"}},{"tag":"rect","attr":{"x":"3","y":"16","width":"26","height":"4"}}]},{"tag":"path","attr":{"fill":"#2196F3","d":"M43,11H20v26h23c1.1,0,2-0.9,2-2V13C45,11.9,44.1,11,43,11z"}},{"tag":"path","attr":{"fill":"#64B5F6","d":"M20,9h-2v30h2c1.1,0,2-0.9,2-2V11C22,9.9,21.1,9,20,9z"}}]})(props);
};
function FcCurrencyExchange (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#3F51B5","cx":"18","cy":"18","r":"15"}},{"tag":"path","attr":{"fill":"#FFF59D","d":"M20.3,16v1.7h-3.8v1.4h3.8v1.7h-3.8c0,0.6,0.1,1.2,0.3,1.6c0.2,0.4,0.4,0.8,0.7,1c0.3,0.3,0.7,0.4,1.1,0.6 c0.4,0.1,0.9,0.2,1.4,0.2c0.4,0,0.7,0,1.1-0.1c0.4-0.1,0.7-0.1,1-0.3l0.4,2.7c-0.4,0.1-0.9,0.2-1.4,0.2c-0.5,0.1-1,0.1-1.5,0.1 c-0.9,0-1.8-0.1-2.6-0.4c-0.8-0.2-1.5-0.6-2-1.1c-0.6-0.5-1-1.1-1.4-1.9c-0.3-0.7-0.5-1.6-0.5-2.6h-1.9v-1.7h1.9v-1.4h-1.9V16h1.9 c0.1-1,0.3-1.8,0.6-2.6c0.4-0.7,0.8-1.4,1.4-1.9c0.6-0.5,1.3-0.9,2.1-1.1c0.8-0.3,1.7-0.4,2.6-0.4c0.4,0,0.9,0,1.3,0.1 c0.4,0.1,0.9,0.1,1.3,0.3l-0.4,2.7c-0.3-0.1-0.6-0.2-1-0.3c-0.4-0.1-0.7-0.1-1.1-0.1c-0.5,0-1,0.1-1.4,0.2c-0.4,0.1-0.8,0.3-1,0.6 c-0.3,0.3-0.5,0.6-0.7,1s-0.3,0.9-0.3,1.5H20.3z"}},{"tag":"circle","attr":{"fill":"#4CAF50","cx":"30","cy":"30","r":"15"}},{"tag":"path","attr":{"fill":"#fff","d":"M28.4,27c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.2,0.7,0.3,1.1,0.5c0.7,0.3,1.4,0.6,2,0.9 c0.6,0.3,1.1,0.7,1.5,1.1c0.4,0.4,0.8,0.9,1,1.4c0.2,0.5,0.4,1.2,0.4,1.9c0,0.7-0.1,1.3-0.3,1.8c-0.2,0.5-0.5,1-0.9,1.4 s-0.9,0.7-1.4,0.9c-0.6,0.2-1.2,0.4-1.8,0.5v2.2h-1.8v-2.2c-0.6-0.1-1.2-0.2-1.8-0.4s-1.1-0.5-1.5-1c-0.5-0.4-0.8-1-1.1-1.6 c-0.3-0.6-0.4-1.4-0.4-2.3h3.3c0,0.5,0.1,1,0.2,1.3c0.1,0.4,0.3,0.6,0.6,0.9c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.6,0.1,0.9,0.1 c0.4,0,0.7,0,0.9-0.1c0.3-0.1,0.5-0.2,0.7-0.4c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.1-0.5,0.1-0.8c0-0.3,0-0.6-0.1-0.8 c-0.1-0.2-0.2-0.5-0.4-0.7s-0.4-0.4-0.7-0.5c-0.3-0.2-0.7-0.3-1.1-0.5c-0.7-0.3-1.4-0.6-2-0.9c-0.6-0.3-1.1-0.7-1.5-1.1 c-0.4-0.4-0.8-0.9-1-1.4c-0.2-0.5-0.4-1.2-0.4-1.9c0-0.6,0.1-1.2,0.3-1.7c0.2-0.5,0.5-1,0.9-1.4c0.4-0.4,0.9-0.7,1.4-1 c0.5-0.2,1.2-0.4,1.8-0.5v-2.4h1.8v2.4c0.6,0.1,1.2,0.3,1.8,0.6c0.5,0.3,1,0.6,1.3,1.1c0.4,0.4,0.7,1,0.9,1.6c0.2,0.6,0.3,1.3,0.3,2 h-3.3c0-0.9-0.2-1.6-0.6-2c-0.4-0.4-0.9-0.7-1.5-0.7c-0.3,0-0.6,0.1-0.9,0.2c-0.2,0.1-0.4,0.2-0.6,0.4c-0.2,0.2-0.3,0.4-0.3,0.6 c-0.1,0.2-0.1,0.5-0.1,0.8C28.3,26.5,28.4,26.8,28.4,27z"}}]})(props);
};
function FcCursor (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E0E0E0","d":"M27.8,39.7c-0.1,0-0.2,0-0.4-0.1c-0.2-0.1-0.4-0.3-0.6-0.5l-3.7-8.6l-4.5,4.2C18.5,34.9,18.3,35,18,35 c-0.1,0-0.3,0-0.4-0.1C17.3,34.8,17,34.4,17,34l0-22c0-0.4,0.2-0.8,0.6-0.9C17.7,11,17.9,11,18,11c0.2,0,0.5,0.1,0.7,0.3l16,15 c0.3,0.3,0.4,0.7,0.3,1.1c-0.1,0.4-0.5,0.6-0.9,0.7l-6.3,0.6l3.9,8.5c0.1,0.2,0.1,0.5,0,0.8c-0.1,0.2-0.3,0.5-0.5,0.6l-2.9,1.3 C28.1,39.7,27.9,39.7,27.8,39.7z"}},{"tag":"path","attr":{"fill":"#212121","d":"M18,12l16,15l-7.7,0.7l4.5,9.8l-2.9,1.3l-4.3-9.9L18,34L18,12 M18,10c-0.3,0-0.5,0.1-0.8,0.2 c-0.7,0.3-1.2,1-1.2,1.8l0,22c0,0.8,0.5,1.5,1.2,1.8C17.5,36,17.8,36,18,36c0.5,0,1-0.2,1.4-0.5l3.4-3.2l3.1,7.3 c0.2,0.5,0.6,0.9,1.1,1.1c0.2,0.1,0.5,0.1,0.7,0.1c0.3,0,0.5-0.1,0.8-0.2l2.9-1.3c0.5-0.2,0.9-0.6,1.1-1.1c0.2-0.5,0.2-1.1,0-1.5 l-3.3-7.2l4.9-0.4c0.8-0.1,1.5-0.6,1.7-1.3c0.3-0.7,0.1-1.6-0.5-2.1l-16-15C19,10.2,18.5,10,18,10L18,10z"}}]})(props);
};
function FcCustomerSupport (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFB74D","d":"M29,43v-4.6l2.6,0.5c2.9,0.6,5.6-1.5,5.8-4.4L38,28l2.9-1.2c1-0.4,1.4-1.6,0.8-2.6L38,18 c-0.6-7.6-4.9-15-16-15C10.6,3,5,11.4,5,20c0,3.7,1.3,6.9,3.3,9.6c1.8,2.5,2.7,5.5,2.7,8.5l0,4.8H29z"}},{"tag":"polygon","attr":{"fill":"#FF9800","points":"29,43 29,38.4 22,37 22,43"}},{"tag":"circle","attr":{"fill":"#784719","cx":"33.5","cy":"21.5","r":"1.5"}},{"tag":"path","attr":{"fill":"#FF5722","d":"M21.4,3C12.3,3,5,10.3,5,19.4c0,11.1,6,11.4,6,18.6l2.6-0.9c2.1-0.7,3.9-2.3,4.7-4.4l2.8-6.8L27,23v-6 c0,0,7-3.8,7-10.3C31,4.2,25.7,3,21.4,3z"}},{"tag":"g","attr":{"fill":"#546E7A"},"child":[{"tag":"path","attr":{"d":"M21,2.1c-0.6,0-1,0.4-1,1v13.9c0,0.6,0.4,1,1,1s1-0.4,1-1V3.1C22,2.5,21.6,2.1,21,2.1z"}},{"tag":"path","attr":{"d":"M36.9,31.9c-7.9,0-10.3-4.9-10.4-5.1c-0.2-0.5-0.8-0.7-1.3-0.5c-0.5,0.2-0.7,0.8-0.5,1.3 c0.1,0.3,3,6.3,12.2,6.3c0.6,0,1-0.4,1-1S37.4,31.9,36.9,31.9z"}}]},{"tag":"circle","attr":{"fill":"#37474F","cx":"37","cy":"33","r":"2"}},{"tag":"circle","attr":{"fill":"#37474F","cx":"21","cy":"23","r":"7"}},{"tag":"circle","attr":{"fill":"#546E7A","cx":"21","cy":"23","r":"4"}}]})(props);
};
function FcDam (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#81D4FA"},"child":[{"tag":"rect","attr":{"x":"24","y":"28","width":"18","height":"14"}},{"tag":"rect","attr":{"x":"6","y":"10","width":"12","height":"32"}}]},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"path","attr":{"d":"M16,8h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,10,16,9.1,16,8z"}},{"tag":"path","attr":{"d":"M16,14h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,16,16,15.1,16,14z"}},{"tag":"path","attr":{"d":"M16,20h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,22,16,21.1,16,20z"}},{"tag":"path","attr":{"d":"M16,26h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,28,16,27.1,16,26z"}},{"tag":"path","attr":{"d":"M16,32h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,34,16,33.1,16,32z"}},{"tag":"path","attr":{"d":"M16,38h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,40,16,39.1,16,38z"}},{"tag":"path","attr":{"d":"M40,32h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2h-2c0,1.1-0.9,2-2,2v2 c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2 C40.9,34,40,33.1,40,32z"}},{"tag":"path","attr":{"d":"M40,26h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2h-2c0,1.1-0.9,2-2,2v2 c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2 C40.9,28,40,27.1,40,26z"}},{"tag":"path","attr":{"d":"M40,38h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2h-2c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C40.9,40,40,39.1,40,38z"}}]},{"tag":"path","attr":{"fill":"#455A64","d":"M25.1,9.2L31.5,42H18V6h3.2C23.1,6,24.8,7.4,25.1,9.2z"}}]})(props);
};
function FcDataBackup (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"}},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"}},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"}}]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"polygon","attr":{"points":"31,30 38,35.6 38,24.4"}},{"tag":"path","attr":{"d":"M38,28c-0.3,0-0.7,0-1,0.1v4c0.3-0.1,0.7-0.1,1-0.1c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6 c0-0.3,0-0.6,0.1-0.9l-3.4-2.7C28.3,35.5,28,36.7,28,38c0,5.5,4.5,10,10,10s10-4.5,10-10S43.5,28,38,28z"}}]}]})(props);
};
function FcDataConfiguration (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"}},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"}},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"}}]},{"tag":"path","attr":{"fill":"#607D8B","d":"M45.2,38.1c0.1-0.4,0.1-0.8,0.1-1.1s0-0.8-0.1-1.1l2.3-1.7c0.2-0.2,0.3-0.5,0.2-0.7l-2.3-3.9 c-0.1-0.2-0.4-0.3-0.7-0.2l-2.6,1.2c-0.6-0.5-1.3-0.9-2-1.2l-0.3-2.9c0-0.3-0.3-0.5-0.5-0.5h-4.5c-0.3,0-0.5,0.2-0.5,0.5l-0.3,2.9 c-0.7,0.3-1.4,0.7-2,1.2l-2.6-1.2c-0.3-0.1-0.6,0-0.7,0.2l-2.3,3.9c-0.1,0.2-0.1,0.6,0.2,0.7l2.3,1.7c-0.1,0.4-0.1,0.8-0.1,1.1 s0,0.8,0.1,1.1l-2.3,1.7c-0.2,0.2-0.3,0.5-0.2,0.7l2.3,3.9c0.1,0.2,0.4,0.3,0.7,0.2l2.6-1.2c0.6,0.5,1.3,0.9,2,1.2l0.3,2.9 c0,0.3,0.3,0.5,0.5,0.5h4.5c0.3,0,0.5-0.2,0.5-0.5l0.3-2.9c0.7-0.3,1.4-0.7,2-1.2l2.6,1.2c0.3,0.1,0.6,0,0.7-0.2l2.3-3.9 c0.1-0.2,0.1-0.6-0.2-0.7L45.2,38.1z M37,42.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2 C42.2,39.9,39.9,42.2,37,42.2z"}},{"tag":"path","attr":{"fill":"#455A64","d":"M37,31c-3.3,0-6,2.7-6,6c0,3.3,2.7,6,6,6s6-2.7,6-6C43,33.7,40.3,31,37,31z M37,40c-1.7,0-3-1.3-3-3 c0-1.7,1.3-3,3-3s3,1.3,3,3C40,38.7,38.7,40,37,40z"}}]})(props);
};
function FcDataEncryption (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"}},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h25.1c1.3-1.3,4.9-0.9,4.9-2v-6C40,19.9,39.1,19,38,19z"}},{"tag":"path","attr":{"d":"M34.4,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-2.4C40,33.5,37.5,31,34.4,31z"}}]},{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"polygon","attr":{"points":"43,46 41,48 39,48 37,46 37,35.4 43,35.4 43,40 42,41 43,42 43,43 42,44 43,45"}},{"tag":"path","attr":{"d":"M47.5,28.5c-0.3-0.9-1-1.6-2-1.8C44.2,26.4,42.2,26,40,26s-4.2,0.4-5.5,0.6c-1,0.2-1.7,0.9-2,1.8 C32.3,29.4,32,30.6,32,32c0,1.4,0.3,2.6,0.5,3.5c0.3,0.9,1,1.6,2,1.8c1.3,0.3,3.2,0.6,5.5,0.6s4.2-0.4,5.5-0.6c1-0.2,1.7-0.9,2-1.8 c0.3-0.9,0.5-2.1,0.5-3.5C48,30.6,47.7,29.4,47.5,28.5z M42.9,31h-5.7c-0.6,0-1.1-0.5-1.1-1.1v-1.4c0-0.3,1.8-0.6,4-0.6 s4,0.3,4,0.6v1.4C44,30.5,43.5,31,42.9,31z"}}]},{"tag":"rect","attr":{"x":"39","y":"37.1","fill":"#D68600","width":"1","height":"10.9"}}]})(props);
};
function FcDataProtection (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"}},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h25.1c1.3-1.3,4.9-0.9,4.9-2v-6C40,19.9,39.1,19,38,19z"}},{"tag":"path","attr":{"d":"M34.4,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-2.4C40,33.5,37.5,31,34.4,31z"}}]},{"tag":"path","attr":{"fill":"#009688","d":"M46,25H32c-1.1,0-2,0.9-2,2v11.8c0,1.3,0.6,2.4,1.6,3.2l7.4,5.5l7.4-5.5c1-0.8,1.6-1.9,1.6-3.2V27 C48,25.9,47.1,25,46,25z"}}]})(props);
};
function FcDataRecovery (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"}},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"}},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"}}]},{"tag":"g","attr":{"fill":"#F44336"},"child":[{"tag":"rect","attr":{"x":"35","y":"28","width":"6","height":"20"}},{"tag":"rect","attr":{"x":"28","y":"35","width":"20","height":"6"}}]}]})(props);
};
function FcDataSheet (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M39,16v7h-6v-7h-2v7h-6v-7h-2v7h-7v2h7v6h-7v2h7v6h-7v2h25V16H39z M39,25v6h-6v-6H39z M25,25h6v6h-6V25z M25,33h6v6h-6V33z M33,39v-6h6v6H33z"}},{"tag":"polygon","attr":{"fill":"#00BCD4","points":"40,8 8,8 8,40 16,40 16,16 40,16"}},{"tag":"path","attr":{"fill":"#0097A7","d":"M7,7v34h10V17h24V7H7z M9,23v-6h6v6H9z M15,25v6H9v-6H15z M17,9h6v6h-6V9z M25,9h6v6h-6V9z M15,9v6H9V9H15z M9,39v-6h6v6H9z M39,15h-6V9h6V15z"}}]})(props);
};
function FcDatabase (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"}},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"}},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"}}]}]})(props);
};
function FcDebian (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E91E63","d":"M26.763,24.548c-0.614,0.01,0.117,0.317,0.918,0.44c0.22-0.172,0.419-0.348,0.6-0.515\r\n\tC27.781,24.592,27.274,24.594,26.763,24.548 M30.054,23.727c0.364-0.5,0.631-1.055,0.723-1.624c-0.082,0.405-0.303,0.755-0.51,1.128\r\n\tc-1.146,0.721-0.108-0.43,0-0.865C29.035,23.913,30.098,23.293,30.054,23.727 M31.269,20.568c0.073-1.105-0.219-0.756-0.317-0.336\r\n\tC31.068,20.294,31.156,21.013,31.269,20.568 M24.439,5.478c0.327,0.058,0.706,0.104,0.653,0.183\r\n\tC25.449,5.582,25.531,5.51,24.439,5.478 M25.093,5.66l-0.232,0.047l0.215-0.017L25.093,5.66 M35.294,20.986\r\n\tc0.038,0.991-0.29,1.472-0.585,2.322l-0.529,0.266c-0.435,0.841,0.041,0.535-0.268,1.202c-0.679,0.603-2.055,1.883-2.496,2.004\r\n\tc-0.321-0.009,0.218-0.382,0.289-0.526c-0.906,0.62-0.728,0.934-2.113,1.313l-0.041-0.09c-3.419,1.607-8.166-1.576-8.103-5.928\r\n\tc-0.037,0.275-0.104,0.209-0.18,0.32c-0.175-2.237,1.033-4.486,3.073-5.403c1.995-0.987,4.335-0.58,5.763,0.75\r\n\tc-0.785-1.028-2.348-2.119-4.199-2.017c-1.814,0.029-3.51,1.182-4.077,2.434c-0.929,0.585-1.038,2.256-1.441,2.563\r\n\tc-0.545,4.003,1.024,5.733,3.68,7.768c0.417,0.282,0.118,0.326,0.175,0.541c-0.883-0.412-1.69-1.037-2.354-1.801\r\n\tc0.353,0.517,0.733,1.017,1.223,1.41c-0.831-0.279-1.942-2.013-2.267-2.084c1.435,2.567,5.818,4.502,8.113,3.541\r\n\tc-1.062,0.04-2.412,0.021-3.604-0.42c-0.501-0.257-1.183-0.791-1.062-0.893c3.133,1.171,6.369,0.887,9.078-1.286\r\n\tc0.689-0.537,1.443-1.449,1.662-1.464c-0.327,0.493,0.057,0.239-0.197,0.674c0.688-1.109-0.299-0.449,0.711-1.913l0.373,0.512\r\n\tc-0.139-0.917,1.143-2.033,1.012-3.489c0.291-0.445,0.326,0.478,0.015,1.502c0.434-1.136,0.113-1.317,0.224-2.254\r\n\tc0.121,0.315,0.279,0.648,0.359,0.981c-0.281-1.097,0.289-1.848,0.433-2.485c-0.142-0.063-0.435,0.485-0.503-0.812\r\n\tc0.01-0.562,0.156-0.295,0.214-0.435c-0.111-0.064-0.4-0.496-0.577-1.323c0.127-0.193,0.342,0.506,0.516,0.533\r\n\tc-0.112-0.655-0.304-1.159-0.313-1.665c-0.51-1.061-0.181,0.143-0.592-0.458c-0.543-1.687,0.449-0.39,0.514-1.156\r\n\tc0.82,1.188,1.289,3.029,1.504,3.792c-0.164-0.93-0.428-1.832-0.752-2.704c0.249,0.108-0.401-1.911,0.324-0.575\r\n\tc-0.772-2.848-3.314-5.511-5.65-6.76c0.286,0.262,0.646,0.591,0.517,0.642c-1.163-0.69-0.959-0.745-1.124-1.041\r\n\tc-0.946-0.383-1.01,0.034-1.636,0c-1.786-0.943-2.129-0.845-3.772-1.437l0.078,0.349c-1.184-0.394-1.379,0.146-2.657,0.002\r\n\tc-0.078-0.062,0.41-0.219,0.811-0.278c-1.143,0.15-1.09-0.228-2.208,0.042c0.277-0.197,0.566-0.322,0.861-0.486\r\n\tc-0.932,0.059-2.226,0.542-1.825,0.103c-1.521,0.676-4.22,1.63-5.735,3.051l-0.047-0.322c-0.694,0.835-3.028,2.492-3.215,3.57\r\n\tl-0.185,0.043c-0.361,0.613-0.595,1.305-0.881,1.935c-0.474,0.806-0.692,0.311-0.626,0.436c-0.929,1.883-1.39,3.467-1.79,4.768\r\n\tc0.284,0.424,0.007,2.558,0.113,4.264c-0.467,8.429,5.916,16.609,12.891,18.5c1.023,0.365,2.542,0.354,3.836,0.39\r\n\tc-1.525-0.438-1.722-0.232-3.209-0.749c-1.074-0.506-1.308-1.082-2.066-1.74l0.3,0.53c-1.49-0.526-0.867-0.652-2.078-1.034\r\n\tl0.321-0.424c-0.482-0.032-1.279-0.811-1.497-1.241l-0.528,0.021c-0.634-0.783-0.972-1.348-0.948-1.785l-0.17,0.305\r\n\tc-0.194-0.332-2.335-2.937-1.224-2.33c-0.207-0.188-0.481-0.307-0.779-0.85l0.227-0.258c-0.535-0.686-0.983-1.568-0.949-1.86\r\n\tc0.284,0.384,0.482,0.454,0.679,0.522c-1.351-3.349-1.426-0.187-2.448-3.409l0.216-0.019c-0.166-0.246-0.265-0.521-0.399-0.785\r\n\tl0.094-0.938c-0.972-1.125-0.272-4.781-0.132-6.783c0.097-0.816,0.811-1.684,1.354-3.045l-0.332-0.055\r\n\tc0.632-1.104,3.612-4.433,4.99-4.26c0.669-0.841-0.132-0.002-0.263-0.215c1.469-1.52,1.93-1.073,2.92-1.349\r\n\tc1.068-0.633-0.917,0.251-0.41-0.239c1.848-0.473,1.31-1.073,3.718-1.311c0.254,0.145-0.59,0.223-0.8,0.41\r\n\tc1.538-0.753,4.87-0.584,7.034,0.417c2.511,1.173,5.33,4.642,5.443,7.904l0.126,0.035c-0.063,1.298,0.198,2.798-0.257,4.175\r\n\tL35.294,20.986 M20.072,25.389l-0.086,0.431c0.403,0.547,0.724,1.142,1.237,1.567C20.853,26.664,20.577,26.364,20.072,25.389\r\n\t M21.023,25.353c-0.213-0.237-0.34-0.518-0.48-0.802c0.135,0.495,0.411,0.922,0.669,1.357L21.023,25.353 M37.877,21.688\r\n\tl-0.088,0.226c-0.166,1.174-0.523,2.332-1.068,3.412C37.324,24.189,37.714,22.947,37.877,21.688 M24.56,5.185\r\n\tC24.974,5.031,25.579,5.101,26.019,5c-0.573,0.048-1.144,0.079-1.706,0.151L24.56,5.185 M10.007,12.923\r\n\tc0.095,0.882-0.667,1.229,0.167,0.644C10.623,12.562,10,13.286,10.007,12.923 M9.028,17.016c0.191-0.592,0.226-0.943,0.3-1.285\r\n\tC8.797,16.41,9.084,16.553,9.028,17.016"}}]})(props);
};
function FcDebt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFB74D","d":"M10,12c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,12,10,12z"}},{"tag":"path","attr":{"fill":"#607D8B","d":"M2,22v8l3,2l1,14h8l1-14l3-2v-8c0-4.4-3.6-8-8-8h0C5.6,14,2,17.6,2,22z"}},{"tag":"g","attr":{"fill":"#263238"},"child":[{"tag":"path","attr":{"d":"M22.4,40.4c-0.6,2.5-1,3.6-2.4,3.6c-0.6,0-1.2-0.5-1.9-1.1c-1-0.8-2.2-1.9-4.1-1.9v2c1.1,0,1.9,0.7,2.8,1.4 c0.9,0.7,1.9,1.6,3.2,1.6c3.1,0,3.8-2.9,4.4-5.2C25,38.2,25.4,37,27,37v-2C23.7,35,22.9,38.1,22.4,40.4z"}},{"tag":"polygon","attr":{"points":"14.4,40 10,40 10,44 14.1,44"}}]},{"tag":"circle","attr":{"fill":"#4CAF50","cx":"36","cy":"36","r":"10"}},{"tag":"path","attr":{"fill":"#fff","d":"M35,34c0.1,0.2,0.1,0.3,0.3,0.4c0.1,0.1,0.3,0.2,0.5,0.4c0.2,0.1,0.5,0.2,0.8,0.3c0.5,0.2,0.9,0.4,1.3,0.6 c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,0.9c0.2,0.4,0.2,0.8,0.2,1.3c0,0.4-0.1,0.8-0.2,1.2c-0.1,0.4-0.3,0.7-0.6,0.9 c-0.3,0.3-0.6,0.5-0.9,0.6c-0.4,0.2-0.8,0.3-1.2,0.3v1.5h-1.2v-1.5c-0.4,0-0.8-0.1-1.2-0.3c-0.4-0.2-0.7-0.4-1-0.6 c-0.3-0.3-0.5-0.6-0.7-1.1c-0.2-0.4-0.3-0.9-0.3-1.5h2.2c0,0.4,0,0.7,0.1,0.9c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.1,0.3,0.2,0.5,0.3 c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.1-0.3,0.1-0.5 c0-0.2,0-0.4-0.1-0.6c-0.1-0.2-0.1-0.3-0.3-0.4c-0.1-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.2-0.7-0.3c-0.5-0.2-0.9-0.4-1.3-0.6 c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-0.9c-0.2-0.4-0.2-0.8-0.2-1.3c0-0.4,0.1-0.8,0.2-1.2c0.1-0.3,0.3-0.7,0.6-0.9 c0.3-0.3,0.6-0.5,0.9-0.6c0.4-0.2,0.8-0.3,1.2-0.3v-1.6h1.2v1.6c0.4,0.1,0.8,0.2,1.2,0.4c0.4,0.2,0.6,0.4,0.9,0.7 c0.2,0.3,0.4,0.6,0.6,1c0.1,0.4,0.2,0.9,0.2,1.4h-2.2c0-0.6-0.1-1-0.4-1.3c-0.2-0.3-0.6-0.4-1-0.4c-0.2,0-0.4,0-0.6,0.1 c-0.2,0.1-0.3,0.2-0.4,0.3C35.1,32.7,35,32.8,35,33s-0.1,0.3-0.1,0.5C34.9,33.7,34.9,33.9,35,34z"}}]})(props);
};
function FcDecision (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"}},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"}},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"}},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"}}]},{"tag":"path","attr":{"fill":"#0277BD","d":"M21.8,29.6c0-6.6,5.1-6.2,5.1-10.2c0-1-0.3-3-2.9-3c-2.8,0-3,2.3-3,2.8h-3.8c0-1,0.4-6,6.8-6 c6.5,0,6.7,5.1,6.7,6c0,4.9-5.4,5.6-5.4,10.3H21.8z M21.5,34.5c0-0.3,0.1-2.1,2.1-2.1c2,0,2.2,1.8,2.2,2.1c0,0.6-0.3,2-2.2,2 C21.8,36.5,21.5,35.1,21.5,34.5z"}}]})(props);
};
function FcDeleteColumn (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M30,5H18c-2.2,0-4,1.8-4,4v30c0,2.2,1.8,4,4,4h12c2.2,0,4-1.8,4-4V9C34,6.8,32.2,5,30,5z M18,39V9h12l0,30 H18z"}},{"tag":"circle","attr":{"fill":"#F44336","cx":"38","cy":"38","r":"10"}},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 .707 -.707 -.707 91.74 38)","width":"3","height":"12"}},{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 -.707 .707 -.707 38 91.74)","width":"3","height":"12"}}]}]})(props);
};
function FcDeleteDatabase (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"}},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"}},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"}}]},{"tag":"circle","attr":{"fill":"#F44336","cx":"38","cy":"38","r":"10"}},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 .707 -.707 -.707 91.74 38)","width":"3","height":"12"}},{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 -.707 .707 -.707 38 91.74)","width":"3","height":"12"}}]}]})(props);
};
function FcDeleteRow (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M43,30V18c0-2.2-1.8-4-4-4H9c-2.2,0-4,1.8-4,4v12c0,2.2,1.8,4,4,4h30C41.2,34,43,32.2,43,30z M9,18h30v12 L9,30V18z"}},{"tag":"circle","attr":{"fill":"#F44336","cx":"38","cy":"38","r":"10"}},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 .707 -.707 -.707 91.74 38)","width":"3","height":"12"}},{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 -.707 .707 -.707 38 91.74)","width":"3","height":"12"}}]}]})(props);
};
function FcDepartment (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#C5CAE9","points":"42,42 6,42 6,9 24,2 42,9"}},{"tag":"rect","attr":{"x":"6","y":"42","fill":"#9FA8DA","width":"36","height":"2"}},{"tag":"rect","attr":{"x":"20","y":"35","fill":"#BF360C","width":"8","height":"9"}},{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"rect","attr":{"x":"31","y":"27","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"21","y":"27","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"11","y":"27","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"31","y":"35","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"11","y":"35","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"31","y":"19","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"21","y":"19","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"11","y":"19","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"31","y":"11","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"21","y":"11","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"11","y":"11","width":"6","height":"5"}}]}]})(props);
};
function FcDeployment (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#B0BEC5","d":"M37,42H5V32h32c2.8,0,5,2.2,5,5v0C42,39.8,39.8,42,37,42z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M10,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S11.7,34,10,34z M10,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C11,37.6,10.6,38,10,38z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M19,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S20.7,34,19,34z M19,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C20,37.6,19.6,38,19,38z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M37,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S38.7,34,37,34z M37,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C38,37.6,37.6,38,37,38z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M28,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S29.7,34,28,34z M28,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C29,37.6,28.6,38,28,38z"}},{"tag":"path","attr":{"fill":"#FF9800","d":"M35,31H11c-1.1,0-2-0.9-2-2V7c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v22C37,30.1,36.1,31,35,31z"}},{"tag":"path","attr":{"fill":"#8A5100","d":"M26.5,13h-7c-0.8,0-1.5-0.7-1.5-1.5v0c0-0.8,0.7-1.5,1.5-1.5h7c0.8,0,1.5,0.7,1.5,1.5v0 C28,12.3,27.3,13,26.5,13z"}},{"tag":"path","attr":{"fill":"#607D8B","d":"M37,31H5v2h32c2.2,0,4,1.8,4,4s-1.8,4-4,4H5v2h32c3.3,0,6-2.7,6-6S40.3,31,37,31z"}}]})(props);
};
function FcDiploma1 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"4","y":"9","fill":"#E8EAF6","width":"40","height":"30"}},{"tag":"g","attr":{"fill":"#5C6BC0"},"child":[{"tag":"polygon","attr":{"points":"30,34 32.8,34 27.8,29 25,31.8 30,36.8"}},{"tag":"polygon","attr":{"points":"18,34 15.2,34 20.2,29 23,31.8 18,36.8"}}]},{"tag":"rect","attr":{"x":"11","y":"15","fill":"#9FA8DA","width":"26","height":"4"}},{"tag":"path","attr":{"fill":"#9FA8DA","d":"M24,23c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S26.8,23,24,23z M24,31c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3 S25.7,31,24,31z"}},{"tag":"path","attr":{"fill":"#9FA8DA","d":"M3,8v32h42V8H3z M43,35c-1.7,0-3,1.3-3,3H8c0-1.7-1.3-3-3-3V13c1.7,0,3-1.3,3-3h32c0,1.7,1.3,3,3,3V35z"}}]})(props);
};
function FcDiploma2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"9","y":"4","fill":"#FBE9E7","width":"30","height":"40"}},{"tag":"g","attr":{"fill":"#F4511E"},"child":[{"tag":"polygon","attr":{"points":"30,37 32.8,37 27.8,32 25,34.8 30,39.8"}},{"tag":"polygon","attr":{"points":"18,37 15.2,37 20.2,32 23,34.8 18,39.8"}}]},{"tag":"rect","attr":{"x":"15","y":"13","fill":"#FF8A65","width":"18","height":"4"}},{"tag":"rect","attr":{"x":"15","y":"20","fill":"#FF8A65","width":"18","height":"2"}},{"tag":"path","attr":{"fill":"#FF8A65","d":"M24,26c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S26.8,26,24,26z M24,34c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3 S25.7,34,24,34z"}},{"tag":"path","attr":{"fill":"#FF8A65","d":"M8,3v42h32V3H8z M38,40c-1.7,0-3,1.3-3,3H13c0-1.7-1.3-3-3-3V8c1.7,0,3-1.3,3-3h22c0,1.7,1.3,3,3,3V40z"}}]})(props);
};
function FcDisapprove (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"}},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"}},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"}},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"}}]},{"tag":"g","attr":{"fill":"#F44336"},"child":[{"tag":"rect","attr":{"x":"22","y":"16.8","transform":"matrix(.707 -.707 .707 .707 -11.355 24.586)","width":"4","height":"18.5"}},{"tag":"rect","attr":{"x":"22","y":"16.8","transform":"matrix(.707 .707 -.707 .707 25.414 -9.355)","width":"4","height":"18.5"}}]}]})(props);
};
function FcDisclaimer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"path","attr":{"d":"M13,22H8v-8.5c0-1.4,1.1-2.5,2.5-2.5h0c1.4,0,2.5,1.1,2.5,2.5V22z"}},{"tag":"path","attr":{"d":"M20,22h-5V7.5C15,6.1,16.1,5,17.5,5h0C18.9,5,20,6.1,20,7.5V22z"}},{"tag":"path","attr":{"d":"M27,22h-5V5.5C22,4.1,23.1,3,24.5,3h0C25.9,3,27,4.1,27,5.5V22z"}},{"tag":"path","attr":{"d":"M34,22h-5V8.5C29,7.1,30.1,6,31.5,6h0C32.9,6,34,7.1,34,8.5V22z"}},{"tag":"path","attr":{"d":"M32.1,43L27.1,38l10-10c1.4-1.4,3.6-1.4,4.9,0l0,0c1.4,1.4,1.4,3.6,0,4.9L32.1,43z"}},{"tag":"path","attr":{"d":"M29,21c0,0.6-0.4,1-1,1s-1-0.4-1-1h-5c0,0.6-0.4,1-1,1s-1-0.4-1-1h-5c0,0.6-0.4,1-1,1s-1-0.4-1-1H8v16 c0,4.4,3.6,8,8,8h11.2c3.7,0,6.8-3,6.8-6.8V21H29z"}}]},{"tag":"g","attr":{"fill":"#F44336"},"child":[{"tag":"rect","attr":{"x":"20.2","y":"25.5","transform":"matrix(.707 -.707 .707 .707 -16.897 25.224)","width":"3.5","height":"15"}},{"tag":"rect","attr":{"x":"20.2","y":"25.6","transform":"matrix(.707 .707 -.707 .707 29.811 -5.877)","width":"3.5","height":"15"}}]}]})(props);
};
function FcDislike (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"}},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"}}]})(props);
};
function FcDisplay (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#80DEEA","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"}},{"tag":"g","attr":{"fill":"#2962FF"},"child":[{"tag":"polygon","attr":{"points":"36,17 31,17 29,15 31,13 36,13 38,15"}},{"tag":"polygon","attr":{"points":"36,35 31,35 29,33 31,31 36,31 38,33"}},{"tag":"polygon","attr":{"points":"37,30 37,18 39,16 41,18 41,30 39,32"}},{"tag":"polygon","attr":{"points":"26,30 26,18 28,16 30,18 30,30 28,32"}},{"tag":"polygon","attr":{"points":"17,17 12,17 10,15 12,13 17,13 19,15"}},{"tag":"polygon","attr":{"points":"17,35 12,35 10,33 12,31 17,31 19,33"}},{"tag":"polygon","attr":{"points":"18,30 18,18 20,16 22,18 22,30 20,32"}},{"tag":"polygon","attr":{"points":"7,30 7,18 9,16 11,18 11,30 9,32"}}]}]})(props);
};
function FcDoNotInhale (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFA726","d":"M33.5,20C31.2,17.7,30,13.9,30,9c0-3.2,0-3,0-3H18c0,0,0-0.2,0,3c0,4.9-1.2,8.7-3.5,11 C12.1,20.2,9,22,9,25.4c0,4.5,5.1,4.6,6,4.6c1.2,0,6.1,4,8,4c0,0,0.7,0,1,0s1,0,1,0c1.9,0,6.8-4,8-4c0.9,0,6-0.1,6-4.6 C39,22,35.9,20.2,33.5,20z"}},{"tag":"path","attr":{"fill":"#FFA726","d":"M33.5,20C31.2,17.7,30,13.9,30,9c0-3.2,0-3,0-3H18c0,0,0-0.2,0,3c0,4.9-1.2,8.7-3.5,11 C12.1,20.2,9,22,9,25.4c0,4.5,5.1,4.6,6,4.6c1.2,0,6.1,4,8,4c0,0,0.7,0,1,0s1,0,1,0c1.9,0,6.8-4,8-4c0.9,0,6-0.1,6-4.6 C39,22,35.9,20.2,33.5,20z"}},{"tag":"path","attr":{"fill":"#FFB74D","d":"M26,9c0-3.2,0-3,0-3h-4c0,0,0-0.2,0,3c0,4.9-3,19-3,19s1.6,2,5,2s5-2,5-2S26,13.9,26,9z"}},{"tag":"path","attr":{"fill":"#CC861E","d":"M23,34c-3.3,0-6.4-3.1-8-4c0,0,0.7,0,1.8,0C19.9,30,21.3,34,23,34z"}},{"tag":"path","attr":{"fill":"#CC861E","d":"M25,34c3.3,0,6.4-3.1,8-4c0,0-0.7,0-1.8,0C28.1,30,26.7,34,25,34z"}},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"}},{"tag":"g","attr":{"fill":"#FF5722"},"child":[{"tag":"polygon","attr":{"points":"18,35 22,39 14,39"}},{"tag":"rect","attr":{"x":"17","y":"38","width":"2","height":"4"}},{"tag":"polygon","attr":{"points":"30,35 34,39 26,39"}},{"tag":"rect","attr":{"x":"29","y":"38","width":"2","height":"4"}}]}]})(props);
};
function FcDoNotInsert (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#7CB342"},"child":[{"tag":"polygon","attr":{"points":"31,29 24,36 17,29"}},{"tag":"rect","attr":{"x":"22","y":"7","width":"4","height":"25"}},{"tag":"path","attr":{"d":"M42,18c-3.3,0-6,2.7-6,6v12c0,1.1-0.9,2-2,2H14c-1.1,0-2-0.9-2-2V24c0-3.3-2.7-6-6-6H4v4h2c1.1,0,2,0.9,2,2 v12c0,3.3,2.7,6,6,6h20c3.3,0,6-2.7,6-6V24c0-1.1,0.9-2,2-2h2v-4H42z"}}]},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"}}]})(props);
};
function FcDoNotMix (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#00BCD4","points":"26.9,42 17,42 17,32.1"}},{"tag":"polygon","attr":{"fill":"#00BCD4","points":"30,6 30,26.2 19.8,36.4 22.6,39.2 34,27.8 34,6"}},{"tag":"polygon","attr":{"fill":"#2196F3","points":"15.9,31 6,31 6,21.1"}},{"tag":"polygon","attr":{"fill":"#2196F3","points":"20.2,14 8.8,25.4 11.6,28.2 21.8,18 41,18 41,14"}},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"}}]})(props);
};
function FcDocument (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,45 8,45 8,3 30,3 40,13"}},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,14 29,14 29,4.5"}},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"rect","attr":{"x":"16","y":"21","width":"17","height":"2"}},{"tag":"rect","attr":{"x":"16","y":"25","width":"13","height":"2"}},{"tag":"rect","attr":{"x":"16","y":"29","width":"17","height":"2"}},{"tag":"rect","attr":{"x":"16","y":"33","width":"13","height":"2"}}]}]})(props);
};
function FcDonate (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#E69329","points":"11.7,21.6 16.8,31.5 26.3,27.6 30.7,14.9 15.9,15.7"}},{"tag":"circle","attr":{"fill":"#546E7A","cx":"15","cy":"36","r":"7.8"}},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"path","attr":{"d":"M15,27c-5,0-9,4-9,9c0,5,4,9,9,9s9-4,9-9C24,31,20,27,15,27z M15,43c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7 s7,3.1,7,7C22,39.9,18.9,43,15,43z"}},{"tag":"rect","attr":{"x":"14","y":"33","width":"2","height":"8"}}]},{"tag":"g","attr":{"fill":"#FFB74D"},"child":[{"tag":"path","attr":{"d":"M12.9,36L12.9,36c1,1.9,3.2,2.7,5.1,1.7l16.5-8.5c1-0.5,1.7-1.2,2.2-1.9c1.7-3.2,5.6-10.7,8.2-17.2 l-18.2,8.7L21.9,26l-6.8,3.6C12.5,30.9,11.7,33.8,12.9,36z"}},{"tag":"path","attr":{"d":"M30.2,3L13.7,9.3c-0.7,0.2-1.5,1-2.2,1.7l-5.6,7.5c-1,1.5-1.2,3.4-0.5,5.1c0.4,1,1.7,3.4,3.1,6.1 c1.6-1.7,3.9-2.7,6.5-2.7c0.4,0,0.9,0,1.3,0.1l-2.1-4.2l4.6-4.1h8c0,0,15.5-2.2,18.2-8.7L30.2,3z"}}]},{"tag":"path","attr":{"fill":"#FFCDD2","d":"M18.2,36c-1.3,0.6-2.8,0-3.3-1.3c-0.6-1.3,0-2.8,1.3-3.3C17.4,30.8,19.4,35.4,18.2,36z"}}]})(props);
};
function FcDoughnutChart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#00BCD4","d":"M24,30c-3.3,0-6-2.7-6-6s2.7-6,6-6V5C13.5,5,5,13.5,5,24s8.5,19,19,19c4.4,0,8.5-1.5,11.8-4.1l-8-10.2 C26.7,29.5,25.4,30,24,30z"}},{"tag":"path","attr":{"fill":"#448AFF","d":"M30,24h13c0-10.5-8.5-19-19-19v13C27.3,18,30,20.7,30,24z"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M43,24H30c0,1.9-0.9,3.6-2.3,4.7l8,10.2C40.2,35.4,43,30,43,24z"}}]})(props);
};
function FcDownLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"4,29 18,17.3 18,40.7"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M42,21V8h-8v13c0,2.2-1.8,4-4,4H13v8h17C36.6,33,42,27.6,42,21z"}}]})(props);
};
function FcDownRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"44,29 30,17.3 30,40.7"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M6,21V8h8v13c0,2.2,1.8,4,4,4h17v8H18C11.4,33,6,27.6,6,21z"}}]})(props);
};
function FcDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"24,44 12.3,30 35.7,30"}},{"tag":"rect","attr":{"x":"20","y":"6","width":"8","height":"27"}}]}]})(props);
};
function FcDownload (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"polygon","attr":{"points":"24,37.1 13,24 35,24"}},{"tag":"rect","attr":{"x":"20","y":"4","width":"8","height":"4"}},{"tag":"rect","attr":{"x":"20","y":"10","width":"8","height":"4"}},{"tag":"rect","attr":{"x":"20","y":"16","width":"8","height":"11"}},{"tag":"rect","attr":{"x":"6","y":"40","width":"36","height":"4"}}]}]})(props);
};
function FcDribbble (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF4081","d":"M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"}},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M33.061,26.273c-0.703-0.221-1.464,0.175-1.686,0.895c-0.824,2.658-2.316,5.419-2.993,5.57\r\n\tc-0.507,0-1.236-0.43-1.958-1.44c1.674-3.594,2.551-8.106,2.551-11.118c0-8.413-2.124-10.18-3.908-10.18\r\n\tc-3.757,0-3.8,9.912-3.8,10.012c0,1.166,0.042,2.248,0.121,3.256c-0.518-0.189-1.113-0.319-1.77-0.319\r\n\tc-3.86,0-5.618,3.809-5.618,7.347C14,33.63,15.871,37,20.046,37c1.972,0,3.634-1.291,4.975-3.221\r\n\tc1.188,1.235,2.432,1.696,3.36,1.696c2.923,0,4.858-5.233,5.556-7.486C34.16,27.27,33.767,26.502,33.061,26.273z M20.048,34.264\r\n\tc-3.031,0-3.36-2.775-3.36-3.969c0-0.188,0.034-4.611,2.932-4.611c1.144,0,2.022,0.885,2.022,0.885\r\n\tc0.065,0.07,0.137,0.131,0.212,0.184c0.375,1.904,0.904,3.426,1.516,4.632C22.366,33.123,21.203,34.264,20.048,34.264z\r\n\t M24.901,27.926c-0.559-1.93-0.946-4.521-0.946-7.914c0-3.126,0.666-6.068,1.219-7.073c0.424,0.644,1.115,2.65,1.115,7.241\r\n\tC26.289,22.616,25.75,25.446,24.901,27.926z"}}]})(props);
};
function FcDvdLogo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#42A5F5","d":"M24.002,27c-12.154,0-22,1.343-22,3.006c0,1.653,9.845,2.994,22,2.994c12.156,0,22-1.341,22-2.994\r\n\tC46.002,28.343,36.158,27,24.002,27z M24.002,30.972c-2.863,0-5.191-0.494-5.191-1.104c0-0.609,2.329-1.104,5.191-1.104\r\n\tc2.862,0,5.193,0.495,5.193,1.104C29.195,30.478,26.864,30.972,24.002,30.972z"}},{"tag":"path","attr":{"fill":"#1565C0","d":"M21.29,15l2.371,6.43L29.25,15h9.486c4.647,0,7.906,2.148,7.158,4.904c-0.745,2.756-5.178,4.904-9.803,4.904\r\n\th-6.295c0,0,0.141-0.043,0.172-0.126c0.246-0.944,1.707-6.264,1.725-6.347c0.02-0.102-0.105-0.133-0.105-0.133h4.572\r\n\tc0,0-0.088-0.006-0.125,0.133c-0.023,0.078-0.947,3.429-1.145,4.176c-0.023,0.094-0.162,0.139-0.162,0.139h1.094\r\n\tc2.594,0,5.047-0.828,5.563-2.748c0.473-1.752-1.244-2.746-4.039-2.746h-1.014l-4.375,0.004l-10.043,9.932l-3.845-9.754\r\n\tc0,0-0.036-0.066-0.065-0.147c-0.014-0.026-0.108-0.106-0.206-0.063c-0.065,0.036-0.074,0.117-0.066,0.146\r\n\tc0.036,0.066,0.042,0.08,0.048,0.111c0.569,0.93,0.467,2.009,0.33,2.52c-0.774,2.75-5.186,4.904-9.812,4.904H2.002\r\n\tc0,0,0.149-0.043,0.172-0.126c0.254-0.946,1.717-6.294,1.726-6.347c0.018-0.09-0.099-0.133-0.099-0.133h4.604\r\n\tc0,0-0.132,0.037-0.158,0.131c-0.024,0.078-0.954,3.432-1.151,4.178c-0.023,0.094-0.178,0.139-0.178,0.139h1.118\r\n\tc2.597,0,5.032-0.828,5.547-2.748c0.472-1.752-1.23-2.746-4.021-2.746H8.539h-4.45c0,0,0.125-0.059,0.147-0.139\r\n\tc0.123-0.443,0.497-1.834,0.515-1.899C4.771,15.047,4.646,15,4.646,15H21.29L21.29,15z"}}]})(props);
};
function FcEditImage (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8CBCD6","d":"M31,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v17C44,35.2,38.2,41,31,41z"}},{"tag":"circle","attr":{"fill":"#B3DDF5","cx":"35","cy":"16","r":"3"}},{"tag":"polygon","attr":{"fill":"#9AC9E3","points":"20,16 9,32 31,32"}},{"tag":"polygon","attr":{"fill":"#B3DDF5","points":"31,22 23,32 39,32"}},{"tag":"path","attr":{"fill":"#E57373","d":"M47.7,29.1l-2.8-2.8c-0.4-0.4-1.1-0.4-1.6,0L42,27.6l4.4,4.4l1.3-1.3C48.1,30.3,48.1,29.6,47.7,29.1z"}},{"tag":"rect","attr":{"x":"27.1","y":"35.1","transform":"matrix(.707 -.707 .707 .707 -16.508 36.511)","fill":"#FF9800","width":"17.4","height":"6.2"}},{"tag":"rect","attr":{"x":"41.5","y":"27.8","transform":"matrix(-.707 .707 -.707 -.707 95.395 22.352)","fill":"#B0BEC5","width":"3.1","height":"6.2"}},{"tag":"polygon","attr":{"fill":"#FFC107","points":"27.5,42.2 26,48 31.8,46.5"}},{"tag":"polygon","attr":{"fill":"#37474F","points":"26.7,45 26,48 29,47.3"}}]})(props);
};
function FcElectricalSensor (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#B2EBF2","cx":"32","cy":"24","r":"9"}},{"tag":"path","attr":{"fill":"#4DD0E1","d":"M32,12c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C44,17.4,38.6,12,32,12z M32,32 c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S36.4,32,32,32z"}},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"25.4,22 19.8,5.1 13.6,27.7 11.4,22 4,22 4,26 8.6,26 14.4,40.3 20.2,18.9 22.6,26 30,26 30,22"}},{"tag":"circle","attr":{"cx":"32","cy":"24","r":"4"}}]}]})(props);
};
function FcElectricalThreshold (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"3","y":"12","fill":"#80DEEA","width":"42","height":"24"}},{"tag":"rect","attr":{"x":"3","y":"23","fill":"#03A9F4","width":"42","height":"2"}},{"tag":"path","attr":{"fill":"none","stroke":"#3F51B5","strokeWidth":"4","strokeMiterlimit":"10","d":"M4,18l4.5-1.5c0.9-0.3,1.9,0.1,2.3,0.9l8.7,14.3 c0.7,1.2,2.4,1.3,3.2,0.2l2.3-2.8c0.5-0.6,1.4-0.9,2.2-0.6l3,1c1,0.3,2.1-0.2,2.5-1.1l4.3-10.1c0.5-1.1,1.9-1.6,2.9-0.9l4,2.7"}}]})(props);
};
function FcElectricity (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#00BCD4","d":"M33.7,5L22,17l15,5L21.3,36.7l5.1,2.8L12,43l2.7-14.8l2.9,5.1L27,24l-15-5L25,5H33.7z"}}]})(props);
};
function FcElectroDevices (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M39,43H9c-2.2,0-4-1.8-4-4V9c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v30C43,41.2,41.2,43,39,43z"}},{"tag":"path","attr":{"fill":"#80DEEA","d":"M33.2,5l-9.8,10.1L36,19.3L22.8,31.7l4.3,2.4L15,37l2.3-12.5l2.4,4.3l8-7.8L15,16.8L25.9,5H33.2z"}}]})(props);
};
function FcElectronics (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF9800","d":"M44,18v-4H34V4h-4v10h-4V4h-4v10h-4V4h-4v10H4v4h10v4H4v4h10v4H4v4h10v10h4V34h4v10h4V34h4v10h4V34h10v-4H34 v-4h10v-4H34v-4H44z"}},{"tag":"path","attr":{"fill":"#4CAF50","d":"M8,12v24c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V12c0-2.2-1.8-4-4-4H12C9.8,8,8,9.8,8,12z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M31,31H17c-1.1,0-2-0.9-2-2V19c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v10C33,30.1,32.1,31,31,31z"}}]})(props);
};
function FcEmptyBattery (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#CFD8DC"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"}},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"}}]}]})(props);
};
function FcEmptyFilter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"polygon","attr":{"points":"29,23 19,23 7,9 41,9"}},{"tag":"polygon","attr":{"points":"29,38 19,44 19,23 29,23"}},{"tag":"path","attr":{"d":"M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z"}}]}]})(props);
};
function FcEmptyTrash (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#B39DDB","d":"M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"}},{"tag":"path","attr":{"fill":"#7E57C2","d":"M38,13H10c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h28c1.1,0,2,0.9,2,2v0C40,12.1,39.1,13,38,13z"}}]})(props);
};
function FcEndCall (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M43.5,16.8l-2.3-2.3c-8.1-7.9-27.5-6.8-34.5,0l-2.3,2.3c-0.6,0.6-0.6,1.6,0,2.3l4.6,4.5 c0.6,0.6,1.7,0.6,2.3,0l5.1-4.9L16,13.4c1.6-1.6,14.4-1.6,16,0l-0.3,5.5l4.9,4.7c0.6,0.6,1.7,0.6,2.3,0l4.6-4.5 C44.2,18.4,44.2,17.4,43.5,16.8z"}},{"tag":"g","attr":{"fill":"#B71C1C"},"child":[{"tag":"polygon","attr":{"points":"24,40.5 16,31 32,31"}},{"tag":"rect","attr":{"x":"21","y":"24","width":"6","height":"7.5"}}]}]})(props);
};
function FcEngineering (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#EF6C00","d":"M37.4,24.6l-11.6-2.2l-3.9-11.2l-3.8,1.3L22,23.6l-7.8,9l3,2.6l7.8-9l11.6,2.2L37.4,24.6z"}},{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"path","attr":{"d":"M24,19c-2.8,0-5,2.2-5,5c0,2.8,2.2,5,5,5s5-2.2,5-5C29,21.2,26.8,19,24,19z M24,26c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C26,25.1,25.1,26,24,26z"}},{"tag":"path","attr":{"d":"M40.7,27c0.2-1,0.3-2,0.3-3c0-1-0.1-2-0.3-3l3.3-2.4c0.4-0.3,0.6-0.9,0.3-1.4L40,9.8 c-0.3-0.5-0.8-0.7-1.3-0.4L35,11c-1.5-1.3-3.3-2.3-5.2-3l-0.4-4.1c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9L18.2,8 c-1.9,0.7-3.7,1.7-5.2,3L9.3,9.3C8.8,9.1,8.2,9.3,8,9.8l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4L7.3,21C7.1,22,7,23,7,24 c0,1,0.1,2,0.3,3L4,29.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,38.2c0.3,0.5,0.8,0.7,1.3,0.4L13,37c1.5,1.3,3.3,2.3,5.2,3l0.4,4.1 c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.4-4.1c1.9-0.7,3.7-1.7,5.2-3l3.7,1.7c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4 c0.3-0.5,0.1-1.1-0.3-1.4L40.7,27z M24,35c-6.1,0-11-4.9-11-11c0-6.1,4.9-11,11-11s11,4.9,11,11C35,30.1,30.1,35,24,35z"}}]}]})(props);
};
function FcEnteringHeavenAlive (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"17","y":"29","fill":"#039BE5","width":"14","height":"2"}},{"tag":"rect","attr":{"x":"13","y":"33","fill":"#039BE5","width":"22","height":"2"}},{"tag":"rect","attr":{"x":"9","y":"37","fill":"#039BE5","width":"30","height":"2"}},{"tag":"rect","attr":{"x":"5","y":"41","fill":"#039BE5","width":"38","height":"2"}},{"tag":"path","attr":{"fill":"#81D4FA","d":"M35,13c-0.4,0-0.8,0-1.2,0.1C32.9,8.5,28.9,5,24,5c-4.1,0-7.6,2.5-9.2,6c-0.3,0-0.5,0-0.8,0 c-4.4,0-8,3.6-8,8s3.6,8,8,8c2.4,0,18.5,0,21,0c3.9,0,7-3.1,7-7C42,16.1,38.9,13,35,13z"}},{"tag":"path","attr":{"fill":"#039BE5","d":"M28,21c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,0.5,0,6,0,6h8C28,27,28,21.5,28,21z"}}]})(props);
};
function FcExpand (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#2196F3","points":"43,17.1 39.9,14 24,29.9 8.1,14 5,17.1 24,36"}}]})(props);
};
function FcExpired (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#00ACC1","cx":"17","cy":"17","r":"14"}},{"tag":"circle","attr":{"fill":"#eee","cx":"17","cy":"17","r":"11"}},{"tag":"rect","attr":{"x":"16","y":"8","width":"2","height":"9"}},{"tag":"rect","attr":{"x":"18.2","y":"16","transform":"matrix(-.707 .707 -.707 -.707 46.834 19.399)","width":"2.4","height":"6.8"}},{"tag":"circle","attr":{"cx":"17","cy":"17","r":"2"}},{"tag":"circle","attr":{"fill":"#00ACC1","cx":"17","cy":"17","r":"1"}},{"tag":"path","attr":{"fill":"#FFC107","d":"M11.9,42l14.4-24.1c0.8-1.3,2.7-1.3,3.4,0L44.1,42c0.8,1.3-0.2,3-1.7,3H13.6C12.1,45,11.1,43.3,11.9,42z"}},{"tag":"path","attr":{"fill":"#263238","d":"M26.4,39.9c0-0.2,0-0.4,0.1-0.6s0.2-0.3,0.3-0.5s0.3-0.2,0.5-0.3s0.4-0.1,0.6-0.1s0.5,0,0.7,0.1 s0.4,0.2,0.5,0.3s0.2,0.3,0.3,0.5s0.1,0.4,0.1,0.6s0,0.4-0.1,0.6s-0.2,0.3-0.3,0.5s-0.3,0.2-0.5,0.3s-0.4,0.1-0.7,0.1 s-0.5,0-0.6-0.1s-0.4-0.2-0.5-0.3s-0.2-0.3-0.3-0.5S26.4,40.1,26.4,39.9z M29.2,36.8h-2.3L26.5,27h3L29.2,36.8z"}}]})(props);
};
function FcExport (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFCCBC","d":"M7,40V8c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H11C8.8,44,7,42.2,7,40z"}},{"tag":"g","attr":{"fill":"#FF5722"},"child":[{"tag":"polygon","attr":{"points":"42.7,24 32,33 32,15"}},{"tag":"rect","attr":{"x":"14","y":"21","width":"23","height":"6"}}]}]})(props);
};
function FcExternal (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#B2DFDB","cx":"24","cy":"31","r":"14"}},{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"polygon","attr":{"points":"24,3.3 33,14 15,14"}},{"tag":"rect","attr":{"x":"21","y":"11","width":"6","height":"23"}}]}]})(props);
};
function FcFactoryBreakdown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#E64A19","points":"29,23 29,17 21,21 21,23 17,23 17,27 13,27 13,23 5,23 5,43 33,43 33,23"}},{"tag":"rect","attr":{"x":"25","y":"27","fill":"#992B0A","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"9","y":"35","fill":"#992B0A","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"25","y":"35","fill":"#992B0A","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"17","y":"35","fill":"#992B0A","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"17","y":"27","fill":"#992B0A","width":"4","height":"4"}},{"tag":"polygon","attr":{"fill":"#BF360C","points":"41.2,5 38,5 38,7 36,7 36,9 33.7,9 32,43 43,43"}}]})(props);
};
function FcFactory (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#BF360C","d":"M41.2,5h-7.3L32,43h11L41.2,5z"}},{"tag":"path","attr":{"fill":"#E64A19","d":"M33,23h-4v-6l-12,6v-6L5,23v20h28V23z"}},{"tag":"rect","attr":{"x":"9","y":"27","fill":"#FFC107","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"17","y":"27","fill":"#FFC107","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"25","y":"27","fill":"#FFC107","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"9","y":"35","fill":"#FFC107","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"17","y":"35","fill":"#FFC107","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"25","y":"35","fill":"#FFC107","width":"4","height":"4"}}]})(props);
};
function FcFaq (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#558B2F","d":"M15,40h23l6,6V25c0-2.2-1.8-4-4-4H15c-2.2,0-4,1.8-4,4v11C11,38.2,12.8,40,15,40z"}},{"tag":"path","attr":{"fill":"#1B5E20","d":"M28.8,32.8h-3.6l-0.7,2.1h-2.2l3.7-10h1.9l3.7,10h-2.2L28.8,32.8z M25.7,31.2h2.5L27,27.4L25.7,31.2z"}},{"tag":"path","attr":{"fill":"#8BC34A","d":"M33,25H10l-6,6V8c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v13C37,23.2,35.2,25,33,25z"}},{"tag":"path","attr":{"fill":"#fff","d":"M25.4,14.2c0,1-0.2,1.8-0.5,2.5c-0.3,0.7-0.7,1.3-1.3,1.7l1.7,1.3L24,20.9l-2.2-1.7c-0.2,0-0.5,0.1-0.8,0.1 c-0.6,0-1.2-0.1-1.8-0.3c-0.5-0.2-1-0.6-1.4-1c-0.4-0.4-0.7-1-0.9-1.6c-0.2-0.6-0.3-1.3-0.3-2.1v-0.4c0-0.8,0.1-1.5,0.3-2.1 c0.2-0.6,0.5-1.2,0.9-1.6c0.4-0.4,0.8-0.8,1.4-1c0.5-0.2,1.1-0.3,1.8-0.3c0.6,0,1.2,0.1,1.8,0.3c0.5,0.2,1,0.6,1.4,1 c0.4,0.4,0.7,1,0.9,1.6c0.2,0.6,0.3,1.3,0.3,2.1V14.2z M23.2,13.7c0-1.1-0.2-1.9-0.6-2.4c-0.4-0.6-0.9-0.8-1.6-0.8 c-0.7,0-1.3,0.3-1.6,0.8c-0.4,0.6-0.6,1.4-0.6,2.4v0.5c0,0.5,0.1,1,0.2,1.4c0.1,0.4,0.2,0.8,0.4,1c0.2,0.3,0.4,0.5,0.7,0.6 c0.3,0.1,0.6,0.2,0.9,0.2c0.7,0,1.3-0.3,1.6-0.8c0.4-0.6,0.6-1.4,0.6-2.5V13.7z"}}]})(props);
};
function FcFeedIn (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M38,24v12c0,1.1-0.9,2-2,2H12c-1.1,0-2-0.9-2-2V24c0-3.3-2.7-6-6-6h0v4h0c1.1,0,2,0.9,2,2v12 c0,3.3,2.7,6,6,6h24c3.3,0,6-2.7,6-6V24c0-1.1,0.9-2,2-2h0v-4h0C40.7,18,38,20.7,38,24z"}},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"38.6,5.6 29,15.2 29,28 33,28 33,16.8 41.4,8.4"}},{"tag":"polygon","attr":{"points":"6.6,8.4 15,16.8 15,28 19,28 19,15.2 9.4,5.6"}},{"tag":"polygon","attr":{"points":"37,27 31,33 25,27"}},{"tag":"polygon","attr":{"points":"23,27 17,33 11,27"}}]}]})(props);
};
function FcFeedback (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#78909C","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"}},{"tag":"rect","attr":{"x":"12","y":"11","fill":"#fff","width":"24","height":"22"}},{"tag":"polygon","attr":{"fill":"#9C27B0","points":"24,13.6 18,21.4 30,21.4"}},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"}},{"tag":"polygon","attr":{"fill":"#9C27B0","points":"24,28 26,26.7 26,20 22,20 22,26.7"}}]})(props);
};
function FcFile (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,45 8,45 8,3 30,3 40,13"}},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,14 29,14 29,4.5"}}]})(props);
};
function FcFilingCabinet (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"12","y":"44","fill":"#263238","width":"4","height":"2"}},{"tag":"rect","attr":{"x":"32","y":"44","fill":"#263238","width":"4","height":"2"}},{"tag":"path","attr":{"fill":"#607D8B","d":"M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z"}},{"tag":"path","attr":{"fill":"#B0BEC5","d":"M12,17V8c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1v9H12z"}},{"tag":"rect","attr":{"x":"12","y":"19","fill":"#B0BEC5","width":"24","height":"10"}},{"tag":"path","attr":{"fill":"#B0BEC5","d":"M12,40v-9h24v9c0,0.6-0.4,1-1,1H13C12.4,41,12,40.6,12,40z"}},{"tag":"rect","attr":{"x":"20","y":"11","fill":"#546E7A","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"20","y":"23","fill":"#546E7A","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"20","y":"35","fill":"#546E7A","width":"8","height":"2"}}]})(props);
};
function FcFilledFilter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#F57C00","points":"29,23 19,23 7,9 41,9"}},{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"polygon","attr":{"points":"29,38 19,44 19,23 29,23"}},{"tag":"path","attr":{"d":"M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z"}}]}]})(props);
};
function FcFilmReel (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M43,39V24h-4v15c0,5,4,9,9,9v-4C45.2,44,43,41.8,43,39z"}},{"tag":"circle","attr":{"fill":"#90A4AE","cx":"24","cy":"24","r":"19"}},{"tag":"circle","attr":{"fill":"#37474F","cx":"24","cy":"24","r":"2"}},{"tag":"g","attr":{"fill":"#253278"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"14","r":"5"}},{"tag":"circle","attr":{"cx":"24","cy":"34","r":"5"}},{"tag":"circle","attr":{"cx":"34","cy":"24","r":"5"}},{"tag":"circle","attr":{"cx":"14","cy":"24","r":"5"}}]}]})(props);
};
function FcFilm (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M45,9H3v30h42V9z M22,37v-4h4v4H22z M30,37v-4h4v4H30z M38,37v-4h4v4H38z M14,37v-4h4v4H14z M6,37v-4h4v4H6 z M22,15v-4h4v4H22z M30,15v-4h4v4H30z M38,15v-4h4v4H38z M14,15v-4h4v4H14z M6,15v-4h4v4H6z"}}]})(props);
};
function FcFinePrint (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"33,42 5,42 5,4 24,4 33,13"}},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"31.5,14 23,14 23,5.5"}},{"tag":"rect","attr":{"x":"38.3","y":"34.8","transform":"matrix(.707 -.707 .707 .707 -17.177 40.055)","fill":"#616161","width":"2.8","height":"12"}},{"tag":"circle","attr":{"fill":"#616161","cx":"28","cy":"29","r":"11"}},{"tag":"circle","attr":{"fill":"#90CAF9","cx":"28","cy":"29","r":"9"}},{"tag":"rect","attr":{"x":"39.5","y":"37.6","transform":"matrix(.707 -.707 .707 .707 -17.661 41.223)","fill":"#37474F","width":"2.8","height":"8.7"}},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"path","attr":{"d":"M30,31h-9.7c0.4,1.6,1.3,3,2.5,4H30V31z"}},{"tag":"path","attr":{"d":"M20.3,27H30v-4h-7.3C21.5,24,20.7,25.4,20.3,27z"}},{"tag":"path","attr":{"d":"M20.1,20H11v2h7.3C18.8,21.3,19.4,20.6,20.1,20z"}},{"tag":"path","attr":{"d":"M17.1,24H11v2h5.4C16.6,25.3,16.8,24.6,17.1,24z"}},{"tag":"path","attr":{"d":"M16,29c0-0.3,0-0.7,0.1-1H11v2h5.1C16,29.7,16,29.3,16,29z"}},{"tag":"path","attr":{"d":"M16.4,32H11v2h6.1C16.8,33.4,16.6,32.7,16.4,32z"}}]}]})(props);
};
function FcFlashAuto (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FFC107","points":"33,22 23.6,22 30,5 19,5 13,26 21.6,26 17,45"}},{"tag":"path","attr":{"fill":"#F44336","d":"M40.8,14.5h-4.3L35.6,17H33l4.5-12h2.3l4.5,12h-2.6L40.8,14.5z M37.1,12.5h3L38.6,8L37.1,12.5z"}}]})(props);
};
function FcFlashOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FFC107","points":"33,22 23.6,22 30,5 19,5 13,26 21.6,26 17,45"}},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"}}]})(props);
};
function FcFlashOn (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FFC107","points":"33,22 23.6,22 30,5 19,5 13,26 21.6,26 17,45"}}]})(props);
};
function FcFlowChart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#CFD8DC","points":"35,36 39,36 39,22 26,22 26,13 22,13 22,22 9,22 9,36 13,36 13,26 22,26 22,36 26,36 26,26 35,26"}},{"tag":"rect","attr":{"x":"17","y":"6","fill":"#3F51B5","width":"14","height":"10"}},{"tag":"rect","attr":{"x":"32","y":"32","fill":"#00BCD4","width":"10","height":"10"}},{"tag":"rect","attr":{"x":"6","y":"32","fill":"#00BCD4","width":"10","height":"10"}},{"tag":"rect","attr":{"x":"19","y":"32","fill":"#00BCD4","width":"10","height":"10"}}]})(props);
};
function FcFolder (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFA000","d":"M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"}},{"tag":"path","attr":{"fill":"#FFCA28","d":"M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"}}]})(props);
};
function FcFrame (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3949AB","d":"M40.6,40.1h-1.4c-0.2,0-0.3,0-0.5,0l-3.1-0.4c-2.4-0.3-4.9-0.2-7.3,0.4l-3.6,0.9c-0.5,0.1-1.1,0.1-1.6,0 L19.6,40c-2.4-0.6-4.8-0.7-7.3-0.4l-3.1,0.4c-0.2,0-0.3,0-0.5,0H7.4c-1.9,0-3.4-1.5-3.4-3.4v0c0-0.4,0.1-0.9,0.2-1.3l0.2-0.6 c1-2.5,1.1-5.3,0.4-7.9l-0.6-2c-0.2-0.7-0.2-1.3,0-2l0.3-0.8c0.9-2.7,0.8-5.7-0.2-8.4l-0.1-0.3C4.1,13.1,4,12.7,4,12.3v-1 c0-1.9,1.5-3.4,3.4-3.4l1.4,0c0.2,0,0.3,0,0.5,0l3.1,0.4c2.4,0.3,4.9,0.2,7.3-0.4l3.6-0.9c0.5-0.1,1.1-0.1,1.6,0L28.4,8 c2.4,0.6,4.8,0.7,7.3,0.4l3.1-0.4c0.2,0,0.3,0,0.5,0l1.4,0c1.9,0,3.4,1.5,3.4,3.4v1c0,0.4-0.1,0.9-0.2,1.3l-0.1,0.3 c-1.1,2.7-1.2,5.6-0.2,8.4l0.3,0.8c0.2,0.6,0.2,1.3,0,2l-0.6,2c-0.7,2.6-0.6,5.4,0.4,7.9l0.2,0.6c0.2,0.4,0.2,0.8,0.2,1.3v0 C44,38.6,42.5,40.1,40.6,40.1z"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M38,36H10c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h28c0.6,0,1,0.4,1,1v22C39,35.6,38.6,36,38,36z"}}]})(props);
};
function FcFullBattery (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#8BC34A"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"}},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"}}]}]})(props);
};
function FcFullTrash (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FF8A65","points":"24,21.3 12.7,10 26,1.7 38.3,10"}},{"tag":"polygon","attr":{"fill":"#FFAB91","points":"24,21.3 12.7,10 17,4.7 38.3,10"}},{"tag":"path","attr":{"fill":"#B39DDB","d":"M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"}},{"tag":"path","attr":{"fill":"#7E57C2","d":"M38,13H10c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h28c1.1,0,2,0.9,2,2v0C40,12.1,39.1,13,38,13z"}}]})(props);
};
function FcGallery (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E65100","d":"M41,42H13c-2.2,0-4-1.8-4-4V18c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C45,40.2,43.2,42,41,42z"}},{"tag":"path","attr":{"fill":"#F57C00","d":"M35,36H7c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C39,34.2,37.2,36,35,36z"}},{"tag":"circle","attr":{"fill":"#FFF9C4","cx":"30","cy":"16","r":"3"}},{"tag":"polygon","attr":{"fill":"#942A09","points":"17,17.9 8,31 26,31"}},{"tag":"polygon","attr":{"fill":"#BF360C","points":"28,23.5 22,31 34,31"}}]})(props);
};
function FcGenealogy (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#CFD8DC","points":"40,9 40,7 31,7 31,12 24,12 15,12 15,23 8,23 8,25 15,25 15,36 24,36 31,36 31,41 40,41 40,39 33,39 33,31 40,31 40,29 31,29 31,34 24,34 17,34 17,14 24,14 31,14 31,19 40,19 40,17 33,17 33,9"}},{"tag":"rect","attr":{"x":"4","y":"20","fill":"#00BCD4","width":"8","height":"8"}},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"rect","attr":{"x":"36","y":"14","width":"8","height":"8"}},{"tag":"rect","attr":{"x":"36","y":"4","width":"8","height":"8"}},{"tag":"rect","attr":{"x":"20","y":"9","width":"8","height":"8"}},{"tag":"rect","attr":{"x":"20","y":"31","width":"8","height":"8"}},{"tag":"rect","attr":{"x":"36","y":"36","width":"8","height":"8"}},{"tag":"rect","attr":{"x":"36","y":"26","width":"8","height":"8"}}]}]})(props);
};
function FcGenericSortingAsc (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"6","y":"6","fill":"#2196F3","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"14","fill":"#2196F3","width":"12","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"22","fill":"#2196F3","width":"20","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"30","fill":"#2196F3","width":"28","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"38","fill":"#2196F3","width":"36","height":"4"}}]})(props);
};
function FcGenericSortingDesc (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"6","y":"38","fill":"#2196F3","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"30","fill":"#2196F3","width":"12","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"22","fill":"#2196F3","width":"20","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"14","fill":"#2196F3","width":"28","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"6","fill":"#2196F3","width":"36","height":"4"}}]})(props);
};
function FcGlobe (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#7CB342","d":"M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"}},{"tag":"path","attr":{"fill":"#0277BD","d":"M45,24c0,11.7-9.5,21-21,21S3,35.7,3,24S12.3,3,24,3S45,12.3,45,24z M23.8,33.7c0-0.4-0.2-0.6-0.6-0.8 c-1.3-0.4-2.5-0.4-3.6-1.5c-0.2-0.4-0.2-0.8-0.4-1.3c-0.4-0.4-1.5-0.6-2.1-0.8c-0.8,0-1.7,0-2.7,0c-0.4,0-1.1,0-1.5,0 c-0.6-0.2-1.1-1.1-1.5-1.7c0-0.2,0-0.6-0.4-0.6c-0.4-0.2-0.8,0.2-1.3,0c-0.2-0.2-0.2-0.4-0.2-0.6c0-0.6,0.4-1.3,0.8-1.7 c0.6-0.4,1.3,0.2,1.9,0.2c0.2,0,0.2,0,0.4,0.2c0.6,0.2,0.8,1,0.8,1.7c0,0.2,0,0.4,0,0.4c0,0.2,0.2,0.2,0.4,0.2 c0.2-1.1,0.2-2.1,0.4-3.2c0-1.3,1.3-2.5,2.3-2.9c0.4-0.2,0.6,0.2,1.1,0c1.3-0.4,4.4-1.7,3.8-3.4c-0.4-1.5-1.7-2.9-3.4-2.7 c-0.4,0.2-0.6,0.4-1,0.6c-0.6,0.4-1.9,1.7-2.5,1.7c-1.1-0.2-1.1-1.7-0.8-2.3c0.2-0.8,2.1-3.6,3.4-3.1c0.2,0.2,0.6,0.6,0.8,0.8 c0.4,0.2,1.1,0.2,1.7,0.2c0.2,0,0.4,0,0.6-0.2c0.2-0.2,0.2-0.2,0.2-0.4c0-0.6-0.6-1.3-1-1.7c-0.4-0.4-1.1-0.8-1.7-1.1 c-2.1-0.6-5.5,0.2-7.1,1.7s-2.9,4-3.8,6.1c-0.4,1.3-0.8,2.9-1,4.4c-0.2,1-0.4,1.9,0.2,2.9c0.6,1.3,1.9,2.5,3.2,3.4 c0.8,0.6,2.5,0.6,3.4,1.7c0.6,0.8,0.4,1.9,0.4,2.9c0,1.3,0.8,2.3,1.3,3.4c0.2,0.6,0.4,1.5,0.6,2.1c0,0.2,0.2,1.5,0.2,1.7 c1.3,0.6,2.3,1.3,3.8,1.7c0.2,0,1-1.3,1-1.5c0.6-0.6,1.1-1.5,1.7-1.9c0.4-0.2,0.8-0.4,1.3-0.8c0.4-0.4,0.6-1.3,0.8-1.9 C23.8,35.1,24,34.3,23.8,33.7z M24.2,14.3c0.2,0,0.4-0.2,0.8-0.4c0.6-0.4,1.3-1.1,1.9-1.5c0.6-0.4,1.3-1.1,1.7-1.5 c0.6-0.4,1.1-1.3,1.3-1.9c0.2-0.4,0.8-1.3,0.6-1.9c-0.2-0.4-1.3-0.6-1.7-0.8c-1.7-0.4-3.1-0.6-4.8-0.6c-0.6,0-1.5,0.2-1.7,0.8 c-0.2,1.1,0.6,0.8,1.5,1.1c0,0,0.2,1.7,0.2,1.9c0.2,1-0.4,1.7-0.4,2.7c0,0.6,0,1.7,0.4,2.1L24.2,14.3z M41.8,29 c0.2-0.4,0.2-1.1,0.4-1.5c0.2-1,0.2-2.1,0.2-3.1c0-2.1-0.2-4.2-0.8-6.1c-0.4-0.6-0.6-1.3-0.8-1.9c-0.4-1.1-1-2.1-1.9-2.9 c-0.8-1.1-1.9-4-3.8-3.1c-0.6,0.2-1,1-1.5,1.5c-0.4,0.6-0.8,1.3-1.3,1.9c-0.2,0.2-0.4,0.6-0.2,0.8c0,0.2,0.2,0.2,0.4,0.2 c0.4,0.2,0.6,0.2,1,0.4c0.2,0,0.4,0.2,0.2,0.4c0,0,0,0.2-0.2,0.2c-1,1.1-2.1,1.9-3.1,2.9c-0.2,0.2-0.4,0.6-0.4,0.8 c0,0.2,0.2,0.2,0.2,0.4c0,0.2-0.2,0.2-0.4,0.4c-0.4,0.2-0.8,0.4-1.1,0.6c-0.2,0.4,0,1.1-0.2,1.5c-0.2,1.1-0.8,1.9-1.3,2.9 c-0.4,0.6-0.6,1.3-1,1.9c0,0.8-0.2,1.5,0.2,2.1c1,1.5,2.9,0.6,4.4,1.3c0.4,0.2,0.8,0.2,1.1,0.6c0.6,0.6,0.6,1.7,0.8,2.3 c0.2,0.8,0.4,1.7,0.8,2.5c0.2,1,0.6,2.1,0.8,2.9c1.9-1.5,3.6-3.1,4.8-5.2C40.6,32.4,41.2,30.7,41.8,29z"}}]})(props);
};
function FcGoodDecision (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"}},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"}},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"}},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"}}]},{"tag":"g","attr":{"fill":"#4CAF50"},"child":[{"tag":"rect","attr":{"x":"22","y":"16","width":"4","height":"18"}},{"tag":"rect","attr":{"x":"15","y":"23","width":"18","height":"4"}}]}]})(props);
};
function FcGoogle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFC107","d":"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r\n\tc0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r\n\tc0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}},{"tag":"path","attr":{"fill":"#FF3D00","d":"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r\n\tC34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}},{"tag":"path","attr":{"fill":"#4CAF50","d":"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r\n\tc-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}},{"tag":"path","attr":{"fill":"#1976D2","d":"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r\n\tc0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"}}]})(props);
};
function FcGraduationCap (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"rect","attr":{"x":"9","y":"20","width":"30","height":"13"}},{"tag":"ellipse","attr":{"cx":"24","cy":"33","rx":"15","ry":"6"}}]},{"tag":"path","attr":{"fill":"#78909C","d":"M23.1,8.2L0.6,18.1c-0.8,0.4-0.8,1.5,0,1.9l22.5,9.9c0.6,0.2,1.2,0.2,1.8,0l22.5-9.9c0.8-0.4,0.8-1.5,0-1.9 L24.9,8.2C24.3,7.9,23.7,7.9,23.1,8.2z"}},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"path","attr":{"d":"M43.2,20.4l-20-3.4c-0.5-0.1-1.1,0.3-1.2,0.8c-0.1,0.5,0.3,1.1,0.8,1.2L42,22.2V37c0,0.6,0.4,1,1,1 s1-0.4,1-1V21.4C44,20.9,43.6,20.5,43.2,20.4z"}},{"tag":"circle","attr":{"cx":"43","cy":"37","r":"2"}},{"tag":"path","attr":{"d":"M46,40c0,1.7-3,6-3,6s-3-4.3-3-6s1.3-3,3-3S46,38.3,46,40z"}}]}]})(props);
};
function FcGrid (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M7,7v34h34V7H7z M39,15h-6V9h6V15z M25,15V9h6v6H25z M31,17v6h-6v-6H31z M23,15h-6V9h6V15z M23,17v6h-6v-6 H23z M15,23H9v-6h6V23z M15,25v6H9v-6H15z M17,25h6v6h-6V25z M23,33v6h-6v-6H23z M25,33h6v6h-6V33z M25,31v-6h6v6H25z M33,25h6v6h-6 V25z M33,23v-6h6v6H33z M15,9v6H9V9H15z M9,33h6v6H9V33z M33,39v-6h6v6H33z"}}]})(props);
};
function FcHeadset (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#0097A7","d":"M24,5C14.1,5,6,13.1,6,23v15h4V23c0-7.7,6.3-14,14-14s14,6.3,14,14v15h4V23C42,13.1,33.9,5,24,5z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M38,43h-4V31h4c2.2,0,4,1.8,4,4v4C42,41.2,40.2,43,38,43z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M10,43h4V31h-4c-2.2,0-4,1.8-4,4v4C6,41.2,7.8,43,10,43z"}}]})(props);
};
function FcHeatMap (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#CFD8DC","points":"9,39 9,6 7,6 7,41 42,41 42,39"}},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"circle","attr":{"cx":"14","cy":"11","r":"2"}},{"tag":"circle","attr":{"cx":"32","cy":"11","r":"2"}},{"tag":"circle","attr":{"cx":"39","cy":"11","r":"2"}},{"tag":"circle","attr":{"cx":"23","cy":"11","r":"4"}},{"tag":"circle","attr":{"cx":"14","cy":"33","r":"2"}},{"tag":"circle","attr":{"cx":"30","cy":"33","r":"2"}},{"tag":"circle","attr":{"cx":"22","cy":"33","r":"3"}},{"tag":"circle","attr":{"cx":"38","cy":"33","r":"4"}},{"tag":"circle","attr":{"cx":"14","cy":"22","r":"2"}},{"tag":"circle","attr":{"cx":"39","cy":"22","r":"2"}},{"tag":"circle","attr":{"cx":"32","cy":"22","r":"3"}}]}]})(props);
};
function FcHighBattery (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#CFD8DC"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"}},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"}}]},{"tag":"path","attr":{"fill":"#8BC34A","d":"M34,44H14c-1.1,0-2-0.9-2-2V13h24v29C36,43.1,35.1,44,34,44z"}}]})(props);
};
function FcHighPriority (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18 C25.3,46.4,22.7,46.4,21.2,44.8z"}},{"tag":"path","attr":{"fill":"#fff","d":"M21.6,32.7c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.5-0.7c0.2-0.2,0.5-0.4,0.8-0.5s0.6-0.2,1-0.2 s0.7,0.1,1,0.2c0.3,0.1,0.6,0.3,0.8,0.5c0.2,0.2,0.4,0.4,0.5,0.7c0.1,0.3,0.2,0.6,0.2,0.9s-0.1,0.6-0.2,0.9s-0.3,0.5-0.5,0.7 c-0.2,0.2-0.5,0.4-0.8,0.5c-0.3,0.1-0.6,0.2-1,0.2s-0.7-0.1-1-0.2s-0.5-0.3-0.8-0.5c-0.2-0.2-0.4-0.4-0.5-0.7S21.6,33.1,21.6,32.7z M25.8,28.1h-3.6L21.7,13h4.6L25.8,28.1z"}}]})(props);
};
function FcHome (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#E8EAF6","points":"42,39 6,39 6,23 24,6 42,23"}},{"tag":"g","attr":{"fill":"#C5CAE9"},"child":[{"tag":"polygon","attr":{"points":"39,21 34,16 34,9 39,9"}},{"tag":"rect","attr":{"x":"6","y":"39","width":"36","height":"5"}}]},{"tag":"polygon","attr":{"fill":"#B71C1C","points":"24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"}},{"tag":"rect","attr":{"x":"18","y":"28","fill":"#D84315","width":"12","height":"16"}},{"tag":"rect","attr":{"x":"21","y":"17","fill":"#01579B","width":"6","height":"6"}},{"tag":"path","attr":{"fill":"#FF8A65","d":"M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"}}]})(props);
};
function FcIcons8Cup (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M40,14H8l3.8,28.3c0.1,1,1,1.7,2,1.7h20.5c1,0,1.8-0.7,2-1.7L40,14z"}},{"tag":"g","attr":{"fill":"#81C784"},"child":[{"tag":"path","attr":{"d":"M42,14H6v-3c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4V14z"}},{"tag":"path","attr":{"d":"M37.2,10H10.8l1.7-4.7c0.3-0.8,1-1.3,1.9-1.3h19.2c0.8,0,1.6,0.5,1.9,1.3L37.2,10z"}}]},{"tag":"path","attr":{"fill":"#E8F5E9","d":"M28,28.5c1.2-1.1,2-2.7,2-4.5c0-3.3-2.7-6-6-6c-3.3,0-6,2.7-6,6c0,1.8,0.8,3.4,2,4.5c-1.2,1.1-2,2.7-2,4.5 c0,3.3,2.7,6,6,6c3.3,0,6-2.7,6-6C30,31.2,29.2,29.6,28,28.5z M24,36c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3 C27,34.7,25.7,36,24,36z M24,27c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3C27,25.7,25.7,27,24,27z"}}]})(props);
};
function FcIdea (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#FFF59D","cx":"24","cy":"22","r":"20"}},{"tag":"path","attr":{"fill":"#FBC02D","d":"M37,22c0-7.7-6.6-13.8-14.5-12.9c-6,0.7-10.8,5.5-11.4,11.5c-0.5,4.6,1.4,8.7,4.6,11.3 c1.4,1.2,2.3,2.9,2.3,4.8V37h12v-0.1c0-1.8,0.8-3.6,2.2-4.8C35.1,29.7,37,26.1,37,22z"}},{"tag":"path","attr":{"fill":"#FFF59D","d":"M30.6,20.2l-3-2c-0.3-0.2-0.8-0.2-1.1,0L24,19.8l-2.4-1.6c-0.3-0.2-0.8-0.2-1.1,0l-3,2 c-0.2,0.2-0.4,0.4-0.4,0.7s0,0.6,0.2,0.8l3.8,4.7V37h2V26c0-0.2-0.1-0.4-0.2-0.6l-3.3-4.1l1.5-1l2.4,1.6c0.3,0.2,0.8,0.2,1.1,0 l2.4-1.6l1.5,1l-3.3,4.1C25.1,25.6,25,25.8,25,26v11h2V26.4l3.8-4.7c0.2-0.2,0.3-0.5,0.2-0.8S30.8,20.3,30.6,20.2z"}},{"tag":"circle","attr":{"fill":"#5C6BC0","cx":"24","cy":"44","r":"3"}},{"tag":"path","attr":{"fill":"#9FA8DA","d":"M26,45h-4c-2.2,0-4-1.8-4-4v-5h12v5C30,43.2,28.2,45,26,45z"}},{"tag":"g","attr":{"fill":"#5C6BC0"},"child":[{"tag":"path","attr":{"d":"M30,41l-11.6,1.6c0.3,0.7,0.9,1.4,1.6,1.8l9.4-1.3C29.8,42.5,30,41.8,30,41z"}},{"tag":"polygon","attr":{"points":"18,38.7 18,40.7 30,39 30,37"}}]}]})(props);
};
function FcImageFile (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,45 8,45 8,3 30,3 40,13"}},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,14 29,14 29,4.5"}},{"tag":"polygon","attr":{"fill":"#1565C0","points":"21,23 14,33 28,33"}},{"tag":"polygon","attr":{"fill":"#1976D2","points":"28,26.4 23,33 33,33"}},{"tag":"circle","attr":{"fill":"#1976D2","cx":"31.5","cy":"24.5","r":"1.5"}}]})(props);
};
function FcImport (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F8BBD0","d":"M7,40V8c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H11C8.8,44,7,42.2,7,40z"}},{"tag":"g","attr":{"fill":"#E91E63"},"child":[{"tag":"polygon","attr":{"points":"13.3,24 24,15 24,33"}},{"tag":"rect","attr":{"x":"19","y":"21","width":"23","height":"6"}}]}]})(props);
};
function FcInTransit (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFC107","d":"M44,36H30V16c0-1.1,0.9-2,2-2h8c0.6,0,1.2,0.3,1.6,0.8l6,7.7c0.3,0.4,0.4,0.8,0.4,1.2V32 C48,34.2,46.2,36,44,36z"}},{"tag":"g","attr":{"fill":"#9575CD"},"child":[{"tag":"path","attr":{"d":"M8,36h22V13c0-2.2-1.8-4-4-4H4v23C4,34.2,5.8,36,8,36z"}},{"tag":"rect","attr":{"y":"9","width":"10","height":"2"}},{"tag":"rect","attr":{"y":"14","width":"10","height":"2"}},{"tag":"rect","attr":{"y":"19","width":"10","height":"2"}},{"tag":"rect","attr":{"y":"24","width":"10","height":"2"}}]},{"tag":"g","attr":{"fill":"#7E57C2"},"child":[{"tag":"rect","attr":{"x":"4","y":"11","width":"16","height":"2"}},{"tag":"rect","attr":{"x":"4","y":"16","width":"12","height":"2"}},{"tag":"rect","attr":{"x":"4","y":"21","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"4","y":"26","width":"4","height":"2"}}]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"39","cy":"36","r":"5"}},{"tag":"circle","attr":{"cx":"16","cy":"36","r":"5"}}]},{"tag":"g","attr":{"fill":"#78909C"},"child":[{"tag":"circle","attr":{"cx":"39","cy":"36","r":"2.5"}},{"tag":"circle","attr":{"cx":"16","cy":"36","r":"2.5"}}]},{"tag":"path","attr":{"fill":"#455A64","d":"M44,26h-3.6c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.2-0.2-0.4-0.3-0.7-0.3H34c-0.6,0-1-0.4-1-1v-6 c0-0.6,0.4-1,1-1h5.5c0.3,0,0.6,0.1,0.8,0.4l4.5,5.4c0.1,0.2,0.2,0.4,0.2,0.6V25C45,25.6,44.6,26,44,26z"}}]})(props);
};
function FcInfo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#2196F3","cx":"24","cy":"24","r":"21"}},{"tag":"rect","attr":{"x":"22","y":"22","fill":"#fff","width":"4","height":"11"}},{"tag":"circle","attr":{"fill":"#fff","cx":"24","cy":"16.5","r":"2.5"}}]})(props);
};
function FcInspection (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M36,4H26c0,1.1-0.9,2-2,2s-2-0.9-2-2H12C9.8,4,8,5.8,8,8v32c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V8 C40,5.8,38.2,4,36,4z"}},{"tag":"path","attr":{"fill":"#fff","d":"M36,41H12c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h24c0.6,0,1,0.4,1,1v32C37,40.6,36.6,41,36,41z"}},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"path","attr":{"d":"M26,4c0,1.1-0.9,2-2,2s-2-0.9-2-2h-7v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V4H26z"}},{"tag":"path","attr":{"d":"M24,0c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S26.2,0,24,0z M24,6c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S25.1,6,24,6z"}}]},{"tag":"polygon","attr":{"fill":"#4CAF50","points":"30.6,18.6 21.6,27.6 17.4,23.3 14.9,25.8 21.7,32.5 33.1,21.1"}}]})(props);
};
function FcIntegratedWebcam (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M38,42H10c-2.2,0-4-1.8-4-4V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,40.2,40.2,42,38,42z"}},{"tag":"circle","attr":{"fill":"#455A64","cx":"24","cy":"24","r":"12"}},{"tag":"circle","attr":{"fill":"#42A5F5","cx":"24","cy":"24","r":"9"}},{"tag":"path","attr":{"fill":"#90CAF9","d":"M28.8,21c-1.2-1.4-3-2.2-4.8-2.2s-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.2,22.4,29.3,21.5,28.8,21z"}}]})(props);
};
function FcInternal (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#B3E5FC","cx":"24","cy":"30","r":"15"}},{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"polygon","attr":{"points":"24,38.7 15,28 33,28"}},{"tag":"rect","attr":{"x":"21","y":"5","width":"6","height":"26"}}]}]})(props);
};
function FcInvite (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#78909C","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"}},{"tag":"rect","attr":{"x":"12","y":"11","fill":"#fff","width":"24","height":"22"}},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"}},{"tag":"g","attr":{"fill":"#4CAF50"},"child":[{"tag":"rect","attr":{"x":"22","y":"14","width":"4","height":"12"}},{"tag":"rect","attr":{"x":"18","y":"18","width":"12","height":"4"}}]}]})(props);
};
function FcIpad (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E38939","d":"M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z"}},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M36,6H12c-0.6,0-1,0.4-1,1v31c0,0.6,0.4,1,1,1h24c0.6,0,1-0.4,1-1V7C37,6.4,36.6,6,36,6z"}},{"tag":"circle","attr":{"fill":"#A6642A","cx":"24","cy":"42","r":"1.5"}}]})(props);
};
function FcIphone (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E38939","d":"M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"}},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z"}},{"tag":"circle","attr":{"fill":"#A6642A","cx":"24","cy":"41","r":"1.5"}}]})(props);
};
function FcKey (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"polygon","attr":{"points":"30,41 26,45 22,45 18,41 18,21 30,21 30,29 28,31 30,33 30,35 28,37 30,39"}},{"tag":"path","attr":{"d":"M38,7.8C37.5,6,36,4.7,34.3,4.2C31.9,3.7,28.2,3,24,3s-7.9,0.7-10.3,1.2C12,4.7,10.5,6,10,7.8 c-0.5,1.7-1,4.1-1,6.7c0,2.6,0.5,5,1,6.7c0.5,1.8,1.9,3.1,3.7,3.5C16.1,25.3,19.8,26,24,26s7.9-0.7,10.3-1.2 c1.8-0.4,3.2-1.8,3.7-3.5c0.5-1.7,1-4.1,1-6.7C39,11.9,38.5,9.5,38,7.8z M29,13H19c-1.1,0-2-0.9-2-2V9c0-0.6,3.1-1,7-1s7,0.4,7,1v2 C31,12.1,30.1,13,29,13z"}}]},{"tag":"rect","attr":{"x":"23","y":"26","fill":"#D68600","width":"2","height":"19"}}]})(props);
};
function FcKindle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z"}},{"tag":"path","attr":{"fill":"#eee","d":"M35,6H13c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V7C36,6.4,35.6,6,35,6z"}},{"tag":"rect","attr":{"x":"20","y":"40","fill":"#546E7A","width":"8","height":"2"}},{"tag":"g","attr":{"fill":"#A1A1A1"},"child":[{"tag":"rect","attr":{"x":"16","y":"11","width":"16","height":"3"}},{"tag":"rect","attr":{"x":"16","y":"18","width":"16","height":"2"}},{"tag":"rect","attr":{"x":"16","y":"22","width":"12","height":"2"}},{"tag":"rect","attr":{"x":"16","y":"26","width":"16","height":"2"}},{"tag":"rect","attr":{"x":"16","y":"30","width":"12","height":"2"}}]}]})(props);
};
function FcLandscape (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"rect","attr":{"x":"36.1","y":"8.1","transform":"matrix(.707 .707 -.707 .707 21.201 -25.184)","width":"9.9","height":"9.9"}},{"tag":"rect","attr":{"x":"36","y":"8","width":"10","height":"10"}}]},{"tag":"circle","attr":{"fill":"#FFEB3B","cx":"41","cy":"13","r":"3"}},{"tag":"polygon","attr":{"fill":"#2E7D32","points":"16.5,18 0,42 33,42"}},{"tag":"polygon","attr":{"fill":"#4CAF50","points":"33.6,24 19.2,42 48,42"}}]})(props);
};
function FcLeave (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFCDD2","d":"M5,38V14h38v24c0,2.2-1.8,4-4,4H9C6.8,42,5,40.2,5,38z"}},{"tag":"path","attr":{"fill":"#F44336","d":"M43,10v6H5v-6c0-2.2,1.8-4,4-4h30C41.2,6,43,7.8,43,10z"}},{"tag":"g","attr":{"fill":"#B71C1C"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"10","r":"3"}},{"tag":"circle","attr":{"cx":"15","cy":"10","r":"3"}}]},{"tag":"g","attr":{"fill":"#BDBDBD"},"child":[{"tag":"path","attr":{"d":"M33,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C35,3.9,34.1,3,33,3z"}},{"tag":"path","attr":{"d":"M15,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C17,3.9,16.1,3,15,3z"}}]},{"tag":"path","attr":{"fill":"#F44336","d":"M22.2,35.3c0-0.2,0-0.5,0.1-0.7c0.1-0.2,0.2-0.4,0.4-0.5s0.3-0.3,0.5-0.3c0.2-0.1,0.5-0.1,0.7-0.1 s0.5,0,0.7,0.1c0.2,0.1,0.4,0.2,0.6,0.3s0.3,0.3,0.4,0.5c0.1,0.2,0.1,0.4,0.1,0.7c0,0.2,0,0.5-0.1,0.7c-0.1,0.2-0.2,0.4-0.4,0.5 c-0.2,0.1-0.3,0.3-0.6,0.3S24.3,37,24,37s-0.5,0-0.7-0.1c-0.2-0.1-0.4-0.2-0.5-0.3c-0.2-0.1-0.3-0.3-0.4-0.5 C22.3,35.8,22.2,35.6,22.2,35.3z M25.3,31h-2.6l-0.4-11h3.3L25.3,31z"}}]})(props);
};
function FcLeftDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"7,41 7,23 25,41"}},{"tag":"rect","attr":{"x":"22.6","y":"5","transform":"matrix(.707 .707 -.707 .707 22.912 -12.567)","fill":"#3F51B5","width":"8","height":"32.7"}}]})(props);
};
function FcLeftDown2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"19,44 30.7,30 7.3,30"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M27,6h13v8H27c-2.2,0-4,1.8-4,4v17h-8V18C15,11.4,20.4,6,27,6z"}}]})(props);
};
function FcLeftUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"7,7 25,7 7,25"}},{"tag":"rect","attr":{"x":"22.6","y":"10.3","transform":"matrix(-.707 .707 -.707 -.707 64.28 26.626)","fill":"#3F51B5","width":"8","height":"32.7"}}]})(props);
};
function FcLeftUp2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"19,4 30.7,18 7.3,18"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M27,42h13v-8H27c-2.2,0-4-1.8-4-4V13h-8v17C15,36.6,20.4,42,27,42z"}}]})(props);
};
function FcLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"4,24 18,12.3 18,35.7"}},{"tag":"rect","attr":{"x":"15","y":"20","width":"27","height":"8"}}]}]})(props);
};
function FcLibrary (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"rect","attr":{"x":"1","y":"38","width":"46","height":"2"}},{"tag":"rect","attr":{"x":"25","y":"18","width":"4","height":"16"}},{"tag":"rect","attr":{"x":"31","y":"18","width":"4","height":"16"}},{"tag":"rect","attr":{"x":"37","y":"18","width":"4","height":"16"}},{"tag":"rect","attr":{"x":"19","y":"18","width":"4","height":"16"}},{"tag":"rect","attr":{"x":"13","y":"18","width":"4","height":"16"}},{"tag":"rect","attr":{"x":"7","y":"18","width":"4","height":"16"}},{"tag":"polygon","attr":{"points":"43,16 5,16 5,13 24,4 43,13"}},{"tag":"rect","attr":{"x":"5","y":"34","width":"38","height":"2"}}]},{"tag":"g","attr":{"fill":"#EF6C00"},"child":[{"tag":"rect","attr":{"x":"25","y":"16","width":"4","height":"2"}},{"tag":"rect","attr":{"x":"31","y":"16","width":"4","height":"2"}},{"tag":"rect","attr":{"x":"37","y":"16","width":"4","height":"2"}},{"tag":"rect","attr":{"x":"19","y":"16","width":"4","height":"2"}},{"tag":"rect","attr":{"x":"13","y":"16","width":"4","height":"2"}},{"tag":"rect","attr":{"x":"7","y":"16","width":"4","height":"2"}},{"tag":"rect","attr":{"x":"3","y":"36","width":"42","height":"2"}},{"tag":"circle","attr":{"cx":"24","cy":"11","r":"2"}}]}]})(props);
};
function FcLightAtTheEndOfTunnel (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M6,10v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V10c0-2.2-1.8-4-4-4H10C7.8,6,6,7.8,6,10z"}},{"tag":"path","attr":{"fill":"#CCF2F6","d":"M27.9,28.9h-5.8l-8.4,7.2l6-7.2v-2.4l-3,0.8l3-1.9v-1.5c0-0.8,0.1-1.7,0.6-2.4l-7.5-8.3l8.7,7.2 c0.7-0.7,1.5-1.1,2.5-1.2l0.6-7.3l1.1,7.3c0.3,0,0.6,0.1,0.8,0.1l1.2-1.2l-0.3,1.7c0.3,0.1,0.4,0.3,0.7,0.6l4.4-2.8l-3.6,3.9 c0.3,0.4,0.6,1,0.7,1.7l2.2,0.1l-2.2,0.8c0,0.3,0,1.5,0,1.5l2.6,1.4l-2.6-0.3c0,0,0,1.8,0,2.2l6.2,7.1L27.9,28.9z"}}]})(props);
};
function FcLikePlaceholder (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFCDD2","d":"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"}}]})(props);
};
function FcLike (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"}}]})(props);
};
function FcLineChart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"circle","attr":{"cx":"8","cy":"38","r":"3"}},{"tag":"circle","attr":{"cx":"16","cy":"40","r":"3"}},{"tag":"circle","attr":{"cx":"24","cy":"33","r":"3"}},{"tag":"circle","attr":{"cx":"32","cy":"35","r":"3"}},{"tag":"circle","attr":{"cx":"40","cy":"31","r":"3"}},{"tag":"polygon","attr":{"points":"39.1,29.2 31.8,32.9 23.5,30.8 15.5,37.8 8.5,36.1 7.5,39.9 16.5,42.2 24.5,35.2 32.2,37.1 40.9,32.8"}}]},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"circle","attr":{"cx":"8","cy":"20","r":"3"}},{"tag":"circle","attr":{"cx":"16","cy":"22","r":"3"}},{"tag":"circle","attr":{"cx":"24","cy":"15","r":"3"}},{"tag":"circle","attr":{"cx":"32","cy":"20","r":"3"}},{"tag":"circle","attr":{"cx":"40","cy":"8","r":"3"}},{"tag":"path","attr":{"d":"M38.3,6.9c-2.1,3.2-5.3,8-6.9,10.4c-1.2-0.7-3.1-2-6.4-4l-1.3-0.8l-8.3,7.3l-7-1.7l-1,3.9l9,2.3l7.7-6.7 c2.6,1.6,5.8,3.6,6.5,4.1l0.5,0.5l0.9-0.1c1.1-0.1,1.1-0.1,9.5-12.9L38.3,6.9z"}}]}]})(props);
};
function FcLink (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"path","attr":{"d":"M38,13h-3c-5.5,0-10,4.5-10,10s4.5,10,10,10h3c5.5,0,10-4.5,10-10S43.5,13,38,13z M38,29h-3 c-3.3,0-6-2.7-6-6s2.7-6,6-6h3c3.3,0,6,2.7,6,6S41.3,29,38,29z"}},{"tag":"path","attr":{"d":"M13,13h-3C4.5,13,0,17.5,0,23s4.5,10,10,10h3c5.5,0,10-4.5,10-10S18.5,13,13,13z M13,29h-3 c-3.3,0-6-2.7-6-6s2.7-6,6-6h3c3.3,0,6,2.7,6,6S16.3,29,13,29z"}}]},{"tag":"path","attr":{"fill":"#42A5F5","d":"M33,21H15c-1.1,0-2,0.9-2,2s0.9,2,2,2h18c1.1,0,2-0.9,2-2S34.1,21,33,21z"}}]})(props);
};
function FcLinux (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 2 48 48","enableBackground":"new 0 2 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#ECEFF1","points":"20.1,18.2 20.2,20.5 18.6,23.5 16.1,28.4 15.6,32.5 17.4,38.3 21.5,40.6 27.7,40.6 33.5,36.2 \r\n\t36.1,29.3 30.1,22 28.4,17.9 "}},{"tag":"path","attr":{"fill":"#263238","d":"M34.3,23.9c-1.6-2.3-2.9-3.7-3.6-6.6c-0.7-2.9,0.2-2.1-0.4-4.6c-0.3-1.3-0.8-2.2-1.3-2.9\r\n\tc-0.6-0.7-1.3-1.1-1.7-1.2c-0.9-0.5-3-1.3-5.6,0.1c-2.7,1.4-2.4,4.4-1.9,10.5c0,0.4-0.1,0.9-0.3,1.3c-0.4,0.9-1.1,1.7-1.7,2.4\r\n\tc-0.7,1-1.4,2-1.9,3.1c-1.2,2.3-2.3,5.2-2,6.3c0.5-0.1,6.8,9.5,6.8,9.7c0.4-0.1,2.1-0.1,3.6-0.1c2.1-0.1,3.3-0.2,5,0.2\r\n\tc0-0.3-0.1-0.6-0.1-0.9c0-0.6,0.1-1.1,0.2-1.8c0.1-0.5,0.2-1,0.3-1.6c-1,0.9-2.8,1.9-4.5,2.2c-1.5,0.3-4-0.2-5.2-1.7\r\n\tc0.1,0,0.3,0,0.4-0.1c0.3-0.1,0.6-0.2,0.7-0.4c0.3-0.5,0.1-1-0.1-1.3c-0.2-0.3-1.7-1.4-2.4-2c-0.7-0.6-1.1-0.9-1.5-1.3\r\n\tc0,0-0.6-0.6-0.8-0.8c-0.2-0.2-0.3-0.4-0.4-0.5c-0.2-0.5-0.3-1.1-0.2-1.9c0.1-1.1,0.5-2,1-3c0.2-0.4,0.7-1.2,0.7-1.2\r\n\ts-1.7,4.2-0.8,5.5c0,0,0.1-1.3,0.5-2.6c0.3-0.9,0.8-2.2,1.4-2.9s2.1-3.3,2.2-4.9c0-0.7,0.1-1.4,0.1-1.9c-0.4-0.4,6.6-1.4,7-0.3\r\n\tc0.1,0.4,1.5,4,2.3,5.9c0.4,0.9,0.9,1.7,1.2,2.7c0.3,1.1,0.5,2.6,0.5,4.1c0,0.3,0,0.8-0.1,1.3c0.2,0,4.1-4.2-0.5-7.7\r\n\tc0,0,2.8,1.3,2.9,3.9c0.1,2.1-0.8,3.8-1,4.1c0.1,0,2.1,0.9,2.2,0.9c0.4,0,1.2-0.3,1.2-0.3c0.1-0.3,0.4-1.1,0.4-1.4\r\n\tC37.6,29.9,35.9,26.2,34.3,23.9z"}},{"tag":"g","attr":{},"child":[{"tag":"ellipse","attr":{"fill":"#ECEFF1","cx":"21.6","cy":"15.3","rx":"1.3","ry":"2"}},{"tag":"ellipse","attr":{"fill":"#ECEFF1","cx":"26.1","cy":"15.2","rx":"1.7","ry":"2.3"}}]},{"tag":"g","attr":{},"child":[{"tag":"ellipse","attr":{"transform":"matrix(-0.1254 -0.9921 0.9921 -0.1254 8.9754 38.9969)","fill":"#212121","cx":"21.7","cy":"15.5","rx":"1.2","ry":"0.7"}},{"tag":"ellipse","attr":{"fill":"#212121","cx":"26","cy":"15.6","rx":"1","ry":"1.3"}}]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#FFC107","d":"M39.3,37.6c-0.4-0.2-1.1-0.5-1.7-1.4c-0.3-0.5-0.2-1.9-0.7-2.5c-0.3-0.4-0.7-0.2-0.8-0.2\r\n\t\tc-0.9,0.2-3,1.6-4.4,0c-0.2-0.2-0.5-0.5-1-0.5c-0.5,0-0.7,0.2-0.9,0.6s-0.2,0.7-0.2,1.7c0,0.8,0,1.7-0.1,2.4\r\n\t\tc-0.2,1.7-0.5,2.7-0.5,3.7c0,1.1,0.3,1.8,0.7,2.1c0.3,0.3,0.8,0.5,1.9,0.5c1.1,0,1.8-0.4,2.5-1.1c0.5-0.5,0.9-0.7,2.3-1.7\r\n\t\tc1.1-0.7,2.8-1.6,3.1-1.9c0.2-0.2,0.5-0.3,0.5-0.9C40,37.9,39.6,37.7,39.3,37.6z"}},{"tag":"path","attr":{"fill":"#FFC107","d":"M19.2,37.9c-1-1.6-1.1-1.9-1.8-2.9c-0.6-1-1.9-2.9-2.7-2.9c-0.6,0-0.9,0.3-1.3,0.7\r\n\t\tc-0.4,0.4-0.8,1.3-1.5,1.8c-0.6,0.5-2.3,0.4-2.7,1c-0.4,0.6,0.4,1.5,0.4,3c0,0.6-0.5,1-0.6,1.4c-0.1,0.5-0.2,0.8,0,1.2\r\n\t\tc0.4,0.6,0.9,0.8,4.3,1.5c1.8,0.4,3.5,1.4,4.6,1.5c1.1,0.1,3,0,3-2.7C21,39.9,20.1,39.5,19.2,37.9z"}},{"tag":"path","attr":{"fill":"#FFC107","d":"M21.1,19.8C20.5,19.4,20,19,20,18.4c0-0.6,0.4-0.8,1-1.3c0.1-0.1,1.2-1.1,2.3-1.1s2.4,0.7,2.9,0.9\r\n\t\tc0.9,0.2,1.8,0.4,1.7,1.1c-0.1,1-0.2,1.2-1.2,1.7c-0.7,0.2-2,1.3-2.9,1.3c-0.4,0-1,0-1.4-0.1C22.1,20.8,21.6,20.3,21.1,19.8z"}}]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#634703","d":"M20.9,19c0.2,0.2,0.5,0.4,0.8,0.5c0.2,0.1,0.5,0.2,0.5,0.2c0.4,0,0.7,0,0.9,0c0.5,0,1.2-0.2,1.9-0.6\r\n\t\tc0.7-0.3,0.8-0.5,1.3-0.7c0.5-0.3,1-0.6,0.8-0.7c-0.2-0.1-0.4,0-1.1,0.4c-0.6,0.4-1.1,0.6-1.7,0.9c-0.3,0.1-0.7,0.3-1,0.3\r\n\t\tc-0.3,0-0.6,0-0.9,0c-0.3,0-0.5-0.1-0.8-0.2c-0.2-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.6-0.5-0.8-0.6c0,0-0.2,0-0.1,0.1\r\n\t\tC20.6,18.7,20.7,18.8,20.9,19z"}},{"tag":"path","attr":{"fill":"#634703","d":"M23.9,16.8c0.1,0.2,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.1,0.2,0.1c0.1-0.1,0-0.3-0.1-0.3\r\n\t\tC24.4,16.7,23.9,16.7,23.9,16.8z"}},{"tag":"path","attr":{"fill":"#634703","d":"M22.3,17c0,0.1,0.2,0.2,0.2,0.1c0.1-0.1,0.2-0.2,0.3-0.2c0.2-0.1,0.1-0.2-0.2-0.2\r\n\t\tC22.4,16.8,22.4,16.9,22.3,17z"}}]},{"tag":"path","attr":{"fill":"#455A64","d":"M32,34.7c0,0.1,0,0.2,0,0.3c0.2,0.4,0.7,0.5,1.1,0.5c0.6,0,1.2-0.4,1.5-0.8c0-0.1,0.1-0.2,0.2-0.3\r\n\tc0.2-0.3,0.3-0.5,0.4-0.6c0,0-0.1-0.1-0.1-0.2c-0.1-0.2-0.4-0.4-0.8-0.5c-0.3-0.1-0.8-0.2-1-0.2c-0.9-0.1-1.4,0.2-1.7,0.5\r\n\tc0,0,0.1,0,0.1,0.1c0.2,0.2,0.3,0.4,0.3,0.7C32.1,34.4,32,34.5,32,34.7z"}}]})(props);
};
function FcList (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"6","y":"22","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"14","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"30","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"6","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"38","width":"4","height":"4"}}]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"14","y":"22","width":"28","height":"4"}},{"tag":"rect","attr":{"x":"14","y":"14","width":"28","height":"4"}},{"tag":"rect","attr":{"x":"14","y":"30","width":"28","height":"4"}},{"tag":"rect","attr":{"x":"14","y":"6","width":"28","height":"4"}},{"tag":"rect","attr":{"x":"14","y":"38","width":"28","height":"4"}}]}]})(props);
};
function FcLockLandscape (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M7,10h34c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V14C3,11.8,4.8,10,7,10z"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M42,34V14c0-0.6-0.4-1-1-1H7c-0.6,0-1,0.4-1,1v20c0,0.6,0.4,1,1,1h34C41.6,35,42,34.6,42,34z"}},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"path","attr":{"d":"M29,31H19c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v6C30,30.6,29.6,31,29,31z"}},{"tag":"path","attr":{"d":"M24,17c-2.2,0-4,1.8-4,4v3h2v-3c0-1.1,0.9-2,2-2s2,0.9,2,2v3h2v-3C28,18.8,26.2,17,24,17z"}}]}]})(props);
};
function FcLockPortrait (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M10,41V7c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H14C11.8,45,10,43.2,10,41z"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M34,6H14c-0.6,0-1,0.4-1,1v34c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1V7C35,6.4,34.6,6,34,6z"}},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"path","attr":{"d":"M29,30H19c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v6C30,29.6,29.6,30,29,30z"}},{"tag":"path","attr":{"d":"M24,16c-2.2,0-4,1.8-4,4v3h2v-3c0-1.1,0.9-2,2-2s2,0.9,2,2v3h2v-3C28,17.8,26.2,16,24,16z"}}]}]})(props);
};
function FcLock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#424242","d":"M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z"}},{"tag":"path","attr":{"fill":"#FB8C00","d":"M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"}},{"tag":"circle","attr":{"fill":"#C76E00","cx":"24","cy":"31","r":"3"}}]})(props);
};
function FcLowBattery (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#CFD8DC"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"}},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"}}]},{"tag":"path","attr":{"fill":"#8BC34A","d":"M34,44H14c-1.1,0-2-0.9-2-2v-9h24v9C36,43.1,35.1,44,34,44z"}}]})(props);
};
function FcLowPriority (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18 C25.3,46.4,22.7,46.4,21.2,44.8z"}},{"tag":"g","attr":{"fill":"#FFEB3B"},"child":[{"tag":"polygon","attr":{"points":"24,33.4 17,25 31,25"}},{"tag":"rect","attr":{"x":"22","y":"14.8","width":"4","height":"12.3"}}]}]})(props);
};
function FcMakeDecision (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"}},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"}},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"}},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"}}]},{"tag":"polygon","attr":{"fill":"#FF5722","points":"24,23.5 24,12.5 30.6,18"}},{"tag":"path","attr":{"fill":"#FF5722","d":"M28.9,24.4c0,0.2,0.1,0.4,0.1,0.6c0,2.8-2.2,5-5,5s-5-2.2-5-5s2.2-5,5-5c0.7,0,1.4,0.2,2,0.4v-4.2 c-0.6-0.1-1.3-0.2-2-0.2c-5,0-9,4-9,9s4,9,9,9s9-4,9-9c0-1.2-0.2-2.4-0.7-3.4L28.9,24.4z"}}]})(props);
};
function FcManager (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FF9800","points":"24,37 19,31 19,25 29,25 29,31"}},{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"19","r":"2"}},{"tag":"circle","attr":{"cx":"15","cy":"19","r":"2"}}]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z"}},{"tag":"path","attr":{"fill":"#FF5722","d":"M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z"}},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"28","cy":"19","r":"1"}},{"tag":"circle","attr":{"cx":"20","cy":"19","r":"1"}}]},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M29,31L29,31l-5,1l-5-1c0,0-11,2-11,13h32C40,33,29,31,29,31z"}},{"tag":"polygon","attr":{"fill":"#3F51B5","points":"23,35 22,44 26,44 25,35 26,34 24,32 22,34"}}]})(props);
};
function FcMediumPriority (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFC107","d":"M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18 C25.3,46.4,22.7,46.4,21.2,44.8z"}},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"24","r":"2"}},{"tag":"circle","attr":{"cx":"32","cy":"24","r":"2"}},{"tag":"circle","attr":{"cx":"16","cy":"24","r":"2"}}]}]})(props);
};
function FcMenu (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#607D8B"},"child":[{"tag":"rect","attr":{"x":"6","y":"22","width":"36","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"10","width":"36","height":"4"}},{"tag":"rect","attr":{"x":"6","y":"34","width":"36","height":"4"}}]}]})(props);
};
function FcMiddleBattery (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#CFD8DC"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"}},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"}}]},{"tag":"path","attr":{"fill":"#8BC34A","d":"M34,44H14c-1.1,0-2-0.9-2-2V23h24v19C36,43.1,35.1,44,34,44z"}}]})(props);
};
function FcMindMap (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#CFD8DC","points":"39.4,23 38.6,19 26,21.6 26,8 22,8 22,20.3 8.1,11.3 5.9,14.7 21.1,24.5 9.4,39.8 12.6,42.2 23.9,27.4 32.3,40.1 35.7,37.9 27.3,25.4"}},{"tag":"circle","attr":{"fill":"#3F51B5","cx":"24","cy":"24","r":"7"}},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"8","r":"5"}},{"tag":"circle","attr":{"cx":"39","cy":"21","r":"5"}},{"tag":"circle","attr":{"cx":"7","cy":"13","r":"5"}},{"tag":"circle","attr":{"cx":"11","cy":"41","r":"5"}},{"tag":"circle","attr":{"cx":"34","cy":"39","r":"5"}}]}]})(props);
};
function FcMinus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"8","y":"21","fill":"#5C6BC0","width":"32","height":"6"}}]})(props);
};
function FcMissedCall (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#F44336"},"child":[{"tag":"polygon","attr":{"points":"30.3,12.9 24,19.2 15.7,10.9 12.9,13.7 24,24.8 33.1,15.7"}},{"tag":"polygon","attr":{"points":"36,19 27,10 36,10"}}]},{"tag":"path","attr":{"fill":"#009688","d":"M44.5,30.8l-2.4-2.4c-8.5-8.3-28.9-7.1-36.2,0l-2.4,2.4c-0.7,0.7-0.7,1.7,0,2.4l4.8,4.7 c0.7,0.7,1.7,0.7,2.4,0l5.3-5.1l-0.4-5.6c1.7-1.7,15.1-1.7,16.8,0L32.1,33l5.1,4.9c0.7,0.7,1.7,0.7,2.4,0l4.8-4.7 C45.2,32.5,45.2,31.4,44.5,30.8z"}}]})(props);
};
function FcMms (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E91E63","d":"M37,39H11l-6,6V11c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,36.3,40.3,39,37,39z"}},{"tag":"polygon","attr":{"fill":"#F48FB1","points":"20,16.5 10,31 30,31"}},{"tag":"g","attr":{"fill":"#F8BBD0"},"child":[{"tag":"circle","attr":{"cx":"34","cy":"15","r":"3"}},{"tag":"polygon","attr":{"points":"30,21 22,31 38,31"}}]}]})(props);
};
function FcMoneyTransfer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#78909C","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"}},{"tag":"rect","attr":{"x":"14","y":"1","fill":"#AED581","width":"20","height":"31"}},{"tag":"g","attr":{"fill":"#558B2F"},"child":[{"tag":"path","attr":{"d":"M13,0v33h22V0H13z M33,31H15V2h18V31z"}},{"tag":"path","attr":{"d":"M34,3c0,1.7-0.3,3-2,3c-1.7,0-3-1.3-3-3s1.3-2,3-2C33.7,1,34,1.3,34,3z"}},{"tag":"path","attr":{"d":"M16,1c1.7,0,3,0.3,3,2s-1.3,3-3,3s-2-1.3-2-3S14.3,1,16,1z"}},{"tag":"circle","attr":{"cx":"24","cy":"8","r":"2"}},{"tag":"circle","attr":{"cx":"24","cy":"20","r":"6"}}]},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"}}]})(props);
};
function FcMultipleCameras (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M42,41H12c-2.2,0-4-1.8-4-4V17c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v20C46,39.2,44.2,41,42,41z"}},{"tag":"path","attr":{"fill":"#78909C","d":"M36,36H6c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v20C40,34.2,38.2,36,36,36z"}},{"tag":"circle","attr":{"fill":"#455A64","cx":"26","cy":"22","r":"10"}},{"tag":"circle","attr":{"fill":"#42A5F5","cx":"26","cy":"22","r":"7"}},{"tag":"path","attr":{"fill":"#90CAF9","d":"M29.7,19.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1 c1.2-1.3,3.3-1.3,4.5,0c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C30.1,20.7,30.1,20.1,29.7,19.7z"}},{"tag":"rect","attr":{"x":"6","y":"12","fill":"#ADD8FB","width":"6","height":"3"}}]})(props);
};
function FcMultipleDevices (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#546E7A","d":"M4,28V8c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H8C5.8,32,4,30.2,4,28z"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M36,7H8C7.4,7,7,7.4,7,8v20c0,0.6,0.4,1,1,1h28c0.6,0,1-0.4,1-1V8C37,7.4,36.6,7,36,7z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M38,33H6c-2.2,0-4-1.8-4-4v0h40v0C42,31.2,40.2,33,38,33z"}},{"tag":"path","attr":{"fill":"#E38939","d":"M24,40V16c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v24c0,2.2-1.8,4-4,4H28C25.8,44,24,42.2,24,40z"}},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M40,15H28c-0.6,0-1,0.4-1,1v22c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V16C41,15.4,40.6,15,40,15z"}},{"tag":"circle","attr":{"fill":"#A6642A","cx":"34","cy":"41.5","r":"1.5"}}]})(props);
};
function FcMultipleInputs (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90A4AE","d":"M40,35v5H8v-5H4v5c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4v-5H40z"}},{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"polygon","attr":{"points":"24,23.4 17,15 31,15"}},{"tag":"rect","attr":{"x":"22","y":"4","width":"4","height":"14"}},{"tag":"path","attr":{"d":"M31.5,26.9L30.8,28l3.5,1.9l0.6-1.2c1.6-3,2.6-4.7,3.5-5.2C39.3,23,41,23,44,23v-4 C36.3,19,35.6,19.4,31.5,26.9z"}},{"tag":"polygon","attr":{"points":"38.4,31 29.4,35 28,25"}},{"tag":"path","attr":{"d":"M16.5,26.9l0.6,1.2L13.6,30L13,28.8c-1.6-3-2.6-4.7-3.5-5.2C8.7,23,7,23,4,23v-4 C11.7,19,12.4,19.4,16.5,26.9z"}},{"tag":"polygon","attr":{"points":"20,25 18.6,35 9.6,31"}}]}]})(props);
};
function FcMultipleSmartphones (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M4,31V8c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v23c0,2.2-1.8,4-4,4H8C5.8,35,4,33.2,4,31z"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M20,7H8C7.4,7,7,7.4,7,8v21c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V8C21,7.4,20.6,7,20,7z"}},{"tag":"circle","attr":{"fill":"#37474F","cx":"14","cy":"32.5","r":"1.5"}},{"tag":"path","attr":{"fill":"#546E7A","d":"M14,36V13c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v23c0,2.2-1.8,4-4,4H18C15.8,40,14,38.2,14,36z"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M30,12H18c-0.6,0-1,0.4-1,1v21c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V13C31,12.4,30.6,12,30,12z"}},{"tag":"circle","attr":{"fill":"#37474F","cx":"24","cy":"37.5","r":"1.5"}},{"tag":"path","attr":{"fill":"#E38939","d":"M24,40V18c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v22c0,2.2-1.8,4-4,4H28C25.8,44,24,42.2,24,40z"}},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M40,17H28c-0.6,0-1,0.4-1,1v20c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V18C41,17.4,40.6,17,40,17z"}},{"tag":"circle","attr":{"fill":"#A6642A","cx":"34","cy":"41.5","r":"1.5"}}]})(props);
};
function FcMusic (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#E91E63"},"child":[{"tag":"circle","attr":{"cx":"19","cy":"33","r":"9"}},{"tag":"polygon","attr":{"points":"24,6 24,33 28,33 28,14 39,17 39,10"}}]}]})(props);
};
function FcNegativeDynamic (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"rect","attr":{"x":"19","y":"22","width":"10","height":"20"}},{"tag":"rect","attr":{"x":"6","y":"8","width":"10","height":"34"}},{"tag":"rect","attr":{"x":"32","y":"30","width":"10","height":"12"}}]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"42,12 32,22 42,22"}},{"tag":"rect","attr":{"x":"32","y":"6.9","transform":"matrix(.707 -.707 .707 .707 .059 28.142)","width":"4","height":"14.1"}}]}]})(props);
};
function FcNeutralDecision (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"}},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"}},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"}},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"}}]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"25","r":"2"}},{"tag":"circle","attr":{"cx":"32","cy":"25","r":"2"}},{"tag":"circle","attr":{"cx":"16","cy":"25","r":"2"}}]}]})(props);
};
function FcNeutralTrading (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"polygon","attr":{"points":"43.4,13 35,20 35,6"}},{"tag":"rect","attr":{"x":"4","y":"11","width":"34","height":"4"}}]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"40","y":"23","width":"4","height":"19"}},{"tag":"rect","attr":{"x":"34","y":"23","width":"4","height":"19"}},{"tag":"rect","attr":{"x":"28","y":"23","width":"4","height":"19"}},{"tag":"rect","attr":{"x":"22","y":"23","width":"4","height":"19"}},{"tag":"rect","attr":{"x":"16","y":"23","width":"4","height":"19"}},{"tag":"rect","attr":{"x":"10","y":"23","width":"4","height":"19"}},{"tag":"rect","attr":{"x":"4","y":"23","width":"4","height":"19"}}]}]})(props);
};
function FcNews (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF5722","d":"M32,15v28H10c-2.2,0-4-1.8-4-4V15H32z"}},{"tag":"path","attr":{"fill":"#FFCCBC","d":"M14,5v34c0,2.2-1.8,4-4,4h29c2.2,0,4-1.8,4-4V5H14z"}},{"tag":"g","attr":{"fill":"#FF5722"},"child":[{"tag":"rect","attr":{"x":"20","y":"10","width":"18","height":"4"}},{"tag":"rect","attr":{"x":"20","y":"17","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"30","y":"17","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"20","y":"21","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"30","y":"21","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"20","y":"25","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"30","y":"25","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"20","y":"29","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"30","y":"29","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"20","y":"33","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"30","y":"33","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"20","y":"37","width":"8","height":"2"}},{"tag":"rect","attr":{"x":"30","y":"37","width":"8","height":"2"}}]}]})(props);
};
function FcNext (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#2196F3","points":"17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24"}}]})(props);
};
function FcNfcSign (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M37,42c-0.3,0-0.7-0.1-1-0.3c-1-0.5-1.3-1.8-0.8-2.7c0-0.1,3.7-6.8,3.7-15S35.3,9,35.3,9\r\n\tc-0.5-1-0.2-2.2,0.8-2.7c1-0.5,2.2-0.2,2.7,0.8c0.2,0.3,4.3,7.6,4.3,17s-4.1,16.7-4.3,17C38.4,41.6,37.7,42,37,42z M32.8,35.8\r\n\tc0.1-0.2,2.2-5,2.2-11.8c0-6.8-2.1-11.6-2.2-11.8c-0.4-1-1.6-1.5-2.6-1c-1,0.4-1.5,1.6-1,2.6c0,0,1.8,4.3,1.8,10.2\r\n\tc0,5.9-1.8,10.2-1.8,10.2c-0.4,1,0,2.2,1,2.6c0.3,0.1,0.5,0.2,0.8,0.2C31.8,37,32.5,36.6,32.8,35.8z M23.3,33c0.6-0.1,1.1-0.5,1.4-1\r\n\tc0.1-0.2,2.3-3.9,2.3-8c0-4.1-2.2-7.9-2.3-8c-0.6-1-1.8-1.3-2.7-0.7c-1,0.6-1.3,1.8-0.7,2.7c0,0,1.7,3,1.7,6c0,1.3-0.3,2.7-0.7,3.7\r\n\tl-13-11.2c-0.5-0.4-1.2-0.6-1.8-0.4c-0.6,0.2-1.2,0.6-1.4,1.3C6.1,17.5,5,20.5,5,24c0,3.5,1.1,6.5,1.1,6.7c0.4,1,1.5,1.6,2.6,1.2\r\n\tc1-0.4,1.6-1.5,1.2-2.6c0,0-0.9-2.6-0.9-5.3c0-0.8,0.1-1.6,0.2-2.3l12.5,10.8c0.4,0.3,0.8,0.5,1.3,0.5C23.1,33,23.2,33,23.3,33z"}}]})(props);
};
function FcNightLandscape (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#673AB7","points":"16.5,18 0,42 33,42"}},{"tag":"polygon","attr":{"fill":"#9575CD","points":"33.6,24 19.2,42 48,42"}},{"tag":"path","attr":{"fill":"#40C4FF","d":"M42.9,6.3C43.6,7.4,44,8.6,44,10c0,3.9-3.1,7-7,7c-0.7,0-1.3-0.1-1.9-0.3c1.2,2,3.4,3.3,5.9,3.3 c3.9,0,7-3.1,7-7C48,9.8,45.9,7.1,42.9,6.3z"}}]})(props);
};
function FcNightPortrait (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#40C4FF","d":"M42.9,6.3C43.6,7.4,44,8.6,44,10c0,3.9-3.1,7-7,7c-0.7,0-1.3-0.1-1.9-0.3c1.2,2,3.4,3.3,5.9,3.3 c3.9,0,7-3.1,7-7C48,9.8,45.9,7.1,42.9,6.3z"}},{"tag":"g","attr":{"fill":"#B39DDB"},"child":[{"tag":"circle","attr":{"cx":"31","cy":"19","r":"2"}},{"tag":"circle","attr":{"cx":"13","cy":"19","r":"2"}},{"tag":"polygon","attr":{"points":"22,37 17,31 17,25 27,25 27,31"}}]},{"tag":"path","attr":{"fill":"#D1C4E9","d":"M31,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C31,18.9,31,14.1,31,13z"}},{"tag":"g","attr":{"fill":"#673AB7"},"child":[{"tag":"circle","attr":{"cx":"26","cy":"19","r":"1"}},{"tag":"circle","attr":{"cx":"18","cy":"19","r":"1"}},{"tag":"path","attr":{"d":"M22,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H22z"}},{"tag":"path","attr":{"d":"M27,31L27,31c0,0-2,1-5,1s-5-1-5-1S6,33,6,44h32C38,33,27,31,27,31z"}}]}]})(props);
};
function FcNoIdea (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FBC02D","d":"M37,22c0-7.7-6.6-13.8-14.5-12.9c-6,0.7-10.8,5.5-11.4,11.5c-0.5,4.6,1.4,8.7,4.6,11.3 c1.4,1.2,2.3,2.9,2.3,4.8V37h12v-0.1c0-1.8,0.8-3.6,2.2-4.8C35.1,29.7,37,26.1,37,22z"}},{"tag":"path","attr":{"fill":"#FFF59D","d":"M30.6,20.2l-3-2c-0.3-0.2-0.8-0.2-1.1,0L24,19.8l-2.4-1.6c-0.3-0.2-0.8-0.2-1.1,0l-3,2 c-0.2,0.2-0.4,0.4-0.4,0.7s0,0.6,0.2,0.8l3.8,4.7V37h2V26c0-0.2-0.1-0.4-0.2-0.6l-3.3-4.1l1.5-1l2.4,1.6c0.3,0.2,0.8,0.2,1.1,0 l2.4-1.6l1.5,1l-3.3,4.1C25.1,25.6,25,25.8,25,26v11h2V26.4l3.8-4.7c0.2-0.2,0.3-0.5,0.2-0.8S30.8,20.3,30.6,20.2z"}},{"tag":"circle","attr":{"fill":"#5C6BC0","cx":"24","cy":"44","r":"3"}},{"tag":"path","attr":{"fill":"#9FA8DA","d":"M26,45h-4c-2.2,0-4-1.8-4-4v-5h12v5C30,43.2,28.2,45,26,45z"}},{"tag":"g","attr":{"fill":"#5C6BC0"},"child":[{"tag":"path","attr":{"d":"M30,41l-11.6,1.6c0.3,0.7,0.9,1.4,1.6,1.8l9.4-1.3C29.8,42.5,30,41.8,30,41z"}},{"tag":"polygon","attr":{"points":"18,38.7 18,40.7 30,39 30,37"}}]},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"}}]})(props);
};
function FcNoVideo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M8,12h22c2.2,0,4,1.8,4,4v16c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V16C4,13.8,5.8,12,8,12z"}},{"tag":"polygon","attr":{"fill":"#388E3C","points":"44,35 34,29 34,19 44,13"}},{"tag":"line","attr":{"fill":"none","stroke":"#212121","strokeWidth":"4","strokeLinejoin":"round","strokeMiterlimit":"10","x1":"5","y1":"5","x2":"43","y2":"43"}}]})(props);
};
function FcNook (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90A4AE","d":"M8,39V9c0-3.3,2.7-6,6-6h20c3.3,0,6,2.7,6,6v30c0,3.3-2.7,6-6,6H14C10.7,45,8,42.3,8,39z"}},{"tag":"path","attr":{"fill":"#ECEFF1","d":"M34,7H14c-1.1,0-2,0.9-2,2v26c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V9C36,7.9,35.1,7,34,7z"}},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"rect","attr":{"x":"16","y":"12","width":"16","height":"3"}},{"tag":"rect","attr":{"x":"16","y":"19","width":"16","height":"2"}},{"tag":"rect","attr":{"x":"16","y":"23","width":"12","height":"2"}},{"tag":"rect","attr":{"x":"16","y":"27","width":"16","height":"2"}},{"tag":"rect","attr":{"x":"16","y":"31","width":"12","height":"2"}}]},{"tag":"path","attr":{"fill":"none","stroke":"#eee","strokeWidth":"2","strokeMiterlimit":"10","d":"M22,43v-1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v1"}}]})(props);
};
function FcNumericalSorting12 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#546E7A","points":"38,33 38,5 34,5 34,33 28,33 36,43 44,33"}},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"path","attr":{"d":"M16.4,20h-3V8.6L9.9,9.7V7.3L16,5.1h0.3V20z"}},{"tag":"path","attr":{"d":"M19.4,43H9.2v-2l4.8-5.1c0.4-0.4,0.7-0.8,0.9-1.1c0.2-0.3,0.5-0.6,0.6-0.9c0.2-0.3,0.3-0.5,0.3-0.8 c0.1-0.2,0.1-0.5,0.1-0.7c0-0.7-0.2-1.2-0.5-1.6c-0.3-0.4-0.8-0.6-1.4-0.6c-0.3,0-0.7,0.1-0.9,0.2c-0.3,0.1-0.5,0.3-0.7,0.5 c-0.2,0.2-0.3,0.5-0.4,0.8s-0.1,0.6-0.1,1h-3c0-0.7,0.1-1.3,0.4-1.9c0.2-0.6,0.6-1.1,1-1.6c0.5-0.4,1-0.8,1.6-1.1 c0.6-0.3,1.4-0.4,2.2-0.4c0.8,0,1.5,0.1,2.1,0.3c0.6,0.2,1.1,0.5,1.5,0.8s0.7,0.8,0.9,1.3s0.3,1.1,0.3,1.8c0,0.5-0.1,1-0.2,1.4 S18.3,34.5,18,35s-0.6,0.9-1,1.4c-0.4,0.5-0.9,1-1.4,1.5L13,40.6h6.4V43z"}}]}]})(props);
};
function FcNumericalSorting21 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#546E7A","points":"38,33 38,5 34,5 34,33 28,33 36,43 44,33"}},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"path","attr":{"d":"M19.2,20H9v-2l4.8-5.1c0.4-0.4,0.7-0.8,0.9-1.1c0.2-0.3,0.5-0.6,0.6-0.9c0.2-0.3,0.3-0.5,0.3-0.8 c0.1-0.2,0.1-0.5,0.1-0.7c0-0.7-0.2-1.2-0.5-1.6c-0.3-0.4-0.8-0.6-1.4-0.6c-0.3,0-0.7,0.1-0.9,0.2c-0.3,0.1-0.5,0.3-0.7,0.5 c-0.2,0.2-0.3,0.5-0.4,0.8s-0.1,0.6-0.1,1h-3c0-0.7,0.1-1.3,0.4-1.9c0.2-0.6,0.6-1.1,1-1.6c0.5-0.4,1-0.8,1.6-1.1 c0.6-0.3,1.4-0.4,2.2-0.4c0.8,0,1.5,0.1,2.1,0.3c0.6,0.2,1.1,0.5,1.5,0.8s0.7,0.8,0.9,1.3c0.2,0.5,0.3,1.1,0.3,1.8 c0,0.5-0.1,1-0.2,1.4s-0.4,0.9-0.7,1.4s-0.6,0.9-1,1.4c-0.4,0.5-0.9,1-1.4,1.5l-2.6,2.8h6.4V20z"}},{"tag":"path","attr":{"d":"M16.2,43h-3V31.6l-3.5,1.1v-2.4l6.2-2.2h0.3V43z"}}]}]})(props);
};
function FcOk (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#4CAF50","cx":"24","cy":"24","r":"21"}},{"tag":"polygon","attr":{"fill":"#CCFF90","points":"34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"}}]})(props);
};
function FcOldTimeCamera (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#546E7A","d":"M14,13H8v-1.8C8,10.5,8.5,10,9.2,10h3.6c0.7,0,1.2,0.5,1.2,1.2V13z"}},{"tag":"path","attr":{"fill":"#5E35B1","d":"M40,40H8c-2.2,0-4-1.8-4-4V22h40v14C44,38.2,42.2,40,40,40z"}},{"tag":"path","attr":{"fill":"#42257A","d":"M12.7,22c-0.4,1.3-0.7,2.6-0.7,4c0,6.6,5.4,12,12,12s12-5.4,12-12c0-1.4-0.3-2.7-0.7-4H12.7z"}},{"tag":"path","attr":{"fill":"#78909C","d":"M8,12h32c2.2,0,4,1.8,4,4v6H4v-6C4,13.8,5.8,12,8,12z"}},{"tag":"path","attr":{"fill":"#78909C","d":"M33.9,13.1H14.2L17.6,8c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,13.1z"}},{"tag":"path","attr":{"fill":"#455A64","d":"M35.3,22c-1.6-4.7-6.1-8-11.3-8s-9.7,3.3-11.3,8H35.3z"}},{"tag":"circle","attr":{"fill":"#B388FF","cx":"24","cy":"26","r":"9"}},{"tag":"path","attr":{"fill":"#C7A7FF","d":"M29,23c-1.2-1.4-3-2.2-4.8-2.2c-1.8,0-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.4,24.4,29.5,23.5,29,23z"}},{"tag":"rect","attr":{"x":"36","y":"15","fill":"#DBE2E5","width":"5","height":"4"}}]})(props);
};
function FcOnlineSupport (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"13","y":"30","fill":"#BF360C","width":"22","height":"12"}},{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"}},{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"}}]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"}},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"30","cy":"26","r":"2"}},{"tag":"circle","attr":{"cx":"18","cy":"26","r":"2"}}]},{"tag":"path","attr":{"fill":"#FF5722","d":"M24,2C15.5,2,3,7.8,3,35.6L13,42V24l16.8-9.8L35,21v21l10-8.2c0-5.6-0.9-29-15.4-29L28.2,2H24z"}},{"tag":"path","attr":{"fill":"#757575","d":"M45,24c-0.6,0-1,0.4-1,1v-7c0-8.8-7.2-16-16-16h-9c-0.6,0-1,0.4-1,1s0.4,1,1,1h9c7.7,0,14,6.3,14,14v10 c0,0.6,0.4,1,1,1s1-0.4,1-1v2c0,3.9-3.1,7-7,7H24c-0.6,0-1,0.4-1,1s0.4,1,1,1h13c5,0,9-4,9-9v-5C46,24.4,45.6,24,45,24z"}},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"path","attr":{"d":"M45,22h-1c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2v-4C47,22.9,46.1,22,45,22z"}},{"tag":"circle","attr":{"cx":"24","cy":"38","r":"2"}}]}]})(props);
};
function FcOpenedFolder (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFA000","d":"M38,12H22l-4-4H8c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4h31c1.7,0,3-1.3,3-3V16C42,13.8,40.2,12,38,12z"}},{"tag":"path","attr":{"fill":"#FFCA28","d":"M42.2,18H15.3c-1.9,0-3.6,1.4-3.9,3.3L8,40h31.7c1.9,0,3.6-1.4,3.9-3.3l2.5-14C46.6,20.3,44.7,18,42.2,18z"}}]})(props);
};
function FcOrgUnit (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M10,10v28h28V10H10z M34,34H14V14h20V34z"}},{"tag":"rect","attr":{"x":"6","y":"6","fill":"#D81B60","width":"12","height":"12"}},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"30","y":"6","width":"12","height":"12"}},{"tag":"rect","attr":{"x":"6","y":"30","width":"12","height":"12"}},{"tag":"rect","attr":{"x":"30","y":"30","width":"12","height":"12"}}]}]})(props);
};
function FcOrganization (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M42,42H6V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4V42z"}},{"tag":"rect","attr":{"x":"6","y":"42","fill":"#64B5F6","width":"36","height":"2"}},{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"rect","attr":{"x":"31","y":"27","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"21","y":"27","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"11","y":"27","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"31","y":"35","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"11","y":"35","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"31","y":"19","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"21","y":"19","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"11","y":"19","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"31","y":"11","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"21","y":"11","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"11","y":"11","width":"6","height":"5"}},{"tag":"rect","attr":{"x":"21","y":"35","width":"6","height":"9"}}]}]})(props);
};
function FcOvertime (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M12,40V20h32v20c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"}},{"tag":"path","attr":{"fill":"#78909C","d":"M44,16v6H12v-6c0-2.2,1.8-4,4-4h24C42.2,12,44,13.8,44,16z"}},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"37","cy":"16","r":"3"}},{"tag":"circle","attr":{"cx":"20","cy":"16","r":"3"}}]},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"path","attr":{"d":"M37,10c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2v-4C39,10.9,38.1,10,37,10z"}},{"tag":"path","attr":{"d":"M20,10c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2v-4C22,10.9,21.1,10,20,10z"}}]},{"tag":"rect","attr":{"x":"32","y":"34","fill":"#90A4AE","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"26","y":"34","fill":"#90A4AE","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"20","y":"34","fill":"#90A4AE","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"32","y":"28","fill":"#90A4AE","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"26","y":"28","fill":"#90A4AE","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"20","y":"28","fill":"#90A4AE","width":"4","height":"4"}},{"tag":"circle","attr":{"fill":"#F44336","cx":"16","cy":"15","r":"12"}},{"tag":"circle","attr":{"fill":"#eee","cx":"16","cy":"15","r":"9"}},{"tag":"rect","attr":{"x":"15","y":"8","width":"2","height":"7"}},{"tag":"rect","attr":{"x":"16.9","y":"14.2","transform":"matrix(-.707 .707 -.707 -.707 42.506 16.192)","width":"1.9","height":"5.4"}},{"tag":"circle","attr":{"cx":"16","cy":"15","r":"1.5"}}]})(props);
};
function FcPackage (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF9800","d":"M38,42H10c-2.2,0-4-1.8-4-4V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,40.2,40.2,42,38,42z"}},{"tag":"path","attr":{"fill":"#8A5100","d":"M29.5,16h-11c-0.8,0-1.5-0.7-1.5-1.5v0c0-0.8,0.7-1.5,1.5-1.5h11c0.8,0,1.5,0.7,1.5,1.5v0 C31,15.3,30.3,16,29.5,16z"}}]})(props);
};
function FcPaid (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2E7D32","d":"M25.4,5.6c-0.8-0.8-2-0.8-2.8,0l-12,12c-0.8,0.8-0.8,2,0,2.8C11,20.8,11.5,21,12,21s1-0.2,1.4-0.6l12-12 C26.2,7.6,26.2,6.4,25.4,5.6z"}},{"tag":"path","attr":{"fill":"#1B5E20","d":"M37.4,17.6l-12-12c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l12,12C35,20.8,35.5,21,36,21s1-0.2,1.4-0.6 C38.2,19.6,38.2,18.4,37.4,17.6z"}},{"tag":"path","attr":{"fill":"#388E3C","d":"M37.4,41H10.6c-1,0-1.8-0.7-2-1.6L5,21h38l-3.7,18.4C39.1,40.3,38.3,41,37.4,41z"}},{"tag":"path","attr":{"fill":"#4CAF50","d":"M43,23H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,22.1,44.1,23,43,23z"}},{"tag":"polygon","attr":{"fill":"#DCEDC8","points":"30.8,24.8 22.9,32.7 19.2,28.9 17,31.1 22.9,37 33,26.9"}}]})(props);
};
function FcPanorama (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F57C00","d":"M4,9v32c0,0,8.4-3,20-3s20,3,20,3V9c0,0-6.7,3-20,3S4,9,4,9z"}},{"tag":"path","attr":{"fill":"#942A09","d":"M24,34c0.1,0,0.3,0,0.4,0L15,19L6.9,36.2C10.3,35.3,16.5,34,24,34z"}},{"tag":"path","attr":{"fill":"#BF360C","d":"M24,34c3.3,0,6.3,0.2,9,0.6l-8-11.8l-7.8,11.5C19.3,34.1,21.6,34,24,34z"}},{"tag":"path","attr":{"fill":"#E65100","d":"M40.7,36L35,26.5l-5,7.8C34.5,34.7,38.2,35.4,40.7,36z"}},{"tag":"ellipse","attr":{"fill":"#FFF9C4","cx":"36","cy":"19.5","rx":"2","ry":"2.5"}}]})(props);
};
function FcParallelTasks (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"36,13 36,9 22,9 22,22 13,22 13,26 22,26 22,39 36,39 36,35 26,35 26,26 36,26 36,22 26,22 26,13"}},{"tag":"rect","attr":{"x":"6","y":"17","fill":"#D81B60","width":"10","height":"14"}},{"tag":"rect","attr":{"x":"32","y":"6","fill":"#2196F3","width":"10","height":"10"}},{"tag":"rect","attr":{"x":"32","y":"32","fill":"#2196F3","width":"10","height":"10"}},{"tag":"rect","attr":{"x":"32","y":"19","fill":"#2196F3","width":"10","height":"10"}}]})(props);
};
function FcPhoneAndroid (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z"}},{"tag":"rect","attr":{"x":"21","y":"40","fill":"#78909C","width":"6","height":"2"}}]})(props);
};
function FcPhone (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#009688","d":"M39.1,7l-3.7,0C22.2,7.2,7.1,24.1,7,35.4l0,3.7c0,1,0.8,1.9,1.9,1.9l7.5-0.1c1,0,1.9-0.9,1.9-1.9l0.2-8.2 l-4.7-4c0-2.6,10.5-13.1,13.2-13.2l4.3,4.7l7.9-0.2c1,0,1.9-0.9,1.9-1.9L41,8.9C41,7.8,40.2,7,39.1,7z"}}]})(props);
};
function FcPhotoReel (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#673AB7","d":"M10,9c-2.2,0-4,1.8-4,4v26c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V13c0-2.2-1.8-4-4-4"}},{"tag":"g","attr":{"fill":"#311B92"},"child":[{"tag":"rect","attr":{"x":"14","y":"13","width":"2","height":"26"}},{"tag":"path","attr":{"d":"M24,9V7c0-1.2-0.8-2-2-2h-8c-1.2,0-2,0.8-2,2v2H24z"}}]},{"tag":"path","attr":{"fill":"#D84315","d":"M30,13H16v26h14V13z M21,37h-3v-4h3V37z M21,19h-3v-4h3V19z M27,37h-3v-4h3V37z M24,19v-4h3v4H24z"}},{"tag":"path","attr":{"fill":"#FF5722","d":"M30,13v2h3v4h-3v14h3v4h-3v2h12V13H30z M39,37h-3v-4h3V37z M39,19h-3v-4h3V19z"}}]})(props);
};
function FcPicture (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F57C00","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"}},{"tag":"circle","attr":{"fill":"#FFF9C4","cx":"35","cy":"16","r":"3"}},{"tag":"polygon","attr":{"fill":"#942A09","points":"20,16 9,32 31,32"}},{"tag":"polygon","attr":{"fill":"#BF360C","points":"31,22 23,32 39,32"}}]})(props);
};
function FcPieChart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#00BCD4","d":"M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18c5.2,0,9.9-2.2,13.1-5.7L24,24V6z"}},{"tag":"path","attr":{"fill":"#448AFF","d":"M42,24c0-9.9-8.1-18-18-18v18H42z"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M24,24l13.1,12.3c3-3.2,4.9-7.5,4.9-12.3H24z"}}]})(props);
};
function FcPlanner (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M5,38V14h38v24c0,2.2-1.8,4-4,4H9C6.8,42,5,40.2,5,38z"}},{"tag":"path","attr":{"fill":"#F44336","d":"M43,10v6H5v-6c0-2.2,1.8-4,4-4h30C41.2,6,43,7.8,43,10z"}},{"tag":"g","attr":{"fill":"#B71C1C"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"10","r":"3"}},{"tag":"circle","attr":{"cx":"15","cy":"10","r":"3"}}]},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"path","attr":{"d":"M33,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C35,3.9,34.1,3,33,3z"}},{"tag":"path","attr":{"d":"M15,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C17,3.9,16.1,3,15,3z"}}]},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"rect","attr":{"x":"13","y":"21","width":"6","height":"6"}},{"tag":"rect","attr":{"x":"21","y":"21","width":"6","height":"6"}},{"tag":"rect","attr":{"x":"29","y":"21","width":"6","height":"6"}},{"tag":"rect","attr":{"x":"13","y":"29","width":"6","height":"6"}},{"tag":"rect","attr":{"x":"21","y":"29","width":"6","height":"6"}}]},{"tag":"rect","attr":{"x":"29","y":"29","fill":"#F44336","width":"6","height":"6"}}]})(props);
};
function FcPlus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#4CAF50","cx":"24","cy":"24","r":"21"}},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"21","y":"14","width":"6","height":"20"}},{"tag":"rect","attr":{"x":"14","y":"21","width":"20","height":"6"}}]}]})(props);
};
function FcPodiumWithAudience (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#B0BEC5","points":"41,12 7,12 6,16 11,19 9,16 39,16 37,19 42,16"}},{"tag":"polygon","attr":{"fill":"#78909C","points":"9,16 39,16 35,28 13,28"}},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"24","cy":"28","r":"4"}},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"36","cy":"28","r":"4"}},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"12","cy":"28","r":"4"}},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"18","cy":"37","r":"5"}},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"30","cy":"37","r":"5"}}]})(props);
};
function FcPodiumWithSpeaker (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#FFB74D","cx":"24","cy":"11","r":"6"}},{"tag":"path","attr":{"fill":"#607D8B","d":"M36,26.1c0,0-3.3-7.1-12-7.1s-12,7.1-12,7.1V30h24V26.1z"}},{"tag":"polygon","attr":{"fill":"#B0BEC5","points":"41,25 7,25 6,29 11,32 9,29 39,29 37,32 42,29"}},{"tag":"polygon","attr":{"fill":"#78909C","points":"9,29 39,29 35,41 13,41"}}]})(props);
};
function FcPodiumWithoutSpeaker (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#B0BEC5","points":"43,16 5,16 4,20 9,23 7,20 41,20 39,23 44,20"}},{"tag":"polygon","attr":{"fill":"#78909C","points":"7,20 41,20 37,36 11,36"}}]})(props);
};
function FcPortraitMode (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF9800","d":"M22,38c-4.8,0-5-7-5-7v-6h10v6C27,31,26.8,38,22,38z"}},{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"31","cy":"19","r":"2"}},{"tag":"circle","attr":{"cx":"13","cy":"19","r":"2"}}]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M31,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C31,18.9,31,14.1,31,13z"}},{"tag":"path","attr":{"fill":"#424242","d":"M22,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H22z"}},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"26","cy":"19","r":"1"}},{"tag":"circle","attr":{"cx":"18","cy":"19","r":"1"}}]},{"tag":"path","attr":{"fill":"#009688","d":"M27,31L27,31c0,0-1.8,2-5,2s-5-2-5-2S6,33,6,44h32C38,33,27,31,27,31z"}},{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"rect","attr":{"x":"36.1","y":"6.1","transform":"matrix(.707 .707 -.707 .707 19.787 -25.77)","width":"9.9","height":"9.9"}},{"tag":"rect","attr":{"x":"36","y":"6","width":"10","height":"10"}}]},{"tag":"circle","attr":{"fill":"#FFEB3B","cx":"41","cy":"11","r":"3"}}]})(props);
};
function FcPositiveDynamic (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"rect","attr":{"x":"19","y":"22","width":"10","height":"20"}},{"tag":"rect","attr":{"x":"32","y":"8","width":"10","height":"34"}},{"tag":"rect","attr":{"x":"6","y":"30","width":"10","height":"12"}}]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"11,8 21,18 21,8"}},{"tag":"rect","attr":{"x":"11","y":"8.9","transform":"matrix(-.707 -.707 .707 -.707 10.879 36.506)","width":"4","height":"14.1"}}]}]})(props);
};
function FcPrevious (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#2196F3","points":"30.9,43 34,39.9 18.1,24 34,8.1 30.9,5 12,24"}}]})(props);
};
function FcPrint (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"9","y":"11","fill":"#424242","width":"30","height":"3"}},{"tag":"path","attr":{"fill":"#616161","d":"M4,25h40v-7c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4V25z"}},{"tag":"path","attr":{"fill":"#424242","d":"M8,36h32c2.2,0,4-1.8,4-4v-8H4v8C4,34.2,5.8,36,8,36z"}},{"tag":"circle","attr":{"fill":"#00E676","cx":"40","cy":"18","r":"1"}},{"tag":"rect","attr":{"x":"11","y":"4","fill":"#90CAF9","width":"26","height":"10"}},{"tag":"path","attr":{"fill":"#242424","d":"M37.5,31h-27C9.7,31,9,30.3,9,29.5v0c0-0.8,0.7-1.5,1.5-1.5h27c0.8,0,1.5,0.7,1.5,1.5v0 C39,30.3,38.3,31,37.5,31z"}},{"tag":"rect","attr":{"x":"11","y":"31","fill":"#90CAF9","width":"26","height":"11"}},{"tag":"rect","attr":{"x":"11","y":"29","fill":"#42A5F5","width":"26","height":"2"}},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"rect","attr":{"x":"16","y":"33","width":"17","height":"2"}},{"tag":"rect","attr":{"x":"16","y":"37","width":"13","height":"2"}}]}]})(props);
};
function FcPrivacy (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#424242","d":"M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z"}},{"tag":"path","attr":{"fill":"#FB8C00","d":"M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"}},{"tag":"circle","attr":{"fill":"#EFEBE9","cx":"24","cy":"31","r":"6"}},{"tag":"circle","attr":{"fill":"#1E88E5","cx":"24","cy":"31","r":"3"}},{"tag":"circle","attr":{"fill":"#fff","cx":"26","cy":"29","r":"1"}}]})(props);
};
function FcProcess (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#9C27B0"},"child":[{"tag":"polygon","attr":{"points":"31,8 42.9,9.6 33.1,19.4"}},{"tag":"polygon","attr":{"points":"17,40 5.1,38.4 14.9,28.6"}},{"tag":"polygon","attr":{"points":"8,17 9.6,5.1 19.4,14.9"}},{"tag":"path","attr":{"d":"M9.3,21.2L5.1,22C5,22.7,5,23.3,5,24c0,4.6,1.6,9,4.6,12.4l3-2.6C10.3,31.1,9,27.6,9,24 C9,23.1,9.1,22.1,9.3,21.2z"}},{"tag":"path","attr":{"d":"M24,5c-5.4,0-10.2,2.3-13.7,5.9l2.8,2.8C15.9,10.8,19.7,9,24,9c0.9,0,1.9,0.1,2.8,0.3l0.7-3.9 C26.4,5.1,25.2,5,24,5z"}},{"tag":"path","attr":{"d":"M38.7,26.8l4.2-0.8c0.1-0.7,0.1-1.3,0.1-2c0-4.4-1.5-8.7-4.3-12.1l-3.1,2.5c2.2,2.7,3.4,6.1,3.4,9.5 C39,24.9,38.9,25.9,38.7,26.8z"}},{"tag":"path","attr":{"d":"M34.9,34.3C32.1,37.2,28.3,39,24,39c-0.9,0-1.9-0.1-2.8-0.3l-0.7,3.9c1.2,0.2,2.4,0.3,3.5,0.3 c5.4,0,10.2-2.3,13.7-5.9L34.9,34.3z"}},{"tag":"polygon","attr":{"points":"40,31 38.4,42.9 28.6,33.1"}}]}]})(props);
};
function FcPuzzle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8BC34A","d":"M39,15c0-2.2-1.8-4-4-4h-6c-0.7,0-1.1-0.8-0.7-1.4c0.6-1,0.9-2.2,0.6-3.5c-0.4-2-1.9-3.6-3.8-4 C21.8,1.4,19,3.9,19,7c0,1,0.3,1.8,0.7,2.6c0.4,0.6,0,1.4-0.8,1.4h-6c-2.2,0-4,1.8-4,4v7c0,0.7,0.8,1.1,1.4,0.7 c1-0.6,2.2-0.9,3.5-0.6c2,0.4,3.6,1.9,4,3.8c0.7,3.2-1.8,6.1-4.9,6.1c-1,0-1.8-0.3-2.6-0.7C9.8,30.9,9,31.3,9,32v6c0,2.2,1.8,4,4,4 h22c2.2,0,4-1.8,4-4V15z"}}]})(props);
};
function FcQuestions (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#42A5F5","points":"36,44 8,44 8,8 28,8 36,16"}},{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,40 12,40 12,4 32,4 40,12"}},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,13 31,13 31,5.5"}},{"tag":"path","attr":{"fill":"#1976D2","d":"M24.5,28.3c0-4.7,3.6-4.4,3.6-7.2c0-0.7-0.2-2.1-2-2.1c-2,0-2.1,1.6-2.1,2h-2.7c0-0.7,0.3-4.2,4.8-4.2 c4.6,0,4.7,3.6,4.7,4.3c0,3.5-3.8,4-3.8,7.3H24.5z M24.3,31.8c0-0.2,0-1.5,1.5-1.5c1.4,0,1.5,1.3,1.5,1.5c0,0.4-0.2,1.4-1.5,1.4 C24.5,33.2,24.3,32.2,24.3,31.8z"}}]})(props);
};
function FcRadarPlot (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M38.4,13L24.1,6.4L4.6,12.1l8.8,13.2l-2.2,15.1h22.7l6.6-13.3L38.4,13z M32.1,37.5H14.7l1.8-12.9L9.4,13.9 l14.5-4.3L35.6,15l1.8,11.7L32.1,37.5z"}},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"8","r":"4"}},{"tag":"circle","attr":{"cx":"37","cy":"14","r":"4"}},{"tag":"circle","attr":{"cx":"39","cy":"27","r":"4"}},{"tag":"circle","attr":{"cx":"7","cy":"13","r":"4"}},{"tag":"circle","attr":{"cx":"13","cy":"39","r":"4"}},{"tag":"circle","attr":{"cx":"15","cy":"25","r":"4"}},{"tag":"circle","attr":{"cx":"33","cy":"39","r":"4"}}]}]})(props);
};
function FcRating (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#F44336","cx":"24","cy":"24","r":"21"}},{"tag":"polygon","attr":{"fill":"#FFCA28","points":"24,11 27.9,18.9 36.6,20.2 30.3,26.3 31.8,35 24,30.9 16.2,35 17.7,26.3 11.4,20.2 20.1,18.9"}}]})(props);
};
function FcRatings (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#42A5F5","points":"36,44 8,44 8,8 28,8 36,16"}},{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,40 12,40 12,4 32,4 40,12"}},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,13 31,13 31,5.5"}},{"tag":"polygon","attr":{"fill":"#1976D2","points":"34,20 27,20 29.4,22.4 27,24.9 23,20.9 16.9,26.9 19.1,29.1 23,25.1 27,29.1 31.6,24.6 34,27"}}]})(props);
};
function FcReadingEbook (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M33.5,27c-2.2-3-5.2-5-9.5-5s-7.3,2-9.5,5H33.5z"}},{"tag":"path","attr":{"fill":"#546E7A","d":"M34.1,43H13.9c-1.1,0-1.9-0.8-2-1.9l-0.8-13C11.1,27,12,26,13.1,26h21.8c1.2,0,2.1,1,2,2.1l-0.8,13 C36,42.2,35.2,43,34.1,43z"}},{"tag":"circle","attr":{"fill":"#B0BEC5","cx":"34","cy":"29","r":"1"}},{"tag":"g","attr":{"fill":"#FFB74D"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"12","r":"8"}},{"tag":"path","attr":{"d":"M16.1,42.4L15,43.5c-0.6,0.6-1.6,0.6-2.2,0l-3.3-3.3c-0.6-0.6-0.6-1.6,0-2.2l1.1-1.1c1.3-1.3,3.1-1.3,4.4,0 l1.1,1.1C17.3,39.3,17.3,41.2,16.1,42.4z"}},{"tag":"path","attr":{"d":"M31.9,38l1.1-1.1c1.3-1.3,3.1-1.3,4.4,0l1.1,1.1c0.6,0.6,0.6,1.6,0,2.2l-3.3,3.3c-0.6,0.6-1.6,0.6-2.2,0 l-1.1-1.1C30.7,41.2,30.7,39.3,31.9,38z"}}]}]})(props);
};
function FcReading (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#5C6BC0","d":"M40,40c-6.9,0-16,4-16,4V22c0,0,9-4,18-4L40,40z"}},{"tag":"path","attr":{"fill":"#7986CB","d":"M8,40c6.9,0,16,4,16,4V22c0,0-9-4-18-4L8,40z"}},{"tag":"g","attr":{"fill":"#FFB74D"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"12","r":"8"}},{"tag":"path","attr":{"d":"M41,32h1c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1h-1c-1.7,0-3,1.3-3,3v0C38,30.7,39.3,32,41,32z"}},{"tag":"path","attr":{"d":"M7,26H6c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h1c1.7,0,3-1.3,3-3v0C10,27.3,8.7,26,7,26z"}}]}]})(props);
};
function FcReddit (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#FFFFFF","d":"M12.193,19.555c-1.94-1.741-4.79-1.727-6.365,0.029c-1.576,1.756-1.301,5.023,0.926,6.632L12.193,19.555z"}},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M35.807,19.555c1.939-1.741,4.789-1.727,6.365,0.029c1.575,1.756,1.302,5.023-0.927,6.632L35.807,19.555z"}},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"fill":"#FFFFFF","cx":"38.32","cy":"10.475","r":"3.5"}}]},{"tag":"g","attr":{},"child":[{"tag":"ellipse","attr":{"fill":"#FFFFFF","cx":"24.085","cy":"28.611","rx":"18.085","ry":"12.946"}}]}]},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"fill":"#D84315","cx":"30.365","cy":"26.39","r":"2.884"}},{"tag":"circle","attr":{"fill":"#D84315","cx":"17.635","cy":"26.39","r":"2.884"}}]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M24.002,34.902c-3.252,0-6.14-0.745-8.002-1.902c1.024,2.044,4.196,4,8.002,4c3.802,0,6.976-1.956,7.998-4\r\n\t\tC30.143,34.157,27.254,34.902,24.002,34.902z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M41.83,27.026l-1.17-1.621c0.831-0.6,1.373-1.556,1.488-2.623c0.105-0.98-0.157-1.903-0.721-2.531\r\n\t\tc-0.571-0.637-1.391-0.99-2.307-0.994c-0.927,0.013-1.894,0.365-2.646,1.041l-1.336-1.488c1.123-1.008,2.545-1.523,3.991-1.553\r\n\t\tc1.488,0.007,2.833,0.596,3.786,1.658c0.942,1.05,1.387,2.537,1.221,4.081C43.961,24.626,43.121,26.096,41.83,27.026z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M6.169,27.026c-1.29-0.932-2.131-2.401-2.306-4.031c-0.166-1.543,0.279-3.03,1.221-4.079\r\n\t\tc0.953-1.062,2.297-1.651,3.785-1.658c0.009,0,0.018,0,0.027,0c1.441,0,2.849,0.551,3.965,1.553l-1.336,1.488\r\n\t\tc-0.753-0.676-1.689-1.005-2.646-1.041c-0.916,0.004-1.735,0.357-2.306,0.994c-0.563,0.628-0.826,1.55-0.721,2.53\r\n\t\tc0.115,1.067,0.657,2.023,1.488,2.624L6.169,27.026z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M25,16.84h-2c0-2.885,0-10.548,4.979-10.548c2.154,0,3.193,1.211,3.952,2.096\r\n\t\tc0.629,0.734,0.961,1.086,1.616,1.086h1.37v2h-1.37c-1.604,0-2.453-0.99-3.135-1.785c-0.67-0.781-1.198-1.398-2.434-1.398\r\n\t\tC25.975,8.292,25,11.088,25,16.84z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M24.085,16.95c9.421,0,17.085,5.231,17.085,11.661c0,6.431-7.664,11.662-17.085,11.662S7,35.042,7,28.611\r\n\t\tC7,22.181,14.664,16.95,24.085,16.95 M24.085,14.95C13.544,14.95,5,21.066,5,28.611c0,7.546,8.545,13.662,19.085,13.662\r\n\t\tc10.54,0,19.085-6.116,19.085-13.662C43.17,21.066,34.625,14.95,24.085,14.95L24.085,14.95z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M38.32,7.975c1.379,0,2.5,1.122,2.5,2.5s-1.121,2.5-2.5,2.5s-2.5-1.122-2.5-2.5S36.941,7.975,38.32,7.975\r\n\t\t M38.32,5.975c-2.484,0-4.5,2.015-4.5,4.5s2.016,4.5,4.5,4.5c2.486,0,4.5-2.015,4.5-4.5S40.807,5.975,38.32,5.975L38.32,5.975z"}}]}]})(props);
};
function FcRedo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"polygon","attr":{"points":"43,18 29,6.3 29,29.7"}},{"tag":"path","attr":{"d":"M20,14h12v8H20c-2.8,0-5,2.2-5,5s2.2,5,5,5h3v8h-3c-7.2,0-13-5.8-13-13S12.8,14,20,14z"}}]}]})(props);
};
function FcRefresh (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"path","attr":{"d":"M13,13c0-3.3,2.7-6,6-6h10c3.3,0,6,2.7,6,6h4c0-5.5-4.5-10-10-10H19C13.5,3,9,7.5,9,13v11.2h4V13z"}},{"tag":"polygon","attr":{"points":"4.6,22 11,30.4 17.4,22"}}]},{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"path","attr":{"d":"M35,35c0,3.3-2.7,6-6,6H19c-3.3,0-6-2.7-6-6H9c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V23h-4V35z"}},{"tag":"polygon","attr":{"points":"30.6,26 37,17.6 43.4,26"}}]}]})(props);
};
function FcRegisteredTrademark (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"}},{"tag":"path","attr":{"fill":"#E1BEE7","d":"M25,26.8h-4.5v9h-4V12.5h8.2c1.3,0,2.5,0.2,3.6,0.5c1,0.3,1.9,0.8,2.6,1.3c0.7,0.6,1.3,1.3,1.6,2.2 s0.6,1.9,0.6,3c0,1.6-0.4,2.9-1.1,3.9c-0.8,1-1.8,1.9-3.1,2.4l5.2,9.7v0.2h-4.3L25,26.8z M20.5,23.6h4.2c0.7,0,1.4-0.1,1.9-0.3 c0.5-0.2,1-0.5,1.4-0.8c0.4-0.3,0.6-0.7,0.8-1.2c0.2-0.5,0.3-1,0.3-1.6c0-0.6-0.1-1.1-0.3-1.6c-0.2-0.5-0.4-0.9-0.8-1.2 c-0.4-0.3-0.8-0.6-1.4-0.8c-0.5-0.2-1.2-0.3-2-0.3h-4.1V23.6z"}}]})(props);
};
function FcRemoveImage (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8CBCD6","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"}},{"tag":"circle","attr":{"fill":"#B3DDF5","cx":"35","cy":"16","r":"3"}},{"tag":"polygon","attr":{"fill":"#9AC9E3","points":"20,16 9,32 31,32"}},{"tag":"polygon","attr":{"fill":"#B3DDF5","points":"31,22 23,32 39,32"}},{"tag":"circle","attr":{"fill":"#F44336","cx":"38","cy":"38","r":"10"}},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 .707 -.707 -.707 91.74 38)","width":"3","height":"12"}},{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 -.707 .707 -.707 38 91.74)","width":"3","height":"12"}}]}]})(props);
};
function FcReuse (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#455A64","points":"12.1,42 17.2,42 16.5,18.2 10.9,20.2"}},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"36.5","cy":"10","r":"5"}},{"tag":"polygon","attr":{"fill":"#607D8B","points":"11,42 6,42 7.8,18.6 14.2,20.9"}},{"tag":"path","attr":{"fill":"#607D8B","d":"M31.7,15.9c-0.6-2-1.3-4-2.5-5.8c-1.3-1.6-3.2-3.1-6.1-2c-3.1,1.3-9.2,3.6-11.2,4.5 c-2.3,1.1-4.1,2.7-4.1,5.9c0,3.4,4.3,5.3,4.3,5.3l14.7-6.1l1.7,4.5l5.3,0.1C33.8,22.4,32.3,17.9,31.7,15.9z"}},{"tag":"path","attr":{"fill":"#B39DDB","d":"M37.9,42h-7.9c-1,0-1.8-0.7-2-1.7l-2.6-17.1h17l-2.6,17.1C39.8,41.3,38.9,42,37.9,42z"}},{"tag":"path","attr":{"fill":"#7E57C2","d":"M42,24H26c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v0C43,23.6,42.6,24,42,24z"}}]})(props);
};
function FcRightDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"41,41 23,41 41,23"}},{"tag":"rect","attr":{"x":"17.4","y":"5","transform":"matrix(.707 -.707 .707 .707 -8.854 21.374)","fill":"#3F51B5","width":"8","height":"32.7"}}]})(props);
};
function FcRightDown2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"29,44 17.3,30 40.7,30"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M21,6H8v8h13c2.2,0,4,1.8,4,4v17h8V18C33,11.4,27.6,6,21,6z"}}]})(props);
};
function FcRightUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"41,7 41,25 23,7"}},{"tag":"rect","attr":{"x":"17.4","y":"10.3","transform":"matrix(-.707 -.707 .707 -.707 17.661 60.567)","fill":"#3F51B5","width":"8","height":"32.7"}}]})(props);
};
function FcRightUp2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"29,4 17.3,18 40.7,18"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M21,42H8v-8h13c2.2,0,4-1.8,4-4V13h8v17C33,36.6,27.6,42,21,42z"}}]})(props);
};
function FcRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"44,24 30,35.7 30,12.3"}},{"tag":"rect","attr":{"x":"6","y":"20","width":"27","height":"8"}}]}]})(props);
};
function FcRotateCamera (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#5E35B1"},"child":[{"tag":"path","attr":{"d":"M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"}},{"tag":"path","attr":{"d":"M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"}},{"tag":"path","attr":{"d":"M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"}}]},{"tag":"path","attr":{"fill":"#E8EAF6","d":"M34,25c0-5.5-4.5-10-10-10s-10,4.5-10,10s4.5,10,10,10v-2c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8h-3.5 l4.5,5.6l4.5-5.6H34z"}}]})(props);
};
function FcRotateToLandscape (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M10,41V7c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H14C11.8,45,10,43.2,10,41z"}},{"tag":"path","attr":{"fill":"#F3E5F5","d":"M34,6H14c-0.6,0-1,0.4-1,1v34c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1V7C35,6.4,34.6,6,34,6z"}},{"tag":"polygon","attr":{"fill":"#9C27B0","points":"22,34 27.9,27 16.1,27"}},{"tag":"path","attr":{"fill":"#9C27B0","d":"M26,16c-3.3,0-6,2.7-6,6v6h4v-6c0-1.1,0.9-2,2-2s2,0.9,2,2v2h4v-2C32,18.7,29.3,16,26,16z"}}]})(props);
};
function FcRotateToPortrait (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M41,38H7c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h34c2.2,0,4,1.8,4,4v20C45,36.2,43.2,38,41,38z"}},{"tag":"path","attr":{"fill":"#F3E5F5","d":"M6,14v20c0,0.6,0.4,1,1,1h34c0.6,0,1-0.4,1-1V14c0-0.6-0.4-1-1-1H7C6.4,13,6,13.4,6,14z"}},{"tag":"polygon","attr":{"fill":"#9C27B0","points":"26,15 20.1,22 31.9,22"}},{"tag":"path","attr":{"fill":"#9C27B0","d":"M24,21v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-2h-4v2c0,3.3,2.7,6,6,6s6-2.7,6-6v-6H24z"}}]})(props);
};
function FcRuler (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"16.7","y":"1.6","transform":"matrix(-.707 -.707 .707 -.707 24 57.941)","fill":"#FFA000","width":"14.6","height":"44.8"}},{"tag":"g","attr":{"fill":"#9E6400"},"child":[{"tag":"rect","attr":{"x":"17.9","y":"20.2","transform":"matrix(-.707 -.707 .707 -.707 21.177 51.125)","width":"6.6","height":"2"}},{"tag":"rect","attr":{"x":"22.3","y":"15.2","transform":"matrix(-.707 -.707 .707 -.707 29.833 44.71)","width":"3.7","height":"2"}},{"tag":"rect","attr":{"x":"25.9","y":"12.2","transform":"matrix(-.707 -.707 .707 -.707 40.49 43.125)","width":"6.6","height":"2"}},{"tag":"rect","attr":{"x":"31.2","y":"6.3","transform":"matrix(.707 -.707 .707 .707 3.643 25.147)","width":"2","height":"3.7"}},{"tag":"rect","attr":{"x":"6.3","y":"31.2","transform":"matrix(-.707 -.707 .707 -.707 -8.794 60.71)","width":"3.7","height":"2"}},{"tag":"rect","attr":{"x":"9.9","y":"28.2","transform":"matrix(-.707 -.707 .707 -.707 1.863 59.125)","width":"6.6","height":"2"}},{"tag":"rect","attr":{"x":"14.3","y":"23.2","transform":"matrix(-.707 -.707 .707 -.707 10.52 52.71)","width":"3.7","height":"2"}}]}]})(props);
};
function FcRules (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#42A5F5","d":"M39,45H9c0,0-3-0.1-3-8h36C42,44.9,39,45,39,45z"}},{"tag":"rect","attr":{"x":"8","y":"3","fill":"#90CAF9","width":"32","height":"34"}},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"rect","attr":{"x":"18","y":"15","width":"16","height":"2"}},{"tag":"rect","attr":{"x":"18","y":"19","width":"16","height":"2"}},{"tag":"rect","attr":{"x":"18","y":"23","width":"16","height":"2"}},{"tag":"rect","attr":{"x":"18","y":"27","width":"16","height":"2"}},{"tag":"rect","attr":{"x":"18","y":"31","width":"16","height":"2"}}]},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"rect","attr":{"x":"14","y":"15","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"14","y":"19","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"14","y":"23","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"14","y":"27","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"14","y":"31","width":"2","height":"2"}}]}]})(props);
};
function FcSafe (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"8","y":"39","fill":"#455A64","width":"6","height":"3"}},{"tag":"rect","attr":{"x":"34","y":"39","fill":"#455A64","width":"6","height":"3"}},{"tag":"path","attr":{"fill":"#78909C","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"}},{"tag":"path","attr":{"fill":"#90A4AE","d":"M40,38H8c-0.6,0-1-0.4-1-1V11c0-0.6,0.4-1,1-1h32c0.6,0,1,0.4,1,1v26C41,37.6,40.6,38,40,38z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M29,14c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10s10-4.5,10-10C39,18.5,34.5,14,29,14z M29,31 c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7s7,3.1,7,7C36,27.9,32.9,31,29,31z"}},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"path","attr":{"d":"M35.3,19.1l0.4-0.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-0.4,0.4C34.4,18.1,34.9,18.6,35.3,19.1z"}},{"tag":"path","attr":{"d":"M22.7,19.1c0.4-0.5,0.9-1,1.4-1.4l-0.4-0.4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L22.7,19.1z"}},{"tag":"path","attr":{"d":"M21,24c0-0.3,0-0.7,0.1-1h-0.6c-0.6,0-1,0.4-1,1s0.4,1,1,1h0.6C21,24.7,21,24.3,21,24z"}},{"tag":"path","attr":{"d":"M29,16c0.3,0,0.7,0,1,0.1v-0.6c0-0.6-0.4-1-1-1s-1,0.4-1,1v0.6C28.3,16,28.7,16,29,16z"}},{"tag":"path","attr":{"d":"M35.3,28.9c-0.4,0.5-0.9,1-1.4,1.4l0.4,0.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4 L35.3,28.9z"}},{"tag":"path","attr":{"d":"M22.7,28.9l-0.4,0.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l0.4-0.4 C23.6,29.9,23.1,29.4,22.7,28.9z"}},{"tag":"path","attr":{"d":"M37.5,23h-0.6c0,0.3,0.1,0.7,0.1,1s0,0.7-0.1,1h0.6c0.6,0,1-0.4,1-1S38.1,23,37.5,23z"}},{"tag":"path","attr":{"d":"M29,32c-0.3,0-0.7,0-1-0.1v0.6c0,0.6,0.4,1,1,1s1-0.4,1-1v-0.6C29.7,32,29.3,32,29,32z"}}]},{"tag":"path","attr":{"fill":"#455A64","d":"M12,20c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2s2-0.9,2-2v-8C14,20.9,13.1,20,12,20z"}},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M12,18c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2s2-0.9,2-2v-8C14,18.9,13.1,18,12,18z"}}]})(props);
};
function FcSalesPerformance (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"path","attr":{"d":"M38,13c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,12.1,41.3,13,38,13 z"}},{"tag":"path","attr":{"d":"M38,10c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,9.1,41.3,10,38,10z"}},{"tag":"path","attr":{"d":"M38,16c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,15.1,41.3,16,38,16 z"}},{"tag":"path","attr":{"d":"M38,19c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,18.1,41.3,19,38,19 z"}},{"tag":"path","attr":{"d":"M38,22c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,21.1,41.3,22,38,22 z"}},{"tag":"path","attr":{"d":"M38,25c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,24.1,41.3,25,38,25 z"}},{"tag":"path","attr":{"d":"M38,28c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,27.1,41.3,28,38,28 z"}},{"tag":"path","attr":{"d":"M38,31c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,30.1,41.3,31,38,31 z"}},{"tag":"path","attr":{"d":"M38,34c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,33.1,41.3,34,38,34 z"}},{"tag":"path","attr":{"d":"M38,37c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,36.1,41.3,37,38,37 z"}},{"tag":"path","attr":{"d":"M38,40c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,39.1,41.3,40,38,40 z"}}]},{"tag":"g","attr":{"fill":"#FFC107"},"child":[{"tag":"ellipse","attr":{"cx":"38","cy":"8","rx":"6","ry":"2"}},{"tag":"path","attr":{"d":"M38,12c-2.8,0-5.1-0.6-5.8-1.5C32.1,10.7,32,10.8,32,11c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,11.4,40.8,12,38,12z"}},{"tag":"path","attr":{"d":"M38,15c-2.8,0-5.1-0.6-5.8-1.5C32.1,13.7,32,13.8,32,14c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,14.4,40.8,15,38,15z"}},{"tag":"path","attr":{"d":"M38,18c-2.8,0-5.1-0.6-5.8-1.5C32.1,16.7,32,16.8,32,17c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,17.4,40.8,18,38,18z"}},{"tag":"path","attr":{"d":"M38,21c-2.8,0-5.1-0.6-5.8-1.5C32.1,19.7,32,19.8,32,20c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,20.4,40.8,21,38,21z"}},{"tag":"path","attr":{"d":"M38,24c-2.8,0-5.1-0.6-5.8-1.5C32.1,22.7,32,22.8,32,23c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,23.4,40.8,24,38,24z"}},{"tag":"path","attr":{"d":"M38,27c-2.8,0-5.1-0.6-5.8-1.5C32.1,25.7,32,25.8,32,26c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,26.4,40.8,27,38,27z"}},{"tag":"path","attr":{"d":"M38,30c-2.8,0-5.1-0.6-5.8-1.5C32.1,28.7,32,28.8,32,29c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,29.4,40.8,30,38,30z"}},{"tag":"path","attr":{"d":"M38,33c-2.8,0-5.1-0.6-5.8-1.5C32.1,31.7,32,31.8,32,32c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,32.4,40.8,33,38,33z"}},{"tag":"path","attr":{"d":"M38,36c-2.8,0-5.1-0.6-5.8-1.5C32.1,34.7,32,34.8,32,35c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,35.4,40.8,36,38,36z"}},{"tag":"path","attr":{"d":"M38,39c-2.8,0-5.1-0.6-5.8-1.5C32.1,37.7,32,37.8,32,38c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,38.4,40.8,39,38,39z"}}]},{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"path","attr":{"d":"M10,19c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,18.1,13.3,19,10,19 z"}},{"tag":"path","attr":{"d":"M10,16c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,15.1,13.3,16,10,16 z"}},{"tag":"path","attr":{"d":"M10,22c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,21.1,13.3,22,10,22 z"}},{"tag":"path","attr":{"d":"M10,25c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,24.1,13.3,25,10,25 z"}},{"tag":"path","attr":{"d":"M10,28c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,27.1,13.3,28,10,28 z"}},{"tag":"path","attr":{"d":"M10,31c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,30.1,13.3,31,10,31 z"}},{"tag":"path","attr":{"d":"M10,34c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,33.1,13.3,34,10,34 z"}},{"tag":"path","attr":{"d":"M10,37c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,36.1,13.3,37,10,37 z"}},{"tag":"path","attr":{"d":"M10,40c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,39.1,13.3,40,10,40 z"}}]},{"tag":"g","attr":{"fill":"#FFC107"},"child":[{"tag":"ellipse","attr":{"cx":"10","cy":"14","rx":"6","ry":"2"}},{"tag":"path","attr":{"d":"M10,18c-2.8,0-5.1-0.6-5.8-1.5C4.1,16.7,4,16.8,4,17c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,17.4,12.8,18,10,18z"}},{"tag":"path","attr":{"d":"M10,21c-2.8,0-5.1-0.6-5.8-1.5C4.1,19.7,4,19.8,4,20c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,20.4,12.8,21,10,21z"}},{"tag":"path","attr":{"d":"M10,24c-2.8,0-5.1-0.6-5.8-1.5C4.1,22.7,4,22.8,4,23c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,23.4,12.8,24,10,24z"}},{"tag":"path","attr":{"d":"M10,27c-2.8,0-5.1-0.6-5.8-1.5C4.1,25.7,4,25.8,4,26c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,26.4,12.8,27,10,27z"}},{"tag":"path","attr":{"d":"M10,30c-2.8,0-5.1-0.6-5.8-1.5C4.1,28.7,4,28.8,4,29c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,29.4,12.8,30,10,30z"}},{"tag":"path","attr":{"d":"M10,33c-2.8,0-5.1-0.6-5.8-1.5C4.1,31.7,4,31.8,4,32c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,32.4,12.8,33,10,33z"}},{"tag":"path","attr":{"d":"M10,36c-2.8,0-5.1-0.6-5.8-1.5C4.1,34.7,4,34.8,4,35c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,35.4,12.8,36,10,36z"}},{"tag":"path","attr":{"d":"M10,39c-2.8,0-5.1-0.6-5.8-1.5C4.1,37.7,4,37.8,4,38c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,38.4,12.8,39,10,39z"}}]},{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"path","attr":{"d":"M24,28c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,27.1,27.3,28,24,28 z"}},{"tag":"path","attr":{"d":"M24,25c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,24.1,27.3,25,24,25 z"}},{"tag":"path","attr":{"d":"M24,31c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,30.1,27.3,31,24,31 z"}},{"tag":"path","attr":{"d":"M24,34c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,33.1,27.3,34,24,34 z"}},{"tag":"path","attr":{"d":"M24,37c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,36.1,27.3,37,24,37 z"}},{"tag":"path","attr":{"d":"M24,40c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,39.1,27.3,40,24,40 z"}}]},{"tag":"g","attr":{"fill":"#FFC107"},"child":[{"tag":"ellipse","attr":{"cx":"24","cy":"23","rx":"6","ry":"2"}},{"tag":"path","attr":{"d":"M24,27c-2.8,0-5.1-0.6-5.8-1.5C18.1,25.7,18,25.8,18,26c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,26.4,26.8,27,24,27z"}},{"tag":"path","attr":{"d":"M24,30c-2.8,0-5.1-0.6-5.8-1.5C18.1,28.7,18,28.8,18,29c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,29.4,26.8,30,24,30z"}},{"tag":"path","attr":{"d":"M24,33c-2.8,0-5.1-0.6-5.8-1.5C18.1,31.7,18,31.8,18,32c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,32.4,26.8,33,24,33z"}},{"tag":"path","attr":{"d":"M24,36c-2.8,0-5.1-0.6-5.8-1.5C18.1,34.7,18,34.8,18,35c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,35.4,26.8,36,24,36z"}},{"tag":"path","attr":{"d":"M24,39c-2.8,0-5.1-0.6-5.8-1.5C18.1,37.7,18,37.8,18,38c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,38.4,26.8,39,24,39z"}}]}]})(props);
};
function FcScatterPlot (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#CFD8DC","points":"9,39 9,6 7,6 7,41 42,41 42,39"}},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"circle","attr":{"cx":"39","cy":"11","r":"3"}},{"tag":"circle","attr":{"cx":"31","cy":"13","r":"3"}},{"tag":"circle","attr":{"cx":"37","cy":"19","r":"3"}},{"tag":"circle","attr":{"cx":"34","cy":"26","r":"3"}},{"tag":"circle","attr":{"cx":"28","cy":"20","r":"3"}},{"tag":"circle","attr":{"cx":"26","cy":"28","r":"3"}},{"tag":"circle","attr":{"cx":"20","cy":"23","r":"3"}},{"tag":"circle","attr":{"cx":"21","cy":"33","r":"3"}},{"tag":"circle","attr":{"cx":"14","cy":"30","r":"3"}}]}]})(props);
};
function FcSearch (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#616161"},"child":[{"tag":"rect","attr":{"x":"34.6","y":"28.1","transform":"matrix(.707 -.707 .707 .707 -15.154 36.586)","width":"4","height":"17"}},{"tag":"circle","attr":{"cx":"20","cy":"20","r":"16"}}]},{"tag":"rect","attr":{"x":"36.2","y":"32.1","transform":"matrix(.707 -.707 .707 .707 -15.839 38.239)","fill":"#37474F","width":"4","height":"12.3"}},{"tag":"circle","attr":{"fill":"#64B5F6","cx":"20","cy":"20","r":"13"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"}}]})(props);
};
function FcSelfServiceKiosk (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#546E7A","d":"M44,30H4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V30z"}},{"tag":"path","attr":{"fill":"#64B5F6","d":"M40,27H8c-0.6,0-1-0.4-1-1V11c0-0.6,0.4-1,1-1h32c0.6,0,1,0.4,1,1v15C41,26.6,40.6,27,40,27z"}},{"tag":"path","attr":{"fill":"#78909C","d":"M40,41H8c-2.2,0-4-1.8-4-4v-7h40v7C44,39.2,42.2,41,40,41z"}},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"rect","attr":{"x":"27","y":"34","width":"12","height":"2"}},{"tag":"rect","attr":{"x":"9","y":"34","width":"12","height":"2"}},{"tag":"path","attr":{"d":"M18,35c0,1.1-1.3,2-3,2s-3-0.9-3-2H18z"}}]}]})(props);
};
function FcSelfie (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFB74D","d":"M32.9,22c0-0.3,0.1-0.7,0.1-1c0-1.1,0-5.9,0-7c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,0.3,0,0.7,0.1,1H32.9z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M40,44H8c-2.2,0-4-1.8-4-4V26c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v14C44,42.2,42.2,44,40,44z"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M7,26v14c0,0.6,0.4,1,1,1h29c0.6,0,1-0.4,1-1V26c0-0.6-0.4-1-1-1H8C7.4,25,7,25.4,7,26z"}},{"tag":"rect","attr":{"x":"40","y":"30","fill":"#78909C","width":"2","height":"6"}},{"tag":"rect","attr":{"x":"19","y":"32","fill":"#BF360C","width":"8","height":"9"}},{"tag":"rect","attr":{"x":"20.5","y":"37.5","fill":"#FF9800","width":"5","height":"3.5"}},{"tag":"path","attr":{"fill":"#FFB74D","d":"M27.5,32c0-3.8-9-2.5-9,0c0,0.5,0,3,0,3.5c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5C27.5,35,27.5,32.5,27.5,32z"}},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"28","cy":"21","r":"1"}},{"tag":"circle","attr":{"cx":"20","cy":"21","r":"1"}},{"tag":"circle","attr":{"cx":"25","cy":"35.5","r":".5"}},{"tag":"circle","attr":{"cx":"21","cy":"35.5","r":".5"}}]},{"tag":"g","attr":{"fill":"#FF5722"},"child":[{"tag":"path","attr":{"d":"M23,27c-3,0-8,1.3-8,11l4,3v-6.5l6-3.5l2,2.5V41l4-3c0-2-0.8-10-6-10l-0.5-1H23z"}},{"tag":"path","attr":{"d":"M16,22v-3l12-7l4,5v5h6.8C38.3,15.8,36.1,6,28,6l-1-2h-3C18.5,4,10.7,6.8,9.2,22H16z"}}]}]})(props);
};
function FcSerialTasks (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M33,9H11v4h22c1.1,0,2,0.9,2,2v20H23v4h16V15C39,11.7,36.3,9,33,9z"}},{"tag":"rect","attr":{"x":"6","y":"6","fill":"#D81B60","width":"10","height":"10"}},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"32","y":"17","width":"10","height":"10"}},{"tag":"rect","attr":{"x":"16","y":"32","width":"10","height":"10"}},{"tag":"circle","attr":{"cx":"26","cy":"11","r":"5"}},{"tag":"circle","attr":{"cx":"37","cy":"37","r":"5"}}]}]})(props);
};
function FcServiceMark (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"}},{"tag":"g","attr":{"fill":"#E1BEE7"},"child":[{"tag":"path","attr":{"d":"M16.7,28.2c0-3.8-7.3-2.2-7.3-8.1c0-0.7,0.4-4.8,5.5-4.8c5.1,0,5.4,4.5,5.4,5.3h-3.5c0-0.4,0-2.5-2-2.5 c-1.8,0-1.9,1.7-1.9,2c0,3,7.4,2,7.4,8.1c0,2-1.1,4.8-5.3,4.8C10.3,33,9,29.6,9,27.3h3.5c0,0.5-0.2,2.8,2.5,2.8 C16.8,30.2,16.7,28.5,16.7,28.2z"}},{"tag":"path","attr":{"d":"M27.1,15.6L30.3,28l3.2-12.4h4.5v17.2h-3.5v-4.6l0.3-7.2l-3.4,11.8h-2.4l-3.4-11.8l0.3,7.2v4.6h-3.5V15.6 H27.1z"}}]}]})(props);
};
function FcServices (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E65100","d":"M25.6,34.4c0.1-0.4,0.1-0.9,0.1-1.4s0-0.9-0.1-1.4l2.8-2c0.3-0.2,0.4-0.6,0.2-0.9l-2.7-4.6 c-0.2-0.3-0.5-0.4-0.8-0.3L22,25.3c-0.7-0.6-1.5-1-2.4-1.4l-0.3-3.4c0-0.3-0.3-0.6-0.6-0.6h-5.3c-0.3,0-0.6,0.3-0.6,0.6L12.4,24 c-0.9,0.3-1.6,0.8-2.4,1.4l-3.1-1.4c-0.3-0.1-0.7,0-0.8,0.3l-2.7,4.6c-0.2,0.3-0.1,0.7,0.2,0.9l2.8,2c-0.1,0.4-0.1,0.9-0.1,1.4 s0,0.9,0.1,1.4l-2.8,2c-0.3,0.2-0.4,0.6-0.2,0.9l2.7,4.6c0.2,0.3,0.5,0.4,0.8,0.3l3.1-1.4c0.7,0.6,1.5,1,2.4,1.4l0.3,3.4 c0,0.3,0.3,0.6,0.6,0.6h5.3c0.3,0,0.6-0.3,0.6-0.6l0.3-3.4c0.9-0.3,1.6-0.8,2.4-1.4l3.1,1.4c0.3,0.1,0.7,0,0.8-0.3l2.7-4.6 c0.2-0.3,0.1-0.7-0.2-0.9L25.6,34.4z M16,38c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C21,35.8,18.8,38,16,38z"}},{"tag":"path","attr":{"fill":"#FFA000","d":"M41.9,15.3C42,14.8,42,14.4,42,14s0-0.8-0.1-1.3l2.5-1.8c0.3-0.2,0.3-0.5,0.2-0.8l-2.5-4.3 c-0.2-0.3-0.5-0.4-0.8-0.2l-2.9,1.3c-0.7-0.5-1.4-0.9-2.2-1.3l-0.3-3.1C36,2.2,35.8,2,35.5,2h-4.9c-0.3,0-0.6,0.2-0.6,0.5l-0.3,3.1 c-0.8,0.3-1.5,0.7-2.2,1.3l-2.9-1.3c-0.3-0.1-0.6,0-0.8,0.2l-2.5,4.3c-0.2,0.3-0.1,0.6,0.2,0.8l2.5,1.8C24,13.2,24,13.6,24,14 s0,0.8,0.1,1.3l-2.5,1.8c-0.3,0.2-0.3,0.5-0.2,0.8l2.5,4.3c0.2,0.3,0.5,0.4,0.8,0.2l2.9-1.3c0.7,0.5,1.4,0.9,2.2,1.3l0.3,3.1 c0,0.3,0.3,0.5,0.6,0.5h4.9c0.3,0,0.6-0.2,0.6-0.5l0.3-3.1c0.8-0.3,1.5-0.7,2.2-1.3l2.9,1.3c0.3,0.1,0.6,0,0.8-0.2l2.5-4.3 c0.2-0.3,0.1-0.6-0.2-0.8L41.9,15.3z M33,19c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C38,16.8,35.8,19,33,19z"}}]})(props);
};
function FcSettings (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M39.6,27.2c0.1-0.7,0.2-1.4,0.2-2.2s-0.1-1.5-0.2-2.2l4.5-3.2c0.4-0.3,0.6-0.9,0.3-1.4L40,10.8 c-0.3-0.5-0.8-0.7-1.3-0.4l-5,2.3c-1.2-0.9-2.4-1.6-3.8-2.2l-0.5-5.5c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9l-0.5,5.5 c-1.4,0.6-2.7,1.3-3.8,2.2l-5-2.3c-0.5-0.2-1.1,0-1.3,0.4l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4l4.5,3.2c-0.1,0.7-0.2,1.4-0.2,2.2 s0.1,1.5,0.2,2.2L4,30.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,39.2c0.3,0.5,0.8,0.7,1.3,0.4l5-2.3c1.2,0.9,2.4,1.6,3.8,2.2l0.5,5.5 c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.5-5.5c1.4-0.6,2.7-1.3,3.8-2.2l5,2.3c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4 c0.3-0.5,0.1-1.1-0.3-1.4L39.6,27.2z M24,35c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10C34,30.5,29.5,35,24,35z"}},{"tag":"path","attr":{"fill":"#455A64","d":"M24,13c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C36,18.4,30.6,13,24,13z M24,30 c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5s5,2.2,5,5C29,27.8,26.8,30,24,30z"}}]})(props);
};
function FcShare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#1976D2","d":"M38.1,31.2L19.4,24l18.7-7.2c1.5-0.6,2.3-2.3,1.7-3.9c-0.6-1.5-2.3-2.3-3.9-1.7l-26,10C8.8,21.6,8,22.8,8,24 s0.8,2.4,1.9,2.8l26,10c0.4,0.1,0.7,0.2,1.1,0.2c1.2,0,2.3-0.7,2.8-1.9C40.4,33.5,39.6,31.8,38.1,31.2z"}},{"tag":"g","attr":{"fill":"#1E88E5"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"24","r":"7"}},{"tag":"circle","attr":{"cx":"37","cy":"14","r":"7"}},{"tag":"circle","attr":{"cx":"37","cy":"34","r":"7"}}]}]})(props);
};
function FcShipped (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8BC34A","d":"M43,36H29V14h10.6c0.9,0,1.6,0.6,1.9,1.4L45,26v8C45,35.1,44.1,36,43,36z"}},{"tag":"path","attr":{"fill":"#388E3C","d":"M29,36H5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2V36z"}},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"37","cy":"36","r":"5"}},{"tag":"circle","attr":{"cx":"13","cy":"36","r":"5"}}]},{"tag":"g","attr":{"fill":"#78909C"},"child":[{"tag":"circle","attr":{"cx":"37","cy":"36","r":"2"}},{"tag":"circle","attr":{"cx":"13","cy":"36","r":"2"}}]},{"tag":"path","attr":{"fill":"#37474F","d":"M41,25h-7c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h5.3c0.4,0,0.8,0.3,0.9,0.7l1.7,5.2c0,0.1,0.1,0.2,0.1,0.3V24 C42,24.6,41.6,25,41,25z"}},{"tag":"polygon","attr":{"fill":"#DCEDC8","points":"21.8,13.8 13.9,21.7 10.2,17.9 8,20.1 13.9,26 24,15.9"}}]})(props);
};
function FcShop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"5","y":"19","fill":"#CFD8DC","width":"38","height":"19"}},{"tag":"rect","attr":{"x":"5","y":"38","fill":"#B0BEC5","width":"38","height":"4"}},{"tag":"rect","attr":{"x":"27","y":"24","fill":"#455A64","width":"12","height":"18"}},{"tag":"rect","attr":{"x":"9","y":"24","fill":"#E3F2FD","width":"14","height":"11"}},{"tag":"rect","attr":{"x":"10","y":"25","fill":"#1E88E5","width":"12","height":"9"}},{"tag":"path","attr":{"fill":"#90A4AE","d":"M36.5,33.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S37,36.3,37,36v-2C37,33.7,36.8,33.5,36.5,33.5z"}},{"tag":"g","attr":{"fill":"#558B2F"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"19","r":"3"}},{"tag":"circle","attr":{"cx":"36","cy":"19","r":"3"}},{"tag":"circle","attr":{"cx":"12","cy":"19","r":"3"}}]},{"tag":"path","attr":{"fill":"#7CB342","d":"M40,6H8C6.9,6,6,6.9,6,8v3h36V8C42,6.9,41.1,6,40,6z"}},{"tag":"rect","attr":{"x":"21","y":"11","fill":"#7CB342","width":"6","height":"8"}},{"tag":"polygon","attr":{"fill":"#7CB342","points":"37,11 32,11 33,19 39,19"}},{"tag":"polygon","attr":{"fill":"#7CB342","points":"11,11 16,11 15,19 9,19"}},{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"circle","attr":{"cx":"30","cy":"19","r":"3"}},{"tag":"path","attr":{"d":"M45,19c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3L45,19z"}},{"tag":"circle","attr":{"cx":"18","cy":"19","r":"3"}},{"tag":"path","attr":{"d":"M3,19c0,1.7,1.3,3,3,3s3-1.3,3-3s-1.3-3-3-3L3,19z"}}]},{"tag":"g","attr":{"fill":"#FFC107"},"child":[{"tag":"polygon","attr":{"points":"32,11 27,11 27,19 33,19"}},{"tag":"polygon","attr":{"points":"42,11 37,11 39,19 45,19"}},{"tag":"polygon","attr":{"points":"16,11 21,11 21,19 15,19"}},{"tag":"polygon","attr":{"points":"6,11 11,11 9,19 3,19"}}]}]})(props);
};
function FcSignature (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#1565C0","d":"M38.8,28.2C41.5,24.8,45,20.1,45,12c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,6.7-2.5,10.7-5,13.9c-0.6-1.9-1-4.2-1-6.9 c0-0.5-0.4-1-1-1c-0.5,0-1,0.4-1,1c-0.1,1.7-0.6,3.6-1,3.8c-0.4,0-0.9-1.4-1-2.8c0-0.5-0.5-0.9-1-0.9c-0.5,0-1,0.3-1,0.9 c-0.3,1.7-1.1,4.1-2,4.1c-0.4,0-0.6-0.1-0.7-0.3c-0.3-0.3-0.4-1-0.4-1.6c0-0.4,0.1-0.8,0.1-1.2c0-0.5-0.4-1-0.9-1 c-0.5,0-1,0.3-1.1,0.8c0,0.1-0.1,0.5-0.1,1.1C25.7,23.6,25.1,27,23,27c-0.7,0-1.1-0.2-1.4-0.7c-0.5-0.8-0.5-2.1,0-3.3c0,0,0,0,0-0.1 c0.1-0.1,0.1-0.3,0.2-0.4c0,0,0,0,0,0c0.8-1.6,1.7-2.5,3.2-2.5c0.6,0,1-0.4,1-1s-0.4-1-1-1c-4.2,0-5.4,4.1-6.6,8 c-1.4,4.8-2.7,8-6.4,8c-5.1,0-7-6.6-7-11c0-8.6,4.7-14,9-14c2.9,0,4,2.3,4.1,2.4c0.2,0.5,0.8,0.7,1.3,0.5c0.5-0.2,0.7-0.8,0.5-1.3 C19.8,10.4,18.2,7,14,7C8.6,7,3,13,3,23c0,10.3,5.9,13,9,13c5.1,0,6.8-4.5,8.1-8.5c0.7,0.9,1.7,1.5,2.9,1.5c2.2,0,3.5-1.6,4.2-3.6 c0.5,0.4,1.1,0.6,1.8,0.6c1.4,0,2.4-1.2,3-2.4c0.4,0.7,1.1,1.2,2,1.2c0.6,0,1.1-0.3,1.5-0.7c0.3,1.4,0.7,2.7,1,3.8 C35.1,29.7,34,31.2,34,33c0,1.7,1.3,3,3,3c1.8,0,3-1.6,3-3c0-1.3-0.5-2.7-1.1-4.3C38.9,28.5,38.8,28.4,38.8,28.2z M37,34 c-0.7,0-1-0.5-1-1c0-0.9,0.5-1.8,1.3-2.9c0.4,1.2,0.7,2.1,0.7,2.9C38,33.3,37.7,34,37,34z"}},{"tag":"rect","attr":{"x":"3","y":"40","fill":"#90A4AE","width":"42","height":"2"}}]})(props);
};
function FcSimCardChip (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF9800","d":"M5,35V13c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v22c0,2.2-1.8,4-4,4H9C6.8,39,5,37.2,5,35z"}},{"tag":"g","attr":{"fill":"#FFD54F"},"child":[{"tag":"path","attr":{"d":"M43,21v-2H31c-1.1,0-2-0.9-2-2s0.9-2,2-2h1v-2h-1c-2.2,0-4,1.8-4,4s1.8,4,4,4h3v6h-3c-2.8,0-5,2.2-5,5 s2.2,5,5,5h2v-2h-2c-1.7,0-3-1.3-3-3s1.3-3,3-3h12v-2h-7v-6H43z"}},{"tag":"path","attr":{"d":"M17,27h-3v-6h3c2.2,0,4-1.8,4-4s-1.8-4-4-4h-3v2h3c1.1,0,2,0.9,2,2s-0.9,2-2,2H5v2h7v6H5v2h12 c1.7,0,3,1.3,3,3s-1.3,3-3,3h-2v2h2c2.8,0,5-2.2,5-5S19.8,27,17,27z"}}]}]})(props);
};
function FcSimCard (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#009688","d":"M36,45H12c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h16.3c1.1,0,2.1,0.4,2.8,1.2l7.7,7.7c0.8,0.8,1.2,1.8,1.2,2.8 V41C40,43.2,38.2,45,36,45z"}},{"tag":"path","attr":{"fill":"#FF9800","d":"M32,38H16c-1.1,0-2-0.9-2-2V24c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v12C34,37.1,33.1,38,32,38z"}},{"tag":"path","attr":{"fill":"#FFD54F","d":"M29,30v3h5v2h-5v3h-2V22h2v6h5v2H29z M14,29v2h5v2h-5v2h5v3h2v-9H14z"}}]})(props);
};
function FcSlrBackSide (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#5E35B1","d":"M40,10h-7.6l-2-3c-0.4-0.6-1-0.9-1.7-0.9h-9.6c-0.7,0-1.3,0.3-1.7,0.9l-2,3H8c-2.2,0-4,1.8-4,4v24 c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V14C44,11.8,42.2,10,40,10z"}},{"tag":"path","attr":{"fill":"#F57C00","d":"M11,16h20c0.6,0,1,0.4,1,1v16c0,0.6-0.4,1-1,1H11c-0.6,0-1-0.4-1-1V17C10,16.4,10.4,16,11,16z"}},{"tag":"polygon","attr":{"fill":"#942A09","points":"18.9,22 12,32 25.8,32"}},{"tag":"circle","attr":{"fill":"#FFF9C4","cx":"27","cy":"21","r":"2"}},{"tag":"polygon","attr":{"fill":"#BF360C","points":"25.2,26 20.4,32 30,32"}},{"tag":"g","attr":{"fill":"#8667C4"},"child":[{"tag":"path","attr":{"d":"M34,10h6V9.2C40,8.5,39.5,8,38.8,8h-3.6C34.5,8,34,8.5,34,9.2V10z"}},{"tag":"circle","attr":{"cx":"38","cy":"18","r":"2"}},{"tag":"circle","attr":{"cx":"38","cy":"24","r":"2"}},{"tag":"circle","attr":{"cx":"38","cy":"30","r":"2"}}]}]})(props);
};
function FcSmartphoneTablet (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M4,39V7c0-2.2,1.8-4,4-4h22c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H8C5.8,43,4,41.2,4,39z"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M30,6H8C7.4,6,7,6.4,7,7v29c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V7C31,6.4,30.6,6,30,6z"}},{"tag":"rect","attr":{"x":"15","y":"39","fill":"#78909C","width":"6","height":"2"}},{"tag":"path","attr":{"fill":"#E38939","d":"M24,41V17c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v24c0,2.2-1.8,4-4,4H28C25.8,45,24,43.2,24,41z"}},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M40,16H28c-0.6,0-1,0.4-1,1v22c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V17C41,16.4,40.6,16,40,16z"}},{"tag":"circle","attr":{"fill":"#A6642A","cx":"34","cy":"42.5","r":"1.5"}}]})(props);
};
function FcSms (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#009688","d":"M37,39H11l-6,6V11c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,36.3,40.3,39,37,39z"}},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"22","r":"3"}},{"tag":"circle","attr":{"cx":"34","cy":"22","r":"3"}},{"tag":"circle","attr":{"cx":"14","cy":"22","r":"3"}}]}]})(props);
};
function FcSoundRecordingCopyright (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"}},{"tag":"path","attr":{"fill":"#E1BEE7","d":"M20.7,27.2v8.4h-3.9V12.9h8.7c1.3,0,2.5,0.2,3.5,0.5c1,0.4,1.9,0.9,2.6,1.5c0.7,0.6,1.2,1.4,1.6,2.3 c0.4,0.9,0.6,1.8,0.6,2.9c0,1.1-0.2,2.1-0.6,3c-0.4,0.9-0.9,1.6-1.6,2.2c-0.7,0.6-1.6,1.1-2.6,1.4c-1,0.3-2.2,0.5-3.5,0.5H20.7z M20.7,24h4.7c0.8,0,1.4-0.1,2-0.3c0.5-0.2,1-0.5,1.4-0.8c0.4-0.3,0.6-0.8,0.8-1.2c0.2-0.5,0.2-1,0.2-1.6c0-0.5-0.1-1-0.2-1.5 c-0.2-0.5-0.4-0.9-0.8-1.3c-0.4-0.4-0.8-0.7-1.4-0.9c-0.5-0.2-1.2-0.3-2-0.3h-4.7V24z"}}]})(props);
};
function FcSpeaker (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#81D4FA","d":"M28,7.1v2c7.3,1,13,7.3,13,14.9s-5.7,13.9-13,14.9v2c8.4-1,15-8.2,15-16.9S36.4,8.1,28,7.1z"}},{"tag":"path","attr":{"fill":"#546E7A","d":"M14,32H7c-1.1,0-2-0.9-2-2V18c0-1.1,0.9-2,2-2h7V32z"}},{"tag":"polygon","attr":{"fill":"#78909C","points":"26,42 14,32 14,16 26,6"}},{"tag":"path","attr":{"fill":"#03A9F4","d":"M28,17.3v2.1c1.8,0.8,3,2.5,3,4.6s-1.2,3.8-3,4.6v2.1c2.9-0.9,5-3.5,5-6.7S30.9,18.2,28,17.3z"}},{"tag":"path","attr":{"fill":"#4FC3F7","d":"M28,12.2v2c4.6,0.9,8,5,8,9.8s-3.4,8.9-8,9.8v2c5.7-1,10-5.9,10-11.8S33.7,13.1,28,12.2z"}}]})(props);
};
function FcSportsMode (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#FF9800","cx":"28","cy":"9","r":"5"}},{"tag":"path","attr":{"fill":"#00796B","d":"M29,27.3l-9.2-4.1c-1-0.5-1.5,1-2,2c-0.5,1-4.1,7.2-3.8,8.3c0.3,0.9,1.1,1.4,1.9,1.4c0.2,0,0.4,0,0.6-0.1 L28.8,31c0.8-0.2,1.4-1,1.4-1.8C30.2,28.4,29.7,27.6,29,27.3z"}},{"tag":"path","attr":{"fill":"#009688","d":"M26.8,15.2l-2.2-1c-1.3-0.6-2.9,0-3.5,1.3L9.2,41.1c-0.5,1,0,2.2,1,2.7c0.3,0.1,0.6,0.2,0.9,0.2 c0.8,0,1.5-0.4,1.8-1.1c0,0,9.6-13.3,10.4-14.9s4.9-9.3,4.9-9.3C28.7,17.4,28.2,15.8,26.8,15.2z"}},{"tag":"path","attr":{"fill":"#FF9800","d":"M40.5,15.7c-0.7-0.8-2-1-2.8-0.3l-5,4.2l-6.4-3.5c-1.1-0.6-2.6-0.4-3.3,0.9c-0.8,1.3-0.4,2.9,0.8,3.4 l8.3,3.4c0.3,0.1,0.6,0.2,0.9,0.2c0.5,0,0.9-0.2,1.3-0.5l6-5C41.1,17.8,41.2,16.6,40.5,15.7z"}},{"tag":"path","attr":{"fill":"#FF9800","d":"M11.7,23.1l3.4-5.1l4.6,0.6l1.5-3.1c0.4-0.9,1.2-1.4,2.1-1.5c-0.1,0-0.2,0-0.2,0h-9c-0.7,0-1.3,0.3-1.7,0.9 l-4,6c-0.6,0.9-0.4,2.2,0.6,2.8C9.2,23.9,9.6,24,10,24C10.6,24,11.3,23.7,11.7,23.1z"}}]})(props);
};
function FcStackOfPhotos (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"12.3","y":"12.3","transform":"matrix(.948 .318 -.318 .948 9.725 -6.994)","fill":"#64B5F6","width":"28","height":"28"}},{"tag":"rect","attr":{"x":"15.6","y":"15.4","transform":"matrix(.951 .31 -.31 .951 9.176 -6.977)","fill":"#1E88E5","width":"22","height":"20"}},{"tag":"rect","attr":{"x":"8.1","y":"8.1","transform":"matrix(.983 .181 -.181 .983 4.385 -3.65)","fill":"#90CAF9","width":"28","height":"28"}},{"tag":"rect","attr":{"x":"11.3","y":"11.2","transform":"matrix(.985 .175 -.175 .985 4.048 -3.566)","fill":"#42A5F5","width":"22","height":"20"}},{"tag":"rect","attr":{"x":"4","y":"4","fill":"#BBDEFB","width":"28","height":"28"}},{"tag":"rect","attr":{"x":"7","y":"7","fill":"#4CAF50","width":"22","height":"20"}},{"tag":"path","attr":{"fill":"#fff","d":"M16,13c0-1.1,0.9-2,2-2s2,0.9,2,2s-2,4-2,4S16,14.1,16,13z"}},{"tag":"path","attr":{"fill":"#fff","d":"M20,21c0,1.1-0.9,2-2,2s-2-0.9-2-2s2-4,2-4S20,19.9,20,21z"}},{"tag":"path","attr":{"fill":"#fff","d":"M13.5,16.7c-1-0.6-1.3-1.8-0.7-2.7c0.6-1,1.8-1.3,2.7-0.7c1,0.6,2.5,3.7,2.5,3.7S14.5,17.3,13.5,16.7z"}},{"tag":"path","attr":{"fill":"#fff","d":"M22.5,17.3c1,0.6,1.3,1.8,0.7,2.7c-0.6,1-1.8,1.3-2.7,0.7C19.5,20.2,18,17,18,17S21.5,16.7,22.5,17.3z"}},{"tag":"path","attr":{"fill":"#fff","d":"M22.5,16.7c1-0.6,1.3-1.8,0.7-2.7c-0.6-1-1.8-1.3-2.7-0.7C19.5,13.8,18,17,18,17S21.5,17.3,22.5,16.7z"}},{"tag":"path","attr":{"fill":"#fff","d":"M13.5,17.3c-1,0.6-1.3,1.8-0.7,2.7c0.6,1,1.8,1.3,2.7,0.7c1-0.6,2.5-3.7,2.5-3.7S14.5,16.7,13.5,17.3z"}},{"tag":"circle","attr":{"fill":"#FFC107","cx":"18","cy":"17","r":"2"}}]})(props);
};
function FcStart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M38,42H10c-2.2,0-4-1.8-4-4V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,40.2,40.2,42,38,42z"}},{"tag":"polygon","attr":{"fill":"#fff","points":"31,24 20,16 20,32"}}]})(props);
};
function FcStatistics (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"rect","attr":{"x":"23","y":"5","width":"2","height":"36"}},{"tag":"rect","attr":{"x":"20.5","y":"31.4","transform":"matrix(.707 .707 -.707 .707 33.523 -3.921)","width":"2","height":"14.2"}},{"tag":"rect","attr":{"x":"25.5","y":"31.4","transform":"matrix(-.707 .707 -.707 -.707 72.487 46.995)","width":"2","height":"14.2"}}]},{"tag":"rect","attr":{"x":"4","y":"8","fill":"#CFD8DC","width":"40","height":"28"}},{"tag":"g","attr":{"fill":"#607D8B"},"child":[{"tag":"rect","attr":{"x":"3","y":"7","width":"42","height":"4"}},{"tag":"rect","attr":{"x":"3","y":"35","width":"42","height":"2"}},{"tag":"circle","attr":{"cx":"31.5","cy":"43.5","r":"1.5"}},{"tag":"circle","attr":{"cx":"16.5","cy":"43.5","r":"1.5"}}]},{"tag":"g","attr":{"fill":"#C51162"},"child":[{"tag":"polygon","attr":{"points":"31.9,18.9 26,24.9 20,18.9 11.9,26.9 14.1,29.1 20,23.1 26,29.1 34.1,21.1"}},{"tag":"polygon","attr":{"points":"36,24 29,17 36,17"}}]}]})(props);
};
function FcSteam (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFFFFF","d":"M42,38c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4V38z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M18.459,33.645c-0.288,0-0.56-0.057-0.822-0.141l-0.005,0.02l-3.67-1.062\r\n\t\tc0.644,1.878,2.406,3.237,4.5,3.237c2.641,0,4.776-2.136,4.776-4.776s-2.135-4.777-4.776-4.777c-1.141,0-2.175,0.418-2.998,1.087\r\n\t\tL19,28.255c0.029,0.007,0.055,0.018,0.084,0.024l0.049,0.016v0.002c1.177,0.301,2.049,1.359,2.049,2.626\r\n\t\tC21.184,32.424,19.964,33.645,18.459,33.645z"}},{"tag":"path","attr":{"fill":"#455A64","d":"M30.923,24.299c3.222,0,5.837-2.615,5.837-5.838c0-3.222-2.615-5.837-5.837-5.837\r\n\t\tc-3.221,0-5.837,2.615-5.837,5.837C25.086,21.684,27.702,24.299,30.923,24.299z M30.92,14.409c2.24,0,4.056,1.813,4.056,4.052\r\n\t\tc0,2.241-1.815,4.053-4.056,4.053c-2.236,0-4.049-1.812-4.049-4.053C26.871,16.223,28.684,14.409,30.92,14.409z"}},{"tag":"path","attr":{"fill":"#455A64","d":"M38,6h-2.75h-22.5H10c-2.209,0-4,1.791-4,4v2.75v4.236v7.509l7.027,2.033\r\n\t\tc1.287-1.59,3.229-2.626,5.434-2.626c0.07,0,0.135,0.02,0.204,0.021l3.876-5.355c0-0.035-0.005-0.072-0.005-0.105\r\n\t\tc0-4.63,3.755-8.388,8.387-8.388c4.633,0,8.386,3.757,8.386,8.386c0,4.633-3.753,8.387-8.386,8.387\r\n\t\tc-0.044,0-0.087-0.006-0.132-0.007l-5.33,3.871c0.002,0.07,0.021,0.14,0.021,0.211c0,3.878-3.142,7.021-7.021,7.021\r\n\t\tc-3.593,0-6.52-2.707-6.937-6.188L6,30.158v2.583v2.509V38c0,2.209,1.791,4,4,4h2.75h22.5H38c2.209,0,4-1.791,4-4v-2.75v-22.5V10\r\n\t\tC42,7.791,40.209,6,38,6z"}}]}]})(props);
};
function FcStumbleupon (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E64A19","d":"M24.001,5c-10.494,0-19,8.506-19,19c0,10.493,8.506,19,19,19c10.493,0,19-8.507,19-19\r\n\tC43.001,13.506,34.494,5,24.001,5z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#FFFFFF","d":"M24.001,19C23.998,19,24.004,19,24.001,19c-0.062-0.004-1,0-1,1v7.876C22.916,29.888,21.504,33,17.959,33\r\n\t\tc-3.607,0-4.958-3.065-4.958-4.958V24h4v4c0.038,0.709,0.629,1,1,1c0.665,0,0.972-0.361,1-1v-8.124c0-2.01,1.332-5,5-5\r\n\t\tc0.045,0,0.086,0.006,0.131,0.007c0,0,4.869-0.009,4.869,5.117c0,1.104-0.896,1.876-2,1.876s-2-0.771-2-1.876\r\n\t\tC25.001,19.124,24.041,19.003,24.001,19z M35.001,27.876c0,2.01-1.331,5.124-5,5.124s-5-3.114-5-5.124v-3.439\r\n\t\tc0.614,0.272,1.285,0.439,2,0.439c0.712,0,1.386-0.154,2-0.424V28c0.038,1,0.663,1,1,1c0.247,0,1,0,1-1v-4h4V27.876z"}}]}]})(props);
};
function FcSupport (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M44.7,11L36,19.6c0,0-2.6,0-5.2-2.6s-2.6-5.2-2.6-5.2l8.7-8.7c-4.9-1.2-10.8,0.4-14.4,4 c-5.4,5.4-0.6,12.3-2,13.7C12.9,28.7,5.1,34.7,4.9,35c-2.3,2.3-2.4,6-0.2,8.2c2.2,2.2,5.9,2.1,8.2-0.2c0.3-0.3,6.7-8.4,14.2-15.9 c1.4-1.4,8,3.7,13.6-1.8C44.2,21.7,45.9,15.9,44.7,11z M9.4,41.1c-1.4,0-2.5-1.1-2.5-2.5C6.9,37.1,8,36,9.4,36 c1.4,0,2.5,1.1,2.5,2.5C11.9,39.9,10.8,41.1,9.4,41.1z"}}]})(props);
};
function FcSurvey (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M36,4H26c0,1.1-0.9,2-2,2s-2-0.9-2-2H12C9.8,4,8,5.8,8,8v32c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V8 C40,5.8,38.2,4,36,4z"}},{"tag":"path","attr":{"fill":"#fff","d":"M36,41H12c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h24c0.6,0,1,0.4,1,1v32C37,40.6,36.6,41,36,41z"}},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"path","attr":{"d":"M26,4c0,1.1-0.9,2-2,2s-2-0.9-2-2h-7v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V4H26z"}},{"tag":"path","attr":{"d":"M24,0c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S26.2,0,24,0z M24,6c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S25.1,6,24,6z"}}]},{"tag":"g","attr":{"fill":"#CFD8DC"},"child":[{"tag":"rect","attr":{"x":"21","y":"20","width":"12","height":"2"}},{"tag":"rect","attr":{"x":"15","y":"19","width":"4","height":"4"}}]},{"tag":"g","attr":{"fill":"#03A9F4"},"child":[{"tag":"rect","attr":{"x":"21","y":"29","width":"12","height":"2"}},{"tag":"rect","attr":{"x":"15","y":"28","width":"4","height":"4"}}]}]})(props);
};
function FcSwitchCamera (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#5E35B1"},"child":[{"tag":"path","attr":{"d":"M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"}},{"tag":"path","attr":{"d":"M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"}},{"tag":"path","attr":{"d":"M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"}}]},{"tag":"path","attr":{"fill":"#E8EAF6","d":"M34,25c0-5.5-4.5-10-10-10c-2.4,0-4.6,0.8-6.3,2.2l1.2,1.6c1.4-1.1,3.1-1.8,5.1-1.8c4.4,0,8,3.6,8,8h-3.5 l4.5,5.6l4.5-5.6H34z"}},{"tag":"path","attr":{"fill":"#E8EAF6","d":"M29.1,31.2C27.7,32.3,25.9,33,24,33c-4.4,0-8-3.6-8-8h3.5L15,19.4L10.5,25H14c0,5.5,4.5,10,10,10 c2.4,0,4.6-0.8,6.3-2.2L29.1,31.2z"}}]})(props);
};
function FcSynchronize (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF6F00","d":"M38.7,11.9l-3.1,2.5c2.2,2.7,3.4,6.1,3.4,9.5c0,8.3-6.7,15-15,15c-0.9,0-1.9-0.1-2.8-0.3l-0.7,3.9 c1.2,0.2,2.4,0.3,3.5,0.3c10.5,0,19-8.5,19-19C43,19.6,41.5,15.3,38.7,11.9z"}},{"tag":"polygon","attr":{"fill":"#FF6F02","points":"31,8 42.9,9.6 33.1,19.4"}},{"tag":"path","attr":{"fill":"#FF6F00","d":"M24,5C13.5,5,5,13.5,5,24c0,4.6,1.6,9,4.6,12.4l3-2.6C10.3,31.1,9,27.6,9,24c0-8.3,6.7-15,15-15 c0.9,0,1.9,0.1,2.8,0.3l0.7-3.9C26.4,5.1,25.2,5,24,5z"}},{"tag":"polygon","attr":{"fill":"#FF6F02","points":"17,40 5.1,38.4 14.9,28.6"}}]})(props);
};
function FcTabletAndroid (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M36,6H12c-0.6,0-1,0.4-1,1v31c0,0.6,0.4,1,1,1h24c0.6,0,1-0.4,1-1V7C37,6.4,36.6,6,36,6z"}},{"tag":"rect","attr":{"x":"21","y":"41","fill":"#78909C","width":"6","height":"2"}}]})(props);
};
function FcTemplate (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"4","y":"7","fill":"#BBDEFB","width":"40","height":"34"}},{"tag":"rect","attr":{"x":"9","y":"12","fill":"#3F51B5","width":"30","height":"5"}},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"9","y":"21","width":"13","height":"16"}},{"tag":"rect","attr":{"x":"26","y":"21","width":"13","height":"16"}}]}]})(props);
};
function FcTimeline (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M42,29H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7c0.4-0.4,0.9-0.6,1.4-0.6H42 c0.6,0,1,0.4,1,1v8C43,28.6,42.6,29,42,29z"}},{"tag":"rect","attr":{"x":"9","y":"6","fill":"#CFD8DC","width":"2","height":"36"}},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"circle","attr":{"cx":"10","cy":"10","r":"3"}},{"tag":"circle","attr":{"cx":"10","cy":"24","r":"3"}},{"tag":"circle","attr":{"cx":"10","cy":"38","r":"3"}}]},{"tag":"path","attr":{"fill":"#448AFF","d":"M34,43H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7c0.4-0.4,0.9-0.6,1.4-0.6H34 c0.6,0,1,0.4,1,1v8C35,42.6,34.6,43,34,43z"}},{"tag":"path","attr":{"fill":"#00BCD4","d":"M35,15H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7C19.8,5.2,20.3,5,20.8,5H35 c0.6,0,1,0.4,1,1v8C36,14.6,35.6,15,35,15z"}}]})(props);
};
function FcTodoList (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"17.8,18.1 10.4,25.4 6.2,21.3 4,23.5 10.4,29.9 20,20.3"}},{"tag":"polygon","attr":{"points":"17.8,5.1 10.4,12.4 6.2,8.3 4,10.5 10.4,16.9 20,7.3"}},{"tag":"polygon","attr":{"points":"17.8,31.1 10.4,38.4 6.2,34.3 4,36.5 10.4,42.9 20,33.3"}}]},{"tag":"g","attr":{"fill":"#90CAF9"},"child":[{"tag":"rect","attr":{"x":"24","y":"22","width":"20","height":"4"}},{"tag":"rect","attr":{"x":"24","y":"9","width":"20","height":"4"}},{"tag":"rect","attr":{"x":"24","y":"35","width":"20","height":"4"}}]}]})(props);
};
function FcTouchscreenSmartphone (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E38939","d":"M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"}},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z"}},{"tag":"circle","attr":{"fill":"#A6642A","cx":"24","cy":"41","r":"1.5"}},{"tag":"circle","attr":{"fill":"#E91E63","cx":"24","cy":"23","r":"2"}},{"tag":"circle","attr":{"fill":"none","stroke":"#F48FB1","strokeWidth":"2","strokeMiterlimit":"10","cx":"24","cy":"23","r":"4"}},{"tag":"circle","attr":{"fill":"none","stroke":"#F8BBD0","strokeMiterlimit":"10","cx":"24","cy":"23","r":"6.5"}}]})(props);
};
function FcTrademark (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"}},{"tag":"g","attr":{"fill":"#E1BEE7"},"child":[{"tag":"path","attr":{"d":"M20.6,18.5h-4.2v14.2h-3.5V18.5H8.7v-2.9h11.9V18.5z"}},{"tag":"path","attr":{"d":"M27.1,15.6L30.3,28l3.2-12.4h4.5v17.1h-3.5v-4.6l0.3-7.1l-3.4,11.8h-2.4L25.7,21l0.3,7.1v4.6h-3.5V15.6 H27.1z"}}]}]})(props);
};
function FcTreeStructure (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"36.9,13.8 35.1,10.2 7.5,24 35.1,37.8 36.9,34.2 16.5,24"}},{"tag":"rect","attr":{"x":"6","y":"18","fill":"#D81B60","width":"12","height":"12"}},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"30","y":"6","width":"12","height":"12"}},{"tag":"rect","attr":{"x":"30","y":"30","width":"12","height":"12"}}]}]})(props);
};
function FcTwoSmartphones (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M6,36V8c0-2.2,1.8-4,4-4h14c2.2,0,4,1.8,4,4v28c0,2.2-1.8,4-4,4H10C7.8,40,6,38.2,6,36z"}},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M24,7H10C9.4,7,9,7.4,9,8v25c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V8C25,7.4,24.6,7,24,7z"}},{"tag":"rect","attr":{"x":"14","y":"36","fill":"#78909C","width":"6","height":"2"}},{"tag":"path","attr":{"fill":"#E38939","d":"M20,40V12c0-2.2,1.8-4,4-4h14c2.2,0,4,1.8,4,4v28c0,2.2-1.8,4-4,4H24C21.8,44,20,42.2,20,40z"}},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M38,11H24c-0.6,0-1,0.4-1,1v25c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V12C39,11.4,38.6,11,38,11z"}},{"tag":"circle","attr":{"fill":"#A6642A","cx":"31","cy":"41","r":"1.5"}}]})(props);
};
function FcUndo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"polygon","attr":{"points":"5,18 19,6.3 19,29.7"}},{"tag":"path","attr":{"d":"M28,14H16v8h12c2.8,0,5,2.2,5,5s-2.2,5-5,5h-3v8h3c7.2,0,13-5.8,13-13S35.2,14,28,14z"}}]}]})(props);
};
function FcUnlock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#424242","d":"M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6h4C34,8.5,29.5,4,24,4z"}},{"tag":"path","attr":{"fill":"#FB8C00","d":"M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"}},{"tag":"circle","attr":{"fill":"#C76E00","cx":"24","cy":"31","r":"3"}}]})(props);
};
function FcUpLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"4,19 18,30.7 18,7.3"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M42,27v13h-8V27c0-2.2-1.8-4-4-4H13v-8h17C36.6,15,42,20.4,42,27z"}}]})(props);
};
function FcUpRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"44,19 30,30.7 30,7.3"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M6,27v13h8V27c0-2.2,1.8-4,4-4h17v-8H18C11.4,15,6,20.4,6,27z"}},{"tag":"polygon","attr":{"fill":"#3F51B5","points":"44,19 30,30.7 30,7.3"}},{"tag":"path","attr":{"fill":"#3F51B5","d":"M6,27v13h8V27c0-2.2,1.8-4,4-4h17v-8H18C11.4,15,6,20.4,6,27z"}}]})(props);
};
function FcUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"24,4 35.7,18 12.3,18"}},{"tag":"rect","attr":{"x":"20","y":"15","width":"8","height":"27"}}]}]})(props);
};
function FcUpload (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"polygon","attr":{"points":"24,10.9 35,24 13,24"}},{"tag":"rect","attr":{"x":"20","y":"40","width":"8","height":"4"}},{"tag":"rect","attr":{"x":"20","y":"34","width":"8","height":"4"}},{"tag":"rect","attr":{"x":"20","y":"21","width":"8","height":"11"}},{"tag":"rect","attr":{"x":"6","y":"4","width":"36","height":"4"}}]}]})(props);
};
function FcUsb (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#1565C0","d":"M38.701,24.355h-2.189l-0.467,2.265c0,0,2.277,0,2.51,0c0.233,0,1.545-0.167,1.545-1.267\r\n\tC40.1,24.266,38.701,24.355,38.701,24.355z M39.521,20.339h-2.15l-0.374,1.796c0,0,2.161,0,2.337,0c0.188,0,1.113-0.146,1.113-1.006\r\n\tC40.447,20.271,39.521,20.339,39.521,20.339z M44.064,23.109c0,0,1.436-0.743,1.436-3.093c0-3.715-4.377-3.516-4.377-3.516h-2.865\r\n\tl0.674-3c0,0-12.4,0-20.971,0c-9.344,0-12.158,6.774-12.158,6.774L5.736,20.5H2.547l-1.047,6h3.37l0.001,0.143\r\n\tc0,0-0.285,6.857,10.463,6.857c10.747,0,19.042,0,19.042,0l0.679-3c0.84,0,2.2,0,4.389,0c4.729,0,5.591-3.354,5.591-4.9\r\n\tC45.032,23.838,44.064,23.109,44.064,23.109z"}},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M38.701,24.355h-2.189l-0.467,2.265c0,0,2.277,0,2.51,0c0.233,0,1.545-0.167,1.545-1.267\r\n\tC40.1,24.266,38.701,24.355,38.701,24.355z M39.521,20.339h-2.15l-0.374,1.796c0,0,2.161,0,2.337,0c0.188,0,1.113-0.146,1.113-1.006\r\n\tC40.447,20.271,39.521,20.339,39.521,20.339z M14.022,29.5c-5.306,0-5.306-3.624-5.238-3.986c0.069-0.363,1.789-8.014,1.789-8.014\r\n\th3.84l-1.358,6.354c0,0-0.971,2.728,1.251,2.728c2.081,0,2.336-2.535,2.336-2.535l1.465-6.543h3.839l-1.582,6.979\r\n\tC20.365,24.48,20.258,29.5,14.022,29.5z M26.098,29.521c-2.674,0-4.958-1.262-4.856-4.14h3.438c0,0.576,0.086,1.627,1.633,1.627\r\n\tc0.627,0,1.688-0.266,1.688-1.133c0-1.631-5.597-0.785-5.597-4.57c0-2.063,1.899-3.785,4.989-3.785c4.976,0,4.613,3.749,4.613,3.749\r\n\th-3.369c0-1.044-0.664-1.204-1.463-1.204c-0.8,0-1.372,0.343-1.372,0.944c0,1.471,5.634,0.456,5.634,4.531\r\n\tC31.436,27.305,30.012,29.521,26.098,29.521z M39.366,29.5c-0.419,0-7.515,0-7.515,0l2.601-12c0,0,5.444,0,6.556,0\r\n\tc1.113,0,3.43,0.234,3.43,2.542c0,2.602-2.227,3.013-2.227,3.013s1.764,0.407,1.764,2.473C43.975,29.457,39.775,29.5,39.366,29.5z"}}]})(props);
};
function FcVideoCall (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M8,12h22c2.2,0,4,1.8,4,4v16c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V16C4,13.8,5.8,12,8,12z"}},{"tag":"polygon","attr":{"fill":"#388E3C","points":"44,35 34,29 34,19 44,13"}}]})(props);
};
function FcVideoFile (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,45 8,45 8,3 30,3 40,13"}},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,14 29,14 29,4.5"}},{"tag":"polygon","attr":{"fill":"#1976D2","points":"30,28 20,22 20,34"}}]})(props);
};
function FcVideoProjector (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#546E7A"},"child":[{"tag":"rect","attr":{"x":"5","y":"34","width":"6","height":"3"}},{"tag":"rect","attr":{"x":"37","y":"34","width":"6","height":"3"}}]},{"tag":"path","attr":{"fill":"#78909C","d":"M44,35H4c-2.2,0-4-1.8-4-4V17c0-2.2,1.8-4,4-4h40c2.2,0,4,1.8,4,4v14C48,33.2,46.2,35,44,35z"}},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"rect","attr":{"x":"5","y":"19","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"5","y":"23","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"5","y":"27","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"9","y":"19","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"9","y":"23","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"9","y":"27","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"13","y":"19","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"13","y":"23","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"13","y":"27","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"17","y":"19","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"17","y":"23","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"17","y":"27","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"21","y":"19","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"21","y":"23","width":"2","height":"2"}},{"tag":"rect","attr":{"x":"21","y":"27","width":"2","height":"2"}}]},{"tag":"circle","attr":{"fill":"#37474F","cx":"37","cy":"24","r":"8"}},{"tag":"circle","attr":{"fill":"#a0f","cx":"37","cy":"24","r":"6"}},{"tag":"path","attr":{"fill":"#EA80FC","d":"M40.7,21.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1 c1.2-1.3,3.3-1.3,4.5,0c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C41.1,22.7,41.1,22.1,40.7,21.7z"}}]})(props);
};
function FcViewDetails (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"7","y":"4","fill":"#BBDEFB","width":"34","height":"40"}},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"13","y":"26","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"13","y":"18","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"13","y":"34","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"13","y":"10","width":"4","height":"4"}},{"tag":"rect","attr":{"x":"21","y":"26","width":"14","height":"4"}},{"tag":"rect","attr":{"x":"21","y":"18","width":"14","height":"4"}},{"tag":"rect","attr":{"x":"21","y":"34","width":"14","height":"4"}},{"tag":"rect","attr":{"x":"21","y":"10","width":"14","height":"4"}}]}]})(props);
};
function FcVip (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#880E4F","d":"M38,43H10c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,41.2,40.2,43,38,43z"}},{"tag":"g","attr":{"fill":"#FFD54F"},"child":[{"tag":"path","attr":{"d":"M15.9,28l2.1-9.1h2.8l-3.6,12.6h-2.6L11,18.9h2.8L15.9,28z"}},{"tag":"path","attr":{"d":"M25.6,31.5h-2.5V18.9h2.5V31.5z"}},{"tag":"path","attr":{"d":"M31.2,27.1v4.4h-2.5V18.9h4.3c3.7,0,4.1,3.4,4.1,4.2c0,1.2-0.5,4-4.1,4H31.2z M31.2,24.9h1.7 c1.3,0,1.5-1.1,1.5-1.9c0-1.6-0.9-2.1-1.5-2.1h-1.7V24.9z"}}]}]})(props);
};
function FcVlc (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F57C00","d":"M36.258,28.837c0,0-0.11-0.837-1.257-0.837c-0.216,0-2.392,0-3.719,0c0.798,2.671,1.497,5.135,1.497,5.279\r\n\tc0,2.387-3.401,3.393-8.917,3.393c-5.515,0-8.651-0.94-8.651-3.326c0-0.167,0.998-2.692,1.791-5.346c-1.591,0-3.863,0-4.063,0\r\n\tc-0.806,0-0.937,0.749-0.937,0.749L8.159,40.986L8.815,42h30.652l0.376-1.014L36.258,28.837z"}},{"tag":"path","attr":{"fill":"#E0E0E0","d":"M24.001,6c-1.029,0-1.864,0.179-1.864,0.398c-0.492,1.483-8.122,26.143-8.122,26.774\r\n\tc0,2.388,4.471,3.827,9.985,3.827s9.986-1.439,9.986-3.827c0-0.549-7.614-25.268-8.122-26.774C25.865,6.179,25.031,6,24.001,6\r\n\tL24.001,6z"}},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#FF9800","d":"M33.196,30.447C32.032,32.232,28.341,34,24.046,34c-4.34,0-8.156-1.696-9.281-3.51\r\n\t\tc-0.499,1.483-0.892,2.647-0.892,3.28c0,2.386,4.533,4.229,10.128,4.229c5.595,0,10.131-1.844,10.131-4.229\r\n\t\tC34.132,33.222,33.713,31.955,33.196,30.447z"}},{"tag":"path","attr":{"fill":"#FF9800","d":"M31.387,24.314l-2.074-6.794c0,0-1.857,1.479-5.311,1.479c-3.453,0-5.316-1.479-5.316-1.479l-2.081,6.806\r\n\t\tc0,0,2.068,2.674,7.397,2.674C29.375,27,31.387,24.314,31.387,24.314z"}},{"tag":"path","attr":{"fill":"#FF9800","d":"M27.241,10.809l-1.376-4.41c0,0-0.083-0.398-1.864-0.398c-1.844,0-1.864,0.398-1.864,0.398l-1.376,4.407\r\n\t\tc0,0,0.885,1.194,3.239,1.194C26.355,12,27.241,10.809,27.241,10.809z"}}]}]})(props);
};
function FcVoicePresentation (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M40,22h-8l-4,4V12c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v6C44,20.2,42.2,22,40,22z"}},{"tag":"circle","attr":{"fill":"#FFA726","cx":"17","cy":"19","r":"8"}},{"tag":"path","attr":{"fill":"#607D8B","d":"M30,36.7c0,0-3.6-6.7-13-6.7S4,36.7,4,36.7V40h26V36.7z"}}]})(props);
};
function FcVoicemail (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M48,24c0-6.1-4.9-11-11-11s-11,4.9-11,11c0,2.7,0.9,5.1,2.5,7h-9c1.6-1.9,2.5-4.3,2.5-7c0-6.1-4.9-11-11-11 S0,17.9,0,24s4.9,11,11,11h27v-0.1C43.6,34.4,48,29.7,48,24z M4,24c0-3.9,3.1-7,7-7s7,3.1,7,7s-3.1,7-7,7S4,27.9,4,24z M37,31 c-3.9,0-7-3.1-7-7s3.1-7,7-7c3.9,0,7,3.1,7,7S40.9,31,37,31z"}}]})(props);
};
function FcWebcam (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M36.5,44H11.5c-1.1,0-1.8-1.2-1.3-2.2L13,37h22l2.7,4.8C38.3,42.8,37.6,44,36.5,44z"}},{"tag":"circle","attr":{"fill":"#78909C","cx":"24","cy":"23","r":"18"}},{"tag":"path","attr":{"fill":"#455A64","d":"M24,35c-6.6,0-12-5.4-12-12c0-6.6,5.4-12,12-12s12,5.4,12,12C36,29.6,30.6,35,24,35z"}},{"tag":"circle","attr":{"fill":"#42A5F5","cx":"24","cy":"23","r":"9"}},{"tag":"path","attr":{"fill":"#90CAF9","d":"M28.8,20c-1.2-1.4-3-2.2-4.8-2.2s-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.2,21.4,29.3,20.5,28.8,20z"}}]})(props);
};
function FcWiFiLogo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M46,26.48c0,4.527-3.268,7.52-7.3,7.52H9.299C5.269,34,2,30.634,2,26.48V21.52C2,17.366,5.269,14,9.299,14\r\n\t\tH38.7c4.032,0,7.3,3.366,7.3,7.52V26.48z"}},{"tag":"ellipse","attr":{"fill":"#3F51B5","cx":"24","cy":"24","rx":"14.902","ry":"15"}}]},{"tag":"g","attr":{},"child":[{"tag":"polygon","attr":{"fill":"#FFFFFF","points":"17,19 14.264,19 13.427,24.859 12.388,19.028 9.93,19.028 8.864,24.859 8.054,19.028 5.266,19.028 \r\n\t\t7.597,29 10.056,29 11.12,22.854 12.209,29 14.693,29 \t"}},{"tag":"rect","attr":{"x":"19","y":"22","fill":"#FFFFFF","width":"2.508","height":"7"}},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M21.5,19.747C21.5,20.44,20.94,21,20.25,21S19,20.44,19,19.747c0-0.696,0.56-1.258,1.25-1.258\r\n\t\tS21.5,19.051,21.5,19.747z"}},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M38.561,16c-4.818,0-7.979,0-7.979,0S25,16.193,25,21.914v4.336c0,0,0.101,2.941-3,5.75h16.785\r\n\t\tc0,0,5.215,0,5.215-5.553c0-4.879,0-4.879,0-4.879S43.772,16,38.561,16z M37.339,21.369h-5.651v2.236h5.094v2.344h-5.094V29H29V19\r\n\t\th8.339V21.369z M40.25,18.489c0.689,0,1.25,0.562,1.25,1.258C41.5,20.44,40.939,21,40.25,21S39,20.44,39,19.747\r\n\t\tC39,19.051,39.561,18.489,40.25,18.489z M41.508,29H39v-7h2.508V29z"}}]}]})(props);
};
function FcWikipedia (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"}},{"tag":"path","attr":{"fill":"#37474F","d":"M39,17.271c0,0.191-0.148,0.349-0.334,0.349h-1.799l-8.164,18.179c-0.052,0.12-0.17,0.2-0.297,0.202h-0.004\r\n\tc-0.127,0-0.242-0.074-0.298-0.193l-3.874-8.039l-4.18,8.049c-0.06,0.116-0.167,0.181-0.303,0.184\r\n\tc-0.125-0.004-0.239-0.082-0.292-0.199l-8.252-18.182h-1.87C9.149,17.619,9,17.462,9,17.271V16.35C9,16.155,9.149,16,9.333,16h6.657\r\n\tc0.184,0,0.333,0.155,0.333,0.35v0.921c0,0.191-0.149,0.349-0.333,0.349h-1.433l5.696,13.748l2.964-5.793l-3.757-7.953h-0.904\r\n\tc-0.184,0-0.333-0.157-0.333-0.35V16.35c0-0.191,0.149-0.348,0.333-0.348h4.924c0.184,0,0.333,0.156,0.333,0.348v0.922\r\n\tc0,0.192-0.149,0.35-0.333,0.35h-0.867l2.162,4.948l2.572-4.948H25.77c-0.187,0-0.334-0.157-0.334-0.35V16.35\r\n\tc0-0.191,0.147-0.348,0.334-0.348h4.784c0.187,0,0.333,0.156,0.333,0.348v0.922c0,0.192-0.146,0.35-0.333,0.35h-1.05l-3.757,7.141\r\n\tl3.063,6.584l5.905-13.725h-1.872c-0.184,0-0.334-0.157-0.334-0.35V16.35c0-0.191,0.15-0.348,0.334-0.348h5.822\r\n\tc0.186,0,0.334,0.156,0.334,0.348V17.271z"}}]})(props);
};
function FcWorkflow (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"7","y":"31","fill":"#00BCD4","width":"10","height":"10"}},{"tag":"path","attr":{"fill":"#00BCD4","d":"M35.3,19.3l-5.6-5.6c-0.4-0.4-0.4-1,0-1.4l5.6-5.6c0.4-0.4,1-0.4,1.4,0l5.6,5.6c0.4,0.4,0.4,1,0,1.4 l-5.6,5.6C36.3,19.7,35.7,19.7,35.3,19.3z"}},{"tag":"circle","attr":{"fill":"#3F51B5","cx":"12","cy":"13","r":"6"}},{"tag":"circle","attr":{"fill":"#448AFF","cx":"36","cy":"36","r":"6"}},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"rect","attr":{"x":"11","y":"24","width":"2","height":"5"}},{"tag":"polygon","attr":{"points":"12,21 9,25 15,25"}}]},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"rect","attr":{"x":"20","y":"12","width":"5","height":"2"}},{"tag":"polygon","attr":{"points":"28,13 24,10 24,16"}}]},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"rect","attr":{"x":"35","y":"21","width":"2","height":"5"}},{"tag":"polygon","attr":{"points":"36,29 39,25 33,25"}}]}]})(props);
};


/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconBase.js":
/*!******************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconBase.js ***!
  \******************************************************/
/*! exports provided: GenIcon, IconBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenIcon", function() { return GenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return IconBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/esm/iconContext.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), props.children);
  };

  return _iconContext__WEBPACK_IMPORTED_MODULE_1__["IconContext"] !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconContext__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(_iconContext__WEBPACK_IMPORTED_MODULE_1__["DefaultContext"]);
}

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconContext.js ***!
  \*********************************************************/
/*! exports provided: DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultContext", function() { return DefaultContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconContext", function() { return IconContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext && react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(DefaultContext);

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconsManifest.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconsManifest.js ***!
  \***********************************************************/
/*! exports provided: IconsManifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsManifest", function() { return IconsManifest; });
var IconsManifest = [
  {
    "id": "fa",
    "name": "Font Awesome",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  }
]

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/index.js ***!
  \***************************************************/
/*! exports provided: IconsManifest, GenIcon, IconBase, DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iconsManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsManifest */ "./node_modules/react-icons/lib/esm/iconsManifest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconsManifest", function() { return _iconsManifest__WEBPACK_IMPORTED_MODULE_0__["IconsManifest"]; });

/* harmony import */ var _iconBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconBase */ "./node_modules/react-icons/lib/esm/iconBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenIcon", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__["GenIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__["IconBase"]; });

/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/esm/iconContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultContext", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__["DefaultContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconContext", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__["IconContext"]; });





/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return Ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return $e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return Ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return We; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return Xe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return Je; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.2.3",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:undefined;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?undefined:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.2.3"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Y=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}},q=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.2.3");var s=q();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=M(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(void 0!==s&&0!==a.length){var c=A+".g"+o+'[id="'+i+'"]',u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.2.3"),ie=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&false,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var i=Ne(this.rules,e,t,n).join(""),s=ee(te(this.baseHash,i.length)>>>0);if(!t.hasNameForId(r,s)){var a=n(i,"."+s,void 0,r);t.insertRules(r,s,a)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,i=void 0===e?E:e,s=i.options,a=void 0===s?E:s,c=i.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,i,s,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,i){return 0===r&&-1!==ae.indexOf(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var c=e.replace(se,""),u=i&&s?s+" "+i+" { "+c+" }":c;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ue)||he}function me(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(de)||pe}function ye(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins),n=t[0],i=t[1],c=fe(),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(e.children):undefined))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,c=e.length;a<c;a+=1)""!==(i=Ne(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!_e(t[s])&&(S(t[s])?i.push.apply(i,e(t[s],s)):b(t[s])?i.push(be(s)+":",t[s],";"):i.push(be(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(),Ie.has(n)||(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}}},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(xe(s))for(var a in s)Ve(a)&&Be(e,s[a],a)}return e}var ze=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),Le=ze.Consumer;function Ge(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),n=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ze.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=N(e),s=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.2.3"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var C,I=new ie(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,s=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,i,s=e;for(t in b(s)&&(s=s(r)),s)r[t]=o[t]="className"===t?(n=o[t],i=s[t],n&&i?n+" "+i:n||i):s[t]})),[r,o]}(Oe(t,Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),i=me(),s=t?e.generateAndInjectStyles(E,o,i):e.generateAndInjectStyles(n,o,i);return true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(s), true&&!t&&r&&r(s),s}(s,r,y, true?e.warnTooManyClasses:undefined),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"]):!N||Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),i=r&&r+"-"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:i}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Pe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var i=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+i+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},s&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r))return j(1,String(r));var i=function(){return t(r,o,Ae.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,v({},o,{},n))},i.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(s)),u=new He(s,a);function l(e){var t=fe(),n=me(),o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&s.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var i=v({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,i,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(l)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),i=Te(o);return new ve(i,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.2.3"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.2.3",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(t,n){var o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),s=e.defaultProps,a=Oe(t,o,s);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Xe=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze)},Ze={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fc */ "./node_modules/react-icons/fc/index.esm.js");



var _jsxFileName = "C:\\Users\\ab0ud\\WebstormProjects\\mrgsub\\pages\\index.js",
    _this = undefined;

function _templateObject15() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tposition:fixed;\n\tbottom:0;\n\tleft:0;\n\twidth: 100%;\n\tpadding:10px;\n\tbackground: rgba(255,255,255,1);\n\tfont-family: 'Raleway', sans-serif;\n\tcolor: black;\n\tfont-size: 12px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tpadding: 20px;\n\tpadding-top:0;\n\tfont-size: 32px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tfont-family: 'Raleway', sans-serif;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tline-height: 1.3;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tfont-family: 'Raleway', sans-serif;\n\tfont-size: 24px;\n\tfont-weight: 600;\n\tmargin-bottom: 10px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tbackground: white;\n\tmargin-top: 10px;\n\tpadding: 10px;\n\tpadding-bottom: 20px;\n\tdisplay: grid;\n\tgrid-template-columns: 75% 25%;\n\tcolumn-gap: 10px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tbackground: url(", ");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tbackground-size: cover;\n\theight: 300px;\n\twidth: 100%;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tdisplay: block;\n\twidth: 100%;\n\toverflow: hidden;\n\tborder-bottom:1px solid rgba(0,0,0,0.1); \n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tdisplay: grid;\n\tgrid-template-columns: 100%;\n\tcolumn-gap: 20px;\n\trow-gap: 20px;\n\tjustify-items: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tfont-family: 'Caveat', cursive;\n\tfont-size: 38px;\n\tmargin-bottom: 20px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tpadding-top: 160px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tfont-family: 'Raleway', sans-serif;\n\tfont-size: 20px;\n\tfont-weight: 200;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tfont-family: 'Caveat', cursive;\n\tfont-size: 68px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tposition: fixed;\n\twidth:100%;\n\tbackground: white;\n\tpadding-bottom: 10px;\n\tmax-width: 800px;\n\tdisplay: grid;\n\tgrid-template-columns: 80% 20%;\n\talign-items:center; \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\twidth: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_ab0ud_WebstormProjects_mrgsub_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tmax-width: 800px;\n\tmargin: 0 auto;\n\tmin-height: 100vh;\n\tposition: relative;\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n\tpadding-bottom: 80px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var BodyContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
_c = BodyContainer;
var BodyInner = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
_c2 = BodyInner;
var BodyHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
_c3 = BodyHeader;
var BodyTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4());
_c4 = BodyTitle;
var BodySubtitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5());
_c5 = BodySubtitle;
var PortfolioContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6());
_c6 = PortfolioContainer;
var PortfolioTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject7());
_c7 = PortfolioTitle;
var PortfolioGrid = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject8());
_c8 = PortfolioGrid;
var ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject9());
_c9 = ItemContainer;
var ItemThumb = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject10(), function (p) {
  return p.cover;
});
_c10 = ItemThumb;
var ItemDetails = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject11());
_c11 = ItemDetails;
var ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject12());
_c12 = ItemTitle;
var ItemSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject13());
_c13 = ItemSubTitle;
var CTAContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject14());
_c14 = CTAContainer;
var Projects = [{
  title: "Reship",
  date: "2020 - Present",
  subtitle: "State of the art mobile app project management featuring authentication via Apple, Google and Facebook, a custom UI kit, Apple FaceID or TouchID, payments using ApplePay & GooglePay. CI/CD pipelines for Apple's AppStore and Google's PlayStore. Built using React Native",
  href: "https://reship.com",
  cover: "https://assets.website-files.com/5f0c9cbc3a05e30508c762fa/5f2c63a2426902dd05a1e7d9_Monark%20Labs-p-1080.jpeg"
}, {
  title: "Cocobum",
  date: "2018 - 2019",
  subtitle: "An ecommerce platform initially based on Shopify, as we developed a entire new platform to better suit the customization needs of the store. Built using React and NodeJS",
  href: "https://cocobum.com",
  cover: ""
}, {
  title: "Offplan Linked",
  date: "2017 - 2018",
  subtitle: "Build a mobile application for both Android and iOS to increase sales and engagement in the real estate field for the brokers. Established online presence and increased in revenue. Built using React Native and NodeJS",
  href: "#",
  cover: ""
}, {
  title: "Biotouch UAE",
  date: "2016 - 2017",
  subtitle: "Built micro-services architecture using NodeJS and built and published a mobile application using Swift and Xcode. Used HTML5, CSS3 and Javascript for the front-end.",
  href: "https://biotouch.ae",
  cover: ""
}];

var PortfolioItem = function PortfolioItem(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      href = _ref.href,
      cover = _ref.cover,
      date = _ref.date;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemContainer, {
    children: [cover && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemThumb, {
      cover: cover
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 14
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemDetails, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemTitle, {
          children: [title, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              fontWeight: "100",
              fontSize: 18
            },
            children: date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemSubTitle, {
          children: subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CTAContainer, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: href,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fc__WEBPACK_IMPORTED_MODULE_5__["FcGlobe"], {
            style: {
              cursor: "pointer"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 3
  }, _this);
};

_c15 = PortfolioItem;
var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject15());
_c16 = FooterContainer;
function Home() {
  var _this2 = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "AJXB | Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BodyContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BodyInner, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "mailto:1@ajxb.net",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BodyHeader, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BodyTitle, {
                children: "AJXB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BodySubtitle, {
                children: "Creative Development"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontWeight: "bold",
                fontSize: 40,
                display: "flex",
                justifyContent: "center"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fc__WEBPACK_IMPORTED_MODULE_5__["FcFeedback"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PortfolioContainer, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PortfolioTitle, {
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PortfolioGrid, {
            children: Projects.map(function (e) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PortfolioItem, {
                date: e.date,
                cover: e.cover,
                href: e.href,
                title: e.title,
                subtitle: e.subtitle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 9
              }, _this2);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FooterContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: ["Currently making awesome projects at", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: {
              fontWeight: "bold"
            },
            href: "https://monark.com",
            children: "Monark"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 7
          }, this), "!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: ["Built using React & Next by AJXB Consulting Ltd.", " ", new Date().getFullYear()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 184,
    columnNumber: 3
  }, this);
}
_c17 = Home;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;

$RefreshReg$(_c, "BodyContainer");
$RefreshReg$(_c2, "BodyInner");
$RefreshReg$(_c3, "BodyHeader");
$RefreshReg$(_c4, "BodyTitle");
$RefreshReg$(_c5, "BodySubtitle");
$RefreshReg$(_c6, "PortfolioContainer");
$RefreshReg$(_c7, "PortfolioTitle");
$RefreshReg$(_c8, "PortfolioGrid");
$RefreshReg$(_c9, "ItemContainer");
$RefreshReg$(_c10, "ItemThumb");
$RefreshReg$(_c11, "ItemDetails");
$RefreshReg$(_c12, "ItemTitle");
$RefreshReg$(_c13, "ItemSubTitle");
$RefreshReg$(_c14, "CTAContainer");
$RefreshReg$(_c15, "PortfolioItem");
$RefreshReg$(_c16, "FooterContainer");
$RefreshReg$(_c17, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cab0ud%5CWebstormProjects%5Cmrgsub%5Cpages%5Cindex.js!./","webpack"]]]);