import React from 'react';
import TopBottomLayout from '..';
import Button from '../../button';
import './index.less';

// const showSearch = {
//   placeholder: '点击回车搜索',
//   onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => console.log(e),
// };

const pathList = [
  { label: 'label1', url: '' },
  { label: 'button', url: '/button' },
];
const extra = () => (
  <Button type="primary" size="big">
    确认
  </Button>
);

const breadcrumb = {
  pathList,
  extra: extra(),
};
export default () => (
  <div className="demo-window-out">
    <div className="demo-window">
      <TopBottomLayout title="测试标题" breadcrumb={breadcrumb} />
    </div>
  </div>
);
