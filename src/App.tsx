import {AppRouters} from '@routing';
import type {Component} from 'solid-js';

const App: Component = () => {
  return (
    <main class="relative max-w-2xl mx-auto h-screen flex flex-col">
      <div class="flex-1 h-full overflow-y-scroll">
        <AppRouters />
      </div>
    </main>
  );
};

export default App;
