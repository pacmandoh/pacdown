const isFullScreen = ref(false)

export const useFullScreen = () => {
  return isFullScreen
}

export const useToggleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value
}
