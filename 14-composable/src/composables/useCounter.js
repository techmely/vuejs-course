import { onMounted, ref } from 'vue'

export const useCounter = () => {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  onMounted(() => {
    count.value = 5
  })

  return { count, increment, decrement }
}
