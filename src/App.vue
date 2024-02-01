<script setup lang="ts">
import { ref } from 'vue';
import ImageBlock from './components/ImageBlock.vue';
import StopWatch from './components/StopWatch.vue';
import { CARD_LIST } from './data/card-list';
import FolderList from './components/folder/FolderList.vue';

const stopWatch = ref<InstanceType<typeof StopWatch> | null>(null);

function pauseWatch() {
  stopWatch.value?.pauseWatch();
}

function reStartWatch() {
  stopWatch.value?.reStartWatch();
}
</script>

<template>
  <div>
    <StopWatch ref="stopWatch" />
    <div>
      <button type="button" @click="pauseWatch">일시정지</button>
      <button type="button" @click="reStartWatch">다시시작</button>
    </div>
    <div class="card-wrapper">
      <template v-for="(element, index) in CARD_LIST" :key="index">
        <ImageBlock
          :img-url="element.imgUrl"
          :icon="element.icon"
          :title="element.title"
          :description="element.description"
        />
      </template>
    </div>
    <FolderList />
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}
</style>
