import { onMounted, onUnmounted, ref } from 'vue';

export function useStopWatch() {
  let timer: ReturnType<typeof setInterval>;
  
  const time = ref<string>('00:00');
  const startTime = ref(Date.now());
  const pauseTime = ref();
  const isPauseTime = ref(false);

  function clock() {
    const now = new Date(Date.now() - startTime.value);

    const hours = now.getUTCHours() * 60;
    const minutes = String(now.getUTCMinutes() + hours).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    
    time.value = `${minutes}:${seconds}`;
  }
  
  function startWatch() {
    timer = setInterval(clock, 200);
  }

  function clearTimer() {
    clearInterval(timer);
  }

  const pauseWatch = () => {
    pauseTime.value = Date.now();
    clearTimer();
    isPauseTime.value = true;
  };

  const reStartWatch = () => {
    if (isPauseTime.value) {
      startTime.value += Date.now() - pauseTime.value;
      startWatch();
      isPauseTime.value = false;
    }
  };

  onMounted(() => startWatch());

  onUnmounted(() => clearTimer());

  return { time, pauseWatch, reStartWatch };
}
