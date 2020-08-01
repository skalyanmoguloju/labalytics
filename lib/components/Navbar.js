'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright &copy 2019 Kirana Bazaar
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Sai Kalyan Moguloju
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var UserLanding = function (_React$Component) {
  _inherits(UserLanding, _React$Component);

  function UserLanding() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserLanding);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserLanding.__proto__ || Object.getPrototypeOf(UserLanding)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showToggleSection: false,
      showLogin: false,
      showSignUp: false
    }, _this.onLoginClick = function () {
      _this.props.onLogin();
    }, _this.onSignUpClick = function () {
      _this.props.onSignup();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserLanding, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar,
          { bg: 'light', expand: 'lg', fixed: 'top' },
          _react2.default.createElement(
            _reactBootstrap.Navbar.Brand,
            null,
            'Labalytics'
          ),
          _react2.default.createElement(
            _reactBootstrap.Form,
            { inline: true, style: { width: "85%" } },
            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'Search Inventory', className: 'mr-sm-2', style: { width: "100%" } })
          ),
          _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null),
          _react2.default.createElement(
            _reactBootstrap.Navbar.Collapse,
            { className: 'justify-content-end' },
            _react2.default.createElement(
              _reactBootstrap.Nav,
              { className: 'justify-content-end' },
              _react2.default.createElement(
                _reactBootstrap.Nav.Item,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Nav.Link,
                  { onClick: this.onLoginClick },
                  'Login/Signup'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return UserLanding;
}(_react2.default.Component);

exports.default = UserLanding;