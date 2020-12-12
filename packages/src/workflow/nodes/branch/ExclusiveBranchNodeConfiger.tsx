import React, { forwardRef, useImperativeHandle } from 'react';
import { NodeConfigerProps, NodeConfigerRef } from '../Node';

/**
 * 排它分支节点配置器属性
 */
export interface ExclusiveBranchNodeConfigerProps extends NodeConfigerProps {
    fieldb: string;
}

/**
 * 排它分支节点配置器
*/
const ExclusiveBranchNodeConfiger = forwardRef<NodeConfigerRef, ExclusiveBranchNodeConfigerProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {fieldb: 'xxx'}
        }
    }), []);


    return (
        <div>
            <p>这是一个BranchNodeConfiger</p>
        </div>
    );
});

export default ExclusiveBranchNodeConfiger; 




