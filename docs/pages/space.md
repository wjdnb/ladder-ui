# space

## 基本使用

:::demo

```html
<template>
  <l-space>
    <button>123</button>
    <button>456</button>
    <button>789</button>
  </l-space>
</template>
```

:::

## 调整间距

使用 size 属性调整间距

:::demo

```html
<template>
  <l-space :size="50">
    <button>123</button>
    <button>456</button>
    <button>789</button>
  </l-space>
</template>
```

:::

## 自定义分割符

使用 `split` 属性自定义分割符号

:::demo

```html
<template>
  <l-space split="|">
    <button>123</button>
    <button>456</button>
    <button>789</button>
  </l-space>
</template>
```

:::

## 调整位置

使用 `justify` 和 `align` 属性调整布局位置

:::demo

```html
<template>
  <l-space justify="flex-end" :size="50">
    <button>123</button>
    <button>456</button>
    <button>789</button>
  </l-space>
</template>
```

:::

## API

| 参数      | 说明         | 类型               | 可选值                                                              | 默认值   |
| --------- | ------------ | ------------------ | ------------------------------------------------------------------- | -------- |
| `justify` | 调整文字位置 | `string`           | `flex-start`, `center` ,`flex-end`, `space-between`, `space-around` | `center` |
| `size`    | 调整间距     | `string`, `number` | `small`, `medium`, `large`, `number`                                | `medium` |
| `split`   | 使用虚线     | `any`              | `any`                                                               | `false`  |
| `align`   | 使用虚线     | `string`           | `flex-end`, `flex-start`                                            | `center` |
