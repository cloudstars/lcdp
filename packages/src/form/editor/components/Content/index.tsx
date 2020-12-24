import React, { FC, useEffect, useMemo } from 'react';
import ReactSortable from 'react-sortablejs';
import { Form } from 'antd';
import { v1 as uuid } from 'uuid';
import update from 'immutability-helper';
import ComponentStore from '../Fields';
import { SortableEvent } from 'sortablejs';
import { IFormItemConfig } from '../../type';
import { getItem, setInfo } from '../../utils';
import { useFormState } from '../../context';
import _ from 'lodash';

const FormContent: FC = () => {
  const { config, onChange, onChoose } = useFormState();
  /***
   * @description 新增表单组件
   * @param evt sortablejs实例
   */
  const handleOnAdd = (evt: SortableEvent) => {
    const { clone: dragNode, to: toNode, newIndex } = evt;
    if (!newIndex) return;
    const dragNodeType = dragNode.dataset.type;
    const formConfigs = _.cloneDeep(config);
    const component = dragNodeType && ComponentStore.getComponent(dragNodeType);
    if (!component) return;
    const newConfig = {
      id: uuid(),
      name: component.name,
      type: component.type,
      options: component.defaultOption,
    };

    formConfigs.splice(newIndex, 0, newConfig);
    onChange(formConfigs);
  };

  /***
   * @description 表单排序改变
   * @param evt sortablejs实例
   */
  const handleOnUpdate = (evt: SortableEvent | any) => {
    const { oldIndex, newIndex } = evt;

    // 父节点路径
    const parentPath = evt.path[1].getAttribute('data-id');

    // 父元素 根节点时直接调用data
    let parent = parentPath ? getItem(parentPath, config) : config;

    // 当前拖拽元素
    const dragItem = parent[oldIndex];

    // 更新后的父节点
    parent = update(parent, {
      $splice: [
        [oldIndex, 1],
        [newIndex, 0, dragItem],
      ],
    });

    // 最新的数据 根节点时直接调用data
    const Data = parentPath ? setInfo(parentPath, config, parent) : parent;

    onChange(Data);
  };

  /***
   * @description 表单添加，更新
   * @param evt sortablejs实例
   */
  const handleOnChange = (_: any, sortable: any, evt: SortableEvent) => {
    if (evt.type === 'update') {
      handleOnUpdate(evt);
    }
    if (evt.type === 'add') {
      handleOnAdd(evt);
    }
  };

  /***
   * @description 表单组件选择
   */
  const handleOnChoose = (evt: SortableEvent | any) => {
    // const { oldIndex } = evt;

    // // 父节点路径
    // const parentPath = evt.path[1].getAttribute('data-id');

    // // 父元素 根节点时直接调用data
    // let parent = parentPath ? getItem(parentPath, config) : config;

    // onChoose(oldIndex);
    console.log(config, evt,'choose');
  };

  /***
   * @description 渲染
   */
  const renderSortableItem = useMemo(() => {
    return _.map(config, (child: IFormItemConfig) => {
      const Item = ComponentStore.getComponent(child.type);
      const { options } = child;
      return (
        <Form.Item
          key={child.id}
          data-id={child.id}
          data-type={child.type}
          label={options.label}
          name={options.field}
          required={options.required}
        >
          <Item.View key={child.id} />
        </Form.Item>
      );
    });
  }, [config]);

  return (
    <Form layout="vertical" id="form-test">
      <ReactSortable
        options={{
          group: {
            name: 'content',
            pull: true,
            put: true,
          },
          sort: true,
          animation: 150,
         
        }}
        onChange={handleOnChange}
      >
        {renderSortableItem}
      </ReactSortable>
    </Form>
  );
};

export default FormContent;
