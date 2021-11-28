import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from './locales/en.json';
import hausa from './locales/hausa.json';
import igbo from './locales/igbo.json';
import pidgin from './locales/pidgin.json';
import yoruba from './locales/yoruba.json';

I18n.fallbacks = true;
I18n.translations = {
  en,
  yoruba,
  pidgin,
  igbo,
  hausa,
};

const currentLocale = I18n.currentLocale();

export const isRTL =
  currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

ReactNative.I18nManager.allowRTL(isRTL);

export function strings(name: I18n.Scope, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
