import { ComponentType } from 'react';

// 可视化控件分类
export enum ControlType {
  CONTAINER, // 容器控件
  INPUT, // 输入控件
  VIEW, // 展示控件
}

/**
 * 可视化控件
 */
export default interface Control<
  V extends ControlViewProps = ControlViewProps,
  C extends ControlConfigProps = ControlConfigProps,
  R extends ControlRenderProps = ControlRenderProps
> {
  // 控件ID
  id: string;

  // 控件名称
  name: string;

  // 控件图标
  icon: React.ReactNode;

  // 控件类型
  type: ControlType;

  // 默认的选项
  defaultOptions: ControlModel['options'];

  // 控件的展示器
  View: ComponentType<V>;

  // 控件的配置器
  Config: ComponentType<C>;

  // 控件的渲染器
  Render: ComponentType<R>;
}

/**
 * 控件展示卡属性
 */
export interface ControlViewProps {
  // 控件的数据模型
  dataModel?: ControlModel;

  // 控件的数据模型选择
  options?: any;
}

/**
 * 控件配置器属性
 */
export interface ControlConfigProps {
  // 控件的数据模型选择
  options: any;

  /**
   * 数据模型选项的值变更事件
   * @param values 变更的部分数据
   */
  onOptionsValuesChange: (values: any) => void;
}

/**
 * 控件渲染器属性
 */
export interface ControlRenderProps {
  // 控件的数据模型选择
  options: any;
}

/***
 * 数据模型
 */
export interface ControlModel {
  id: string;
  name: string;
  options: {
    label: string;
    field: string;
    required?: boolean;
    placeholder?: string;
    [key: string]: any;
  };
  children?: ControlModel[];
}
