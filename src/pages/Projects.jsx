import { useLanguage } from '../i18n/LanguageContext.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import './Projects.css'

// TODO: replace with real projects. Add/remove cards as needed.
// `code` / `demo` are optional — omit to hide that link.
const projects = [
  {
    title: 'Project One',
    description: 'Short description of the project — what it does and why it matters.',
    tags: ['React', 'Vite'],
    code: 'https://github.com/',
    demo: '',
  },
  {
    title: 'Project Two',
    description: 'Short description of the project — what it does and why it matters.',
    tags: ['Node.js', 'API'],
    code: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Project Three',
    description: 'Short description of the project — what it does and why it matters.',
    tags: ['TypeScript', 'CSS'],
    code: 'https://github.com/',
    demo: '',
  },
  {
    title: 'Project Four',
    description: 'Short description of the project — what it does and why it matters.',
    tags: ['React', 'UI'],
    code: '',
    demo: 'https://example.com/',
  },
]

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section className="page section">
      <div className="container">
        <header className="projects__head">
          <p className="eyebrow">{t('projects.title')}</p>
          <h1 className="section-title">{t('projects.title')}</h1>
          {/* TODO: real subtitle */}
          <p className="lead">{t('projects.subtitle')}</p>
        </header>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
