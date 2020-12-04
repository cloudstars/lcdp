import Node, { NodeOptions, NodeType } from "../Node";
import InputNodeConfiger from "./InputNodeConfiger";
import InputNodeViewer from "./InputNodeViewer";

/**
 * 填写节点配置
 */
export interface InputNodeOptions extends NodeOptions {

}


/**
 * 填写节点
 */
const InputNode: Node<InputNodeOptions> = {
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