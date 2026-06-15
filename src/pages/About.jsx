import { useLanguage } from '../i18n/LanguageContext.jsx'
import ResumeButton from '../components/ResumeButton.jsx'
import './About.css'

// Grouped technical skills — tech names stay as-is, group labels are translated.
const skillGroups = [
  { titleKey: 'about.skillGroups.programming', items: ['C#', 'OOP'] },
  { titleKey: 'about.skillGroups.web', items: ['JavaScript', 'React', 'HTML', 'CSS'] },
  { titleKey: 'about.skillGroups.tools', items: ['Git', 'GitHub', 'Visual Studio', 'VS Code'] },
  { titleKey: 'about.skillGroups.ai', items: ['Claude Code', 'Rapid Prototyping', 'Debugging', 'Code Review'] },
]

const education = [
  { period: '2009–2021', titleKey: 'about.edu.matric.title', subjectsKey: 'about.edu.matric.subjects' },
]

// role · org timelines (period may carry "present", so it lives in translations)
const military = [
  {
    periodKey: 'about.military.paratroopers.period',
    roleKey: 'about.military.paratroopers.role',
    orgKey: 'about.military.paratroopers.unit',
    descKey: 'about.military.paratroopers.desc',
  },
]

const experience = [
  {
    period: '2016–2021 · 2025–2026',
    roleKey: 'about.experience.sushi.role',
    orgKey: 'about.experience.sushi.company',
    descKey: 'about.experience.sushi.desc',
  },
]

const volunteering = [
  { period: '2013–2021', titleKey: 'about.volunteering.scouts.title', descKey: 'about.volunteering.scouts.desc' },
  { period: '2025', titleKey: 'about.volunteering.heroes.title', descKey: 'about.volunteering.heroes.desc' },
]

// Hobbies — each category resolves a label + a line of text.
const interests = [
  { labelKey: 'about.interests.sport.label', textKey: 'about.interests.sport.text' },
  { labelKey: 'about.interests.music.label', textKey: 'about.interests.music.text' },
  { labelKey: 'about.interests.travel.label', textKey: 'about.interests.travel.text' },
]

export default function About() {
  const { t } = useLanguage()

  // Shared renderer for a "role · organisation + description" timeline entry.
  const renderRole = (e, i) => (
    <li key={i} className="timeline__item">
      <span className="timeline__period">{e.periodKey ? t(e.periodKey) : e.period}</span>
      <h3 className="timeline__title">
        {t(e.roleKey)} <span className="timeline__company">· {t(e.orgKey)}</span>
      </h3>
      <p className="timeline__desc">{t(e.descKey)}</p>
    </li>
  )

  return (
    <section className="page section">
      <div className="container">
        <header className="about__head">
          <h1 className="section-title">{t('about.title')}</h1>
          <p className="about__summary lead">{t('about.summary')}</p>
          <ResumeButton variant="primary" className="about__resume" />
        </header>

        <div className="about__grid">
          {/* ---- Skills ---- */}
          <div className="about__block about__block--skills">
            <h2 className="about__block-title">{t('about.skillsTitle')}</h2>
            <div className="about__skill-groups">
              {skillGroups.map((g) => (
                <div key={g.titleKey} className="about__skill-group">
                  <h3 className="about__skill-label">{t(g.titleKey)}</h3>
                  <ul className="badges">
                    {g.items.map((s) => (
                      <li key={s} className="badge">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Education ---- */}
          <div className="about__block">
            <h2 className="about__block-title">{t('about.educationTitle')}</h2>
            <ul className="timeline">
              {education.map((e, i) => {
                const subjects = t(e.subjectsKey)
                return (
                  <li key={i} className="timeline__item">
                    <span className="timeline__period">{e.period}</span>
                    <h3 className="timeline__title">{t(e.titleKey)}</h3>
                    <ul className="about__subjects">
                      {(Array.isArray(subjects) ? subjects : []).map((s, j) => (
                        <li key={j} className="about__subject">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* ---- Military service ---- */}
          <div className="about__block">
            <h2 className="about__block-title">{t('about.militaryTitle')}</h2>
            <ul className="timeline">{military.map(renderRole)}</ul>
          </div>

          {/* ---- Professional experience ---- */}
          <div className="about__block about__block--wide">
            <h2 className="about__block-title">{t('about.experienceTitle')}</h2>
            <ul className="timeline">{experience.map(renderRole)}</ul>
          </div>

          {/* ---- Hobbies beyond code ---- */}
          <div className="about__block">
            <h2 className="about__block-title">{t('about.interestsTitle')}</h2>
            <ul className="about__interests">
              {interests.map((it) => (
                <li key={it.labelKey} className="about__interest">
                  <span className="about__interest-label">{t(it.labelKey)}</span>
                  <span className="about__interest-text">{t(it.textKey)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Volunteering ---- */}
          <div className="about__block">
            <h2 className="about__block-title">{t('about.volunteeringTitle')}</h2>
            <ul className="timeline">
              {volunteering.map((e, i) => (
                <li key={i} className="timeline__item">
                  <span className="timeline__period">{e.period}</span>
                  <h3 className="timeline__title">{t(e.titleKey)}</h3>
                  <p className="timeline__desc">{t(e.descKey)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
