"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var App = function App() {
  var _useState = (0, _hooks.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      task = _useState2[0],
      setTasks = _useState2[1];

  var _useState3 = (0, _hooks.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      work = _useState4[0],
      setWork = _useState4[1];

  var addTask = function addTask() {
    setTasks([].concat(_toConsumableArray(task), [work]));
    setWork('');
  };

  var removeTask = function removeTask(key) {
    task.splice(key, 1);
    setTasks(_toConsumableArray(task));
  };

  var addWork = function addWork(ev) {
    setWork(ev.target.value);
  };

  return (0, _preact.h)("div", {
    "class": "container"
  }, (0, _preact.h)("nav", {
    className: "panel"
  }, (0, _preact.h)("p", {
    className: "panel-heading"
  }, "Tasks"), (0, _preact.h)("div", {
    className: "panel-block"
  }, (0, _preact.h)("p", {
    className: "control has-icons-right has-text-centered"
  }, (0, _preact.h)("input", {
    onInput: function onInput(e) {
      return addWork(e);
    },
    className: "input is-small is-rounded",
    style: 'width:30%',
    type: "text",
    placeholder: "Write a task name",
    value: work
  }), (0, _preact.h)("button", {
    onClick: function onClick() {
      return addTask();
    },
    "is-left": true,
    className: "button is-primary is-small"
  }, (0, _preact.h)("i", {
    className: "fas fa-plus"
  })))), task.length > 0 ? task.map(function (item, key) {
    return (0, _preact.h)("a", {
      className: "panel-block",
      key: key
    }, (0, _preact.h)("span", {
      className: "task"
    }, item), (0, _preact.h)("button", {
      onClick: function onClick() {
        return removeTask(key);
      },
      "is-left": true,
      className: "button is-danger is-small is-right"
    }, (0, _preact.h)("i", {
      className: "fas fa-trash"
    })));
  }) : (0, _preact.h)("p", null, " Sem Tasks")));
};

var _default = App;
exports["default"] = _default;