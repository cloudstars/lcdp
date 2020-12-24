import FormControl from "../InputControl";
import ControlModel from "../../ControlModel";
import TextControlConfiger, { TextControlConfigerProps } from "./TextControlConfiger";
import TextControlRender, { TextControlRenderProps } from "./TextControlRender";
import TextControlViewer, { TextControlViewerProps } from "./TextControlViewer";
import { ControlType } from "../../Control";

/**
 * 单行文本控件配置项
 */
export interface TextControlOptions {
    field: string;
}


/**
 * 单行文本控件
 */
const TextControl: FormControl<
    TextControlViewerProps, 
    TextControlConfigerProps,
    TextControlRenderProps
> = {
    id: 'default.Text',
    name: '单行文本',
    icon: '#fdfdfd',
    type: ControlType.INPUT,
    defaultOptions: () => {
        return {
            field2: "xx"
        }
    },
    Viewer: TextControlViewer,
    Configer: TextControlConfiger,
    Render: TextControlRender,
    validate: (ControlModel: ControlModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default TextControl;