<template>
  <div class="flex flex-col-reverse gap-6 py-6 px-4 overflow-auto h-full">
    <!-- role asistant -->
    <div
      v-for="(message, index) in gpt.messages"
      :key="index"
      :class="message.role === 'assistant' ? 'assistant-transition': 'flex-row-reverse user-transition'"
      class="w-full flex items-end h-fit gap-3"
    >
      <div
        v-if="message.role === 'assistant'"
        class="w-8 h-8 bg-green-900/30 rounded-full ring-2 ring-green-500/30 text-white/30 flex items-center justify-center font-bold text-2xl select-none flex-shrink-0"
      >
        A
      </div>

      <md-block
        class="border rounded-md border-[#333] h-full min-w-1/2 max-w-full ring-[#444] ring-2 p-2 text-[#999]"
      >
        {{ message.content }}
      </md-block>
    </div>
  </div>
</template>

<script setup>
import api from '../utils/api';

api.defaults.headers.common['Authorization'] = `Bearer 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`;

const gpt = useGpt();

</script>

<style>
@keyframes slide-left {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slide-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.assistant-transition:first-child {
  animation-duration: 1s;
  animation-name: slide-left;
}

.user-transition:first-child {
  animation-duration: 1s;
  animation-name: slide-right;
}
</style>
