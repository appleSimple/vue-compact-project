<script lang="ts" setup>
import { PropType } from 'vue';
import draggable from 'vuedraggable';
import Folder from './Folder.vue';
import { FolderType } from '../../types/folder';

const props = defineProps({
  folderList: {
    type: Array as PropType<FolderType[]>,
    required: true,
  },
});

const emits = defineEmits(['setKeys']);

const dragDrop = () => {
  emits('setKeys');
};
</script>

<template>
  <draggable
    class="dragArea list-group"
    tag="div"
    :list="props.folderList"
    item-key="id"
    group="folders"
    animation="300"
    :onChange="dragDrop"
  >
    <template #item="{ element }">
      <div>
        <Folder :folder="element" />
        <FolderTree :folderList="element.children" @set-keys="dragDrop" />
      </div>
    </template>
  </draggable>
</template>

<style lang="scss" scoped>
.dragArea {
  padding-left: 20px;
}
</style>
