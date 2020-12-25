import Node, { NodeType } from "../Node";
import NodeModel from "../NodeModel";
import InputNodeConfig, { InputNodeConfigProps } from "./InputNodeConfiger";
import InputNodeView, { InputNodeViewProps } from "./InputNodeViewer";

/**
 * 填写节点配置项
 */
export interface InputNodeOptions {
    field2: string;
}


/**
 * 填写节点
 */
const InputNode: Node<
    InputNodeViewProps, 
    InputNodeConfigProps
> = {
    type: NodeType.INPUT,
    id: 'default.Input',
    selectable: true,
    name: '填写',
    color: '#fdfdfd',
    defaultOptions: () => {
        return {
            field2: "xx"
        }
    },
    View: InputNodeView,
    Config: InputNodeConfig,
    validate: (nodeModel: NodeModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default InputNode;