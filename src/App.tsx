import {AppRouters} from '@routing';
import {Drawer} from '@template/drawer';
import type {Component} from 'solid-js';

const App: Component = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <main
      class="h-screen flex"
      style={{height: isSafari ? '-webkit-fill-available' : '100vh'}}
    >
      <Drawer>
        <AppRouters />
      </Drawer>
    </main>
  );
};

export default App;
