import React from 'react';
import { OneToOneOutlined } from '@ant-design/icons';
import InputView, { InputViewProps } from './view';
import InputConfig, { InputConfigProps } from './config';
import FormControl, { ControlType } from '@/control/type';
import { v1 as uuid } from 'uuid';

/**
 * 日期选择控件
 */
const DatePickerControl: FormControl<InputViewProps, InputConfigProps, any> = {
  id: uuid(),
  name: 'Radio',
  icon: <OneToOneOutlined />,
  type: ControlType.INPUT,
  defaultOptions:{
    label: '单选框',
    field: 'DX',
    required: true,
    placeholder: ''
  },
  View: InputView,
  Config: InputConfig,
  Render: {} as any,

};

export default DatePickerControl;
