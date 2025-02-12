export interface LanguageOption {
  code: string;
  flag: string;
  label: string;
}

export const flagOptions: LanguageOption[] = [
  { code: 'bg', flag: 'https://flagcdn.com/w320/bg.png', label: 'Bulgaria' },
  { code: 'en', flag: 'https://flagcdn.com/w320/gb.png', label: 'English' },
  { code: 'uk', flag: 'https://flagcdn.com/w320/ua.png', label: 'Ukraine' },
  { code: 'ru', flag: 'https://flagcdn.com/w320/ru.png', label: 'Russian' },
  { code: 'tr', flag: 'https://flagcdn.com/w320/tr.png', label: 'Turkish' },
];
