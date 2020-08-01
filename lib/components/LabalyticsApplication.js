'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabalyticsApplication = function LabalyticsApplication(props) {
  return _react2.default.createElement(
    _terraContentContainer2.default,
    { fill: true, header: _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
        integrity: 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T',
        crossOrigin: 'anonymous'
      }) },
    _react2.default.createElement(_Home2.default, null)
  );
}; /**
    * @license
    * Copyright &copy 2020 Labalytics
    *
    * @author Sai Kalyan Moguloju
    */

exports.default = LabalyticsApplication;