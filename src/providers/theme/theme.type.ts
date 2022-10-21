const Themes = ['dark', 'light'] as const;
export type Theme = typeof Themes[number];
