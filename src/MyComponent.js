import React, { startTransition } from 'react';
import { useTranslation } from 'react-i18next';
import CurrencyConverter from './CurrencyConverter';

const MyComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    startTransition(() => {
      i18n.changeLanguage(lng);
    });
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('th')}>ไทย</button>
      <CurrencyConverter/>
    </div>
  );
};

export default MyComponent;
