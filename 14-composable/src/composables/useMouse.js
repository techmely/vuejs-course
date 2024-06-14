import { onMounted, onUnmounted, ref } from 'vue'

export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  const update = (event) => {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousedown', update))
  onUnmounted(() => window.removeEventListener('mousedown', update))

  return { x, y }
}
