import React from 'react';
import { ControlConfigProps } from '../../type';

/**
 * 单行文本控件配置器属性
 */
export interface TextControlConfigProps extends ControlConfigProps {
    field2: string
}

/**
 * 单行文本控件配置器
*/
export default function TextControlConfig(props: TextControlConfigProps) {
    return (
        <div>
            <p>这是一个TextControlConfig</p>
        </div>
    );
}





