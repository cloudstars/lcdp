import React from 'react';
import View from './view';
import { OneToOneOutlined } from '@ant-design/icons';
import { FieldComponent } from '../../../type';

const DatePickerField: FieldComponent = {
  id: 11,
  name: '日期',
  icon: <OneToOneOutlined />,
  type: 'DatePickerField',
  fieldType: 'string',
  View,
  Config: {},
  defaultOption: {
    label: '日期',
    placholder: '默认',
  },
};

export default DatePickerField;
