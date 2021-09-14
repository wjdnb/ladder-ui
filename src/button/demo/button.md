# Button

## 基本使用

使用 `type` 设置按钮样式，`round` 控制按钮圆角

:::demo

```html
<template>
  <l-space>
    <l-button>Default</l-button>
    <l-button type="primary">Primary</l-button>
    <l-button type="danger">Danger</l-button>
    <l-button type="link">Link</l-button>
    <l-button type="primary" round>Primary</l-button>
  </l-space>
</template>
```

:::

## 图标按钮

图标配合按钮使用

:::demo

```html
<template>
  <l-button>
    <template #icon> 🌈 </template>
    Rainbow
  </l-button>
</template>
```

:::

## 按钮尺寸

使用 `size` 属性设置按钮大小，默认为 `medium`

:::demo

```html
<template>
  <l-space>
    <l-button type="primary" size="mini">Mini</l-button>
    <l-button type="primary" size="small">Small</l-button>
    <l-button type="primary">Medium</l-button>
    <l-button type="primary" size="large">Large</l-button>
  </l-space>
</template>
```

:::

## 调整文字间距

使用 `space` 属性调整按钮内文字间距

:::demo

```html
<template>
  <l-space>
    <l-button type="primary" :space="3">宽距按钮</l-button>
  </l-space>
</template>
```

:::

## 禁用按钮

使用 `disabled` 属性设置按钮是否禁用

:::demo

```html
<template>
  <l-space>
    <l-button type="primary" disabled>禁用</l-button>
  </l-space>
</template>
```

:::

## API

| 参数     | 说明         | 类型      | 可选值                                   | 默认值    |
| -------- | ------------ | --------- | ---------------------------------------- | --------- |
| type     | 调整按钮样式 | `string`  | `primary` \| `danger` \| `link`          | `default` |
| size     | 调整按钮大小 | `string`  | `mini` \| `small` \| `medium` \| `large` | `medium`  |
| disabled | 是否禁用按钮 | `boolean` |                                          | `false`   |
| round    | 是否圆角按钮 | `boolean` |                                          | `false`   |
