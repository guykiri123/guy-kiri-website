import { useT } from '../i18n/LanguageContext.jsx'
import { ArrowDownIcon } from './Icons.jsx'
import resumePdf from '../assets/Guy-Kiri-Resume.pdf'

// One reusable resume download button. `variant` maps to the global .btn styles.
export default function ResumeButton({ variant = 'primary', className = '' }) {
  const t = useT()

  return (
    <a
      href={resumePdf}
      download="Guy-Kiri-Resume.pdf"
      className={`btn btn--${variant} ${className}`.trim()}
      aria-label={t('resume.aria')}
    >
      <ArrowDownIcon className="icon-inline" width={18} height={18} />
      {t('resume.label')}
    </a>
  )
}
