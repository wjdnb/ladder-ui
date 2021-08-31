# Divider

## 基本使用

使用 `text-align` 属性调整文字位置。默认为 `center`

:::demo

```html
<template>
  <l-divider text-align="left">独夜无伴守灯下</l-divider>
  <l-divider text-align="center">清风对面吹</l-divider>
  <l-divider text-align="right">十七八岁未出嫁</l-divider>
</template>
```

:::

## 虚线

使用 `dashed` 属性将分割线改为虚线

:::demo

```html
<template>
  <l-divider dashed>想着少年家</l-divider>
</template>
```

:::

## API

| 参数       | 说明         | 类型      | 可选值                        | 默认值   |
| ---------- | ------------ | --------- | ----------------------------- | -------- |
| text-align | 调整文字位置 | `string`  | `left` \| `center` \| `right` | `center` |
| dashed     | 使用虚线     | `boolean` | `true` \| `false`             | `false`  |
