import React from 'react';
import { ControlConfigerProps } from '../../Control';

/**
 * 用户控件配置器属性
 */
export interface UserControlConfigerProps extends ControlConfigerProps {
    field2: string
}

/**
 * 用户控件配置器
*/
export default function UserControlConfiger(props: UserControlConfigerProps) {
    return (
        <div>
            <p>这是一个UserControlConfiger</p>
        </div>
    );
}




