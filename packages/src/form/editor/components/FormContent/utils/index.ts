/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 17:50:14
 * @LastEditTime: 2019-10-12 14:45:21
 * @LastEditors: Please set LastEditors
 */

import { ControlModel } from '@/control/type';
import _ from 'lodash';

/**
 * 将下标数组转为数组
 * @param {String|Number} pathStr 字符串类型的树路径 例：2-3-4
 * return {Array}  数组类型
 */
const indexToArray = (pathStr: string | number) =>
  `${pathStr}`.split('-').map((n) => +n);

/**
 *
 * @param {String}  index  下标路径
 * @param {Array}  cards  treeData
 * @return {object}  返回详情对象
 */
const getCloneItem = (index: string | number, cards: {}[]) => {
  const arr = indexToArray(index);
  let result: any = {};
  arr.forEach((n) => {
    result = cards[n];
    cards = result.children;
  });
  return _.cloneDeep(result);
};
/**
 * 根据下标获取父节点
 * @param {String}   index  下标路径
 * @param {Array}    cards  treeData
 * @return {object}  返回详情对象
 */
const getItem = (pathIndex: string | number, cards: any[]) => {
  const arr = indexToArray(pathIndex);
  // 嵌套节点删除
  let parent: any;
  if (arr.length === 0) {
    return cards;
  }
  arr.forEach((item, index) => {
    if (index === 0) {
      parent = cards[item];
    } else {
      parent = parent.children[item];
    }
  });
  if (parent.children) return parent.children;
  return parent;
};

const getParent = (pathIndex: string | number, cards: any[]) => {
  const arr = indexToArray(pathIndex);
  // 嵌套节点删除
  let parent: any;
  arr.pop();
  if (arr.length === 0) {
    return cards;
  }
  arr.forEach((item, index) => {
    if (index === 0) {
      parent = cards[item];
    } else {
      parent = parent.children[item];
    }
  });
  if (parent.children) return parent.children;
  return parent;
};
/**
 * 根据路径删除数据
 * @param {*} index
 * @param {*} cards
 * @return {*}
 */
const itemRemove = (index: string | number, cards: any) => {
  let parent = getParent(index, cards);
  let arr = indexToArray(index);
  let getIndex = arr.pop();
  if (parent.children) {
    parent.children.splice(getIndex, 1);
    return cards;
  }
  parent.splice(getIndex, 1);
  return cards;
};
/**
 *
 * @param {*} index
 * @param {*} cards
 * @param {*} item
 */
const itemAdd = (
  index: string | number,
  cards: ControlModel[],
  item: ControlModel,
) => {
  let parent = getParent(index, cards);
  let arr = indexToArray(index);
  let getIndex = arr.pop();
  if (parent.children) {
    parent.children.splice(getIndex, 0, item);
    return cards;
  }
  parent.splice(getIndex, 0, item);
  return cards;
};
/**
 * 根据index设置排序
 * @param {Array}  arr   节点路径的数组格式
 * @param {Array}  treeData  树节点数据
 * @param {object} param   要替换的数据
 */
const setInfo = (arrPath: string | number, treeData: any[], param: any) => {
  const arr = indexToArray(arrPath);
  treeData = _.cloneDeep(treeData);
  let parent: any;
  arr.forEach((item, index) => {
    if (index == 0) {
      parent = treeData[item];
    } else {
      parent = parent.children[item];
    }
  });
  parent.children = param;
  return treeData;
};

/**
 *
 * @param {*} pathIndex
 */
const isPath = (pathIndex: string | number) => {
  let result = true;
  indexToArray(pathIndex).forEach((item) => {
    if (isNaN(item)) {
      result = false;
      return false;
    }
  });

  return result;
};
/**
 * 判断hover的路径是否为自己的子元素
 * @param {String} dragIndex
 * @param {String} hoverIndex
 */
const isChildrenPath = (dragIndex: any, hoverIndex: any) => {
  let dragIndexArr = String(dragIndex).split('-');
  let hoverIndexArr = String(hoverIndex).split('-');

  if (hoverIndexArr > dragIndexArr) {
    let sliceArr = hoverIndexArr.slice(0, dragIndexArr.length);
    if (sliceArr.join('-') === dragIndexArr.join('-')) {
      return true;
    }
  }
  return false;
};
/**
 * 根据数组路径 生成所有父级别的路径
 * @param {String} index
 */
const generatePathArr = (index: any) => {
  let arr: string[] = [];
  let indexArr = String(index).split('-');
  let data = Array.from(indexArr);

  indexArr.forEach((item, i) => {
    data.pop();
    arr.push(Array.from(data).join('-'));
  });
  arr.pop();
  return arr;
};

const deleteItemById = (id: string, arr: any) => {
  let parent: any;
  const getParentById = (id: string, config: ControlModel[]) => {
    config.forEach((item) => {
      if (item.id === id) {
        parent = config;
      } else if (item.children) {
        getParentById(id, item.children);
      }
    });
  };
  getParentById(id, arr);
  if (parent) {
    const index = parent.findIndex((item: { id: string }) => item.id === id);
    parent.splice(index, 1);
  }
  return parent;
};

export {
  deleteItemById,
  indexToArray,
  getParent,
  setInfo,
  isChildrenPath,
  generatePathArr,
  isPath,
  getCloneItem,
  getItem,
  itemRemove,
  itemAdd,
};
