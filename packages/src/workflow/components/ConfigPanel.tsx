
import React from 'react';

import "./ConfigPanel.less";

/**
 * 工作流节点配置面板属性
 */
export interface ConfigPanelProps {
}

/**
 * 这是一个节点配置面板，对应工作流编辑器右侧的弹出窗口
 * 
 * @author HO274507
 */
export default function ConfigPanel(props: ConfigPanelProps) {
    return (
        <div className="workflow-editor-panel">
            <p>这是一个ConfigPanel</p>
        </div>
    );
}