import React from 'react';
import { OneToOneOutlined } from '@ant-design/icons';
import InputView, { InputViewProps } from './view';
import InputConfig, { InputConfigProps } from './config';
import FormControl, { ControlType } from '@/control/type';

/**
 * 日期选择控件
 */
const DatePickerControl: FormControl<InputViewProps, InputConfigProps, any> = {
  id: '2',
  name: 'Input',
  icon: <OneToOneOutlined />,
  type: ControlType.INPUT,
  defaultOptions:{
    label: '文本框',
    field: 'WB',
    required: true,
    placeholder: ''
  },
  View: InputView,
  Config: InputConfig,
  Render: {} as any,
  //   validate: (ControlModel: ControlModel) => {
  //     return {
  //       hasError: false,
  //       title: '',
  //       message: '',
  //     };
  //   },
};

export default DatePickerControl;
