import { useLanguage } from '../i18n/LanguageContext.jsx'
import { GithubIcon, ExternalIcon } from './Icons.jsx'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { t } = useLanguage()
  const { title, description, tags, code, demo } = project

  return (
    <article className="card">
      {/* TODO: replace with real project image (src in public/ or imported asset) */}
      <div className="card__thumb" aria-hidden="true">
        <span className="card__thumb-mark">{title?.[0] ?? '·'}</span>
      </div>

      <div className="card__body">
        {/* TODO: real project title */}
        <h3 className="card__title">{title}</h3>
        {/* TODO: real project description */}
        <p className="card__desc">{description}</p>

        <ul className="card__tags">
          {tags.map((tag) => (
            <li key={tag} className="card__tag">
              {tag}
            </li>
          ))}
        </ul>

        <div className="card__links">
          {code && (
            <a href={code} className="card__link" target="_blank" rel="noreferrer">
              <GithubIcon width={17} height={17} />
              {t('projects.viewCode')}
            </a>
          )}
          {demo && (
            <a href={demo} className="card__link" target="_blank" rel="noreferrer">
              <ExternalIcon width={17} height={17} />
              {t('projects.viewDemo')}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
