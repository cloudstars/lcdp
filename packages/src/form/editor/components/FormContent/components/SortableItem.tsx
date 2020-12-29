import React, { FC } from 'react';
import { Form } from 'antd';
import DeleteSortable from './Delete';
import ComponentStore from '@/control/index';
import { ControlModel } from '@/control/type';
import { map } from 'lodash';

interface ISortableItem {
  config: ControlModel[];
}

const SortableItem: FC<ISortableItem> = ({ config }) => {
  return (
    <>
      {map(config, (child: ControlModel) => {
        const { options } = child;
        const Item = ComponentStore.getComponent(child.name);
        return (
          <div
            className="editor-item"
            key={child.id}
            data-id={child.id}
            data-type={child.name}
          >
            <DeleteSortable id={child.id} />
            <Form.Item
              label={options.label}
              name={options.field}
              required={options.required}
            >
              <Item.View key={child.id} />
            </Form.Item>
          </div>
        );
      })}
    </>
  );
};

export default SortableItem;
