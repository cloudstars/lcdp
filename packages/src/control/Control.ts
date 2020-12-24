import { ComponentType } from "react";
import ControlModel from "./ControlModel";

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
    V extends ControlViewerProps = ControlViewerProps, 
    C extends ControlConfigerProps = ControlConfigerProps,
    R extends ControlRenderProps = ControlRenderProps,
> {

    // 控件ID
    id: string;

    // 控件名称
    name: string;

    // 控件图标
    icon: string;

    // 控件类型
    type: ControlType;
    
    // 默认的选项
    defaultOptions: () => any;

    // 控件的展示器
    Viewer: ComponentType<V>;

    // 控件的配置器
    Configer: React.ForwardRefExoticComponent<C & React.RefAttributes<ControlConfigerRef>>;

    // 控件的渲染器
    Render: ComponentType<R>;


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
}
