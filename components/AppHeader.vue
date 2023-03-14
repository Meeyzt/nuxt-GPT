<template>
  <header
    class="h-16 border-[#444] text-lg border-b flex gap-4 px-4 items-center text-[#999] relative"
  >
    <div v-if="gpt.isLoading" class="loading-bar">
      <div class="loading-transition"></div>
    </div>
    Chat MEMED
  </header>
</template>

<script setup>
const gpt = useGpt();
</script>

<style>
@keyframes loading {
  0% {
    width: 10%;
    transform: translateX(0);
  }

  50% {
    width: 60%;
  }

  100% {
    width: 10%;
    transform: translateX(100vw);
  }
}

.loading-bar  {
  width: 100%;
  height: 4px;
  background: gray;
  position: absolute;
  top: 0;
  left: 0;
}

.loading-transition {
  width: 10%;
  height: 3px;
  border-radius: 100%;
  background: rebeccapurple;

}

.loading-bar > .loading-transition {
  animation: infinite loading 10s;
}
</style>
