import React from 'react';
import NodeModel from "../NodeModel";
import { ConditionNodeOptions } from "./ConditionNode";

/**
 * 条件节点配置器属性
 */
interface ConditionNodeConfigerProps {
    dataModel: NodeModel<ConditionNodeOptions>; // 节点的数据模型
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




