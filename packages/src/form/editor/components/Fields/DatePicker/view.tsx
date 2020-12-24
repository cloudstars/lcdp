import React, { FC } from 'react';
import { DatePicker } from 'antd';

interface InputFieldProps {
  value?: string | number;
  config?: any;
  onChange?: (params: any) => void;
}

const { RangePicker } = DatePicker;

const InputField: FC<InputFieldProps> = ({ value, onChange, config }) => {
  const { readOnly, placeholder } = config || {};
  return <RangePicker showTime style={{ width: '100%' }} />;
};

export default InputField;
