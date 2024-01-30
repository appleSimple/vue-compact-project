<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ImageBlock from './components/ImageBlock.vue';
import StopWatch from './components/StopWatch.vue';
import CubeIcon from './icons/CubeIcon.vue';

const blockData = {
  imgUrl: '/vite.svg',
  icon: CubeIcon,
  title: '타이틀',
  description: '디스크립션입니다.디스크립션입니다.디스크립션입니다.디스크립션입니다.',
};

const stopWatch = ref<InstanceType<typeof StopWatch> | null>(null);

onMounted(() => {
  stopWatch.value?.startWatch();
});

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
    <ImageBlock
      :img-url="blockData.imgUrl"
      :icon="blockData.icon"
      :title="blockData.title"
      :description="blockData.description"
    />
  </div>
</template>

<style lang="scss" scoped></style>
