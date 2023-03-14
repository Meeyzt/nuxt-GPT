<template>
  <div class="fixed bottom-0 left-0 w-full bg-[#222]">
    <div class="w-full h-fit relative flex">
      <input :disabled="gpt.isLoading" v-model="prompt" class="w-full min-h-10 h-fit bg-[#555] border-t border-[#444] outline-none text-white/80 px-4 py-2 placeholder:text-[#777] font-normal" placeholder="Enter Prompt" type="text" @keyup.enter="sendPrompt" />
      <button @click="sendPrompt" class="h-fit border border-[#666] px-1 py-0.5 text-xs absolute right-1.5 text-[#666] rounded-lg top-1.5 bottom-1 leading-6 hover:border-[#888] hover:text-[#888]">Enter</button>
    </div>

    <header class="h-16 border-[#444] border-t flex gap-4 px-4 items-center w-full justify-between">
      <button class="border-[#bf0407ab] bg-[#9c00039f] opacity-60 text-gray-100 border py-2 px-5 rounded-lg hover:bg-[#9c0003] hover:border-[#bf0407] hover:text-[#fff] focus:ring-2 focus:ring-[#bf0407ab]">
        Exit
      </button>

      <button @click="resetChat" class="border-[#444] bg-[#222] text-[#999] border py-2 px-3 rounded-lg hover:bg-[#333] hover:border-[#555] hover:text-[#ffffffa3] focus:ring-2 focus:ring-[#555]">
        Reset Chat
      </button>
    </header>
  </div>
</template>

<script setup>
const prompt = ref('');

const gpt = useGpt();

function resetChat() {
  gpt.resetChat();
}

async function sendPrompt() {
  gpt.isLoading = true;

  await gpt.getPrompt(prompt.value);

  gpt.isLoading = false;
  prompt.value = '';
}
</script>

<!-- Nuxt store
<script setup>
const store = useStore()
const { data } = await useAsyncData('user', () => store.fetchUser())
</script> -->
