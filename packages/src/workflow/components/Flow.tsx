import React, { useContext } from "react";
import Node, { NodeOptions } from "../nodes/Node";
import NodeModel from "../nodes/NodeModel";
import StartNode, { StartNodeOptions } from "../nodes/start/StartNode";
import { WorkflowEditorContext } from "../WorkflowEditorContext";
import NodeList from "./NodeList";

/**
 * 流程图属性
 */
export interface FlowProps {
}

/**
* 
* 
* 流程图
* 
* @param props
*/
export default function Flow(props: FlowProps) {
   let { nodeMap, nodeModel } = useContext(WorkflowEditorContext);


   // 不存在数据模型时，使用开始结点的默认配置
   if (!nodeModel) {
      let sn: Node<NodeOptions> = nodeMap[StartNode.id];
      nodeModel = new NodeModel(sn.name, sn.type, sn.id, sn.defaultOptions(), []);
   }

   return (
      <div className="flow">
         <NodeList startNodeModel={nodeModel}></NodeList>
         <EndNode {...props}></EndNode>
      </div>
   );
}

/**
 * 结束节点
 */
function EndNode(props: FlowProps) {
   return (
      <div className="flow-end"> 
         <section className="workflowEndBox">
            <div className="workflowEnd"></div>
         </section>
      </div>
   )
}