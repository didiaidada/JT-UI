import React from 'react';
import { Input } from 'antd';
import classNames from 'classnames';
// @ts-ignore
import searchIcon from './search.svg';
import './index.less';

export type ISearchInput = {
  placeholder: string;
  onPressEnter: (value: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
};

const SearchInput = (props: ISearchInput) => {
  const [inputValue, setInputValue] = React.useState('');

  const handlePressEnter = (
    e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) => {
    if (!props.onPressEnter) return;
    props.onPressEnter(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const classes = classNames(
    {
      'jt-search-input': true,
    },
    props.className,
  );
  return (
    <Input
      placeholder={props.placeholder}
      className={classes}
      prefix={<img alt="search" src={searchIcon} />}
      value={inputValue}
      onChange={handleChange}
      onPressEnter={handlePressEnter}
    />
  );
};
export default SearchInput;
