import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import translations from './translations';

i18n.translations = translations;

i18n.locale = Localization.locale;

i18n.fallbacks = true;

const locale = (key: string) => i18n.t(key, { defaultValue: key });

export default locale;
