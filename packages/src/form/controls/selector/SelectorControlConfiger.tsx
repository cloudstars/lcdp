import React, { forwardRef, useImperativeHandle } from 'react';
import { ControlConfigerProps, ControlConfigerRef } from '../Control';

/**
 * 单项选择控件配置器属性
 */
export interface SelectorControlConfigerProps extends ControlConfigerProps {
    field2: string
}

/**
 * 单项选择控件配置器
*/
const SelectorControlConfiger = forwardRef<ControlConfigerRef, SelectorControlConfigerProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {field2: 'xxx'}
        }
    }), []);

    return (
        <div>
            <p>这是一个SelectorControlConfiger</p>
        </div>
    );
});

export default SelectorControlConfiger; 



