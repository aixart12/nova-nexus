import dayjs from 'dayjs';
import i18n from 'i18next';

import { i18nConfig } from './config';
import { DEFAULT_LANGUAGE_KEY } from './constants';

dayjs.locale(DEFAULT_LANGUAGE_KEY);

i18n.init(i18nConfig);

export default i18n;
