// src/i18n/utils.ts
import fr from './fr.json';
import en from './en.json';

export type Lang = 'fr' | 'en';

// ── Interfaces des traductions ───────────────────────────────────

export interface TerminalLine {
  type: 'cmd' | 'output' | 'ok' | 'spacer';
  text?: string;
}

export interface InfoItem {
  label: string;
  value: string;
}

export interface InterestItem {
  icon: string;
  title: string;
  desc: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  terminal: {
    label: string;
    lines: TerminalLine[];
    scrollHint: string;
  };
  nav: {
    about: string;
    skills: string;
    education: string;
    projects: string;
    contact: string;
  };
  about: {
    eyebrow: string;
    title: string;
    titleEm: string;
    p1: string;
    p2: string;
    infoLabel: string;
    info: InfoItem[];
    interestsLabel: string;
    interests: InterestItem[];
  };
  skills: {
    eyebrow: string;
    title: string;
    titleEm: string;
    filterAll: string;
  };
  education: {
    eyebrow: string;
    title: string;
    titleEm: string;
    badgeExp: string;
    badgeEdu: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    titleEm: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    titleEm: string;
    subtitle: string;
    email: string;
    cv: string;
    madeWith: string;
  };
}

// ── Helpers ──────────────────────────────────────────────────────

const translations: Record<Lang, Translations> = {
  fr: fr as Translations,
  en: en as Translations,
};

export function getLang(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return lang === 'en' ? 'en' : 'fr';
}

export function useTranslations(lang: Lang): Translations {
  return translations[lang];
}

export function getAlternateLang(url: URL): string {
  const lang = getLang(url);
  const target = lang === 'fr' ? 'en' : 'fr';
  return url.pathname.replace(`/${lang}`, `/${target}`);
}