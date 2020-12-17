import React from 'react';
import { ControlViewerProps } from '../InputControl';

/**
 * 单项选择控件展示卡属性
 */
export interface SelectorControlViewerProps extends ControlViewerProps {
    field2: string
}


/**
 * 单项选择控件展示卡
 */
export default function SelectorControlViewer(props: SelectorControlViewerProps) {
    return (
        <div>
            <p>这是一个SelectorControlViewer</p>
        </div>
    );
}