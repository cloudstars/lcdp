import { ComponentType } from 'react';
import { ControlType } from '../type';
import { ControlModel } from '@/control/type';

/**
 * 校验错误
 */
export interface ValidationError {
  hasError: boolean;
  title: string;
  message: string;
}

/**
 * 容器控件
 */
export default interface ContainerControl<
  V extends ControlViewProps = ControlViewProps,
  C extends ControlConfigProps = ControlConfigProps,
  R extends ControlRenderProps = ControlRenderProps
> {
  // 控件的ID（英文）
  id: string;

  // 控件的名称（中文）
  name: string;

  // 控件的图标
  icon: string;

  // 默认的选项
  defaultOptions: () => any;

  // 控件的展示器（用于在容器设计器中间的画片展示）
  ControlView: ComponentType<V>;

  // 控件的配置器（用于在容器设计器右侧的配置面板展示）
  ControlConfig: React.ForwardRefExoticComponent<
    C & React.RefAttributes<ControlConfigRef>
  >;

  // 控件的渲染器（用于在容器运行时展示容器的样式和数据，分只读态和编辑态）
  ControlRender: ComponentType<R>;

  // 控件校验方法
  validate: (ControlModel: ControlModel) => ValidationError;

  // 支持的子类型
  supportSubTypes: ControlType[];
}

/**
 * 控件展示卡属性
 */
export interface ControlViewProps {
  // 控件的数据模型
  dataModel: ControlModel;

  // 控件的数据模型选择
  options: any;
}

/**
 * 控件配置器属性
 */
export interface ControlConfigProps {
  // 控件的数据模型选择
  options: any;

  /**
   * 数据模型选项的值变更事件
   * @param newOptionsValuesPart 变更的部分数据
   */
  onOptionsValuesChange: (newOptionsValuesPart: any) => void;
}

/**
 * 控件配置器的引用
 */
export interface ControlConfigRef {
  /**
   * 获取控件的配置选项
   */
  getOptions: () => any;
}

/**
 * 控件渲染器属性
 */
export interface ControlRenderProps {
  // 控件的数据模型选择
  options: any;

  // 控件的值
  value: any;

  // 是否只读
  readonly: boolean;
}
