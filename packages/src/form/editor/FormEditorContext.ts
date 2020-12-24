import { createContext } from "react";
import ControlModel from "../../control/ControlModel";
import FormControl from "../../control/input/InputControl";
import SelectorControl from "../../control/input/selector/SelectorControl";
import TextControl from "../../control/input/text/TextControl";



/**
 * 待追加的控件（将在此控件后添加新的控件）
 */
export interface PeddingControl {
    ControlModel: ControlModel
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
    // 刷新开始结点的数据模型
    readonly refreshControlModel?: () => void;
    // 待追加的控件
    peddingControl?: PeddingControl,
    // 设置待追加的控件
    readonly setPeddingControl?: (peddingControl: PeddingControl | undefined) => void,
    // 当前选中的控件
    currentControl?: ControlModel,
    // 设置当前选中的控件
    readonly setCurrentControl?: (currentControl: ControlModel | undefined) => void
}

// 表单编辑器上下文初始值
export const contextInitValue = {
    editable: true,
    ControlMap: {
        [TextControl.id]: TextControl,
        [SelectorControl.id]: SelectorControl
    }
}

// 表单编辑器上下文创建
export const FormEditorContext = createContext<FormEditorContextType>(contextInitValue);