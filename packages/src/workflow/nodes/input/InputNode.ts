import Node, { NodeOptions, NodeType } from "../Node";
import InputNodeConfiger, { InputNodeConfigerProps } from "./InputNodeConfiger";
import InputNodeViewer, { InputNodeViewerProps } from "./InputNodeViewer";

/**
 * 填写节点配置
 */
export interface InputNodeOptions extends NodeOptions {

}


/**
 * 填写节点
 */
const InputNode: Node<InputNodeOptions, InputNodeViewerProps, InputNodeConfigerProps> = {
    type: NodeType.INPUT,
    id: 'default.Input',
    name: '填写',
    color: '#fdfdfd',
    defaultOptions: () => {
        return {
        }
    },
    nodeConfiger: InputNodeConfiger,
    nodeViewer: InputNodeViewer,
    validate: (node: InputNodeOptions) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default InputNode;