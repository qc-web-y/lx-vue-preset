<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Lx-standard-vue App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import {sessions} from '@cores/utils/lxStorage'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  beforeRouteEnter (to, from, next) {
    const token = sessions.get('token')
    if (!token) return next('/login')
    next()
  }
}
</script>

<style scoped>
.home { text-align: center; }
</style>
