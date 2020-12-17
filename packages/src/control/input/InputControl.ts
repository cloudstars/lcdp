import { ComponentType } from "react";
import ControlModel from "../ControlModel";


/**
 * 校验错误
 */
export interface ValidationError {
    hasError: boolean;
    title: string;
    message: string;
}

/**
 * 表单控件
 */
export default interface FormControl<
    V extends ControlViewerProps = ControlViewerProps, 
    C extends ControlConfigerProps = ControlConfigerProps, 
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

    // 控件的展示器（用于在表单设计器中间的画片展示）
    ControlViewer: ComponentType<V>;

    // 控件的配置器（用于在表单设计器右侧的配置面板展示）
    ControlConfiger: React.ForwardRefExoticComponent<C & React.RefAttributes<ControlConfigerRef>>;

    // 控件的渲染器（用于在表单运行时展示表单的样式和数据，分只读态和编辑态）
    ControlRender: ComponentType<R>;

    // 控件校验方法
    validate: (ControlModel: ControlModel) => ValidationError;
}

/**
 * 控件展示卡属性
 */
export interface ControlViewerProps {
    // 控件的数据模型  
    dataModel: ControlModel;  
    
    // 控件的数据模型选择
    options: any;
}

/**
 * 控件配置器属性
 */
export interface ControlConfigerProps {
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
export interface ControlConfigerRef {
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
