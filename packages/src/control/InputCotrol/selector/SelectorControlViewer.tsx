import React from 'react';
import { ControlViewProps } from '@/control/type';

/**
 * 单项选择控件展示卡属性
 */
export interface SelectorControlViewProps extends ControlViewProps {
    field2: string
}


/**
 * 单项选择控件展示卡
 */
export default function SelectorControlView(props: SelectorControlViewProps) {
    return (
        <div>
            <p>这是一个SelectorControlView</p>
        </div>
    );
}