import Node, { NodeType } from "../Node";
import NodeModel from "../NodeModel";
import ConditionNodeConfiger, { ConditionNodeConfigerProps } from "./ConditionNodeConfiger";
import ConditionNodeViewer, { ConditionNodeViewerProps } from "./ConditionNodeViewer";

/**
 * 条件节点配置项
 */
export interface ConditionNodeOptions {
    fieldc: string;
}


/**
 * 条件节点
 */
const ConditionNode: Node<
    ConditionNodeViewerProps, 
    ConditionNodeConfigerProps
> = {
    type: NodeType.CONDITION,
    id: 'default.condition',
    selectable: false,
    name: '条件',
    color: '#fbfbfb',
    defaultOptions: () => {
        return {
            fieldc: "xxx"
        }
    },
    Viewer: ConditionNodeViewer,
    Configer: ConditionNodeConfiger,
    validate: (nodeModel: NodeModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default ConditionNode;