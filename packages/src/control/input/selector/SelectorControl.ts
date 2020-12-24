import FormControl from "../InputControl";
import ControlModel from "../../ControlModel";
import SelectorControlViewer, { SelectorControlViewerProps } from "./SelectorControlViewer";
import SelectorControlConfiger, { SelectorControlConfigerProps } from "./SelectorControlConfiger";
import SelectorControlRender, { SelectorControlRenderProps } from "./SelectorControlRender";
import { ControlType } from "../../Control";


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
    SelectorControlViewerProps, 
    SelectorControlConfigerProps,
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
    Viewer: SelectorControlViewer,
    Configer: SelectorControlConfiger,
    Render: SelectorControlRender,
    validate: (ControlModel: ControlModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default SelectorControl;