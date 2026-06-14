import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { translations, LANGUAGES, DEFAULT_LANG } from './translations.js'

const STORAGE_KEY = 'gk-lang'

const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && LANGUAGES[saved]) return saved
  // Fall back to the browser preference if it is Hebrew, otherwise default.
  const browser = window.navigator.language?.slice(0, 2)
  return LANGUAGES[browser] ? browser : DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  const dir = LANGUAGES[lang]?.dir ?? 'ltr'

  // Keep <html lang/dir> in sync + persist choice.
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang, dir])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'he' ? 'en' : 'he'))
  }, [])

  // t('section.key') -> string. Safe lookup with dotted path.
  const t = useCallback(
    (path) => {
      const value = path
        .split('.')
        .reduce((acc, key) => (acc == null ? acc : acc[key]), translations[lang])
      return value ?? path // fall back to the key so missing strings are visible
    },
    [lang],
  )

  const value = useMemo(
    () => ({ lang, dir, t, toggleLang, setLang, languages: LANGUAGES }),
    [lang, dir, t, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

// Convenience hook when you only need the translate function.
// eslint-disable-next-line react-refresh/only-export-components
export function useT() {
  return useLanguage().t
}
