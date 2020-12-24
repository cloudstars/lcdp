import React from 'react';
import View from './view';
import { OneToOneOutlined } from '@ant-design/icons';
import { FieldComponent } from '../../../type';

const InputField: FieldComponent = {
  id: 10,
  name: '文本框',
  icon: <OneToOneOutlined />,
  type: 'InputField',
  fieldType: 'string',
  View,
  Config: {},
  defaultOption: {
    label: '文本框',
    placholder: '默认',
  },
};

export default InputField;
