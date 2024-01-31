<script lang="ts" setup>
import { useStopWatch } from '../utils/stopWatch';

const { time, pauseWatch, reStartWatch } = useStopWatch();

defineExpose({
  reStartWatch,
  pauseWatch,
});
</script>

<template>
  <div class="stop-watch">
    <span class="time">
      {{ time }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.stop-watch {
  width: 113px;
  height: 60px;
  margin-bottom: 10px;
  background-color: #000;
  border-radius: 12px;
  color: #fff;
  line-height: 51px;
  display: block;
  font-weight: 600;
  font-size: 20px;

  .time {
    position: absolute;
    top: 14px;
    left: 34px;
    letter-spacing: 3px;
  }
}
</style>
