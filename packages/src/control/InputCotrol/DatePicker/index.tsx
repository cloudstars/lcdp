import React from 'react';
import { OneToOneOutlined } from '@ant-design/icons';
import SelectorControlView, { DatePickerViewProps } from './view';
import SelectorControlConfig, { DatePickerConfigProps } from './config';
import FormControl, { ControlType } from '@/control/type';
import uniqueId from 'lodash/uniqueId'

/**
 * 日期选择控件
 */
const DatePickerControl: FormControl<
  DatePickerViewProps,
  DatePickerConfigProps,
  any
> = {
  id: uniqueId(),
  name: 'DatePicker',
  icon: <OneToOneOutlined />,
  type: ControlType.INPUT,
  defaultOptions:{
    label: '日期',
    field: 'RQ',
    required: true,
    placeholder: ''
  },
  View: SelectorControlView,
  Config: SelectorControlConfig,
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
