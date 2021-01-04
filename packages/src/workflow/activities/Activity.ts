import { ComponentType } from "react";
import NodeModel from "./NodeModel";

// 活动分类
export enum ActivityType {
    START, // 开始
    INPUT, // 填写
    APPROVE, // 审批 
    SERVICE, // 程序
    BRANCH, //分支
    CONDITION // 条件
}


/**
 * 校验错误
 */
export interface ValidationError {
    hasError: boolean;
    title: string;
    message: string;
}

/**
 * 流程活动（用于函数式组件)
 */
export default interface Activity<
    V extends ActivityViewerProps = ActivityViewerProps, 
    C extends ActivityConfigerProps = ActivityConfigerProps
> {
    // 活动的ID（英文）
    id: string;

    // 活动分类
    type: ActivityType;

    // 是否可被选择
    selectable: boolean;

    // 活动的名称（中文）
    name: string;

    // 活动的颜色
    color: string;

    // 默认的选项
    defaultOptions: () => any;

    // 活动的展示器
    CanvasView: ComponentType<V>;

    // 活动的配置器
    ConfigPanel: React.ForwardRefExoticComponent<C & React.RefAttributes<ActivityConfigerRef>>;

    // 活动校验方法
    validate: (NodeModel: NodeModel) => ValidationError;
}


/**
 * 流程分支活动
 */
export interface BranchActivity<
    V extends ActivityViewerProps = ActivityViewerProps,
    C extends ActivityConfigerProps = ActivityConfigerProps
> extends Activity<V, C> {
    conditionActivity: Activity<any, any>
}

/**
 * 活动展示卡属性
 */
export interface ActivityViewerProps {
    // 活动的数据模型  
    dataModel: NodeModel;  
    
    // 活动的数据模型选择
    options: any;
}

/**
 * 活动配置器属性
 */
export interface ActivityConfigerProps {
    // 活动的数据模型选择
    options: any;
    
    /**
     * 数据模型选项的值变更事件
     * @param newOptionsValuesPart 变更的部分数据
     */ 
    onOptionsValuesChange: (newOptionsValuesPart: any) => void;
}

/**
 * 活动配置器的引用
 */
export interface ActivityConfigerRef {
    /**
     * 获取活动的配置选项
     */
    getOptions: () => {};
}