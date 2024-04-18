<template>
  <div v-if="isLoading" class="sk-cube-grid">
    <div class="sk-cube sk-cube-1" />
    <div class="sk-cube sk-cube-2" />
    <div class="sk-cube sk-cube-3" />
    <div class="sk-cube sk-cube-4" />
    <div class="sk-cube sk-cube-5" />
    <div class="sk-cube sk-cube-6" />
    <div class="sk-cube sk-cube-7" />
    <div class="sk-cube sk-cube-8" />
    <div class="sk-cube sk-cube-9" />
  </div>
  <div id="vditor" style="border: 1px;" />
</template>

<script setup lang="ts">
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import pkg from '~/package.json'

const vditorVersion = pkg.dependencies.vditor.replace('^', '')
console.groupCollapsed('[vditor info | 信息]:')
console.log('➜ [vditor.version]: ', vditorVersion)
console.groupEnd()

const props = defineProps({
  content: {
    type: String,
    required: true,
    default: ''
  }
})

const vditor = ref<Vditor | null>(null)
const mode = useColorMode()
const unwatchRef = ref(null)
const isLoading = ref(true)
const { width } = useWindowSize()
const renderMode = computed(() => width.value >= 1024 ? 'sv' : 'ir')

// option
const CDN = `https://imgbucket-1318471229.cos.ap-beijing.myqcloud.com/cdnjs/vditor%40${vditorVersion}`
const option: IOptions = {
  cdn: CDN,
  height: '100%',
  width: '100%',
  mode: renderMode.value,
  theme: mode.preference === 'dark' ? 'dark' : 'classic',
  counter: {
    enable: true
  },
  icon: 'ant',
  preview: {
    theme: {
      current: mode.preference === 'dark' ? 'dark' : 'light',
      path: `${CDN}/dist/css/content-theme`
    },
    hljs: {
      lineNumber: true
    }
  },
  upload: {
    url: 'https://api.crybabyaq.love/proxy',
    linkToImgUrl: 'https://api.crybabyaq.love/proxy',
    accept: 'image/*',
    multiple: false,
    fieldName: 'file',
    success(_, msg) {
      vditor.value.insertValue(`![${JSON.parse(msg).date}](${JSON.parse(msg).file_url})`)
    }
  },
  toolbar: [
    'emoji',
    'headings',
    'bold',
    'italic',
    'strike',
    'link',
    '|',
    'list',
    'ordered-list',
    'check',
    'outdent',
    'indent',
    '|',
    'quote',
    'line',
    'code',
    'inline-code',
    'insert-before',
    'insert-after',
    '|',
    'upload',
    'record',
    'table',
    '|',
    'undo',
    'redo',
    '|',
    {
      name: 'fullscreen',
      click() { useFullScreen().ToggleFullScreen() }
    },
    'edit-mode',
    {
      name: 'more',
      toolbar: [
        'both',
        'code-theme',
        'content-theme',
        'export',
        'outline',
        'preview',
        'devtools',
        'info',
        'help'
      ]
    }
  ],
  outline: {
    enable: true,
    position: 'left'
  },
  hint: {
    emojiPath: `${CDN}/dist/images/emoji`
  },
  cache: {
    id: 'vditor'
  },
  after: () => {
    vditor.value!.setValue(localStorage.getItem('pacdown') || props.content)
    unwatchRef.value = watch(mode, (oVal, nVal) => {
      vditor.value.setTheme(nVal.preference === 'dark' ? 'dark' : 'classic', nVal.preference)
    })

    nextTick(() => {
      isLoading.value = false
    })
  }
}

// init vditor
const initVditor = () => {
  vditor.value = new Vditor('vditor', option)
}

// destroy vditor
const destroyVditor = () => {
  if (vditor.value) {
    vditor.value.destroy()
    vditor.value = null
  }

  // watch clean
  if (unwatchRef.value) {
    unwatchRef.value()
  }
}

// save cache
const transCache = () => {
  if (localStorage.getItem('vditor')) localStorage.setItem('pacdown', localStorage.getItem('vditor'))
}

onMounted(() => {
  transCache()
  initVditor()
})

onBeforeUnmount(() => {
  transCache()
  destroyVditor()
})
</script>

<style scoped lang="postcss">
.sk-cube-grid {
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 7em;
  height: 7em;
  margin: auto;
}
.sk-cube {
  width: 33%;
  height: 33%;
  float: left;
  animation: sk-cube-grid-scale-delay 1.3s infinite ease-in-out;
  @apply bg-primary-500 dark:bg-primary-400
}
.sk-cube-1 {
  animation-delay: 0.2s;
}
.sk-cube-2 {
  animation-delay: 0.3s;
}
.sk-cube-3 {
  animation-delay: 0.4s;
}
.sk-cube-4 {
  animation-delay: 0.1s;
}
.sk-cube-5 {
  animation-delay: 0.2s;
}
.sk-cube-6 {
  animation-delay: 0.3s;
}
.sk-cube-7 {
  animation-delay: 0s;
}
.sk-cube-8 {
  animation-delay: 0.1s;
}
.sk-cube-9 {
  animation-delay: 0.2s;
}
@keyframes sk-cube-grid-scale-delay {
  0%, 70%, 100% {
    transform: scale3D(1,1,1);
  }
  35%           {
    transform: scale3D(0,0,1);
  }
}
</style>
