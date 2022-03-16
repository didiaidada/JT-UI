---
title: Breadcrumb 面包屑
order: 3
group:
  title: 基础组件
  order: 1
---

# Breadcrumb 面包屑

Breadcrumb 复制于 app-factory-fe/src/app/components/sc-breadcrumb, 内部逻辑暂未修改,部分样式设置不合理，后续会调整

Breadcrumb 变更 antd Breadcrumb 的部分样式，且支持引入子组件


## 代码演示

### 基本用法

```jsx

import React from 'react';
import Breadcrumb  from '.';

const pathList = [
        {label: 'label1', url: ''},
        {label: 'button', url: '/button'},
    ];

export default () => <Breadcrumb pathList={pathList} />

```

## API

```tsx

interface Ipath {
  label: string;
  url: string;
}
```
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| pathList | 面包屑数据数组，包含文本和链接 | Ipath[] | - |
| extra | 附加组件 | React.Component | - |  |
| title | 面包屑下面的标题 | `string` | - |  |



