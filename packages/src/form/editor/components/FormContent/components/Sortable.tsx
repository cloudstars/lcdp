import React, { FC, useRef } from 'react';
import { SortableEvent } from 'sortablejs';
import ReactSortable from 'react-sortablejs';
import ComponentStore from '@/control';
import { ControlModel } from '@/control/type';
import SortableItem from './SortableItem';
import { getItem, setInfo } from '../../../utils';
import { useFormState } from '../../../context';
import update from 'immutability-helper';
import { v1 as uuid } from 'uuid';
import _ from 'lodash';

import '../index.less';

const SortableWrapper: FC = () => {
  const { config, chooseOption, onChange, onChoose } = useFormState();
  const sortableRef = useRef<any>();

  /***
   * @description 新增表单组件
   * @param evt sortablejs实例
   */
  const handleOnAdd = (evt: SortableEvent | any) => {
    const { clone: dragNode, to: toNode, newIndex } = evt;
    if (typeof newIndex !== 'number') return;
    const dragNodeType = dragNode.dataset.type;
    const formConfigs = _.cloneDeep(config);
    const component = dragNodeType && ComponentStore.getComponent(dragNodeType);
    if (!component) return;

    const newConfig: ControlModel = {
      id: uuid(),
      name: component.name,
      options: component.defaultOptions || {},
    };

    if (component.name === 'Container') {
      newConfig.children = [];
    }

    const parentId = toNode.dataset.id;
    const parent: any = getItem(parentId, formConfigs);

    if (toNode.dataset.type === 'Container') {
      parent.children.splice(newIndex, 0, newConfig);
    } else {
      if (!Array.isArray(parent)) {
        parent.children.splice(newIndex, 0, newConfig);
      } else {
        parent.splice(newIndex, 0, newConfig);
      }
    }
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
    const { oldIndex } = evt;
    const latestConfig = sortableRef.current.props.config;
    // 父节点路径
    const parentPath = evt.path[1].getAttribute('data-id');

    // 父元素 根节点时直接调用data
    let parent = parentPath ? getItem(parentPath, latestConfig) : latestConfig;

    // 当前拖拽元素
    const dragItem = parent[oldIndex];
    console.log(dragItem, parentPath);

    onChoose(dragItem);
  };

  /***
   * @description 表单组件删除
   */
  const handleOnDelete = () => {
    if (chooseOption) {
      const cloneConfig = _.cloneDeep(config);
      const parent = getItem(chooseOption.id, cloneConfig);
      const index = parent.findIndex((item) => item.id === chooseOption.id);
      parent.splice(index, 1);
      onChoose();
      onChange(cloneConfig);
    }
  };

  /***
   * @description 渲染
   */
  return (
    <ReactSortable
      ref={sortableRef}
      options={{
        group: {
          name: 'content',
          pull: true,
          put: true,
        },
        animation: 150,
        onChoose: handleOnChoose,
      }}
      config={config}
      onChange={handleOnChange}
    >
      <SortableItem
        config={config}
        chosenId={chooseOption && chooseOption.id}
        onDelete={handleOnDelete}
      />
    </ReactSortable>
  );
};

export default SortableWrapper;
