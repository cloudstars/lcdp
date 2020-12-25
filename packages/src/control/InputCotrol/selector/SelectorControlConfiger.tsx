import React from 'react';
import { ControlConfigProps } from '../../type';

/**
 * 单项选择控件配置器属性
 */
export interface SelectorControlConfigProps extends ControlConfigProps {
    field2: string
}

/**
 * 单项选择控件配置器
*/

export default function SelectorControlConfig(props: SelectorControlConfigProps) {
    return (
        <div>
            <p>这是一个SelectorControlConfig</p>
        </div>
    );
}



