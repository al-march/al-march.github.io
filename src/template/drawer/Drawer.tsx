import {useTheme} from '@providers/theme';
import {Sections} from '@routing/sections';
import {Icon} from '@shared/components/icon';
import {Swap} from '@shared/components/swap';
import {NavLink} from '@solidjs/router';
import {BackdropClick, Button, DaisySize, Row} from '@solsy/ui';
import {debounceTime, fromEvent, map, startWith} from 'rxjs';
import {createSignal, onCleanup, onMount, ParentProps, Show} from 'solid-js';
import {createStore} from 'solid-js/store';
import {Transition} from 'solid-transition-group';

const widthObserver = fromEvent(window, 'resize').pipe(
  startWith(() => window.outerWidth),
  debounceTime(40),
  map(() => window.outerWidth)
);

type DrawerState = {
  open: boolean;
  size: DaisySize;
  menuRef?: HTMLElement;
};

export const Drawer = (props: ParentProps) => {
  const theme = useTheme();
  const [state, setState] = createStore<DrawerState>({
    open: false,
    size: computeSize(window.outerWidth),
  });

  const [menuWidth, setMenuWidth] = createSignal(0);

  onMount(() => {
    widthObserver.subscribe(setSize);
  });

  function setSize(width: number) {
    const size = computeSize(width);
    setState('size', size);
  }

  function computeSize(width: number): DaisySize {
    if (width >= 500) {
      return 'md';
    } else {
      return 'sm';
    }
  }

  function computeMenuWidth() {
    const menu = state.menuRef;
    if (menu) {
      return menu.scrollWidth;
    } else {
      return 0;
    }
  }

  function toggleMenu() {
    setState('open', !state.open);
    setTimeout(() => {
      setMenuWidth(computeMenuWidth());
    });
  }

  function toggleTheme() {
    theme.toggle();
  }

  function setMenuRef(el: HTMLElement) {
    setState('menuRef', el);
  }

  return (
    <div class="relative flex-1 flex overflow-hidden">
      <nav class="shadow-lg h-full relative z-10">
        <Transition name="drawer-menu-slide">
          <Show when={state.open} keyed>
            <div class="drawer-menu">
              <DrawerMenu
                onClose={toggleMenu}
                onBackdropClick={toggleMenu}
                ref={setMenuRef}
              />
            </div>
          </Show>
        </Transition>

        <Row orientation="col" class="gap-4 z-10 bg-base-300 p-2 h-full">
          <Button color="ghost" square size={state.size}>
            <Icon name="home" />
          </Button>

          <Button color="ghost" square onClick={toggleMenu} size={state.size}>
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

          <Button color="ghost" square onClick={toggleTheme} size={state.size}>
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

      <div
        class="flex-1 relative bg-neutral"
        classList={{'bg-neutral': state.open}}
      >
        <div
          class="flex-1 h-full overflow-y-scroll drawer-menu-slide-exit-active"
          style={{
            transform: `translateX(${state.open ? menuWidth() + 'px' : '0'})`,
          }}
        >
          <Transition name="fade" appear>
            <Show when={state.open} keyed>
              <div class="absolute left-0 right-0 top-0 bottom-0 bg-neutral/60 z-10" />
            </Show>
          </Transition>

          {props.children}
        </div>
      </div>
    </div>
  );
};

type MenuProps = {
  ref?: (el: HTMLElement) => void;
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
        class="p-0 m-0 h-full outline-none overflow-y-scroll"
        onKeyDown={onKeyDown}
        ref={props.ref}
      >
        <header class="flex justify-between items-center px-4 pt-2">
          <span class="flex-1" />
          <Button
            ref={setRef}
            square
            color="ghost"
            size="sm"
            onClick={props.onClose}
          >
            <Icon name="west" />
          </Button>
        </header>

        <ul class="menu menu-compact w-56 p-2 rounded-box">
          <li class="menu-title">
            <span>Routes</span>
          </li>

          <li>
            <NavLink
              href={Sections.HOME.path.toString()}
              onClick={props.onClose}
              end
            >
              <span class="capitalize">Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              href={Sections.RESUME.path.toString()}
              onClick={props.onClose}
              end
            >
              <span class="capitalize">Resume</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              href={Sections.CONTACT.path.toString()}
              onClick={props.onClose}
              end
            >
              <span class="capitalize">Contacts</span>
            </NavLink>
          </li>
        </ul>
      </menu>
    </BackdropClick>
  );
};
