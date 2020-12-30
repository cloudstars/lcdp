import React, { FC } from 'react';

const BasicLayout: FC = (props) => {
  console.log('render----');

  return <>{props.children}</>;
};

export default BasicLayout;
