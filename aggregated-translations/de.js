'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _de = require('react-intl/locale-data/de');

var _de2 = _interopRequireDefault(_de);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_de2.default);

var messages = {
  "Terra.actionHeader.back": "Zurück",
  "Terra.actionHeader.close": "Schließen",
  "Terra.actionHeader.maximize": "Maximieren",
  "Terra.actionHeader.minimize": "Minimieren",
  "Terra.actionHeader.next": "Nächste",
  "Terra.actionHeader.previous": "Vorherige",
  "Terra.ajax.error": "Inhalt konnte nicht geladen werden.",
  "Terra.application.tabs.more": "Mehr",
  "Terra.application.utility.back": "Zurück",
  "Terra.application.utility.button": "Benutzeroptionen",
  "Terra.application.utility.close": "Schließen",
  "Terra.application.utility.menu": "Menü „Dienstprogramm“",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Zum Inhalt",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menü ein-/ausblenden",
  "Terra.applicationLayout.utilityDefaults.about": "Info über",
  "Terra.applicationLayout.utilityDefaults.appearance": "Erscheinungsbild",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Foto ändern",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Erste Schritte",
  "Terra.applicationLayout.utilityDefaults.help": "Hilfe",
  "Terra.applicationLayout.utilityDefaults.logOut": "Abmelden",
  "Terra.applicationLayout.utilityDefaults.menu": "Menü",
  "Terra.applicationLayout.utilityDefaults.security": "Berechtigung",
  "Terra.applicationLayout.utilityDefaults.settings": "Einstellungen",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Nutzungsbestimmungen",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Benutzerdaten",
  "Terra.devSiteRoutingMenu.filter": "Filter",
  "Terra.form.field.optional": "(wahlweise)",
  "Terra.icon.IconConsultInstructionsForUse.title": "Symbol 'Elektronische Gebrauchsanweisung'",
  "Terra.navigation.side.menu.selected": "Ausgewählt",
  "Terra.Overlay.loading": "Ladevorgang...",
  "Terra.popup.header.close": "Schließen",
  "Terra.searchField.clear": "Entfernen",
  "Terra.searchField.search": "Suchen",
  "Terra.searchField.submit-search": "Suche eingeben"
};
var areTranslationsLoaded = true;
var locale = 'de';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
