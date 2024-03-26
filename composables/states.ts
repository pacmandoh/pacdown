const isFullScreen = ref(false)

export const useFullScreen = () => {
  const ToggleFullScreen = () => {
    isFullScreen.value = !isFullScreen.value
  }
  return { isFullScreen, ToggleFullScreen }
}
