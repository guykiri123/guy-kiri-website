import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { ArrowIcon } from '../components/Icons.jsx'
import ResumeButton from '../components/ResumeButton.jsx'
import './Home.css'

export default function Home() {
  const { t } = useLanguage()

  return (
    <section className="page home">
      <div className="container home__inner">
        <div className="home__glow" aria-hidden="true" />

        <p className="eyebrow fade-up" style={{ animationDelay: '0.05s' }}>
          {/* TODO: optional eyebrow / location / status */}
          {t('home.greeting')}
        </p>

        <h1 className="home__title fade-up" style={{ animationDelay: '0.12s' }}>
          {t('home.name')}
        </h1>

        <p className="home__role fade-up" style={{ animationDelay: '0.2s' }}>
          {/* TODO: real role / headline */}
          {t('home.role')}
        </p>

        <p className="home__tagline lead fade-up" style={{ animationDelay: '0.28s' }}>
          {/* TODO: real subtitle */}
          {t('home.tagline')}
        </p>

        <div className="home__cta fade-up" style={{ animationDelay: '0.36s' }}>
          <Link to="/projects" className="btn btn--primary">
            {t('home.ctaPrimary')}
            <ArrowIcon className="icon-inline" width={18} height={18} />
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            {t('home.ctaSecondary')}
          </Link>
          <ResumeButton variant="ghost" />
        </div>
      </div>
    </section>
  )
}
