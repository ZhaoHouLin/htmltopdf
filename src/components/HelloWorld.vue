
<script>
import { ref } from 'vue'
export default {

  props: {
    msg: {
      type: String
    }
  },

  setup(props) {
    const count = ref(0)
    return { 
      count, 
      props
    }
  },
}
</script>

<template lang="pug">
h1 {{ props.msg }}
p
  | Recommended IDE setup:
  a(href='https://code.visualstudio.com/' target='_blank') VSCode
  |     +
  a(href='https://github.com/johnsoncodehk/volar' target='_blank') Volar
p
  a(href='https://vitejs.dev/guide/features.html' target='_blank')
    | Vite Documentation
  |     |
  a(href='https://v3.vuejs.org/' target='_blank') Vue 3 Documentation
button(type='button' @click='count++') count is: {{ count }}
p
  | Edit
  code components/HelloWorld.vue
  |  to test hot module replacement.

</template>

<style lang='stylus' scoped>
a 
  color #42b983

</style>
