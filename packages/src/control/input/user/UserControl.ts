import FormControl from "../InputControl";
import ControlModel from "../../ControlModel";
import UserControlViewer, { UserControlViewerProps } from "./UserControlViewer";
import UserControlConfiger, { UserControlConfigerProps } from "./UserControlConfiger";
import UserControlRender, { UserControlRenderProps } from "./UserControlRender";


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
    defaultOptions: () => {
        return {
            field2: "xx"
        }
    },
    ControlViewer: UserControlViewer,
    ControlConfiger: UserControlConfiger,
    ControlRender: UserControlRender,
    validate: (ControlModel: ControlModel) => { 
        return {
            hasError: false,
            title: '',
            message: ''
        };
    }
};

export default UserControl;