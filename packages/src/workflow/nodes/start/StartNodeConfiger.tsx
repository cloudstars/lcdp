import React from 'react';
import NodeModel from "../NodeModel";
import NodeConfiger from "../NodeConfiger";
import { StartNodeOptions } from "./StartNode";

/**
 * 开始节点配置器属性
 */
interface StartNodeConfigerProps {
    dataModel: NodeModel<StartNodeOptions>; // 节点的数据模型
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

/**
 * 开始节点配置器（类组件）
*/
export class StartNodeConfigerClass extends React.Component<StartNodeConfigerProps> implements NodeConfiger<StartNodeOptions> {
    /*constructor(props: StartNodeConfigerProps) {
        super(props);
    }*/

    hasError(node: NodeModel<StartNodeOptions>) {
        return false;
    }

    render() {
        return <div>这是一个StartNodeConfiger</div>;
    }
} 




