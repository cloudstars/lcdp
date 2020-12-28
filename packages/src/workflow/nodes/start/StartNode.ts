import Node, { NodeType } from "../Node";
import NodeModel from "../NodeModel";
import StartNodeConfiger, { StartNodeConfigerProps } from "./StartNodeConfiger";
import StartNodeViewer, { StartNodeViewerProps } from "./StartNodeViewer";

/**
 * 开始节点配置项
 */
export interface StartNodeOptions {
    startForm: object
}

/**
 * 开始结点
 */
const StartNode: Node<
    StartNodeViewerProps, 
    StartNodeConfigerProps
> = {
    type: NodeType.START,
    id: 'default.start',
    selectable: false,
    name: '开始',
    color: '#f3f3f3',
    defaultOptions: () => {
        return {
            startForm: {},
            field1: 'xxx',
            fiedl2: 'yyy'
        }
    },
    CanvasView: StartNodeViewer,
    ConfigPanel: StartNodeConfiger,
    validate: (nodeModel: NodeModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default StartNode;