import React, { useState, useCallback, FC } from 'react';
import { Layout } from 'antd';
import FormPanel from './components/ComponentPanel';
import FormContent from './components/FormContent';
import ItemConfig from './components/ConfigPanel';
import ComponentStore from '@/control';
import { FormStateContext } from './context';
import { ControlModel } from '@/control/type';
import { cloneDeep } from 'lodash';
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
const FormProvider: FC = ({ children }) => {
  const [config, setConfig] = useState<ControlModel[]>([
    {
      id: '66e29660-4902-11eb-b9bd-5bc395c23989',
      name: 'Container',
      options: {
        label: 'qqq',
        field: 'RQ',
        required: true,
        placeholder: '',
      },
      children: [
        {
          id: '56e29660-4902-11eb-b9bd-5bc395c23989',
          name: 'Input',
          options: {
            label: '日期',
            field: 'RQq',
            required: true,
            placeholder: '',
          },
        },
      ],
    },
  ]);
  const [chooseOption, setChooseOption] = useState<ControlModel>();

  const handleOnChange = useCallback((params: ControlModel[]) => {
    setConfig(params);
  }, []);

  const handleOnChoose = useCallback(
    (params) => {
      setChooseOption(params);
    },
    [config],
  );

  const loop = (config: ControlModel[], model: ControlModel) => {
    config.forEach((item) => {
      if (item.id === model.id) {
        item.options = { ...model.options };
      } else if (item.children) {
        loop(item.children, model);
      }
    });
  };

  const handleOnConfigChange = useCallback(
    (params: ControlModel) => {
      let newConfig = cloneDeep(config);
      loop(newConfig, params);
      setConfig(newConfig);
    },
    [config],
  );

  return (
    <FormStateContext.Provider
      value={{
        config,
        chooseOption,
        onChange: handleOnChange,
        onChoose: handleOnChoose,
        onConfigChange: handleOnConfigChange,
      }}
    >
      {children}
    </FormStateContext.Provider>
  );
};

const FormEditor: FC<FormEditorProps> = () => {
  console.log('render content');

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
