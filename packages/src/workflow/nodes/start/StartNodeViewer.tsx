import React from 'react';
import { NodeViewProps } from '../Node';

/**
 * 开始节点展示卡属性
 */
export interface StartNodeViewProps extends NodeViewProps {
    startForm: object
}


/**
 * 开始节点展示卡
 */
export default function StartNodeView(props: StartNodeViewProps) {
    const { options } = props;

    return (
        <div>
            这是一个StartNodeView<br />
            <br />
            <p>第一个字段：{options.field1}</p>
            <p>第二个字段：</p>
        </div>
    );
}