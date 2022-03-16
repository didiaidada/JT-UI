---
title: Button 按钮
order: 1
group:
  title: 基础组件
  order: 1
---

# Button 按钮

JT-UI 依据按钮的  `size` 提供2种类型的按钮，大按钮（`big`）和小按钮（`default`）。


依据按钮的  `type` 提供5种类型的按钮, 主要按钮（`primary`），默认按钮（`default`），次要按钮（`minor`），文本按钮（`text`），链接按钮（`link`）。


## 代码演示

### 基本用法

<code src="./demo/basic.tsx"></code>

## API


按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| size | 按钮的大小（ `big`高度为 40px, `default` 高度为32px） | `big` \|`default`  | `default` |
| type | 设置按钮类型 | `primary` \| `minor` \| `link` \| `text` \| `default` | `default` |  |
| danger | 设置危险按钮 | boolean | false |  |
| disabled | 按钮失效状态 | boolean | false |  |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| icon | 设置按钮的图标组件 | ReactNode | - |  |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false |  |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | `default` |  |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| onClick | 点击按钮时的回调 | (event) => void | - |  |

支持原生 button 的其他所有属性。
