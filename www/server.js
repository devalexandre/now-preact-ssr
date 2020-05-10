"use strict";

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _express = _interopRequireDefault(require("express"));

var _preactRenderToString = _interopRequireDefault(require("preact-render-to-string"));

var _index = _interopRequireDefault(require("./src/index"));

var _preact = require("preact");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const { html } from'htm/preact');
var app = (0, _express["default"])();

var router = _express["default"].Router();

var port = process.env.PORT || 8080;

var serverRenderer = function serverRenderer(req, res, next) {
  _fs["default"].readFile(_path["default"].resolve('./build/index.html'), 'utf8', function (err, data) {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }

    var content = (0, _preactRenderToString["default"])((0, _preact.h)(_index["default"], null));
    return res.send(data.replace('<div id="preact_root"></div>', "<div id=\"preact_root\">".concat(content, "</div>")));
  });
};

router.use('^/$', serverRenderer);
router.use(_express["default"]["static"](_path["default"].resolve(__dirname, './build'), {
  maxAge: '30d'
}));
app.use(router);
app.listen(port, function () {
  console.log("Preact running in ".concat(port));
});
