import FormControl from "@/control/type";
import UserControlView, { UserControlViewProps } from "./UserControlViewer";
import UserControlConfig, { UserControlConfigProps } from "./UserControlConfiger";
import UserControlRender, { UserControlRenderProps } from "./UserControlRender";
import { ControlType } from "../../type";


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
    UserControlViewProps, 
    UserControlConfigProps,
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
    View: UserControlView,
    Config: UserControlConfig,
    Render: UserControlRender,
    // validate: (ControlModel: ControlModel) => { 
    //     return {
    //         hasError: false,
    //         title: '',
    //         message: ''
    //     };
    // }
};

export default UserControl;