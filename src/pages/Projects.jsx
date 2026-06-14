import { useLanguage } from '../i18n/LanguageContext.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import cookingBookImg from '../assets/cookingbook-home.png'
import './Projects.css'

// Add/remove cards as needed. `code` / `demo` are optional — omit to hide that link.
// `titleKey` / `descKey` point at translations so cards stay bilingual.
const projects = [
  {
    titleKey: 'projects.items.cookingBook.title',
    descKey: 'projects.items.cookingBook.description',
    image: cookingBookImg,
    tags: ['React', 'Express', 'Claude AI', 'RTL'],
    code: 'https://github.com/guykiri123/CookingBook',
    demo: 'https://cookingbook-bf50.onrender.com',
  },
]

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section className="page section">
      <div className="container">
        <header className="projects__head">
          <h1 className="section-title">{t('projects.title')}</h1>
        </header>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              project={{ ...p, title: t(p.titleKey), description: t(p.descKey) }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
