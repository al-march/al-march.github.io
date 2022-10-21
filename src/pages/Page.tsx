import {mergeProps, ParentProps} from 'solid-js';

type PageProps = {
  class?: string;
  full?: boolean;
};

type PagePropsDefault = Required<Pick<PageProps, 'class' | 'full'>>;

const defaultProps: PagePropsDefault = {
  class: '',
  full: true,
};

export const Page = (props: ParentProps<PageProps>) => {
  const pr = mergeProps({...defaultProps}, props);

  return (
    <div
      class="flex-1 overflow-hidden overflow-y-scroll"
      classList={{
        [pr.class]: !!pr.class,
        'h-full': pr.full,
      }}
    >
      {props.children}
    </div>
  );
};
