import React from 'react';
import { ControlViewProps } from '../../type';

/**
 * 用户控件展示卡属性
 */
export interface UserControlViewProps extends ControlViewProps {
    field2: string
}


/**
 * 用户控件展示卡
 */
export default function UserControlView(props: UserControlViewProps) {
    return (
        <div>
            <p>这是一个UserControlView</p>
        </div>
    );
}