import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import './Navbar.css'

const links = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/who-am-i', key: 'nav.whoami' },
  { to: '/about', key: 'nav.about' },
  { to: '/projects', key: 'nav.projects' },
  { to: '/contact', key: 'nav.contact' },
]

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="nav__brand" aria-label={t('brand.name')}>
          <span className="nav__brand-mark">GK</span>
          <span className="nav__brand-name">{t('brand.name')}</span>
        </NavLink>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {t(l.key)}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__lang"
            onClick={toggleLang}
            title={t('nav.switchLang')}
            aria-label={t('nav.switchLang')}
          >
            {lang === 'he' ? 'EN' : 'עב'}
          </button>

          <button
            type="button"
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
