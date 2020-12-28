import React, { FC, useEffect } from 'react';
import { Form, Input, Switch } from 'antd';
import { ControlConfigProps } from '@/control/type';

/**
 * 用户控件展示卡属性
 */
export interface DatePickerConfigProps extends ControlConfigProps {}

const DatePickerConfig: FC<DatePickerConfigProps> = ({
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

  useEffect(() => {
    form.setFieldsValue(rest);
  }, [options]);

  return (
    <Form layout="vertical" form={form} onValuesChange={onChange}>
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

export default DatePickerConfig;
