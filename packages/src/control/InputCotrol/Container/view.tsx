import React, { FC } from 'react';
import Sortable from '@/form/editor/components/FormContent/components/Sortable';
import { ControlViewProps } from '@/control/type';

/**
 * 用户控件展示卡属性
 */
export interface ContainerViewProps extends ControlViewProps {}

const ContainerView: FC<ContainerViewProps> = ({ options }) => {
  return (
    <Sortable
      config={options.children}
      options={options}
      className="editor-container"
    />
  );
};

export default ContainerView;
