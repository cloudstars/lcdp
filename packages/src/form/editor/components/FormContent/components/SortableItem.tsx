import React, { FC } from 'react';
import { Form } from 'antd';
import DeleteSortable from './Delete';
import ComponentStore from '@/control/index';
import { ControlModel } from '@/control/type';
import { map } from 'lodash';

interface ISortableItem {
  config: ControlModel[];
  onDelete: (params?: any) => void;
  chosenId?: string;
}

const SortableItem: FC<ISortableItem> = ({ chosenId, config, onDelete }) => {
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
            <DeleteSortable id={child.id} chooseId={chosenId} onClick={onDelete} />
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
