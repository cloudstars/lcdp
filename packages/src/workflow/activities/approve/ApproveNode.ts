import Node, { NodeType } from "../Node";
import NodeModel from "../NodeModel";
import ApproveNodeConfiger, { ApproveNodeConfigerProps } from "./ApproveNodeConfiger";
import ApproveNodeViewer, { ApproveNodeViewerProps } from "./ApproveNodeViewer";

/**
 * 审批节点配置项
 */
export interface ApproveNodeOptions {
    field1: string;
}


/**
 * 审批节点
 */
const ApproveNode: Node<
    ApproveNodeViewerProps, 
    ApproveNodeConfigerProps
> = {
    type: NodeType.APPROVE,
    id: 'default.Approve',
    selectable: true,
    name: '审批',
    color: '#f1f1f1',
    defaultOptions: () => {
        return {
            field1: 'xxx'
        }
    },
    CanvasView: ApproveNodeViewer,
    ConfigPanel: ApproveNodeConfiger,
    validate: (nodeModel: NodeModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default ApproveNode;