import { useLanguage } from '../i18n/LanguageContext.jsx'
import './About.css'

// TODO: replace with real skills. Grouping is optional — flat list is fine too.
const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'HTML / CSS',
  'Git',
  // TODO: add more…
]

// TODO: replace with real education entries.
const education = [
  { period: '20XX – 20XX', titleKey: 'Degree / Program', placeKey: 'Institution' },
  { period: '20XX – 20XX', titleKey: 'Course / Certification', placeKey: 'Institution' },
]

// TODO: replace with real experience entries.
const experience = [
  { period: '20XX – present', role: 'Job Title', company: 'Company', desc: 'Short description of your role and impact.' },
  { period: '20XX – 20XX', role: 'Job Title', company: 'Company', desc: 'Short description of your role and impact.' },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="page section">
      <div className="container">
        <header className="about__head">
          <h1 className="section-title">{t('about.title')}</h1>
        </header>

        <div className="about__grid">
          {/* ---- Skills ---- */}
          <div className="about__block about__block--skills">
            <h2 className="about__block-title">{t('about.skillsTitle')}</h2>
            <ul className="badges">
              {skills.map((s) => (
                <li key={s} className="badge">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Education ---- */}
          <div className="about__block">
            <h2 className="about__block-title">{t('about.educationTitle')}</h2>
            <ul className="timeline">
              {education.map((e, i) => (
                <li key={i} className="timeline__item">
                  <span className="timeline__period">{e.period}</span>
                  {/* TODO: real degree + institution */}
                  <h3 className="timeline__title">{e.titleKey}</h3>
                  <span className="timeline__sub">{e.placeKey}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Experience ---- */}
          <div className="about__block about__block--wide">
            <h2 className="about__block-title">{t('about.experienceTitle')}</h2>
            <ul className="timeline">
              {experience.map((e, i) => (
                <li key={i} className="timeline__item">
                  <span className="timeline__period">{e.period}</span>
                  {/* TODO: real role + company + description */}
                  <h3 className="timeline__title">
                    {e.role} · <span className="timeline__company">{e.company}</span>
                  </h3>
                  <p className="timeline__desc">{e.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
