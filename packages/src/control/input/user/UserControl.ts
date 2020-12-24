import FormControl from "../InputControl";
import ControlModel from "../../ControlModel";
import UserControlViewer, { UserControlViewerProps } from "./UserControlViewer";
import UserControlConfiger, { UserControlConfigerProps } from "./UserControlConfiger";
import UserControlRender, { UserControlRenderProps } from "./UserControlRender";
import { ControlType } from "../../Control";


/**
 * 用户控件配置项
 */
export interface UserControlOptions {
    field: string;
    multiple: boolean;
}


/**
 * 用户控件
 */
const UserControl: FormControl<
    UserControlViewerProps, 
    UserControlConfigerProps,
    UserControlRenderProps
> = {
    id: 'default.User',
    name: '用户',
    icon: '#fdfdfd',
    type: ControlType.INPUT,
    defaultOptions: () => {
        return {
            field2: "xx"
        }
    },
    Viewer: UserControlViewer,
    Configer: UserControlConfiger,
    Render: UserControlRender,
    validate: (ControlModel: ControlModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default UserControl;