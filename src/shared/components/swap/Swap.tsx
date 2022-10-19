import {createEffect, createSignal, ParentProps} from 'solid-js';

export type SwapProps = {
  isOn?: boolean;
  class?: string;
  rotate?: boolean;
};

const SwapBase = (props: ParentProps<SwapProps>) => {
  const [isOn, setIsOn] = createSignal(props.isOn);

  createEffect(() => {
    setIsOn(props.isOn);
  });

  function toggle() {
    setIsOn(!isOn());
  }

  return (
    <div
      class="swap"
      classList={{
        [props.class || '']: !!props.class,
        'swap-rotate': props.rotate,
        'swap-active': isOn(),
      }}
      onClick={toggle}
    >
      {props.children}
    </div>
  );
};

const SwapOn = (props: ParentProps<{class?: string}>) => {
  return (
    <div
      class="inline-flex swap-on"
      classList={{[props.class || '']: !!props.class}}
    >
      {props.children}
    </div>
  );
};

const SwapOff = (props: ParentProps<{class?: string}>) => {
  return (
    <div
      class="inline-flex swap-off"
      classList={{[props.class || '']: !!props.class}}
    >
      {props.children}
    </div>
  );
};

export const Swap = Object.assign(SwapBase, {
  On: SwapOn,
  Off: SwapOff,
});
