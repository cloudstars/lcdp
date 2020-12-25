import React, { FC } from 'react';
import { DatePicker } from 'antd';
import { ControlViewProps } from '@/control/type';

/**
 * 用户控件展示卡属性
 */
export interface DatePickerViewProps extends ControlViewProps {
  value?: string | number;
  onChange?: (params: any) => void;
}

const { RangePicker } = DatePicker;

const DatePickerView: FC<DatePickerViewProps> = ({
  value,
  onChange,
  options,
}) => {
  const { readOnly, placeholder } = options || {};
  return <RangePicker showTime style={{ width: '100%' }} />;
};

export default DatePickerView;
