import {Theme} from '@providers/theme/theme.type';
import {AbstractStorage} from '@shared/services/storage';

export const ThemeStorageKey = 'theme';

type ThemeStorageState = {
  mode: Theme;
};

class ThemeStorage extends AbstractStorage<ThemeStorageState> {}

export const themeStorage = new ThemeStorage(localStorage, ThemeStorageKey);
