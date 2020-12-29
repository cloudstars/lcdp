import React, { FC } from 'react';
import Sortable from '@/form/editor/components/FormContent/components/Sortable';
import { ControlViewProps } from '@/control/type';

/**
 * 用户控件展示卡属性
 */
export interface ContainerViewProps extends ControlViewProps {
  value?: string | number;
  onChange?: (params: any) => void;
}

const ContainerView: FC<ContainerViewProps> = ({ options }) => {
  const { readOnly, placeholder } = options || {};
  return <div className="editor-container"></div>;
};

export default ContainerView;
