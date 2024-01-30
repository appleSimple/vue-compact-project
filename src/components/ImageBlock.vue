<script lang="ts" setup>
import type { Component } from 'vue';

const props = defineProps({
  imgUrl: {
    type: String,
    default: '',
  },
  icon: {
    type: Object as () => Component,
    default: null,
  },
  title: {
    type: String,
    default: 'title',
  },
  description: {
    type: String,
    default: '', // 말줄임처리
  },
});
</script>

<template>
  <li :class="$style['image-block']">
    <img :src="props.imgUrl" :alt="props.title" />
    <div :class="$style.title">
      <component :is="props.icon"></component>
      <span>{{ props.title }}</span>
    </div>
    <div :class="$style.description">
      {{ props.description }}
    </div>
  </li>
</template>

<style lang="scss" module>
$main-black: #404040;
.image-block {
  width: 250px;
  height: 360px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid $main-black;
  border-radius: 8px;
  list-style: none;

  img {
    width: 100%;
  }
  .title {
    margin: 10px 0;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 700;
    color: $main-black;
  }

  .description {
    color: $main-black;
    text-align: left;
  }
}
</style>
