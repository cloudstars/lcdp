import React from 'react';
import { NodeViewProps } from '../Node';

/**
 * 填写节点展示卡属性
 */
export interface InputNodeViewProps extends NodeViewProps {
    field2?: string
}


/**
 * 填写节点展示卡
 */
export default function InputNodeView(props: InputNodeViewProps) {
    return (
        <div>
            <p>这是一个InputNodeView</p>
        </div>
    );
}