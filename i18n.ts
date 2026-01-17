
export type Language = 'de' | 'en';

export const translations = {
  de: {
    nav: {
      about: 'Über mich',
      benefits: 'Vorteile',
      experience: 'Stationen',
      contact: 'Kontakt',
    },
    hero: {
      badge: 'Software & AI Architect',
      title: 'Digitale Exzellenz durch Software & KI',
      subtitle: 'Ich entwickle maßgeschneiderte Softwarelösungen und integriere modernste KI-Systeme für den Mittelstand – pragmatisch, sicher und wertschöpfend.',
      cta: 'Projekt anfragen',
      scroll: 'Mehr erfahren',
      location: 'Standort',
    },
    pitch: {
      title: 'Mein Fokus',
      text: 'KI-Transformation & Premium Software. Ich schlage die Brücke zwischen komplexer KI-Architektur und marktfähigen Software-Produkten. Gemeinsam mit meiner Agentur 21vision realisiere ich Projekte, die technologisch an der Spitze stehen.',
    },
    benefits: {
      title: 'Ihre Vorteile',
      items: [
        {
          title: '90-Tage Fokus',
          desc: 'Spürbare, messbare Ergebnisse in unter 3 Monaten statt endloser Konzeptionsphasen.',
          icon: 'timer'
        },
        {
          title: 'Agentur-Backup',
          desc: 'Sicherheit durch das Team der 21vision – gebackupt durch eine erfahrene Agentur.',
          icon: 'shield'
        },
        {
          title: 'KI-Expertise',
          desc: 'Direkte Implementierung modernster LLM-Technologien und RAG-Systeme.',
          icon: 'cpu'
        },
        {
          title: 'Fullstack-Sorglos',
          desc: 'Von der ersten Skizze über das App-Store-Management bis zum laufenden Cloud-Betrieb.',
          icon: 'rocket'
        }
      ],
    },
    experience: {
      title: 'Berufliche Stationen',
      items: [
        { company: 'Geomobile GmbH', role: 'Fullstack App & Web Engineer' },
        { company: 'Materna Information & Communications SE', role: 'App Developer' },
        { company: 'GLS Germany GmbH & Co. OHG', role: 'Software Engineer Mobile & Web' },
        { company: 'BarmeniaGothaer', role: 'Digital Solutions (App & Web)' },
        { company: '21vision GmbH', role: 'Projektleiter & AI-Architekt', isFounder: true, url: 'https://21-vision.de' },
      ],
    },
    skills: {
      title: 'Expertise',
      categories: [
        { name: 'Konzeption & Projektleitung', level: 100 },
        { name: 'App Entwicklung & App Store Management', level: 90 },
        { name: 'Web Entwicklung', level: 90 },
        { name: 'AI Architecture & Beratung', level: 90 },
        { name: 'AI & Machine Learning', level: 80 },
      ],
      tags: ['PHP & Laravel', 'Flutter & Dart', 'React & Tailwind', 'Python (AI/ML)', 'LLM Orchestration', 'Prompt Engineering', 'RAG Systems', 'Cloud Architecture'],
    },
    contact: {
      title: 'Starten wir Ihr Projekt?',
      subtitle: 'Lassen Sie uns gemeinsam besprechen, wie Software und KI Ihr Business transformieren.',
      button: 'E-Mail schreiben',
      email: 'benjamin@21-vision.de'
    },
    legal: {
      impressum: 'Impressum',
      address: 'Anbieter des Online-Angebots\nBenjamin Dietz\nVon-der-Goltz-Straße 14\n42329 Wuppertal\nDeutschland',
      disclaimer: 'Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.'
    }
  },
  en: {
    nav: {
      about: 'About',
      benefits: 'Benefits',
      experience: 'Stations',
      contact: 'Contact',
    },
    hero: {
      badge: 'Software & AI Architect',
      title: 'Digital Excellence through Software & AI',
      subtitle: 'I develop tailored software solutions and integrate cutting-edge AI systems for SMBs – pragmatic, secure, and value-adding.',
      cta: 'Inquire Project',
      scroll: 'Learn more',
      location: 'Located in',
    },
    pitch: {
      title: 'My Focus',
      text: 'AI Transformation & Premium Software. I bridge the gap between complex AI architecture and market-ready software products. Together with my agency 21vision, I realize projects at the technological peak.',
    },
    benefits: {
      title: 'Your Benefits',
      items: [
        {
          title: '90-Day Focus',
          desc: 'Tangible, measurable results in under 3 months instead of endless conception phases.',
          icon: 'timer'
        },
        {
          title: 'Agency Backup',
          desc: 'Security through the 21vision team – backed by an experienced agency.',
          icon: 'shield'
        },
        {
          title: 'AI Expertise',
          desc: 'Direct implementation of state-of-the-art LLM technologies and RAG systems.',
          icon: 'cpu'
        },
        {
          title: 'Fullstack Worry-Free',
          desc: 'From initial sketch to App Store management to ongoing cloud operations.',
          icon: 'rocket'
        }
      ],
    },
    experience: {
      title: 'Career Stations',
      items: [
        { company: 'Geomobile GmbH', role: 'Fullstack App & Web Engineer' },
        { company: 'Materna Information & Communications SE', role: 'App Developer' },
        { company: 'GLS Germany GmbH & Co. OHG', role: 'Software Engineer Mobile & Web' },
        { company: 'BarmeniaGothaer', role: 'Digital Solutions (App & Web)' },
        { company: '21vision GmbH', role: 'Project Lead & AI Architect', isFounder: true, url: 'https://21-vision.de' },
      ],
    },
    skills: {
      title: 'Expertise',
      categories: [
        { name: 'Conception & Project Lead', level: 100 },
        { name: 'App Development & App Store Management', level: 90 },
        { name: 'Web Development', level: 90 },
        { name: 'AI Architecture & Consulting', level: 90 },
        { name: 'AI & Machine Learning', level: 80 },
      ],
      tags: ['PHP & Laravel', 'Flutter & Dart', 'React & Tailwind', 'Python (AI/ML)', 'LLM Orchestration', 'Prompt Engineering', 'RAG Systems', 'Cloud Architecture'],
    },
    contact: {
      title: 'Ready to start?',
      subtitle: 'Let\'s discuss how software and AI can transform your business.',
      button: 'Send Email',
      email: 'benjamin@21-vision.de'
    },
    legal: {
      impressum: 'Legal Notice',
      address: 'Provider of this online offering\nBenjamin Dietz\nVon-der-Goltz-Straße 14\n42329 Wuppertal\nGermany',
      disclaimer: 'Disclaimer: Despite careful content control, I assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.'
    }
  }
};
