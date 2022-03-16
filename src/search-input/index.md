---
title: SearchInput 搜索框
order: 2
group:
  title: 基础组件
  order: 1
---

# SearchInput 搜索框

JT-UI 提供的搜索 🔍 输入框，默认点击 回车 搜索。大小默认为 292 * 32 ，支持传入 className 改变搜索框大小和样式。



## 代码演示

### 基本用法

```jsx

import React from 'react';
import SearchInput  from '.';

export default () => <SearchInput placeholder='按下回车搜索' onPressEnter={(e) => {console.log(e)}}/>

```

## API


SearchInput 的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| placeholder | placeholder | `string`  | - |
| onPressEnter | 按下回车的回调 |`function(e)` | - |  |
| className | className | `string` | - |  |

