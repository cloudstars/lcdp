import React from 'react';
import { ControlRenderProps } from '../Control';

/**
 * 单行文本控件渲染器属性
 */
export interface TextControlRenderProps extends ControlRenderProps {
    field2: string
}


/**
 * 单行文本控件渲染器
 */
export default function TextControlRender(props: TextControlRenderProps) {
    return (
        <div>
            <p>这是一个TextControlRender</p>
        </div>
    );
}