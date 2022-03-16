---
title: 上下布局 
order: 1
group:
  title: 基础布局
  order: 2
---


# 上下布局

页面内容分为上下两部分，上面是 `导航 + 标题 + 其他(搜索框，筛选区域，查询按钮等)`

下面是主要信息部分，支持一个或者多个块状结构，块内元素开发者自定义




## 代码演示

### 基本用法

**注意 ⚠️ demo-window-out 和 demo-window 是为了模拟浏览器大小，实际开发不用引入这两个dom**

<code src="./demo/basic"></code>  

<code src="./demo"></code>  

<code src="./demo/buttonExt"></code>  


## API


`上下布局`页面参数说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | 页面标题 | string | `null` |
| breadcrumb | 面包屑 | [Breadcrumb](./breadcrumb) | `null` |
| showSearch | 是否展示搜索框 | [SearchInput](./search-input) | - |  |
| topInnerComponent | 上面其他组件 | JSX.Element | `null` |  |
| downInnerComponents | 下面内部组件 | JSX.Element[] | JSX.Element | `null` |  |

支持原生 button 的其他所有属性。
