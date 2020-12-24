// import Control from '../../control/Control';
import React, { useState, useCallback, FC } from 'react';
import { Layout } from 'antd';
import FormPanel from './components/ComponentPanel';
import ComponentStore from './components/Fields';
import FormContent from './components/Content';
import ItemConfig from './components/ConfigPanel';
import { FormStateContext } from './context';
import { IFormItemConfig } from './type';
import './index.less';

/**
 * 表单编辑器属性
 */
interface FormEditorProps {
  //   controls?: Control[]; // 表单控件列表，不传入时初始化为内置的控件列表
  controls?: any; // 表单控件列表，不传入时初始化为内置的控件列表
}

/**
 * 表单编辑器
 */
const FormProvider: FC<FormEditorProps> = ({ children }) => {
  const [config, setConfig] = useState<IFormItemConfig[]>([
    {
      id: '2',
      name: '文本框',
      type: 'InputField',
      options: {
        field: 'WB',
        label: '文本',
        required: false,
        placeholder: '填写数字',
      },
    },
    {
      id: '1',
      name: '数字',
      type: 'InputField',
      options: {
        field: 'SZ',
        label: '数字',
        required: false,
        placeholder: '填写数字',
      },
    },
  ]);
  const [selectKey, setSelectKey] = useState<string>('');

  const handleOnChange = useCallback((params: IFormItemConfig[]) => {
    setConfig(params);
  }, []);

  const handleOnChoose = useCallback((params: string) => {
    setSelectKey(params);
  }, []);

  return (
    <FormStateContext.Provider
      value={{
        config,
        selectKey,
        onChange: handleOnChange,
        onChoose: handleOnChoose,
      }}
    >
      {children}
    </FormStateContext.Provider>
  );
};

const FormEditor = () => {
  return (
    <Layout className="wrapper">
      <FormProvider>
        <Layout.Sider theme="light" width={320} className="sider">
          <FormPanel componentList={ComponentStore.getComponentList()} />
        </Layout.Sider>
        <Layout.Content className="content">
          <FormContent />
        </Layout.Content>
        <Layout.Sider theme="light" width={400} className="sider">
          <ItemConfig />
        </Layout.Sider>
      </FormProvider>
    </Layout>
  );
};

export default FormEditor;
