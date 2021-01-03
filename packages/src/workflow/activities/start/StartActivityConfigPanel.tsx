import React, { forwardRef, useImperativeHandle } from 'react';
import { ActivityConfigerProps, ActivityConfigerRef } from '../Activity';
import { Form, Input } from 'antd';


/**
 * 开始节点配置器属性
 */
export interface StartActivityConfigerProps extends ActivityConfigerProps {
    field1: boolean
}


/**
 * 开始节点配置器
*/
const StartNodeConfiger = forwardRef<ActivityConfigerRef, StartActivityConfigerProps>((props, ref) => {
    const [ form ] = Form.useForm();
    const { options, onOptionsValuesChange } = props;

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {field1: 'xxx'}
        }
    }), []);

    return (
        <div>
            <p>这是一个StartNodeConfiger</p>
            <br />
            <Form layout="vertical" form={form} onValuesChange={onOptionsValuesChange}>
                <Form.Item name="field1" label="请输入第一个参数" initialValue={options.field1}>
                    <Input.TextArea rows={1} />
                </Form.Item>
                <Form.Item name="field2" label="请输入第二个参数" initialValue={options.field2}>
                    <Input.TextArea rows={3} />
                </Form.Item>
            </Form>
        </div>
    );
});


export default StartNodeConfiger;
