
export default {}
// import React, { FC, useMemo, useRef } from 'react';
// import { Empty, Form } from 'antd';
// import { SortableEvent } from 'sortablejs';
// import ReactSortable from 'react-sortablejs';
// import ComponentStore from '@/control';
// import DeleteSortable from './components/Delete';
// import { ControlModel } from '@/control/type';
// import { getItem, setInfo } from '../../utils';
// import { useFormState } from '../../context';
// import update from 'immutability-helper';
// import { v1 as uuid } from 'uuid';
// import classnames from 'classnames';
// import _ from 'lodash';

// import './index.less';

// const FormContent: FC = () => {
//   const { formConfig, chooseOption, onChange, onChoose } = useFormState();
//   const sortableRef = useRef<any>();

//   /***
//    * @description 新增表单组件
//    * @param evt sortablejs实例
//    */
//   const handleOnAdd = (evt: SortableEvent | any) => {
//     const { clone: dragNode, to: toNode, newIndex } = evt;
//     if (typeof newIndex !== 'number') return;
//     const dragNodeType = dragNode.dataset.type;
//     const formConfigs = _.cloneDeep(formConfig);
//     const component = dragNodeType && ComponentStore.getComponent(dragNodeType);
//     if (!component) return;

//     const newConfig: ControlModel = {
//       id: uuid(),
//       name: component.name,
//       options: component.defaultOptions || {},
//     };

//     if (component.name === 'Container') {
//       newConfig.children = [];
//     }

//     const parentId = toNode.dataset.id;
//     const parent: any = getItem(parentId, formConfigs);
    
//     if (toNode.dataset.type === 'Container') {
//       parent.children.splice(newIndex, 0, newConfig);
//     } else {
//       if (!Array.isArray(parent)) {
//         parent.children.splice(newIndex, 0, newConfig);
//       } else {
//         parent.splice(newIndex, 0, newConfig);
//       }
//     }
//     onChange(formConfigs);
//   };

//   /***
//    * @description 表单排序改变
//    * @param evt sortablejs实例
//    */
//   const handleOnUpdate = (evt: SortableEvent | any) => {
//     const { oldIndex, newIndex } = evt;

//     // 父节点路径
//     const parentPath = evt.path[1].getAttribute('data-id');

//     // 父元素 根节点时直接调用data
//     let parent = parentPath ? getItem(parentPath, formConfig) : formConfig;

//     // 当前拖拽元素
//     const dragItem = parent[oldIndex];

//     // 更新后的父节点
//     parent = update(parent, {
//       $splice: [
//         [oldIndex, 1],
//         [newIndex, 0, dragItem],
//       ],
//     });

//     // 最新的数据 根节点时直接调用data
//     const Data = parentPath ? setInfo(parentPath, formConfig, parent) : parent;

//     onChange(Data);
//   };

//   /***
//    * @description 表单添加，更新
//    * @param evt sortablejs实例
//    */
//   const handleOnChange = (_: any, sortable: any, evt: SortableEvent) => {
//     if (evt.type === 'update') {
//       handleOnUpdate(evt);
//     }
//     if (evt.type === 'add') {
//       handleOnAdd(evt);
//     }
//   };

//   /***
//    * @description 表单组件选择
//    */
//   const handleOnChoose = (evt: SortableEvent | any) => {
//     const { oldIndex } = evt;
//     const latestConfig = sortableRef.current.props.config;
//     // 父节点路径
//     const parentPath = evt.path[1].getAttribute('data-id');

//     // 父元素 根节点时直接调用data
//     let parent = parentPath ? getItem(parentPath, latestConfig) : latestConfig;

//     // 当前拖拽元素
//     const dragItem = parent[oldIndex];
//     console.log(dragItem, parentPath);

//     onChoose(dragItem);
//   };

//   /***
//    * @description 表单组件删除
//    */
//   const handleOnDelete = () => {
//     if (chooseOption) {
//       const cloneConfig = _.cloneDeep(formConfig);
//       const parent = getItem(chooseOption.id, cloneConfig);
//       const index = parent.findIndex((item) => item.id === chooseOption.id);
//       parent.splice(index, 1);
//       onChoose();
//       onChange(cloneConfig);
//     }
//   };

//   /***
//    * @description 渲染
//    */
//   const renderSortable = (
//     data: ControlModel[],
//     wrapper?: boolean,
//     dataId?: string,
//     dataType?: string,
//   ) => {
//     return (
//       <ReactSortable
//         options={{
//           group: {
//             name: 'content',
//             pull: true,
//             put: true,
//           },
//           sort: true,
//           animation: 150,
//           onChoose: handleOnChoose,
//         }}
//         config={data}
//         onChange={handleOnChange}
//         ref={!wrapper ? sortableRef : null}
//         data-id={dataId}
//         data-type={dataType}
//         className={classnames({ 'editor-container editor-item': wrapper })}
//       >
//         {renderSortableItem(data)}
//       </ReactSortable>
//     );
//   };

//   const renderSortableItem = (config: ControlModel[]) => {
//     return _.map(config, (child: ControlModel) => {
//       const { options } = child;
//       const Item = ComponentStore.getComponent(child.name);
//       return (
//         <div
//           className="editor-item"
//           key={child.id}
//           data-id={child.id}
//           data-type={child.name}
//         >
//           <DeleteSortable
//             id={child.id}
//             chooseId={chooseOption && chooseOption.id}
//             onClick={handleOnDelete}
//           />
//           <Form.Item
//             label={options.label}
//             name={options.field}
//             required={options.required}
//           >
//             {child.children ? (
//               renderSortable(child.children, true, child.id, 'Container')
//             ) : (
//               <Item.View key={child.id} />
//             )}
//           </Form.Item>
//         </div>
//       );
//     });
//   };

//   return (
//     <Form layout="vertical" id="form-test">
//       {renderSortable(formConfig)}
//     </Form>
//   );
// };

// export default FormContent;
