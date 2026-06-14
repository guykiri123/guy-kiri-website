import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons.jsx'
import './Contact.css'

const contacts = [
  { label: 'Email', value: 'guykiri123@gmail.com', href: 'mailto:guykiri123@gmail.com', Icon: MailIcon },
  { label: 'LinkedIn', value: 'linkedin.com/in/guy-kiri-438927411', href: 'https://www.linkedin.com/in/guy-kiri-438927411/', Icon: LinkedinIcon },
  { label: 'GitHub', value: 'github.com/guykiri123', href: 'https://github.com/guykiri123', Icon: GithubIcon },
]

export default function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  // UI-only: no backend. Just show a confirmation note.
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  return (
    <section className="page section">
      <div className="container">
        <header className="contact__head">
          <p className="eyebrow">{t('contact.title')}</p>
          <h1 className="section-title">{t('contact.title')}</h1>
          {/* TODO: real subtitle */}
          <p className="lead">{t('contact.subtitle')}</p>
        </header>

        <div className="contact__grid">
          {/* ---- Direct details ---- */}
          <aside className="contact__info">
            <h2 className="contact__info-title">{t('contact.orReach')}</h2>
            <ul className="contact__list">
              {contacts.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a className="contact__item" href={href} target="_blank" rel="noreferrer">
                    <span className="contact__item-icon">
                      <Icon width={18} height={18} />
                    </span>
                    <span className="contact__item-text">
                      <span className="contact__item-label">{label}</span>
                      <span className="contact__item-value">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* ---- Form (UI demo) ---- */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">{t('contact.nameLabel')}</label>
              <input id="name" name="name" type="text" placeholder={t('contact.namePlaceholder')} required />
            </div>

            <div className="field">
              <label htmlFor="email">{t('contact.emailLabel')}</label>
              <input id="email" name="email" type="email" placeholder={t('contact.emailPlaceholder')} required />
            </div>

            <div className="field">
              <label htmlFor="message">{t('contact.messageLabel')}</label>
              <textarea id="message" name="message" rows={5} placeholder={t('contact.messagePlaceholder')} required />
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              {t('contact.send')}
            </button>

            <p className="contact__note">
              {sent ? '✓ ' : ''}
              {t('contact.sentNote')}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
