import React from 'react';
import { ControlViewProps } from '../../type';

/**
 * 单行文本控件展示卡属性
 */
export interface TextControlViewProps extends ControlViewProps {
    field2: string
}


/**
 * 单行文本控件展示卡
 */
export default function TextControlView(props: TextControlViewProps) {
    return (
        <div>
            <p>这是一个TextControlView</p>
        </div>
    );
}