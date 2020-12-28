import React, { FC, useEffect } from 'react';
import { Form, Input, Switch } from 'antd';
import { ControlConfigProps } from '@/control/type';

/**
 * 用户控件展示卡属性
 */
export interface InputConfigProps extends ControlConfigProps {}

const InputConfig: FC<InputConfigProps> = ({
  options,
  onOptionsValuesChange,
}) => {
  const [form] = Form.useForm();
  const {
    options: { ...rest },
  } = options || {};

  const onChange = () => {
    form.validateFields().then((res: any) => {
      onOptionsValuesChange({ ...options, options: { ...res } });
    });
  };

  return (
    <Form layout="vertical" form={form} onValuesChange={onChange} initialValues={rest}>
      <Form.Item label="" name="label">
        <Input />
      </Form.Item>
      <Form.Item label="默认文本" name="placholder">
        <Input />
      </Form.Item>
      <Form.Item label="必填" name="required">
        <Switch />
      </Form.Item>
    </Form>
  );
};

export default InputConfig;
