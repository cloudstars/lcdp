import React, { FC } from 'react';
import { Radio } from 'antd';

interface RadioFieldProps {
  value?: string | number;
  config?: any;
  onChange?: (params: any) => void;
}

const RadioField: FC<RadioFieldProps> = ({ value, onChange, config }) => {
  const { readOnly, placeholder } = config || {};
  return (
    <Radio.Group style={{ width: '100%' }} onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};

export default RadioField;
