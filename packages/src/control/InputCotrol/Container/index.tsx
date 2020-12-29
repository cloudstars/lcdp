import React from 'react';
import { OneToOneOutlined } from '@ant-design/icons';
import SelectorControlView, { ContainerViewProps } from './view';
import SelectorControlConfig, { ContainerConfigProps } from './config';
import FormControl, { ControlType } from '@/control/type';
import uniqueId from 'lodash/uniqueId'


/**
 * 日期选择控件
 */
const ContainerControl: FormControl<
  ContainerViewProps,
  ContainerConfigProps,
  any
> = {
  id: uniqueId(),
  name: 'Container',
  icon: <OneToOneOutlined />,
  type: ControlType.INPUT,
  defaultOptions: {
    label: '容器',
    field: 'RQ',
  },
  View: SelectorControlView,
  Config: SelectorControlConfig,
  Render: {} as any,
};

export default ContainerControl;
