import React, { FC } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useFormState } from '@/form/editor/context';
import { deleteItemById } from '@/form/editor/components/FormContent/utils';
import cloneDeep from 'lodash/cloneDeep';

interface IProps {
  id: string;
}

const DeleteSortable: FC<IProps> = ({ id }) => {
  const { formConfig, chooseOption, onChange, onChoose } = useFormState();
  /***
   * @description 表单组件删除
   */
  const handleOnDelete = () => {
    if (chooseOption) {
      const cloneConfig = cloneDeep(formConfig);
      deleteItemById(chooseOption.id, cloneConfig);
      onChoose();
      onChange(cloneConfig);
    }
  };

  return id === (chooseOption && chooseOption.id) ? (
    <DeleteOutlined className="editor-delete" onClick={handleOnDelete} />
  ) : null;
};

export default DeleteSortable;
