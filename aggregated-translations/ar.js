'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _ar = require('react-intl/locale-data/ar');

var _ar2 = _interopRequireDefault(_ar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_ar2.default);

var messages = {
  "Terra.actionHeader.back": "العودة",
  "Terra.actionHeader.close": "إغلاق",
  "Terra.actionHeader.maximize": "تكبير",
  "Terra.actionHeader.minimize": "تصغير",
  "Terra.actionHeader.next": "التّالي",
  "Terra.actionHeader.previous": "السابق",
  "Terra.ajax.error": "يتعذر تحميل هذا المحتوى.",
  "Terra.application.tabs.more": "المزيد",
  "Terra.application.utility.back": "العودة",
  "Terra.application.utility.button": "زر الأداة المساعدة",
  "Terra.application.utility.close": "إغلاق",
  "Terra.application.utility.menu": "قائمة الأداة المساعدة",
  "Terra.ApplicationHeaderLayout.SkipToContent": "تخطى الى المحتوى",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "تبديل القائمة",
  "Terra.applicationLayout.utilityDefaults.about": "تقريبي",
  "Terra.applicationLayout.utilityDefaults.appearance": "المظهر",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "تغيير الصورة",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "بدء الاستخدام",
  "Terra.applicationLayout.utilityDefaults.help": "المساعدة",
  "Terra.applicationLayout.utilityDefaults.logOut": "تسجيل الخروج",
  "Terra.applicationLayout.utilityDefaults.menu": "القائمة",
  "Terra.applicationLayout.utilityDefaults.security": "الأمن",
  "Terra.applicationLayout.utilityDefaults.settings": "الإعدادات",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "شروط الاستخدام",
  "Terra.applicationLayout.utilityDefaults.userInformation": "معلومات المستخدم",
  "Terra.devSiteRoutingMenu.filter": "منقي",
  "Terra.form.field.optional": "(اختياري)",
  "Terra.Overlay.loading": "جارٍ التحميل...",
  "Terra.popup.header.close": "إغلاق",
  "Terra.searchField.search": "بحث",
  "Terra.searchField.submit-search": "إرسال البحث"
};
var areTranslationsLoaded = true;
var locale = 'ar';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
