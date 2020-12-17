// 可视化控件分类
export enum ControlType {
    CONTAINER, // 容器控件
    INPUT, // 输入控件
    VIEW, // 展示控件
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