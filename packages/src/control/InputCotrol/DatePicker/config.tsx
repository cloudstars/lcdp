import React, { FC } from 'react';
import { DatePicker } from 'antd';
import { ControlConfigProps } from '@/control/type';

/**
 * 用户控件展示卡属性
 */
export interface DatePickerConfigProps extends ControlConfigProps {
  value?: string | number;
  onChange?: (params: any) => void;
}

const { RangePicker } = DatePicker;

const DatePickerConfig: FC<DatePickerConfigProps> = ({
  value,
  onChange,
  options,
}) => {
  const { readOnly, placeholder } = options || {};
  return <RangePicker showTime style={{ width: '100%' }} />;
};

export default DatePickerConfig;
