import React from 'react';
import View from './view';
import { OneToOneOutlined } from '@ant-design/icons';
import { FieldComponent } from '../../../type';

const RadioField: FieldComponent = {
  name: '单选框',
  id: 'RadioField',
  fieldType: 'string',
  type: 'RadioField',
  icon: <OneToOneOutlined />,
  defaultOption: {
    label: '单选框',
    placholder: '默认',
  },
  Config: {},
  View,
};

export default RadioField;
