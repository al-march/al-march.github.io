import {ThemeProvider} from './theme';
import {ParentProps} from 'solid-js';

export const AppProviders = (props: ParentProps) => {
  return <ThemeProvider>{props.children}</ThemeProvider>;
};
