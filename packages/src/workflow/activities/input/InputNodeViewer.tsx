import React from 'react';
import { ActivityViewerProps } from '../Activity';

/**
 * 填写节点展示卡属性
 */
export interface InputActivityViewerProps extends ActivityViewerProps {
    field2: string
}


/**
 * 填写节点展示卡
 */
export default function InputActivityViewer(props: InputActivityViewerProps) {
    return (
        <div>
            <p>这是一个InputNodeViewer</p>
        </div>
    );
}