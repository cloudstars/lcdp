import FormControl from "../InputControl";
import ControlModel from "../../ControlModel";
import TextControlConfiger, { TextControlConfigerProps } from "./TextControlConfiger";
import TextControlRender, { TextControlRenderProps } from "./TextControlRender";
import TextControlViewer, { TextControlViewerProps } from "./TextControlViewer";

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
    defaultOptions: () => {
        return {
            field2: "xx"
        }
    },
    ControlViewer: TextControlViewer,
    ControlConfiger: TextControlConfiger,
    ControlRender: TextControlRender,
    validate: (ControlModel: ControlModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default TextControl;