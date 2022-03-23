import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SearchOutlined } from '@ant-design/icons';
import Button from '..';
import './index.less';

export default () => (
  <React.Fragment>
    <h1>大按钮</h1>
    <div className="demo-button-section">
      <Button type="primary" size="big">
        取消
      </Button>
      <Button type="default" size="big">
        default
      </Button>
      <Button type="minor" size="big" danger icon={<SearchOutlined />}>
        minor
      </Button>
    </div>
    <h1>小按钮</h1>
    <div className="demo-button-section">
      <Button type="primary">确认</Button>
      <Button type="default">default</Button>
      <Button type="minor">minor</Button>
    </div>
    <h1>文字按钮</h1>
    <div className="demo-button-section">
      <Button type="text">text</Button>
    </div>
    <h1>链接按钮</h1>
    <div className="demo-button-section">
      <Button type="link">link</Button>
    </div>
  </React.Fragment>
);
