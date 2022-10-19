import {AppRouters} from '@routing';
import {Drawer} from '@template/drawer';
import type {Component} from 'solid-js';

const App: Component = () => {
  return (
    <main class="relative mx-auto h-screen flex">
      <div class="flex-0">
        <Drawer />
      </div>
      <div class="flex-1 h-full overflow-y-scroll">
        <AppRouters />
      </div>
    </main>
  );
};

export default App;
