<script lang="ts" setup>
import { ref } from 'vue';
import FolderTree from '../../components/folder/FolderTree.vue';
import RawFolderList from '../../components/folder/RawFolderList.vue';
import { FOLDER_LIST } from '../../data/folder-list';
import { FolderType } from '../../types/folder';

const folderList = ref<FolderType[]>(FOLDER_LIST);

const setKeys = () => {
  const _folderList = folderList.value;
  loopTree(_folderList, 0, null);

  folderList.value = _folderList;
};

const loopTree = (
  array: FolderType[],
  depth: number,
  parentId: number | null
) => {
  const list = array;

  for (let i = 0; i < list.length; i += 1) {
    const _parentId = list[i].id;

    list[i].depth = depth;
    list[i].parent = parentId;

    if (list[i].children.length > 0) {
      const _depth = depth + 1;
      loopTree(list[i].children, _depth, _parentId);
    }
  }
};
</script>

<template>
  <div class="folder-list">
    <div class="folder-tree">
      <FolderTree :folder-list="folderList" @set-keys="setKeys" />
    </div>
    <div class="tree">
      <RawFolderList :folder-list="folderList" />
    </div>
  </div>
</template>

<style lang="scss">
.folder-list {
  display: flex;

  .folder-tree {
    flex: 1;
  }

  .tree {
    flex: 1;
  }
}
</style>
