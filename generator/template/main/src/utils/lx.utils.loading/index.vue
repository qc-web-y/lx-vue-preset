<template>
  <div v-show="count !== 0" class="loading">
    <div :style="svgCss">
      <img src="./svgIcon/colorWave.svg" alt="loading">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      count: 0,
      size: 150
    }
  },
  computed: {
    svgCss () {
      const size = this.size
      return `width: ${size}px; height: ${size}px;`
    }
  }
}
</script>

<style scoped>
  .loading {
    position: fixed;
    top:0;
    left: 0;
    z-index:9999;
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
    background: rgba(0, 30, 47, 0.9);
  }
</style>
