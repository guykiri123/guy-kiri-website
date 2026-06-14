import { useLanguage } from '../i18n/LanguageContext.jsx'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons.jsx'
import './Footer.css'

// TODO: replace href values with real profiles / email.
const socials = [
  { label: 'GitHub', href: 'https://github.com/', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:hello@example.com', Icon: MailIcon },
]

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">{t('brand.name')}</span>

        <ul className="footer__socials">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                className="footer__social"
                aria-label={label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        <span className="footer__copy">
          © {year} {t('brand.name')}. {t('footer.rights')}
        </span>
      </div>
    </footer>
  )
}
