
import { Button, Drawer } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { WorkflowEditorContext } from '../WorkflowEditorContext';

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
    const { nodeMap, currentNode, setCurrentNode, refreshNodeModel } = useContext(WorkflowEditorContext);

    const [ isVisible, setVisible ] = useState(!!currentNode);
    const [ options, setOptions ] = useState(currentNode ? currentNode.options : {});

    useEffect(() => {
        setVisible(!!currentNode);
    }, [currentNode]);

    const onClose = () => {
        setVisible(false);
        setCurrentNode && setCurrentNode(undefined);
    };

    const onSave = () => {
        if (currentNode) {
            let Node = nodeMap[currentNode!.subType];
            currentNode!.options = options;
            refreshNodeModel && refreshNodeModel();
        

            //if (Node.validate()) {

            //}
        }

        
        setVisible(false);
    }

    // 节点选项卡的值部分变更时回调
    const onOptionsValuesChange = (newOptionsValuesPart: any) => {
        setOptions({...options, ...newOptionsValuesPart});
    }
    
    if (!currentNode) {
        return <></>;
    } else {
        let NodeConfiger = nodeMap[currentNode.subType].nodeConfiger;
        return (
            <Drawer
                visible={isVisible}
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={onClose}
                footer={footer(onClose, onSave)}
            >
                {!!currentNode && 
                    <NodeConfiger options={currentNode.options} onOptionsValuesChange={onOptionsValuesChange}></NodeConfiger>
                }            
            </Drawer>
        );
    }
}

/**
 * 生成底部按钮
 * 
 * @param onCancel 取消事件
 * @param onSave 保存事件
 */
function footer(
    onCancel: () => void,
    onSave: ()=> void
) {
    return (
        <div style={{textAlign: 'right'}}>
            <Button onClick={onCancel} style={{ marginRight: 8 }}>
                取消
            </Button>
            <Button onClick={onSave} type="primary">
                提交
            </Button>
        </div>
    )
}