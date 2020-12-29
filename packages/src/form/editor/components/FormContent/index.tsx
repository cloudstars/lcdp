import React, { FC } from 'react';
import { Form } from 'antd';
import Sortable from './components/Sortable';

import './index.less';
import { useFormState } from '../../context';

const FormContent: FC = () => {
  const { config } = useFormState();
  return (
    <Form layout="vertical">
      <Sortable config={config} />
    </Form>
  );
};

export default FormContent;
