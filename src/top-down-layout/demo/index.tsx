import React from 'react';
import TopBottomLayout from '..';
import './index.less';

const showSearch = {
  placeholder: '点击回车搜索',
  onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => console.log(e),
};

const pathList = [
  { label: 'label1', url: '' },
  { label: 'button', url: '/button' },
];

const breadcrumb = {
  pathList,
};
export default () => (
  <div className="demo-window-out">
    <div className="demo-window">
      <TopBottomLayout title="测试标题" showSearch={showSearch} breadcrumb={breadcrumb} />
    </div>
  </div>
);
