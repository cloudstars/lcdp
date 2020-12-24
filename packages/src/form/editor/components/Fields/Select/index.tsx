import React from 'react';
import View from './view';
import { OneToOneOutlined } from '@ant-design/icons';
import { FieldComponent } from '../../../type';

const SelectField: FieldComponent = {
  name: '下拉框',
  id: 'SelectField',
  type: 'SelectField',
  fieldType: 'string',
  icon: <OneToOneOutlined />,
  defaultOption: {
    label: '下拉框',
    placholder: '默认',
  },
  Config: {},
  View,
};

export default SelectField;
