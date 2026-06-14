// ============================================================================
// Translations / i18n content map.
//
// Structure:  translations[lang][section][key]
// Languages:  'en' (LTR)  |  'he' (RTL)
//
// All strings below are PLACEHOLDERS. Replace the TODO values with real
// content. Keep the SAME keys across both languages so nothing falls back
// to an empty string. Use t('section.key') from components (see useT()).
// ============================================================================

export const LANGUAGES = {
  en: { code: 'en', label: 'EN', name: 'English', dir: 'ltr' },
  he: { code: 'he', label: 'עב', name: 'עברית', dir: 'rtl' },
}

export const DEFAULT_LANG = 'en'

export const translations = {
  en: {
    // ---- Brand / shared ----
    brand: { name: 'Guy Kiri' },

    // ---- Navbar ----
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      switchLang: 'Switch language',
    },

    // ---- Home / Hero ----
    home: {
      // TODO: real headline / name styling if needed
      greeting: 'Hello, I am',
      name: 'Guy Kiri',
      role: 'Full Stack Developer', // TODO: real role / tagline
      tagline: 'I build clean, elegant web experiences.', // TODO: real subtitle
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Get in touch',
    },

    // ---- About ----
    about: {
      title: 'About',
      // TODO: real personal summary
      summary:
        'Short personal summary goes here. Describe who you are, what you do, and what you care about as a developer.',
      educationTitle: 'Education',
      // TODO: fill education entries in About.jsx data array
      skillsTitle: 'Technical Skills',
      experienceTitle: 'Experience',
      present: 'Present',
    },

    // ---- Projects ----
    projects: {
      title: 'Projects',
      subtitle: 'A selection of personal projects.', // TODO
      viewCode: 'Code',
      viewDemo: 'Live Demo',
    },

    // ---- Contact ----
    contact: {
      title: 'Contact',
      subtitle: "Let's work together.",
      orReach: 'Reach me directly:',
      // call-to-action above the form
      formHeading: 'Want me to reach out to you?',
      formSubheading: "Leave your details and I'll get back to you soon.",
      // form
      nameLabel: 'Full name',
      namePlaceholder: 'Your full name',
      phoneLabel: 'Phone number',
      phonePlaceholder: 'Your phone number',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Anything you’d like to add…',
      send: 'Send',
      sending: 'Sending…',
      sentNote: 'Thanks! Your message has been sent — I’ll get back to you soon.',
      errorNote: 'Something went wrong. Please try again, or email me directly.',
    },

    // ---- Footer ----
    footer: {
      rights: 'All rights reserved.',
    },
  },

  he: {
    // ---- Brand / shared ----
    brand: { name: 'גיא קירי' },

    // ---- Navbar ----
    nav: {
      home: 'בית',
      about: 'אודות',
      projects: 'פרויקטים',
      contact: 'צור קשר',
      switchLang: 'החלפת שפה',
    },

    // ---- Home / Hero ----
    home: {
      // TODO: כותרת / טקסט אמיתי
      greeting: 'שלום, אני',
      name: 'גיא קירי',
      role: 'מפתח Full Stack', // TODO: תפקיד אמיתי
      tagline: 'בונה חוויות ווב נקיות ואלגנטיות.', // TODO: תת-כותרת אמיתית
      ctaPrimary: 'לפרויקטים',
      ctaSecondary: 'צרו קשר',
    },

    // ---- About ----
    about: {
      title: 'אודות',
      // TODO: תקציר אישי אמיתי
      summary:
        'כאן יופיע תקציר אישי קצר. תארו מי אתם, במה אתם עוסקים, ומה חשוב לכם כמפתחים.',
      educationTitle: 'השכלה',
      // TODO: מלאו את פרטי ההשכלה במערך הנתונים ב-About.jsx
      skillsTitle: 'כישורים טכניים',
      experienceTitle: 'ניסיון תעסוקתי',
      present: 'היום',
    },

    // ---- Projects ----
    projects: {
      title: 'פרויקטים',
      subtitle: 'מבחר פרויקטים אישיים.', // TODO
      viewCode: 'קוד',
      viewDemo: 'דמו חי',
    },

    // ---- Contact ----
    contact: {
      title: 'צור קשר',
      subtitle: 'בואו נעבוד יחד.',
      orReach: 'צרו איתי קשר ישירות:',
      // call-to-action above the form
      formHeading: 'רוצים שאחזור אליכם?',
      formSubheading: 'השאירו פרטים ואחזור אליכם בהקדם.',
      // form
      nameLabel: 'שם מלא',
      namePlaceholder: 'השם המלא שלך',
      phoneLabel: 'מספר טלפון',
      phonePlaceholder: 'מספר הטלפון שלך',
      emailLabel: 'אימייל',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'תוכן ההודעה',
      messagePlaceholder: 'מה תרצו להוסיף?…',
      send: 'שליחה',
      sending: 'שולח…',
      sentNote: 'תודה! ההודעה נשלחה — אחזור אליכם בהקדם.',
      errorNote: 'משהו השתבש. נסו שוב, או שלחו לי מייל ישירות.',
    },

    // ---- Footer ----
    footer: {
      rights: 'כל הזכויות שמורות.',
    },
  },
}
