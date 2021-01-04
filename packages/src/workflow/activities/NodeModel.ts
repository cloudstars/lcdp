import { ActivityType } from "./Activity";

/**
 * 节点数据模型（第一个节点代表了整个流程）
 */
export default interface NodeModel {
    id: string; // 节点ID
    name: string; // 节点名称
    type: ActivityType; // 节点类型
    activityId: string; // 具体的活动ID
    [option: string]: any;  // 选项
    
    branchs?: this[]; // 分支
    next: this;
    prev: this;
}