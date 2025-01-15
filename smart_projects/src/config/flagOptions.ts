export interface LanguageOption {
  code: string;
  flag: string;
  label: string;
}

export const flagOptions: LanguageOption[] = [
  { code: 'bg', flag: 'https://flagcdn.com/w320/bg.png', label: 'Bulgarian' },
  { code: 'en', flag: 'https://flagcdn.com/w320/us.png', label: 'English' },
];
