import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
  ArrowDownIcon,
} from '../components/Icons.jsx'
import './Contact.css'

// Web3Forms access key (https://web3forms.com). Submissions are emailed to the
// address registered with this key. Safe to expose in the client.
const WEB3FORMS_ACCESS_KEY = '49a2b495-1d96-4517-bbc8-0ec2f0be720a'

const contacts = [
  { label: 'Email', value: 'guykiri123@gmail.com', href: 'mailto:guykiri123@gmail.com', Icon: MailIcon },
  { label: 'WhatsApp', value: '+972 50-883-8685', href: 'https://wa.me/972508838685', Icon: WhatsappIcon },
  { label: 'LinkedIn', value: 'linkedin.com/in/guy-kiri-438927411', href: 'https://www.linkedin.com/in/guy-kiri-438927411/', Icon: LinkedinIcon },
  { label: 'GitHub', value: 'github.com/guykiri123', href: 'https://github.com/guykiri123', Icon: GithubIcon },
]

export default function Contact() {
  const { t } = useLanguage()
  // status: 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form).entries())

    // Honeypot: real users leave this empty; bots tend to fill it.
    if (data.botcheck) return

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${data.name || 'the website'}`,
          from_name: 'Guy Kiri Website',
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
        }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="page section">
      <div className="container">
        <header className="contact__head">
          <p className="eyebrow">{t('contact.title')}</p>
          <h1 className="section-title">{t('contact.title')}</h1>
          <p className="lead">{t('contact.subtitle')}</p>
        </header>

        {/* ---- Direct links (GitHub, LinkedIn, Email, WhatsApp) ---- */}
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

        {/* ---- Call to action + down arrow ---- */}
        <div className="contact__cta">
          <h2 className="contact__cta-title">{t('contact.formHeading')}</h2>
          <p className="contact__cta-sub">{t('contact.formSubheading')}</p>
          <span className="contact__arrow" aria-hidden="true">
            <ArrowDownIcon width={28} height={28} />
          </span>
        </div>

        {/* ---- Form (emails me via Web3Forms) ---- */}
        <form className="contact__form" onSubmit={handleSubmit}>
          {/* Honeypot field — hidden from real users */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: 'none' }}
          />

          <div className="field">
            <label htmlFor="name">{t('contact.nameLabel')}</label>
            <input id="name" name="name" type="text" placeholder={t('contact.namePlaceholder')} required />
          </div>

          <div className="field">
            <label htmlFor="phone">{t('contact.phoneLabel')}</label>
            <input id="phone" name="phone" type="tel" placeholder={t('contact.phonePlaceholder')} required />
          </div>

          <div className="field">
            <label htmlFor="email">{t('contact.emailLabel')}</label>
            <input id="email" name="email" type="email" placeholder={t('contact.emailPlaceholder')} required />
          </div>

          <div className="field">
            <label htmlFor="message">{t('contact.messageLabel')}</label>
            <textarea id="message" name="message" rows={5} placeholder={t('contact.messagePlaceholder')} required />
          </div>

          <button
            type="submit"
            className="btn btn--primary contact__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? t('contact.sending') : t('contact.send')}
          </button>

          {status === 'sent' && (
            <p className="contact__note contact__note--ok">✓ {t('contact.sentNote')}</p>
          )}
          {status === 'error' && (
            <p className="contact__note contact__note--err">{t('contact.errorNote')}</p>
          )}
        </form>
      </div>
    </section>
  )
}
