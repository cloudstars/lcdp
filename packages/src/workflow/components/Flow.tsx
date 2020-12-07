import React, { useContext } from "react";
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
   let { nodeModel } = useContext(WorkflowEditorContext);

   return (
      <div className="flow">
         <NodeList startNodeModel={nodeModel!}></NodeList>
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