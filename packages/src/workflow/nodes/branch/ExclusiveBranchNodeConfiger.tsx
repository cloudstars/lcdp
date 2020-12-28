import React, { forwardRef, useImperativeHandle } from 'react';
import { NodeConfigProps, NodeConfigRef } from '../Node';

/**
 * 排它分支节点配置器属性
 */
export interface ExclusiveBranchNodeConfigProps extends NodeConfigProps {
    fieldb: string;
}

/**
 * 排它分支节点配置器
*/
const ExclusiveBranchNodeConfig = forwardRef<NodeConfigRef, ExclusiveBranchNodeConfigProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {fieldb: 'xxx'}
        }
    }), []);


    return (
        <div>
            <p>这是一个BranchNodeConfig</p>
        </div>
    );
});

export default ExclusiveBranchNodeConfig; 




