import api from '../utils/api';

interface completion {
  role: String,
  content: String
}

interface completions extends Array<completion>{}

export const useGpt = defineStore('gpt', () => {

  const messages = ref<completions>([]);
  const isLoading = ref(false);

  function getPrompt(prompt: string) {
    return new Promise(async(resolve, reject) => {
      try {
        const payload = { role: "user", content: prompt } as completion;
        messages.value.unshift(payload);

        const response = await api.post('/chat/completions', {
          "model": "gpt-3.5-turbo",
          "messages": [...messages.value].reverse(),
        });

        const msgs:Array<any> = response.data.choices.map((c:any) => c.message);
        messages.value.unshift(...msgs);
        resolve('OK');
      } catch(err) {
        console.log(err);
        reject(err);
      }
    })
  }

  function resetChat() {
    messages.value = [];
  }

  return { messages, isLoading, getPrompt, resetChat };
});
