import Node, { NodeOptions, NodeType } from "../Node";
import ConditionNodeConfiger, { ConditionNodeConfigerProps } from "./ConditionNodeConfiger";
import ConditionNodeViewer, { ConditionNodeViewerProps } from "./ConditionNodeViewer";

/**
 * 条件节点配置
 */
export interface ConditionNodeOptions extends NodeOptions {

}


/**
 * 条件节点
 */
const ConditionNode: Node<ConditionNodeOptions, ConditionNodeViewerProps, ConditionNodeConfigerProps> = {
    type: NodeType.CONDITION,
    id: 'default.condition',
    name: '条件',
    color: '#fbfbfb',
    defaultOptions: () => {
        return {
        }
    },
    nodeConfiger: ConditionNodeConfiger,
    nodeViewer: ConditionNodeViewer,
    validate: (node: ConditionNodeOptions) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default ConditionNode;