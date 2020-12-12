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
    const { options } = props;

    return (
        <div>
            这是一个StartNodeViewer<br />
            <br />
            <p>第一个字段：{options.field1}</p>
            <p>第二个字段：</p>
        </div>
    );
}