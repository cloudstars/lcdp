import React, { FC } from 'react';
import { Input } from 'antd';
import { ControlViewProps } from '@/control/type';

/**
 * 用户控件展示卡属性
 */
export interface InputViewProps extends ControlViewProps {
  value?: string | number;
  onChange?: (params: any) => void;
}

const InputView: FC<InputViewProps> = ({ value, onChange, options }) => {
  const { readOnly, placeholder } = options || {};
  return <Input value={value} style={{ width: '100%' }} />;
};

export default InputView;
