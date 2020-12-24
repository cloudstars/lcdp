import React, { FC } from 'react';
import { Input } from 'antd';

interface InputFieldProps {
  value?: string | number;
  config?: any;
  onChange?: (params: any) => void;
}

const InputField: FC<InputFieldProps> = ({ value, onChange, config }) => {
  const { readOnly, placeholder } = config || {};
  return (
    <Input style={{ width: '100%' }} value={value} placeholder={placeholder} />
  );
};

export default InputField;
