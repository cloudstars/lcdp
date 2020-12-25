import Node, { NodeType } from "../Node";
import NodeModel from "../NodeModel";
import ConditionNodeConfig, { ConditionNodeConfigProps } from "./ConditionNodeConfiger";
import ConditionNodeView, { ConditionNodeViewProps } from "./ConditionNodeViewer";

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
    ConditionNodeViewProps, 
    ConditionNodeConfigProps
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
    View: ConditionNodeView,
    Config: ConditionNodeConfig,
    validate: (nodeModel: NodeModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default ConditionNode;