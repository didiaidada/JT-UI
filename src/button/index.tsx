import React from 'react';
import { Button as AntButton, ButtonProps as AntdButtonProps } from 'antd';
import classNames from 'classnames';
import './style';

export type ButtonProps = { size?: 'big' | 'default' } & {
  type?: 'primary' | 'minor' | 'text' | 'link' | 'default';
} & Omit<AntdButtonProps, 'size' | 'type'>;

const Button: React.FC<ButtonProps> = ({ size = 'default', type = 'default', ...rest }) => {
  const classes = classNames(
    {
      'jiuTian-button': true,
      [`button-type-${type}`]: type,
      [`button-size-${size}`]: size,
    },
    rest.className,
  );
  const nextProps = Object.assign({}, { ...rest }, { className: classes });
  return <AntButton {...nextProps} />;
};

export default Button;
