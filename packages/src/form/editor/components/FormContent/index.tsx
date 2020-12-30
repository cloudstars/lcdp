import React, { FC } from 'react';
import { Form } from 'antd';
import Sortable from './components/Sortable';
import { useFormState } from '../../context';
import './index.less';


// const FormContent: FC = () => {
//   const { formConfig } = useFormState();
//   return (
//     <Form layout="vertical">
//       <Sortable config={formConfig} />
//     </Form>
//   );
// };

// export default FormContent;

export default Sortable;