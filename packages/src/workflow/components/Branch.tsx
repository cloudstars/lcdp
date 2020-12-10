import React from "react";
import NodeModel from "../nodes/NodeModel";
import NodeList from "./NodeList";

// 分支考虑作为一种节点类型，此类是作为一种流程的能力，待定

/**
 * 分支渲染器属性
 */
export interface BranchProps {
    branchs: NodeModel[];
}

/**
* 
* 分支
* 
* @param props
*/
export default function Branch(props: BranchProps) {

    let branchs = props.branchs;

    return (
        <div className="flow-branch">
            <i className="workflowBranchBtn icon-workflow_add"></i>
            {branchs && branchs.length > 0 &&
                branchs.map((nodeModel) => {
                    <NodeList startNodeModel={nodeModel}></NodeList>
                })
            }
        </div>
    );
}