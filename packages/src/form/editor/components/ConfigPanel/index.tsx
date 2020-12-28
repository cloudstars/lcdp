import React, { FC, useEffect, useState, memo } from 'react';
import { Empty } from 'antd';
import ComponentStore from '@/control';
import Control from '@/control/type';
import { useFormState } from '../../context';

interface ConfigProps {
  [key: string]: any;
}

const ConfigPanel: FC<ConfigProps> = (props) => {
  const { chooseOption, onConfigChange } = useFormState();
  const [ModelData, steModelData] = useState<Control>();

  useEffect(() => {
    if (!chooseOption) return;
    const model = ComponentStore.getComponent(chooseOption.name);
    steModelData(model);
  }, [chooseOption]);

  console.log('render, sider');

  return (
    <div>
      {ModelData ? (
        <ModelData.Config
          options={chooseOption}
          onOptionsValuesChange={onConfigChange}
        />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default memo(ConfigPanel);
