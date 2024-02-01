<script lang="ts" setup>
import { PropType } from 'vue';
import { FolderType } from '../../types/folder';

const props = defineProps({
  folderList: {
    type: Array as PropType<FolderType[]>,
    required: true,
  },
});
</script>

<template>
  <ul v-for="(folder, index) in props.folderList" :key="`${folder.id}-${index}`">
    <li :folder="folder">{{ folder.title }} / id: {{ folder.id }} / depth: {{ folder.depth }} / parent: {{ folder.parent || 'null' }}</li>
    <div v-if="folder.children.length > 0">
      <RawFolderList :folderList="folder.children" />
    </div>
  </ul>
</template>