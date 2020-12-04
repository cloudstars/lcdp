import React from 'react';
import NodeModel from "../NodeModel";
import { StartNodeOptions } from "./StartNode";
import NodeViewer from "../NodeViewer";

/**
 * 开始节点展示卡属性
 */
interface StartNodeViewerProps {
    dataModel: NodeModel<StartNodeOptions>;
}


/**
 * 开始节点展示卡
 */
export default function StartNodeViewer(props: StartNodeViewerProps) {
    return (
        <div className="workflowItem">
            <div className="workflowAvatars flexRow">
                <i className="workflowAvatar BGYellow icon-worksheet"></i>
            </div>
            <div className="workflowName TxtCenter BGYellow">
                <div className="workflowNodeNameText ellipsis bold">{props.dataModel.name}</div>
            </div>
            <div className="workflowContent">
            </div>
        </div>
    );
}

/**
 * 开始节点展卡片（类组件）
 */
export class StartNodeViewerClass extends React.Component<StartNodeViewerProps> implements NodeViewer<StartNodeViewerProps> {
    hasError = (node: NodeModel) => {
        return true;
    }

    render() {
        return <div>这是一个StartNodeViewer</div>;
    }
}