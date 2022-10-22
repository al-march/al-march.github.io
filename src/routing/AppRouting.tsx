import {Paths} from './paths';
import {Route, Routes} from '@solidjs/router';
import {For} from 'solid-js';

export const AppRouters = () => {
  return (
    <Routes>
      <For each={Object.values(Paths)}>
        {route => (
          <Route
            path={route.path}
            component={route.component}
            data={route.data}
          />
        )}
      </For>
      <Route path="/*all" element={<div>Page not found :(</div>} />
    </Routes>
  );
};
