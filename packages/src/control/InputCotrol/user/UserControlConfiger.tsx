import React from 'react';
import { ControlConfigProps } from '../../type';

/**
 * 用户控件配置器属性
 */
export interface UserControlConfigProps extends ControlConfigProps {
    field2: string
}

/**
 * 用户控件配置器
*/
export default function UserControlConfig(props: UserControlConfigProps) {
    return (
        <div>
            <p>这是一个UserControlConfig</p>
        </div>
    );
}




