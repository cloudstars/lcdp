import React from 'react';
import { NodeConfigerProps } from '../Node';

/**
 * 开始节点配置器属性
 */
export interface StartNodeConfigerProps extends NodeConfigerProps {
    startForm: object
}

/**
 * 开始节点配置器
*/
export default function StartNodeConfiger(props: StartNodeConfigerProps) {
    return (
        <div>
            <p>这是一个StartNodeConfiger</p>
        </div>
    );
}



