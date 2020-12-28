import React from 'react';
import { ActivityViewerProps } from '../Activity';

/**
 * 开始节点展示卡属性
 */
export interface StartActivityViewerProps extends ActivityViewerProps {
    startForm: object
}


/**
 * 开始节点展示卡
 */
export default function StartActivityViewer(props: StartActivityViewerProps) {
    const { options } = props;

    return (
        <div>
            这是一个StartActivityViewer<br />
            <br />
            <p>第一个字段：{options.field1}</p>
            <p>第二个字段：</p>
        </div>
    );
}