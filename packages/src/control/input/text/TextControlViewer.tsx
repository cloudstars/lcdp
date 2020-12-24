import React from 'react';
import { ControlViewerProps } from '../../Control';

/**
 * 单行文本控件展示卡属性
 */
export interface TextControlViewerProps extends ControlViewerProps {
    field2: string
}


/**
 * 单行文本控件展示卡
 */
export default function TextControlViewer(props: TextControlViewerProps) {
    return (
        <div>
            <p>这是一个TextControlViewer</p>
        </div>
    );
}