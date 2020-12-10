import React from 'react';
import { NodeConfigerProps } from '../Node';

/**
 * 条件节点配置器属性
 */
export interface ConditionNodeConfigerProps extends NodeConfigerProps {
    fieldc: string;
}

/**
 * 条件节点配置器
*/
export default function ConditionNodeConfiger(props: ConditionNodeConfigerProps) {
    return (
        <div>
            <p>这是一个ConditionNodeConfiger</p>
        </div>
    );
}




