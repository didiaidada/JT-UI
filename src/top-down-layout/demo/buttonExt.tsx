import React from 'react';
import TopBottomLayout from '..';
import Button from '../../button';
import './index.less';

const showSearch = {
  placeholder: '点击回车搜索',
  onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => console.log(e),
};

const pathList = [
  { label: 'label1', url: '' },
  { label: 'button', url: '/button' },
];

const upInnerComponent = () => (
  <div style={{ paddingTop: '24px' }}>开发者自定义组件区域 upInnerComponent</div>
);
const downInnerComponentList = () => (
  <Button>开发者自定义组件区域 可以1个或者多个 downInnerComponents</Button>
);

// const extra = () => (<Button type="primary" size="big">确认</Button>);

const breadcrumb = {
  pathList,
  // extra: extra(),
};
export default () => (
  <div className="demo-window-out">
    <div className="demo-window">
      <TopBottomLayout
        title="测试标题"
        breadcrumb={breadcrumb}
        topInnerComponent={upInnerComponent()}
        showSearch={showSearch}
        downInnerComponents={[
          downInnerComponentList(),
          downInnerComponentList(),
          downInnerComponentList(),
        ]}
      />
    </div>
  </div>
);
