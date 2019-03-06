webpackHotUpdate("static/development/pages/topic.js",{

/***/ "./lib/load-db.js":
/*!************************!*\
  !*** ./lib/load-db.js ***!
  \************************/
/*! exports provided: APIurl, domain, default, getAuthorsByCharacter, getAuthorPhotoByAuthorId, getAuthorPhotoStatusByAuthorId, getTopAuthorsByCharacter, getQuotesByAuthorId, getQuoteByQuoteId, getRandomQuotes, shortenQuote, getQuotesByTopic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIurl", function() { return APIurl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domain", function() { return domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorsByCharacter", function() { return getAuthorsByCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorPhotoByAuthorId", function() { return getAuthorPhotoByAuthorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorPhotoStatusByAuthorId", function() { return getAuthorPhotoStatusByAuthorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopAuthorsByCharacter", function() { return getTopAuthorsByCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuotesByAuthorId", function() { return getQuotesByAuthorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuoteByQuoteId", function() { return getQuoteByQuoteId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomQuotes", function() { return getRandomQuotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenQuote", function() { return shortenQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuotesByTopic", function() { return getQuotesByTopic; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var APIurl = "https://avgmind.com";
var domain = "https://desorco.com";
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, authorsJson;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(APIurl, "/api/author/1/10"));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          authorsJson = _context.sent;
          return _context.abrupt("return", authorsJson);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}))); // get Authors Methods

var getAuthorsByCharacter =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(character, pageNumber) {
    var res, authorsJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(APIurl, "/api/author/").concat(character, "/").concat(pageNumber));

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            authorsJson = _context2.sent;
            return _context2.abrupt("return", authorsJson);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getAuthorsByCharacter(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getAuthorPhotoByAuthorId = function getAuthorPhotoByAuthorId(authorId) {
  var authorProfilePhoto = "".concat(APIurl, "/uploads/images/").concat(authorId, ".jpg");
  return authorProfilePhoto;
};
var getAuthorPhotoStatusByAuthorId =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(authorId) {
    var res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(APIurl, "/api/quote_author/").concat(authorId, "/1"));

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            json = _context3.sent;
            return _context3.abrupt("return", json);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getAuthorPhotoStatusByAuthorId(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getTopAuthorsByCharacter =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(character) {
    var res, authorsJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(APIurl, "/api/top/author/").concat(character));

          case 2:
            res = _context4.sent;
            _context4.next = 5;
            return res.json();

          case 5:
            authorsJson = _context4.sent;
            return _context4.abrupt("return", authorsJson);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getTopAuthorsByCharacter(_x4) {
    return _ref4.apply(this, arguments);
  };
}(); // get Quotes Methods

var getQuotesByAuthorId =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(authorId, pageNumber) {
    var res, quotesJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(APIurl, "/api/quote_author/").concat(authorId, "/").concat(pageNumber));

          case 2:
            res = _context5.sent;
            _context5.next = 5;
            return res.json();

          case 5:
            quotesJson = _context5.sent;
            return _context5.abrupt("return", quotesJson);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getQuotesByAuthorId(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();
var getQuoteByQuoteId =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(quoteId) {
    var res, quoteJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(APIurl, "/api/quote/").concat(quoteId));

          case 2:
            res = _context6.sent;
            _context6.next = 5;
            return res.json();

          case 5:
            quoteJson = _context6.sent;
            return _context6.abrupt("return", quoteJson);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getQuoteByQuoteId(_x7) {
    return _ref6.apply(this, arguments);
  };
}();
var getRandomQuotes =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
    var res, quoteJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(APIurl, "/api/random_quote"));

          case 2:
            res = _context7.sent;
            _context7.next = 5;
            return res.json();

          case 5:
            quoteJson = _context7.sent;
            return _context7.abrupt("return", quoteJson);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function getRandomQuotes() {
    return _ref7.apply(this, arguments);
  };
}();
var shortenQuote = function shortenQuote(quote) {
  return quote ? quote.substring(0, 44) + "..." : null;
}; //get Topics Methods

var getQuotesByTopic =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(topic) {
    var res, quoteJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(APIurl, "/api/topic/").concat(topic, "/1"));

          case 2:
            res = _context8.sent;
            _context8.next = 5;
            return res.json();

          case 5:
            quoteJson = _context8.sent;
            return _context8.abrupt("return", quoteJson);

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function getQuotesByTopic(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=topic.js.53c262da4eafefd572af.hot-update.js.map