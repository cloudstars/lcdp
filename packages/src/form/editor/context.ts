import React, { createContext, useContext } from 'react';
import { ControlModel } from '@/control/type';
import FormControl from '@/control/type';
export interface PeddingControl {
  ControlModel: ControlModel;
}

/**
 * 表单编辑器上下文
 */
export interface FormEditorContextType {
  // 是否允许修改
  readonly editable: boolean;
  // 控件映射
  readonly ControlMap: {
    [key: string]: FormControl<any, any, any>;
  };
  // 开始结点数据模型
  ControlModel?: ControlModel;
  // 待追加的控件
  peddingControl?: PeddingControl;

  // 当前选中的控件
  currentControl?: ControlModel;

  // 刷新开始结点的数据模型
  readonly refreshControlModel?: () => void;
  // 设置待追加的控件
  readonly setPeddingControl?: (params?: PeddingControl | undefined) => void;
  // 设置当前选中的控件
  readonly setCurrentControl?: (params?: ControlModel | undefined) => void;
}

// // 表单编辑器上下文初始值
// export const contextInitValue = {
//   editable: true,
//   ControlMap: {
//     [TextControl.id]: TextControl,
//     [SelectorControl.id]: SelectorControl,
//   },
// };

// // 表单编辑器上下文创建
// export const FormEditorContext = createContext<FormEditorContextType>(contextInitValue);

interface IFormState {
  // 表单配置
  config: ControlModel[];
  selectKey?: string;
  onChoose: (params: string) => void;
  onChange: (params: ControlModel[]) => void;
}

const initialValue = {
  config: [{ id: '', name: '', field: '', options: { label: '', field: '' } }],
  onChange: () => {},
  onChoose: () => {},
};

export const FormStateContext = createContext<IFormState>(initialValue);

export function useFormState() {
  const context = useContext(FormStateContext);
  if (context === undefined) {
    throw new Error('useFormState must be used within a FormStateContext');
  }
  return context;
}
