import React from 'react';
import { ControlConfigerProps } from '../../Control';

/**
 * 单行文本控件配置器属性
 */
export interface TextControlConfigerProps extends ControlConfigerProps {
    field2: string
}

/**
 * 单行文本控件配置器
*/
export default function TextControlConfiger(props: TextControlConfigerProps) {
    return (
        <div>
            <p>这是一个TextControlConfiger</p>
        </div>
    );
}





