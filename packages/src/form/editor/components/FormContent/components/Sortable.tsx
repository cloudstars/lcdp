import React, { FC, useRef } from 'react';
import { SortableEvent } from 'sortablejs';
import ReactSortable from 'react-sortablejs';
import ComponentStore from '@/control';
import { ControlModel } from '@/control/type';
import SortableItem from './SortableItem';
import { getItem, getParent, setInfo } from '../../../utils';
import { useFormState } from '../../../context';
import update from 'immutability-helper';
import { v1 as uuid } from 'uuid';
import _ from 'lodash';

import '../index.less';

interface ISortableWrapper {
  config: ControlModel[];
  options?: any;
  className?: string;
}

const SortableWrapper: FC<ISortableWrapper> = ({
  config,
  options,
  className,
}) => {
  const { formConfig, onChange, onChoose } = useFormState();
  const sortableRef = useRef<any>();

  /***
   * @description 新增表单组件
   * @param evt sortablejs实例
   */
  const handleOnAdd = (evt: SortableEvent | any) => {
    const {
      oldIndex = 0,
      newIndex = 0,
      to: toNode,
      from: fromNode,
      clone: dragNode,
    } = evt;   
    evt.stopPropagation()
    const toNodeType = toNode.dataset.type;
    const dragNodeType = dragNode.dataset.type;
    const fromNodeType = fromNode.dataset.type;
    const cloneConfig = _.cloneDeep(formConfig);
    const component = dragNodeType && ComponentStore.getComponent(dragNodeType);
    const newConfig: ControlModel = {
      id: uuid(),
      name: component.name,
      options: component.defaultOptions || {},
    };

   
    console.log(evt,config);
   
    const toNodeParentId = toNode.dataset.id;
    const toNodeParent: any = getItem(toNodeParentId, cloneConfig);
    const fromNodeParentId = fromNode.dataset.id;
    const fromNodeParent: any = getItem(fromNodeParentId, cloneConfig);

    if (component.name === 'Container') {
      newConfig.children = [];
    }

    if (dragNodeType === 'Container' && toNodeType === 'Container') return;
    if (!Array.isArray(toNodeParent)) {
      if (toNodeType === 'Container' && fromNodeType === 'Container') {  
        fromNodeParent.children.splice(oldIndex, 1);
        toNodeParent.children.splice(newIndex, 0, newConfig);
      } else {
        toNodeParent.children.splice(newIndex, 0, newConfig);
      }
    } else {
      toNodeParent.splice(newIndex, 0, newConfig);
    }
    onChange(cloneConfig);
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
   * @description 表单组件选择
   */
  const handleOnChoose = (evt: SortableEvent | any) => {
    const { oldIndex } = evt;
    const latestConfig = sortableRef.current.props.config;
    // 父节点路径
    // const parentPath = evt.path[1].getAttribute('data-id');
    // console.log(options, latestConfig);

    // // 父元素 根节点时直接调用data
    // let parent = parentPath ? getItem(parentPath, latestConfig) : latestConfig;

    // 当前拖拽元素
    const dragItem = parent[oldIndex];
    // onChoose(dragItem);
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
        onEnd: (evt)=>{console.log(evt,'----');
        }
      }}
      config={config}
      onChange={handleOnChange}
      className={className}
      data-id={options && options.id}
      data-type={options && options.name}
    >
      <SortableItem config={config} />
    </ReactSortable>
  );
};

export default SortableWrapper;
