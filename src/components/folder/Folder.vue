<template>
  <div class="folder-wrapper">
    <input type="radio" :id="`total-folders-${props.folder.id}`" name="folder-list">
    <label
      :for="`total-folders-${props.folder.id}`"
      class="folder-radio"
      :class="{ child: props.folder.depth > 1 }"
    >
      <div class="title">{{ props.folder?.title }}</div>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { FolderType } from '../../types/folder';

const props = defineProps({
  folder: {
    type: Object as PropType<FolderType>,
    required: true,
  },
});
</script>

<style lang="scss">
.folder-wrapper {
  margin: 10px;
  input {
    display: none;
    &:checked {
      &+.folder-radio {
        background-color: rgba(38, 52, 70, 0.08);
        outline: 2.4px solid #566FF2;
      }
    }
  }
  .folder-radio {
    padding: 18px 20px;
    border-radius: 8px;
    background-color: #f7f8fa;
    display: flex;
    gap: 14px;
    align-items: center;
    cursor: default;
  
    &:hover {
      background-color: rgba(38, 52, 70, 0.08);
  
    }
  
    .title {
      color: #5b6676;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: -0.32px;
    }
  }
}
</style>
