import {AppRouters} from '@routing';
import {Drawer} from '@template/drawer';
import type {Component, ParentProps} from 'solid-js';
import {Transition} from 'solid-transition-group';

const App: Component = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <main
      class="h-screen flex"
      style={{height: isSafari ? '-webkit-fill-available' : '100vh'}}
    >
      <Drawer>
        <RouterTransition>
          <AppRouters />
        </RouterTransition>
      </Drawer>
    </main>
  );
};

export default App;

function RouterTransition(props: ParentProps) {
  return (
    <Transition
      mode="outin"
      onBeforeEnter={el => ((el as HTMLElement).style.opacity = '0')}
      onEnter={(el, done) => {
        const a = el.animate(
          [
            {opacity: 0, transform: 'translateY(100%)'},
            {opacity: 1, transform: 'translateY(0)'},
          ],
          {
            duration: 280,
          }
        );
        return a.finished.then(done);
      }}
      onAfterEnter={el => ((el as HTMLElement).style.opacity = '1')}
      onExit={(el, done) => {
        const a = el.animate(
          [
            {opacity: 1, transform: 'translateY(0)'},
            {opacity: 0, transform: 'translateY(100%)'},
          ],
          {
            duration: 150,
          }
        );
        return a.finished.then(done);
      }}
    >
      {props.children}
    </Transition>
  );
}
