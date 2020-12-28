import React, { FC } from 'react';
import ReactSortable from 'react-sortablejs';
import FormControl from '@/control/type';
import './index.less';

interface IPanel {
  componentList: any;
}

const FormFieldsPanel: FC<IPanel> = ({ componentList }) => {
  return (
    <ReactSortable
      options={{
        group: { name: 'formItem', pull: 'clone', put: false },
        sort: false,
      }}
      className="panelWrapepr"
    >
      {componentList.map((item: FormControl) => (
        <div
          key={item.id}
          data-id={item.id}
          data-type={item.name}
          className="formItemPanel"
        >
          {item.icon}
          {item.defaultOptions.label}
        </div>
      ))}
    </ReactSortable>
  );
};

export default FormFieldsPanel;
