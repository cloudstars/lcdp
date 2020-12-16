// 可视化控件分类
export enum ControlType {
    LAYOUT, // 布局控件
    CONTAINER, // 容器控件
    FORM, // 表单控件
}

/**
 * 可视化控件
 */
export default interface Control {

    // 控件ID
    id: string;

    // 控件类型
    type: ControlType;
}