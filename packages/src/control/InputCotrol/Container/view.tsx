import React, { FC } from 'react';
import { DatePicker } from 'antd';
import { ControlViewProps } from '@/control/type';

/**
 * 用户控件展示卡属性
 */
export interface ContainerViewProps extends ControlViewProps {
  value?: string | number;
  onChange?: (params: any) => void;
}

const { RangePicker } = DatePicker;

const ContainerView: FC<ContainerViewProps> = ({ options }) => {
  const { readOnly, placeholder } = options || {};
  return <div className='editor-container'></div>;
};

export default ContainerView;
