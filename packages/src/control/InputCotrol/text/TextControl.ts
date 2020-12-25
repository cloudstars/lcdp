import FormControl from "@/control/type";
import { ControlType } from "@/control/type";
import TextControlConfig, { TextControlConfigProps } from "./TextControlConfiger";
import TextControlRender, { TextControlRenderProps } from "./TextControlRender";
import TextControlView, { TextControlViewProps } from "./TextControlViewer";


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
    TextControlViewProps, 
    TextControlConfigProps,
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
    View: TextControlView,
    Config: TextControlConfig,
    Render: TextControlRender,
    // validate: (ControlModel: ControlModel) => { 
    //     return {
    //         hasError: false,
    //         title: '',
    //         message: ''
    //     };
    // }
};

export default TextControl;