import React from 'react';
import { NodeViewerProps } from '../Node';

/**
 * 开始节点展示卡属性
 */
export interface StartNodeViewerProps extends NodeViewerProps {
    startForm: object
}


/**
 * 开始节点展示卡
 */
export default function StartNodeViewer(props: StartNodeViewerProps) {
    return (
        <div>
            这是一个StartNodeViewer
        </div>
    );
}