<script lang="ts" setup>
import { onUnmounted, ref } from 'vue';

let timer: ReturnType<typeof setInterval>;

const time = ref<string>('00:00');
const startTime = ref(Date.now());
const pauseTime = ref();
const isPauseTime = ref(false);

onUnmounted(() => {
  clearTimer();
});

const clock = () => {
  const now = new Date(Date.now() - startTime.value);

  const hours = now.getUTCHours() * 60;
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes() + hours).padStart(2, '0');

  time.value = `${minutes}:${seconds}`;
};

const startWatch = () => {
  timer = setInterval(clock, 200);
};

const pauseWatch = () => {
  pauseTime.value = Date.now();
  clearTimer();
  isPauseTime.value = true;
};

const reStartWatch = () => {
  if (isPauseTime.value) {
    startTime.value += Date.now() - pauseTime.value;
    timer = setInterval(clock, 200);
    isPauseTime.value = false;
  }
};

const clearTimer = () => {
  clearInterval(timer);
};

defineExpose({
  startWatch,
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
