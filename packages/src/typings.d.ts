declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare module 'react-sortablejs' {
  import React from 'react';
  import Sortable from 'sortablejs';
  export interface SortableProps<ItemData, ListProps> {
    tag?: string | React.ComponentType<ListProps>;
    options?: Sortable.Options;
    style?: React.CSSProperties;
    className?: string;
    onChange?: (
      list: ItemData[],
      sortable: Sortable,
      evt: Sortable.SortableEvent,
    ) => void;
  }

  export default class SortableComponent<
    ItemData,
    ListProps
  > extends React.Component<SortableProps<ItemData, ListProps>> {}
}
