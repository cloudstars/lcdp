
import React from 'react';
import AppendNodeModal from './append/AppendNodeModal';
import Flow from './Flow';

import "./FlowCanvas.less";

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
        <div className="workflow-editor-canvas">
            <Flow></Flow>
            <AppendNodeModal></AppendNodeModal>
        </div>
    );
}