import React, { FC } from 'react';
import { Form } from 'antd';
import Sortable from './components/Sortable';

import './index.less';

const FormContent: FC = () => {
  return (
    <Form layout="vertical">
      <Sortable />
    </Form>
  );
};

export default FormContent;
