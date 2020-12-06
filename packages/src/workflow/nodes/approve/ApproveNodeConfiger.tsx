import React from 'react';
import { NodeConfigerProps } from '../NodeConfiger';
import NodeModel from "../NodeModel";
import { ApproveNodeOptions } from "./ApproveNode";

/**
 * 审批节点配置器属性
 */
export interface ApproveNodeConfigerProps extends NodeConfigerProps {
    dataModel: NodeModel<ApproveNodeOptions>; // 节点的数据模型
}

/**
 * 审批节点配置器
*/
export default function ApproveNodeConfiger(props: ApproveNodeConfigerProps) {
    return (
        <div>
            <p>这是一个ApproveNodeConfiger</p>
        </div>
    );
}




