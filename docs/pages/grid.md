# 完善中 ✍️

<!-- # Grid

## 基本使用

:::demo

```html
<template>
  <l-row>
    <l-col><div class="grid">1</div></l-col>
  </l-row>

  <l-row>
    <l-col :span="8"><div class="grid">2</l-col>
    <l-col :span="8"><div class="grid">3</l-col>
    <l-col :span="8"><div class="grid">4</l-col>
  </l-row>
</template>

<style>
  .grid {
    padding: 20px;
    background-color: #333;
  }

</style>

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

::: -->
