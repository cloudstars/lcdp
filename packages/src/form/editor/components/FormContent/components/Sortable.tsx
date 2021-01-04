import React, { FC, useRef } from 'react';
import { Form } from 'antd';
import { SortableEvent } from 'sortablejs';
import ReactSortable from 'react-sortablejs';
import ComponentStore from '@/control';
import { ControlModel } from '@/control/type';
import { useFormState } from '../../../context';
import update from 'immutability-helper';
import { v1 as uuid } from 'uuid';
import _ from 'lodash';

import '../index.less';
import DeleteSortable from './Delete';
import {
  indexToArray,
  getItem,
  setInfo,
  isPath,
  getCloneItem,
  itemRemove,
  itemAdd,
} from '../utils';

interface ISortableWrapper {
  options?: any;
  className?: string;
}

const SortableWrapper: FC<ISortableWrapper> = ({ options }) => {
  const { formConfig, onChange, onChoose } = useFormState();
  const sortableRef = useRef<any>();

  /***
   * @description 新增表单组件
   * @param evt sortablejs实例
   */
  const handleOnAdd = (evt: SortableEvent | any) => {
    const { newIndex = 0, to: toNode, from: fromNode, clone: dragNode } = evt;

    const toNodeType = toNode.dataset.type;
    const dragNodeType = dragNode.dataset.type;
    const cloneConfig = _.cloneDeep(formConfig);
    const component = dragNodeType && ComponentStore.getComponent(dragNodeType);
    console.log(dragNode, dragNodeType, toNodeType, toNode);

    if (dragNodeType === 'Container' && toNodeType === 'Container') return;

    // 组件名或路径
    const cloneIndex = evt.clone.getAttribute('data-id');
    // 父节点路径
    const parentPath = evt.path[0].getAttribute('data-id');
    // 新路径 为根节点时直接使用index
    const newPath = parentPath ? `${parentPath}-${newIndex}` : newIndex;
    // 判断是否为路径 路径执行移动，非路径为新增
    if (isPath(cloneIndex)) {
      // 旧的路径index
      const oldIndex = cloneIndex;
      // 克隆要移动的元素
      const dragItem = getCloneItem(oldIndex, cloneConfig);
      // 比较路径的上下位置 先执行靠下的数据 再执行考上数据
      if (indexToArray(oldIndex) > indexToArray(newPath)) {
        // 删除元素 获得新数据
        let newTreeData = itemRemove(oldIndex, cloneConfig);
        // 添加拖拽元素
        newTreeData = itemAdd(newPath, newTreeData, dragItem);
        // 更新视图
        onChange(newTreeData);
        return;
      }
      // 添加拖拽元素
      let newData = itemAdd(newPath, cloneConfig, dragItem);
      // 删除元素 获得新数据
      newData = itemRemove(oldIndex, newData);
      onChange(newData);
      return;
    }

    const newConfig: ControlModel = {
      id: uuid(),
      name: component.name,
      options: component.defaultOptions || {},
    };
    // 为容器或者弹框时增加子元素
    if (newConfig.name === 'Container') {
      // 判断是否包含默认数据
      newConfig.children = [];
    }

    let data = itemAdd(newPath, cloneConfig, newConfig);

    onChange(data);
  };

  /***
   * @description 表单排序改变
   * @param evt sortablejs实例
   */
  const handleOnUpdate = (evt: SortableEvent | any) => {
    const { newIndex, oldIndex } = evt;
    // 父节点路径
    const parentPath = evt.path[1].getAttribute('data-id');
    // 父元素 根节点时直接调用data
    let parent: any = parentPath ? getItem(parentPath, formConfig) : formConfig;
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
    const data = parentPath ? setInfo(parentPath, formConfig, parent) : parent;
    onChange(data);
  };

  /***
   * @description 表单组件选择
   */
  const handleOnChoose = (evt: SortableEvent | any) => {
    const { oldIndex, d } = evt;
    const latestConfig = sortableRef.current.props.config;
    // 父节点路径
    const parentPath = evt.path[0].getAttribute('data-id');
    // // 父元素 根节点时直接调用data
    let parent = parentPath ? getItem(parentPath, latestConfig) : latestConfig;
    // 当前拖拽元素
    const dragItem = parent[oldIndex];

    onChoose(dragItem);
  };

  /***
   * @description 表单添加，更新
   * @param evt sortablejs实例
   */
  const handleOnChange = (_: any, sortable: any, evt: SortableEvent) => {
    if (evt.type === 'update') {
      handleOnUpdate(evt);
    }
    if (evt.type === 'add' && sortable.el === evt.to) {
      handleOnAdd(evt);
    }
  };

  /***
   * @description 渲染
   */

  const SortableItem = ({
    child,
    itemKey,
  }: {
    child: ControlModel;
    itemKey: string;
  }) => {
    const Item = ComponentStore.getComponent(child.name);
    return (
      <div
        className="editor-item"
        key={child.id}
        data-id={itemKey}
        data-type={child.name}
      >
        <DeleteSortable id={child.id} />
        <Form.Item
          label={child.options.label}
          name={child.options.field}
          required={child.options.required}
        >
          <Item.View key={child.id} options={child} />
        </Form.Item>
      </div>
    );
  };

  const loop = (config: ControlModel[], index: string) => {
    return _.map(config, (child: ControlModel, i) => {
      const indexs = index === '' ? String(i) : `${index}-${i}`;
      if (child.children) {
        return (
          <ReactSortable
            key={uuid()}
            data-id={indexs}
            data-type="Container"
            className="editor-container"
            onChange={handleOnChange}
            options={{
              group: {
                name: 'content',
                pull: true,
                put: true,
              },
              animation: 150,
              onChoose: handleOnChoose,
            }}
          >
            {loop(child.children, indexs)}
          </ReactSortable>
        );
      }
      return (
        <SortableItem key={uuid()} child={child} itemKey={indexs || 'start'} />
      );
    });
  };

  return (
    <Form layout="vertical">
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
        config={formConfig}
        onChange={handleOnChange}
        style={{ height: '100vh' }}
      >
        {loop(formConfig, '')}
      </ReactSortable>
    </Form>
  );
};

export default SortableWrapper;
