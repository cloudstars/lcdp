import React, { useContext } from "react";
import { NodeOptions } from "../nodes/Node";
import NodeModel from "../nodes/NodeModel";
import NodeList from "./NodeList";

/**
 * 分支渲染器属性
 */
export interface BranchProps {
    branchs: NodeModel<NodeOptions>[];
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
        <div className="workflowBranch">
            <i className="workflowBranchBtn icon-workflow_add"></i>
            {branchs && branchs.length > 0 &&
                branchs.map((startNodeModel) => {
                    <NodeList startNodeModel={startNodeModel}></NodeList>
                })
            }
        </div>
    );
}