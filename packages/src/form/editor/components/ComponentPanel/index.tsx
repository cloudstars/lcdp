import React, { FC } from 'react';
import ReactSortable from 'react-sortablejs';
import Icon from '@ant-design/icons';
import { FieldComponent } from '../../type';
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
      {componentList.map((item: FieldComponent) => (
        <div
          key={item.id}
          data-id={item.id}
          data-type={item.type}
          className="formItemPanel"
        >
          {item.icon}
          {item.name}
        </div>
      ))}
    </ReactSortable>
  );
};

export default FormFieldsPanel;
