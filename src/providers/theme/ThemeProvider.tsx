import {themeStorage} from '@providers/theme/ThemeStorage';
import {Theme} from '@providers/theme/theme.type';
import {createContext, onMount, ParentProps, useContext} from 'solid-js';
import {createStore} from 'solid-js/store';

export type ThemeProviderState = {
  mode: Theme;
};

type ThemeProviderCtx = {
  state: ThemeProviderState;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderCtx = createContext<ThemeProviderCtx>();

export const useTheme = () => {
  const ctx = useContext(ThemeProviderCtx);
  if (ctx) {
    return ctx;
  }
  throw new Error('no provider for Theme context');
};

export const ThemeProvider = (props: ParentProps) => {
  const [state, setState] = createStore<ThemeProviderState>({
    mode: 'dark',
  });

  onMount(() => {
    const theme = themeStorage.get('mode');
    if (theme) {
      setTheme(theme);
    }
  });

  function setTheme(theme: Theme) {
    setState('mode', theme);
    themeStorage.set('mode', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <ThemeProviderCtx.Provider
      value={{
        state,
        setTheme,
      }}
    >
      {props.children}
    </ThemeProviderCtx.Provider>
  );
};
