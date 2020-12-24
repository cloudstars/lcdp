import React from 'react';
import { ControlViewerProps } from '../../Control';

/**
 * 用户控件展示卡属性
 */
export interface UserControlViewerProps extends ControlViewerProps {
    field2: string
}


/**
 * 用户控件展示卡
 */
export default function UserControlViewer(props: UserControlViewerProps) {
    return (
        <div>
            <p>这是一个UserControlViewer</p>
        </div>
    );
}