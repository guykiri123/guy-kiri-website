import { useLanguage } from '../i18n/LanguageContext.jsx'
import './WhoAmI.css'

export default function WhoAmI() {
  const { t } = useLanguage()

  return (
    <section className="page section">
      <div className="container">
        <header className="whoami__head">
          <h1 className="section-title">{t('whoami.title')}</h1>
        </header>
        {/* TODO: content coming — Guy will provide what goes here */}
      </div>
    </section>
  )
}
