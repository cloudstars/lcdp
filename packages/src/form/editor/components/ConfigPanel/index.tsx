import React, { FC } from 'react';
import { Empty } from 'antd';
import { useFormState } from '../../context';

interface ConfigProps {
  [key: string]: any;
}

const Config: FC<ConfigProps> = props => {
  const { selectKey } = useFormState();
  // console.log(selectKey, 'selectKey');

  return <Empty />;
};

export default Config;
