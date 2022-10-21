/* @refresh reload */
import App from './App';
import './index.css';
import {AppProviders} from '@providers';
import {Router} from '@solidjs/router';
import {render} from 'solid-js/web';

render(
  () => (
    <Router>
      <AppProviders>
        <App />
      </AppProviders>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
