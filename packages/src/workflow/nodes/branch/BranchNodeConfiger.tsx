import React from 'react';
import { NodeOptions } from '../Node';
import { NodeConfigerProps } from '../NodeConfiger';
import NodeModel from "../NodeModel";
import { BranchNodeOptions } from "./BranchNode";

/**
 * 分支节点配置器属性
 */
export interface BranchNodeConfigerProps extends NodeConfigerProps {
}

/**
 * 分支节点配置器
*/
export default function BranchNodeConfiger(props: BranchNodeConfigerProps) {
    return (
        <div>
            <p>这是一个BranchNodeConfiger</p>
        </div>
    );
}




