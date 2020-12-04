
import React from 'react';
import Flow from './Flow';

/**
 * 流程画布属性
 */
interface FlowCanvasProps {
}

/**
 * 这是一个流程画布，用于绘制流程环图
 * 
 * @param props 组件传入属性
 */
export default function FlowCanvas(props: FlowCanvasProps) {

    return (
        <div className="workflowEditorContent workflow-editor-canvas">
            <Flow></Flow>
        </div>
    );
}