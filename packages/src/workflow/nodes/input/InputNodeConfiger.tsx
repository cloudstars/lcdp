import React from 'react';
import { NodeConfigerProps } from '../Node';

/**
 * 填写节点配置器属性
 */
export interface InputNodeConfigerProps extends NodeConfigerProps {
    field2: string
}

/**
 * 填写节点配置器
*/
export default function InputNodeConfiger(props: InputNodeConfigerProps) {
    return (
        <div>
            <p>这是一个InputNodeConfiger</p>
        </div>
    );
}




