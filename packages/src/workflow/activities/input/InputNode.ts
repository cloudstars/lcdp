import Activity, { ActivityType } from "../Activity";
import NodeModel from "../NodeModel";
import InputNodeConfiger, { InputActivityConfigerProps } from "./InputNodeConfiger";
import InputNodeViewer, { InputActivityViewerProps } from "./InputNodeViewer";

/**
 * 填写节点配置项
 */
export interface InputAcivityOptions {
    field2: string;
}


/**
 * 填写节点
 */
const InputNode: Activity<
    InputActivityViewerProps, 
    InputActivityConfigerProps
> = {
    type: ActivityType.INPUT,
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