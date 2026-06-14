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
      whoami: 'Who Am I?',
      about: 'Technical Details',
      projects: 'Projects',
      contact: 'Contact',
      switchLang: 'Switch language',
    },

    // ---- Home / Hero ----
    home: {
      // TODO: real headline / name styling if needed
      greeting: 'Nice to meet you, I am',
      name: 'Guy Kiri',
      role: 'Full Stack Developer', // TODO: real role / tagline
      tagline: 'I build clean, elegant web experiences.', // TODO: real subtitle
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Get in touch',
    },

    // ---- Who Am I ----
    whoami: {
      title: 'Want to know who I am?',
    },

    // ---- About ----
    about: {
      title: 'A bit of technical info about me',
      educationTitle: 'Education',
      // TODO: fill education entries in About.jsx data array
      skillsTitle: 'Technical Skills',
      experienceTitle: 'Experience',
      present: 'Present',
    },

    // ---- Projects ----
    projects: {
      title: 'My Personal Projects',
      viewCode: 'Code',
      viewDemo: 'Live Demo',
      items: {
        cookingBook: {
          title: 'Cooking Book',
          description:
            'An interactive recipe-management app powered by AI. Search recipes in natural language, ask the chef (Claude) for real-time cooking advice, scale portions on the fly, and view calculated nutrition. Built with React 19 and an Express backend with user management, powered by Claude AI.',
        },
      },
    },

    // ---- Contact ----
    contact: {
      title: "Let's work together",
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
      whoami: 'מי אני?',
      about: 'פרטים טכניים עלי',
      projects: 'פרויקטים',
      contact: 'צור קשר',
      switchLang: 'החלפת שפה',
    },

    // ---- Home / Hero ----
    home: {
      // TODO: כותרת / טקסט אמיתי
      greeting: 'נעים להכיר, אני',
      name: 'גיא קירי',
      role: 'מפתח Full Stack', // TODO: תפקיד אמיתי
      tagline: 'בונה חוויות ווב נקיות ואלגנטיות.', // TODO: תת-כותרת אמיתית
      ctaPrimary: 'לפרויקטים',
      ctaSecondary: 'צרו קשר',
    },

    // ---- Who Am I ----
    whoami: {
      title: 'רוצים לדעת מי אני?',
    },

    // ---- About ----
    about: {
      title: 'קצת מידע טכני עליי',
      educationTitle: 'השכלה',
      // TODO: מלאו את פרטי ההשכלה במערך הנתונים ב-About.jsx
      skillsTitle: 'כישורים טכניים',
      experienceTitle: 'ניסיון תעסוקתי',
      present: 'היום',
    },

    // ---- Projects ----
    projects: {
      title: 'פרוייקטים אישיים שלי',
      viewCode: 'קוד',
      viewDemo: 'דמו חי',
      items: {
        cookingBook: {
          title: 'ספר המתכונים',
          description:
            'אפליקציית ניהול מתכונים אינטראקטיבית מבוססת בינה מלאכותית. חיפוש מתכונים בשפה טבעית, שאלות לשף (Claude) בזמן אמת, שינוי גודל מנה אוטומטי וחישוב ערכים תזונתיים. נבנתה עם React 19 ושרת Express הכולל ניהול משתמשים, מבוססת Claude AI.',
        },
      },
    },

    // ---- Contact ----
    contact: {
      title: 'בואו נעבוד יחד',
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
