import React, { useContext } from 'react';
import { StartNodeOptions } from '../nodes/start/StartNode';
import NodeModel from '../nodes/NodeModel';
import { WorkflowEditorContext } from '../WorkflowEditorContext';
import Branch from './Branch';


/**
 * 节点列表属性
 */
export interface NodeListProps {
     // 开始节点
    startNodeModel: NodeModel<StartNodeOptions>
}

/**
 * 
 * 
 * 节点列表
 * 
 * @param props
 */
export default function NodeList(props: NodeListProps) {
    let { startNodeModel } = props;
    let { nodeMap, editable } = useContext(WorkflowEditorContext);

    let reactNodes = [];
    for (let nodeModel of startNodeModel) {
        let NodeViewer = nodeMap[nodeModel.subType].nodeViewer;
        let reactNode;
        if (nodeModel.branchs && nodeModel.branchs.length > 0) {
            reactNode = <Branch key={nodeModel.id} branchs={nodeModel.branchs}></Branch>;
        } else {
            reactNode = <NodeViewer key={nodeModel.id} dataModel={nodeModel}></NodeViewer>;
        }
        let wrapper = (
            <div key={nodeModel.id} className="flexColumn">
                <section className="workflowBox" data-id={nodeModel.id}>
                    {reactNode}
                </section>
                {editable && 
                    <div className="workflowLineBtn">
                        <i className="icon-custom_add_circle"></i>
                    </div>
                }
            </div>
        ); 
        reactNodes.push(wrapper);
    };

    return <>{reactNodes}</>;
}