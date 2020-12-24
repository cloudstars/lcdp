import React from 'react';
import { ControlConfigerProps } from '../../Control';

/**
 * 单项选择控件配置器属性
 */
export interface SelectorControlConfigerProps extends ControlConfigerProps {
    field2: string
}

/**
 * 单项选择控件配置器
*/

export default function SelectorControlConfiger(props: SelectorControlConfigerProps) {
    return (
        <div>
            <p>这是一个SelectorControlConfiger</p>
        </div>
    );
}



