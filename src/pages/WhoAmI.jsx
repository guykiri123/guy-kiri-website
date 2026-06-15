import { useLanguage } from '../i18n/LanguageContext.jsx'
import ResumeButton from '../components/ResumeButton.jsx'
import RecommendationButton from '../components/RecommendationButton.jsx'
import portrait from '../assets/guy-portrait.png'
import './WhoAmI.css'

export default function WhoAmI() {
  const { t } = useLanguage()
  const paragraphs = t('whoami.paragraphs')

  return (
    <section className="page section">
      <div className="container">
        <header className="whoami__head">
          <h1 className="section-title">{t('whoami.title')}</h1>
        </header>

        <div className="whoami__content">
          <div className="whoami__text">
            <p className="whoami__name">{t('whoami.name')}</p>
            {(Array.isArray(paragraphs) ? paragraphs : []).map((p, i) => (
              <p key={i} className="whoami__para">
                {p}
              </p>
            ))}
          </div>

          <figure className="whoami__media">
            <img className="whoami__img" src={portrait} alt={t('whoami.imageAlt')} />
            <div className="whoami__actions">
              <ResumeButton variant="primary" />
              <RecommendationButton variant="ghost" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
