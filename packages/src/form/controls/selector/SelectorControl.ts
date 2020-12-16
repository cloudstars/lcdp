import Control from "../Control";
import ControlModel from "../ControlModel";
import SelectorControlViewer, { SelectorControlViewerProps } from "./SelectorControlViewer";
import SelectorControlConfiger, { SelectorControlConfigerProps } from "./SelectorControlConfiger";
import SelectorControlRender, { SelectorControlRenderProps } from "./SelectorControlRender";


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
const SelectorControl: Control<
    SelectorControlViewerProps, 
    SelectorControlConfigerProps,
    SelectorControlRenderProps
> = {
    id: 'default.Selector',
    name: '下拉选择',
    icon: '#fdfdfd',
    defaultOptions: () => {
        return {
            field2: "xx"
        }
    },
    ControlViewer: SelectorControlViewer,
    ControlConfiger: SelectorControlConfiger,
    ControlRender: SelectorControlRender,
    validate: (ControlModel: ControlModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default SelectorControl;