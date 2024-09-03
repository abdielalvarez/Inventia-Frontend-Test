import enData from '@/languages/en.json';
import esData from '@/languages/es.json';

const translations = {
  en: enData,
  es: esData,
};

export const translate = (language, key) => {
  const keys = key.split('.');
  let translation = translations[language];

  for (let k of keys) {
    translation = translation[k];
    if (!translation) return key;
  }

  return translation;
};
