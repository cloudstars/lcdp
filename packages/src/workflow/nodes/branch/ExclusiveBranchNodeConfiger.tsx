import React from 'react';
import { NodeConfigerProps } from '../Node';

/**
 * 排它分支节点配置器属性
 */
export interface ExclusiveBranchNodeConfigerProps extends NodeConfigerProps {
    fieldb: string;
}

/**
 * 排它分支节点配置器
*/
export default function ExclusiveBranchNodeConfiger(props: ExclusiveBranchNodeConfigerProps) {
    return (
        <div>
            <p>这是一个BranchNodeConfiger</p>
        </div>
    );
}




