import React from 'react';
import { NodeViewerProps } from '../Node';

/**
 * 填写节点展示卡属性
 */
export interface InputNodeViewerProps extends NodeViewerProps {
    field2: string
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