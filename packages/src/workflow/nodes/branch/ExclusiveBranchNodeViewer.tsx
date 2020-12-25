import React from 'react';
import NodeList from '../../editor/components/NodeList';
import { NodeViewProps } from '../Node';

/**
 * 排它分支节点展示卡属性
 */
export interface ExclusiveBranchNodeViewProps extends NodeViewProps {
    fieldc: string;
}


/**
 * 排它分支节点展示卡
 */
export default function ExclusiveBranchNodeView(props: ExclusiveBranchNodeViewProps) {
    let branchs = props.dataModel.branchs;

    return (
        <div className="flow-branch">
            {branchs && branchs.length > 0 &&
                branchs.map((startNodeModel, index) => {
                    let clearBorder = null;
                    if (index == 0) {
                        clearBorder = <div className="clear-left-border"></div>
                    } else if (index == branchs.length - 1) {
                        clearBorder = <div className="clear-right-border"></div>
                    }
                    return <NodeList startNodeModel={startNodeModel}>{clearBorder}</NodeList>
                })
            }
        </div>
    );
}