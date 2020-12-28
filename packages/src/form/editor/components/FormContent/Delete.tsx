import React, { FC } from 'react';
import { DeleteOutlined } from '@ant-design/icons';

interface IProps {
  id: string;
  chooseId?: string;
  onClick: () => void;
}

const DeleteSortable: FC<IProps> = ({ id, chooseId, onClick }) => {
  return id === chooseId ? (
    <DeleteOutlined className="editor-delete" onClick={onClick} />
  ) : null;
};

export default DeleteSortable;
