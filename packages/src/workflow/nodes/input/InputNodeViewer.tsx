import React from 'react';
import NodeModel from "../NodeModel";
import { NodeViewerProps } from '../NodeViewer';
import { InputNodeOptions } from './InputNode';

/**
 * 填写节点展示卡属性
 */
export interface InputNodeViewerProps extends NodeViewerProps {
    dataModel: NodeModel<InputNodeOptions>;
}


/**
 * 填写节点展示卡
 */
export default function InputNodeViewer(props: InputNodeViewerProps) {
    return (
        <div>
            <p>这是一个InputNodeViewer</p>
        </div>
    );
}