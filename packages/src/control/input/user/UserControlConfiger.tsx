import React, { forwardRef, useImperativeHandle } from 'react';
import { ControlConfigerProps, ControlConfigerRef } from '../../Control';

/**
 * 用户控件配置器属性
 */
export interface UserControlConfigerProps extends ControlConfigerProps {
    field2: string
}

/**
 * 用户控件配置器
*/
const UserControlConfiger = forwardRef<ControlConfigerRef, UserControlConfigerProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {field2: 'xxx'}
        }
    }), []);

    return (
        <div>
            <p>这是一个UserControlConfiger</p>
        </div>
    );
});

export default UserControlConfiger; 



