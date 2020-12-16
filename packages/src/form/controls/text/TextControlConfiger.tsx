import React, { forwardRef, useImperativeHandle } from 'react';
import { ControlConfigerProps, ControlConfigerRef } from '../Control';

/**
 * 单行文本控件配置器属性
 */
export interface TextControlConfigerProps extends ControlConfigerProps {
    field2: string
}

/**
 * 单行文本控件配置器
*/
const TextControlConfiger = forwardRef<ControlConfigerRef, TextControlConfigerProps>((props, ref) => {

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {field2: 'xxx'}
        }
    }), []);

    return (
        <div>
            <p>这是一个TextControlConfiger</p>
        </div>
    );
});

export default TextControlConfiger; 



