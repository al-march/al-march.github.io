import {createContext, ParentProps, useContext} from 'solid-js';
import {createStore} from 'solid-js/store';

const Themes = ['dark', 'light'] as const;
export type Theme = typeof Themes[number];

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

  function setTheme(theme: Theme) {
    setState('mode', theme);
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
