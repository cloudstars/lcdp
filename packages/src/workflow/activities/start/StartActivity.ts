import Activity, { ActivityType } from "../Activity";
import NodeModel from "../NodeModel";
import StartActivityConfiger, { StartActivityConfigerProps } from "./StartActivityConfiger";
import StartActivityViewer, { StartActivityViewerProps } from "./StartActivityViewer";

/**
 * 开始节点配置项
 */
export interface StartActivityOptions {
    startForm: object
}

/**
 * 开始结点
 */
const StartActivity: Activity<
    StartActivityViewerProps, 
    StartActivityConfigerProps
> = {
    type: ActivityType.START,
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
    CanvasView: StartActivityViewer,
    ConfigPanel: StartActivityConfiger,
    validate: (NodeModel: NodeModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default StartActivity;