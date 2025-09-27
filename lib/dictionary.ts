import { headers } from 'next/headers';
import 'server-only'

const dictionaries = {
  it: () => import('../dictionaries/it.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale?: 'it' | 'en') => {
  // Se il locale non è fornito, usa l'header
  const headerLocale = headers().get('x-locale');
  const finalLocale = locale || headerLocale as 'it' | 'en';

  if (!dictionaries[finalLocale]) {
    throw new Error(`Dictionary for locale ${finalLocale} not found`);
  }

  return dictionaries[finalLocale]();
}
