import Control, { ControlConfigerProps, ControlConfigerRef, ControlRenderProps, ControlType, ControlViewerProps } from "../Control";
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
 * 输入控件
 */
export default interface InputControl<
    V extends InputControlViewerProps = InputControlViewerProps, 
    C extends InputControlConfigerProps = InputControlConfigerProps, 
    R extends InputControlRenderProps = InputControlRenderProps
> extends Control<V, C, R> {

    // 控件校验方法
    validate: (ControlModel: ControlModel) => ValidationError;
}


/**
 * 输入控件展示卡属性
 */
export interface InputControlViewerProps extends ControlViewerProps {
   /* 新的属性在这里定义 */
}

/**
 * 输入控件配置器属性
 */
export interface InputControlConfigerProps extends ControlConfigerProps {
    /* 新的属性在这里定义 */
}

/**
 * 输入控件配置器的引用
 */
export interface InputControlConfigerRef extends ControlConfigerRef {
    /* 新的属性在这里定义 */
}


/**
 * 输入控件渲染器属性
 */
export interface InputControlRenderProps extends ControlRenderProps {
    /* 新的属性在这里定义 */
}
