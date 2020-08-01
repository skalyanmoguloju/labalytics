'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright &copy 2020 Labalytics
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @author Sai Kalyan Moguloju
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDivider = require('terra-divider');

var _terraDivider2 = _interopRequireDefault(_terraDivider);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _terraGrid = require('terra-grid');

var _terraGrid2 = _interopRequireDefault(_terraGrid);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _terraSpacer = require('terra-spacer');

var _terraSpacer2 = _interopRequireDefault(_terraSpacer);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _reactSignupLoginComponent = require('react-signup-login-component');

var _reactSignupLoginComponent2 = _interopRequireDefault(_reactSignupLoginComponent);

var _terraSlidePanel = require('terra-slide-panel');

var _terraSlidePanel2 = _interopRequireDefault(_terraSlidePanel);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Placeholder = require('terra-doc-template/lib/Placeholder');

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _terraText = require('terra-text');

var _terraText2 = _interopRequireDefault(_terraText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraSlidePanel2.default, {
      mainContent: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_terraContentContainer2.default, { header: _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Navbar2.default, { onLogin: function onLogin() {
                return setIsOpen(true);
              }, onSignup: function onSignup() {
                return setIsOpen(true);
              } }),
            _react2.default.createElement(
              _terraSpacer2.default,
              { marginTop: 'large+3' },
              _react2.default.createElement(
                _terraGrid2.default,
                null,
                _react2.default.createElement(
                  _terraGrid2.default.Row,
                  null,
                  _react2.default.createElement(
                    _terraGrid2.default.Column,
                    { medium: 2, style: { background: '#f8f9fa' } },
                    _react2.default.createElement(
                      _terraSpacer2.default,
                      { paddingTop: 'large+2', paddingBottom: 'large+2', style: { height: '99%' } },
                      _react2.default.createElement(
                        _terraSpacer2.default,
                        { paddingLeft: 'large' },
                        _react2.default.createElement(
                          _terraText2.default,
                          { weight: '700', fontSize: 12 },
                          'Section for Search Filter'
                        )
                      ),
                      _react2.default.createElement(_Placeholder2.default, { style: { hight: '100%' } })
                    )
                  ),
                  _react2.default.createElement(
                    _terraGrid2.default.Column,
                    { medium: 8 },
                    _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(
                        _terraSpacer2.default,
                        { marginTop: 'large+3', marginBottom: 'medium' },
                        _react2.default.createElement(
                          _terraText2.default,
                          { weight: '700', fontSize: 18 },
                          'Search Results'
                        )
                      ),
                      _react2.default.createElement(_Item2.default, null),
                      _react2.default.createElement(_terraDivider2.default, null),
                      _react2.default.createElement(_Item2.default, null),
                      _react2.default.createElement(_terraDivider2.default, null),
                      _react2.default.createElement(_Item2.default, null),
                      _react2.default.createElement(_terraDivider2.default, null),
                      _react2.default.createElement(_Item2.default, null),
                      _react2.default.createElement(_terraDivider2.default, null),
                      _react2.default.createElement(_Item2.default, null),
                      _react2.default.createElement(_terraDivider2.default, null),
                      _react2.default.createElement(_Item2.default, null),
                      _react2.default.createElement(_terraDivider2.default, null),
                      _react2.default.createElement(_Item2.default, null),
                      _react2.default.createElement(_terraDivider2.default, null),
                      _react2.default.createElement(_Item2.default, null),
                      _react2.default.createElement(_terraDivider2.default, null),
                      _react2.default.createElement(_Item2.default, null)
                    )
                  ),
                  _react2.default.createElement(
                    _terraGrid2.default.Column,
                    { medium: 2, style: { background: '#f8f9fa' } },
                    _react2.default.createElement(
                      _terraSpacer2.default,
                      { paddingTop: 'large+2', paddingBottom: 'large+2', style: { height: '99%' } },
                      _react2.default.createElement(
                        _terraSpacer2.default,
                        { paddingLeft: 'large' },
                        _react2.default.createElement(
                          _terraText2.default,
                          { weight: '700', fontSize: 12 },
                          'Section for Cart'
                        )
                      ),
                      _react2.default.createElement(_Placeholder2.default, { style: { hight: '100%' } })
                    )
                  )
                )
              )
            )
          )
        })
      ),
      panelContent: _react2.default.createElement(
        'div',
        { style: { height: '100%' } },
        _react2.default.createElement(_terraArrange2.default, { fill: _react2.default.createElement('div', null), fitEnd: _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return setIsOpen(false);
              } },
            'X'
          ) }),
        _react2.default.createElement(_reactSignupLoginComponent2.default, {
          styles: {
            mainWrapper: { width: '94%', border: '0px', backgroundColor: 'none' },
            signup: {
              recoverPassword: {},
              button: { backgroundColor: '#efecec', height: '30px', borderRadius: '5px', lineHeight: '0px', borderColor: 'white' }
            },
            login: {
              recoverPasswordButton: { backgroundColor: '#efecec', height: '30px', borderRadius: '5px', lineHeight: '0px', borderColor: 'white' },
              button: { backgroundColor: '#efecec', height: '30px', borderRadius: '5px', lineHeight: '0px', borderColor: 'white' }
            },
            recoverPassword: {
              button: { backgroundColor: '#efecec', height: '30px', borderRadius: '5px', lineHeight: '0px', borderColor: 'white' }
            }
          },
          title: 'Login/Signup',
          handleSignup: function handleSignup() {},
          handleLogin: function handleLogin() {},
          handleRecoverPassword: function handleRecoverPassword() {},
          submitLoginCustomLabel: 'Login'
        })
      ),
      panelBehavior: 'overlay',
      panelPosition: 'end',
      isOpen: isOpen,
      fill: true
    })
  );
};

exports.default = Home;