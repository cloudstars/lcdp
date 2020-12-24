import React from 'react';
import { ControlRenderProps } from '../../Control';

/**
 * 单项选择控件渲染器属性
 */
export interface SelectorControlRenderProps extends ControlRenderProps {
    field2: string
}


/**
 * 单项选择控件渲染器
 */
export default function SelectorControlRender(props: SelectorControlRenderProps) {
    return (
        <div>
            <p>这是一个SelectorControlRender</p>
        </div>
    );
}