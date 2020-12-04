import Node, { NodeClass, NodeOptions, NodeType } from "../Node";
import StartNodeConfiger, { StartNodeConfigerClass } from "./StartNodeConfiger";
import StartNodeViewer, { StartNodeViewerClass } from "./StartNodeViewer";

/**
 * 条件节点配置
 */
export interface StartNodeOptions extends NodeOptions {

}


/**
 * 条件结点（用于函数式组件）
 */
const StartNode: Node<StartNodeOptions> = {
    type: NodeType.START,
    id: 'default.start',
    name: '开始',
    color: '#f3f3f3',
    defaultOptions: () => {
        return {
        }
    },
    nodeConfiger: StartNodeConfiger,
    nodeViewer: StartNodeViewer,
    validate: (node: StartNodeOptions) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

/**
 * 开始结点（用于类组件）
 */
export class StartNodeClass implements NodeClass<StartNodeOptions> {
    getType() {
       return NodeType.START; 
    }

    getId() {
        return "default.start"
    }

    getName() {
        return "开始";
    }

    getColor() {
        return "#f3f3f3";
    }

    getDefaultOptions() {
        return {}
    }

    getNodeViewer() {
        return StartNodeViewerClass;
    }

    getNodeConfiger() {
        return StartNodeConfigerClass;
    }

    validate(node: StartNodeOptions) {
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
}

export default StartNode;