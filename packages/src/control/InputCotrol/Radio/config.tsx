import React, { FC } from 'react';
import { Input } from 'antd';
import { ControlConfigProps } from '@/control/type';

/**
 * 用户控件展示卡属性
 */
export interface InputConfigProps extends ControlConfigProps {
  value?: string | number;
}

const InputConfig: FC<InputConfigProps> = ({
  value,
  options,
  onOptionsValuesChange,
}) => {
  const { readOnly, placeholder } = options || {};
  return <Input value={value} style={{ width: '100%' }} />;
};

export default InputConfig;
