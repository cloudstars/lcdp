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
  name: 'Select',
  icon: <OneToOneOutlined />,
  type: ControlType.INPUT,
  defaultOptions: {
    label: '下拉框',
    field: 'XLK',
    required: true,
    placeholder: '',
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
