import React from 'react';
import NodeList from '../../components/NodeList';
import { NodeViewerProps } from '../Node';

/**
 * 排它分支节点展示卡属性
 */
export interface ExclusiveBranchNodeViewerProps extends NodeViewerProps {
    fieldc: string;
}


/**
 * 排它分支节点展示卡
 */
export default function ExclusiveBranchNodeViewer(props: ExclusiveBranchNodeViewerProps) {
    let branchs = props.dataModel.branchs;

    return (
        <div className="flow-branch">
            {branchs && branchs.length > 0 &&
                branchs.map((startNodeModel) => {
                    return <NodeList startNodeModel={startNodeModel}></NodeList>
                })
            }
        </div>
    );
}