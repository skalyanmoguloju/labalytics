'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_en2.default);

var messages = {
  "Terra.actionHeader.back": "Back",
  "Terra.actionHeader.close": "Close",
  "Terra.actionHeader.maximize": "Maximize",
  "Terra.actionHeader.minimize": "Minimize",
  "Terra.actionHeader.next": "Next",
  "Terra.actionHeader.previous": "Previous",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.application.tabs.more": "More",
  "Terra.application.utility.back": "Back",
  "Terra.application.utility.button": "User Options",
  "Terra.application.utility.close": "Close",
  "Terra.application.utility.menu": "Utility Menu",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Skip to Content",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Toggle Menu",
  "Terra.applicationLayout.utilityDefaults.about": "About",
  "Terra.applicationLayout.utilityDefaults.appearance": "Appearance",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Change Photo",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Getting Started",
  "Terra.applicationLayout.utilityDefaults.help": "Help",
  "Terra.applicationLayout.utilityDefaults.logOut": "Log Out",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Security",
  "Terra.applicationLayout.utilityDefaults.settings": "Settings",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Terms of Use",
  "Terra.applicationLayout.utilityDefaults.userInformation": "User Information",
  "Terra.devSiteRoutingMenu.filter": "Filter",
  "Terra.form.field.optional": "(optional)",
  "Terra.icon.IconConsultInstructionsForUse.title": "Electronic Instructions for Use Icon",
  "Terra.navigation.side.menu.selected": "Selected",
  "Terra.Overlay.loading": "Loading...",
  "Terra.popup.header.close": "Close",
  "Terra.searchField.clear": "Clear",
  "Terra.searchField.search": "Search",
  "Terra.searchField.submit-search": "Submit Search"
};
var areTranslationsLoaded = true;
var locale = 'en-US';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
