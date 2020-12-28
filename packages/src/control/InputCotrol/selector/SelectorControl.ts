import FormControl from "@/control/type";
import SelectorControlView, { SelectorControlViewProps } from "./SelectorControlViewer";
import SelectorControlConfig, { SelectorControlConfigProps } from "./SelectorControlConfiger";
import SelectorControlRender, { SelectorControlRenderProps } from "./SelectorControlRender";
import { ControlType } from "../../type";


/**
 * 单项选择控件配置项
 */
export interface SelectorControlOptions {
    field: string;
    multiple: boolean;
}


/**
 * 单项选择控件
 */
const SelectorControl: FormControl<
    SelectorControlViewProps, 
    SelectorControlConfigProps,
    SelectorControlRenderProps
> = {
    id: 'default.Selector',
    name: '下拉选择',
    icon: '#fdfdfd',
    type: ControlType.INPUT,
    defaultOptions: () => {
        return {
            field2: "xx"
        }
    },
    View: SelectorControlView,
    Config: SelectorControlConfig,
    Render: SelectorControlRender,
    // validate: (ControlModel: ControlModel) => { 
    //     return {
    //         hasError: false,
    //         title: '',
    //         message: ''
    //     };
    // }
};

export default SelectorControl;