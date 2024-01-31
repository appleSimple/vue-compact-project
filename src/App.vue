<script setup lang="ts">
import { ref } from 'vue';
import ImageBlock from './components/ImageBlock.vue';
import StopWatch from './components/StopWatch.vue';
import { list } from './data/list';

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
    <div v-for="(element, index) in list" :key="index">
      <ImageBlock
        :img-url="element.imgUrl"
        :icon="element.icon"
        :title="element.title"
        :description="element.description"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
