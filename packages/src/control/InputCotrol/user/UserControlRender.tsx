import React from 'react';
import { ControlRenderProps } from '../../type';

/**
 * 用户控件渲染器属性
 */
export interface UserControlRenderProps extends ControlRenderProps {
    field2: string
}


/**
 * 用户控件渲染器
 */
export default function UserControlRender(props: UserControlRenderProps) {
    return (
        <div>
            <p>这是一个UserControlRender</p>
        </div>
    );
}