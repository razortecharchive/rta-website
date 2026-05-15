'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ja');

  useEffect(() => {
    document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((l) => (l === 'ja' ? 'en' : 'ja'));
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
    }),
    [lang, toggleLang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error('useLang must be used within LangProvider');
  }
  return ctx;
}
