import {createMemo, ParentProps} from 'solid-js';

type Props = {
  name?: string;
  class?: string;
};

export const Icon = (props: ParentProps<Props>) => {
  const name = createMemo(() => props.name || props.children);
  return (
    <span
      class="material-icons"
      classList={{[props.class || '']: !!props.class}}
    >
      {name()}
    </span>
  );
};
