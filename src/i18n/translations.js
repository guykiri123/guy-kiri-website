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

    // ---- Resume ----
    resume: {
      label: 'Resume',
      aria: 'Download my resume (PDF)',
    },

    // ---- Recommendation letter ----
    recommendation: {
      label: 'IDF Recommendation',
      aria: 'Download my IDF recommendation letter (PDF)',
    },

    // ---- Who Am I ----
    whoami: {
      title: 'Want to know who I am?',
      name: 'Guy Kiri, 22, Sharon area',
      paragraphs: [
        'From a young age I fell in love with technology and computers — I grew up with a computer and have logged countless hours on it ever since childhood. As technology evolved, I evolved with it: always driven to learn, stay current, and keep up with the pace.',
        'In high school I studied in an honors ("Mofet") class, majoring in Computer Science, and there I discovered my true passion: creating, and the ability to turn a thought into a real product through code. From that moment, I knew this was the field in which I wanted to build my career.',
        'In parallel, I started working at the age of 13, which helped me build a strong work ethic and a sense of responsibility that stays with me to this day.',
        'After high school I completed a pre-military preparatory program (Erez) in northern Israel, and then enlisted in the Paratroopers Brigade, where I served in a range of roles — combat and operational — with distinction.',
        'After my discharge, I was called up for reserve duty under emergency order Tzav 8 at the outbreak of the Swords of Iron war. When it ended, I set off on a year-long trip around the world, and returned home for another Tzav 8 call-up.',
        'When that reserve duty ended, I realized it was time to start making the dream happen: to build a career in programming and break into the high-tech world.',
        "Today, I'm looking for my first opportunity to prove myself — with my motivation, curiosity, and drive to learn, I believe the sky's the limit.",
        "If you liked what you read, I'd be very glad if you got in touch :)",
      ],
      imageAlt: 'Guy Kiri',
    },

    // ---- About ----
    about: {
      title: 'A bit of technical info about me',
      summary:
        'A junior software developer with a solid foundation in C# and object-oriented programming, plus hands-on experience building small web apps and AI-assisted projects. I enjoy turning ideas into working prototypes, finding my way around unfamiliar code, debugging, and picking up new technologies on my own.',
      skillsTitle: 'Technical Skills',
      educationTitle: 'Education',
      experienceTitle: 'Professional Experience',
      militaryTitle: 'Military Service',
      interestsTitle: 'Hobbies Beyond Code',
      volunteeringTitle: 'Volunteering',
      present: 'Present',
      skillGroups: {
        programming: 'Programming',
        web: 'Web Development',
        tools: 'Tools',
        ai: 'AI-Assisted Development',
      },
      edu: {
        matric: {
          title: 'Full Scientific Matriculation',
          subjects: [
            'Computer Science, Systems Design & Programming — 10 units',
            'Mathematics — 5 units',
            'English — 5 units',
          ],
        },
      },
      military: {
        paratroopers: {
          period: '2022–2024 · 2025–present',
          role: 'Combat & Operational Roles',
          unit: 'Paratroopers Brigade, IDF',
          desc: 'Served in combat and operational-coordination roles in high-pressure environments, managing and relaying time-sensitive information. Completed mandatory service with a Battalion Excellence distinction, and currently serving as an active reserve soldier.',
        },
      },
      experience: {
        sushi: {
          role: 'Shift Manager & Bartender',
          company: 'Shiou Sushi, Anamaro',
          desc: 'Coordinated day-to-day operations in a fast-paced, customer-facing environment — service, team coordination, and problem-solving. Trained new staff and upheld service standards over several years.',
        },
      },
      interests: {
        sport: {
          label: 'Sport',
          text: 'Formerly a national-level competitive tennis player, now just for fun — plus the gym, football, and padel.',
        },
        music: {
          label: 'Music',
          text: 'I play guitar, ukulele, and piano.',
        },
        travel: {
          label: 'Travel',
          text: 'Nature hikes and camping.',
        },
      },
      volunteering: {
        scouts: {
          title: 'Israeli Scouts (Tzofim)',
          desc: 'Youth member and guild leader.',
        },
        heroes: {
          title: 'Heroes for Life — Costa Rica',
          desc: 'Volunteered with children in underserved neighborhoods and promoted public diplomacy on behalf of Israel.',
        },
      },
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
        chordsil: {
          title: 'ChordsIL',
          description:
            'A music platform for Israeli songs — browse and search chords, tabs, and play-along videos for guitar and piano, with on-the-fly key transposition. On this project I led the product, UX and visual design — the logical and design planning — rather than writing the code.',
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

    // ---- Resume ----
    resume: {
      label: 'קורות חיים',
      aria: 'הורדת קורות החיים שלי (PDF)',
    },

    // ---- Recommendation letter ----
    recommendation: {
      label: 'המלצה מצה״ל',
      aria: 'הורדת מכתב ההמלצה שלי מצה״ל (PDF)',
    },

    // ---- Who Am I ----
    whoami: {
      title: 'רוצים לדעת מי אני?',
      name: 'גיא קירי, 22, השרון',
      paragraphs: [
        'מגיל צעיר התאהבתי בטכנולוגיה ובמחשב, שאיתו גדלתי וצברתי שעות רבות מאז הילדות. כשהטכנולוגיה התפתחה, התפתחתי איתה - תמיד מתוך רצון ללמוד, להתעדכן ולהישאר בקצב.',
        'בתיכון למדתי בכיתת מופת במגמת מדעי המחשב, ושם גיליתי את האהבה האמיתית שלי: היצירה, והיכולת להפוך מחשבה למוצר ממשי דרך תכנות. מאותו רגע ידעתי שזה התחום שבו אני רוצה לבנות את הקריירה שלי.',
        'במקביל, עוד מגיל 13 התחלתי לעבוד, ובכך בניתי לעצמי מוסר עבודה גבוה ותחושת אחריות שמלווה אותי עד היום.',
        'אחרי התיכון השלמתי מכינה קדם-צבאית (ארז) בצפון הארץ, ולאחריה התגייסתי לחטיבת הצנחנים, שם מילאתי תפקידים מגוונים - לוחמתיים ואופרטיביים - בהצטיינות.',
        'לאחר השחרור גויסתי למילואים בצו 8 עם פרוץ מלחמת חרבות ברזל. בסיום המילואים יצאתי לטיול מסביב לעולם למשך שנה, וחזרתי לארץ עם זימון לצו 8 נוסף.',
        'בסיום המילואים הבנתי שהגיע הזמן להתחיל לממש את החלום: לבנות קריירה בתחום התכנות ולהיכנס לעולם ההייטק.',
        'כיום אני מחפש את ההזדמנות הראשונה להוכיח את עצמי - עם המוטיבציה, הסקרנות והרצון שלי ללמוד, אני מאמין שהשמיים הם הגבול.',
        'אם אהבתם את מה שקראתם, אני מאוד אשמח אם תיצרו איתי קשר :)',
      ],
      imageAlt: 'גיא קירי',
    },

    // ---- About ----
    about: {
      title: 'קצת מידע טכני עליי',
      summary:
        'מפתח תוכנה צעיר עם בסיס איתן ב-C# ובתכנות מונחה-עצמים, לצד ניסיון מעשי בבניית אפליקציות ווב קטנות ופרויקטים בעזרת בינה מלאכותית. אני נהנה להפוך רעיונות לאבות-טיפוס עובדים, להתמצא בקוד לא מוכר, לאתר באגים וללמוד טכנולוגיות חדשות באופן עצמאי.',
      skillsTitle: 'כישורים טכניים',
      educationTitle: 'השכלה',
      experienceTitle: 'ניסיון תעסוקתי',
      militaryTitle: 'שירות צבאי',
      interestsTitle: 'תחביבים מעבר לקוד',
      volunteeringTitle: 'התנדבות',
      present: 'היום',
      skillGroups: {
        programming: 'תכנות',
        web: 'פיתוח ווב',
        tools: 'כלים',
        ai: 'פיתוח בעזרת AI',
      },
      edu: {
        matric: {
          title: 'בגרות מדעית מלאה',
          subjects: [
            'מדעי המחשב, תכנון מערכות ותכנות — 10 יח״ל',
            'מתמטיקה — 5 יח״ל',
            'אנגלית — 5 יח״ל',
          ],
        },
      },
      military: {
        paratroopers: {
          period: '2022–2024 · 2025–היום',
          role: 'תפקידים לוחמתיים ואופרטיביים',
          unit: 'חטיבת הצנחנים, צה״ל',
          desc: 'שירתי בתפקידים לוחמתיים ובתיאום אופרטיבי בסביבות לחץ גבוה, תוך ניהול והעברה של מידע רגיש בזמן אמת. סיימתי שירות חובה בהצטיינות גדודית, וכיום משרת כחייל מילואים פעיל.',
        },
      },
      experience: {
        sushi: {
          role: 'אחראי משמרת וברמן',
          company: 'שיו סושי, אנמרו',
          desc: 'ניהלתי שגרה תפעולית בסביבת שירות בקצב גבוה — שירות, תיאום צוות ופתרון בעיות. הדרכתי עובדים חדשים ושמרתי על סטנדרט שירות לאורך מספר שנים.',
        },
      },
      interests: {
        sport: {
          label: 'ספורט',
          text: 'בעבר טניס תחרותי ברמה ארצית, היום כתחביב; מכון כושר, כדורגל ופאדל.',
        },
        music: {
          label: 'מוזיקה',
          text: 'מנגן על גיטרה, יוקלילה ופסנתר.',
        },
        travel: {
          label: 'טיולים',
          text: 'טיולים בטבע וקמפינג.',
        },
      },
      volunteering: {
        scouts: {
          title: 'תנועת הצופים',
          desc: 'חבר נוער ומדריך שבט.',
        },
        heroes: {
          title: 'לוחמים ללא גבולות — קוסטה ריקה',
          desc: 'התנדבות עם ילדים בשכונות מוחלשות וקידום הסברה למען ישראל.',
        },
      },
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
        chordsil: {
          title: 'ChordsIL',
          description:
            'פלטפורמת אקורדים לשירים ישראליים — חיפוש וצפייה באקורדים, טאבים וסרטוני נגינה לגיטרה ופסנתר, עם שינוי סולם אוטומטי. בפרויקט הזה הייתי אחראי על התכנון הלוגי והעיצובי של המוצר ולא על כתיבת הקוד.',
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
