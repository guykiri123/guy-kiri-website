import { useT } from '../i18n/LanguageContext.jsx'
import { ArrowDownIcon } from './Icons.jsx'
import recommendationPdf from '../assets/Guy-Kiri-IDF-Recommendation.pdf'

// Download button for the IDF recommendation letter — same pattern as ResumeButton.
export default function RecommendationButton({ variant = 'ghost', className = '' }) {
  const t = useT()

  return (
    <a
      href={recommendationPdf}
      download="Guy-Kiri-IDF-Recommendation.pdf"
      className={`btn btn--${variant} ${className}`.trim()}
      aria-label={t('recommendation.aria')}
    >
      <ArrowDownIcon className="icon-inline" width={18} height={18} />
      {t('recommendation.label')}
    </a>
  )
}
