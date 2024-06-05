import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const CurrencyConverter = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://v6.exchangerate-api.com/v6/dfb43504fb704da57e2c0404/latest/USD');
        setRate(response.data.conversion_rates['THB']);
      } catch (error) {
        console.error("Error fetching the exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, []);

  const convertCurrency = () => {
    if (rate !== null) {
      setResult(amount * rate);
    }
  };

  return (
    <div>
      <h2>{t('convert')}</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder={t('amount')}
      />
      <button onClick={convertCurrency}>{t('convert')}</button>
      {result !== null && (
        <div>
          <p>{t('result')}: {result}</p>
          <p>{t('conversion_complete')}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
