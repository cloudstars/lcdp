import Node, { NodeType } from "../Node";
import NodeModel from "../NodeModel";
import InputNodeConfiger, { InputNodeConfigerProps } from "./InputNodeConfiger";
import InputNodeViewer, { InputNodeViewerProps } from "./InputNodeViewer";

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
    InputNodeViewerProps, 
    InputNodeConfigerProps
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
    CanvasView: InputNodeViewer,
    ConfigPanel: InputNodeConfiger,
    validate: (nodeModel: NodeModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default InputNode;