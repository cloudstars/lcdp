import React, { forwardRef, useImperativeHandle } from 'react';
import { ActivityConfigerProps, ActivityConfigerRef } from '../Activity';

/**
 * 填写节点配置器属性
 */
export interface InputActivityConfigerProps extends ActivityConfigerProps {
    field2: string
}

/**
 * 填写节点配置器
*/
const InputNodeConfiger = forwardRef<ActivityConfigerRef, InputActivityConfigerProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {field2: 'xxx'}
        }
    }), []);

    return (
        <div>
            <p>这是一个InputActivityConfiger</p>
        </div>
    );
});

export default InputNodeConfiger; 



