import {useTheme} from '@providers/theme';
import {Icon} from '@shared/components/icon';
import {Swap} from '@shared/components/swap';
import {BackdropClick, Button, Row} from '@solsy/ui';
import {createSignal, onCleanup, onMount, Show} from 'solid-js';
import {createStore} from 'solid-js/store';
import {Transition} from 'solid-transition-group';

export const Drawer = () => {
  const theme = useTheme();
  const [state, setState] = createStore({
    open: false,
  });

  function toggleMenu() {
    setState('open', !state.open);
  }

  function toggleTheme() {
    if (theme.state.mode === 'dark') {
      theme.setTheme('light');
    } else {
      theme.setTheme('dark');
    }
  }

  return (
    <nav class="shadow-lg h-full relative z-10">
      <Transition name="drawer-menu-slide">
        <Show when={state.open} keyed>
          <div class="drawer-menu">
            <DrawerMenu onClose={toggleMenu} onBackdropClick={toggleMenu} />
          </div>
        </Show>
      </Transition>

      <Row orientation="col" class="gap-2 z-10 bg-base-300 p-2 h-full">
        <Button color="ghost" square>
          <Icon name="home" />
        </Button>

        <Button color="ghost" square onClick={toggleMenu}>
          <Swap isOn={state.open} rotate>
            <Swap.Off>
              <Icon name="menu" />
            </Swap.Off>
            <Swap.On>
              <Icon name="close" />
            </Swap.On>
          </Swap>
        </Button>

        <div class="flex-1" />

        <Button color="ghost" square onClick={toggleTheme}>
          <Swap isOn={theme.state.mode === 'dark'} rotate>
            <Swap.Off>
              <Icon name="dark_mode" />
            </Swap.Off>
            <Swap.On>
              <Icon name="light_mode" />
            </Swap.On>
          </Swap>
        </Button>
      </Row>
    </nav>
  );
};

type MenuProps = {
  onClose?: () => void;
  onBackdropClick?: () => void;
};

export const DrawerMenu = (props: MenuProps) => {
  const [ref, setRef] = createSignal<HTMLElement>();
  let prevFocused: Element | undefined;

  onMount(() => {
    prevFocused = document.activeElement;
    focus(ref());
  });

  onCleanup(() => {
    if (prevFocused instanceof HTMLElement) {
      prevFocused.focus();
    }
  });

  function focus(el?: HTMLElement) {
    el?.focus();
  }

  function onKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case 'Escape':
        props.onClose?.();
        break;
    }
  }

  return (
    <BackdropClick onBackdropClick={props.onBackdropClick} class="h-full">
      <menu
        tabIndex={0}
        class="p-0 m-0 h-full outline-none"
        onKeyDown={onKeyDown}
      >
        <header class="flex justify-between items-center px-4 pt-2">
          <h5 class="font-bold">Menu</h5>
          <Button
            ref={setRef}
            square
            color="ghost"
            size="sm"
            onClick={props.onClose}
          >
            <Icon name="close" />
          </Button>
        </header>

        <ul class="menu w-56 p-2 rounded-box">
          <li class="menu-title">
            <span>Category</span>
          </li>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li class="menu-title">
            <span>Category</span>
          </li>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </menu>
    </BackdropClick>
  );
};
