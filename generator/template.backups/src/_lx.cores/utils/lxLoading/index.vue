<template>
  <div v-show="count !== 0" class="loading">
    <div :style="svgCss">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="6.451612903225806" cy="54.7508" r="2.48074" fill="#f56c6c">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-0.5s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="0s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#f56c6c;#fbacc9;#f56c6c" dur="2s" repeatCount="indefinite" begin="-0.5s" />
        </circle>
        <circle cx="6.451612903225806" cy="45.2492" r="3.51926" fill="#a2f0fb">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.5s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-0.5s" />
        </circle>
        <circle cx="16.129032258064512" cy="41.1198" r="2.55926" fill="#f56c6c">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-0.7s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#f56c6c;#fbacc9;#f56c6c" dur="2s" repeatCount="indefinite" begin="-0.7s" />
        </circle>
        <circle cx="16.129032258064512" cy="58.8802" r="3.44074" fill="#a2f0fb">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.7s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-0.7s" />
        </circle>
        <circle cx="25.806451612903224" cy="33.534" r="2.79926" fill="#f56c6c">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-0.9s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#f56c6c;#fbacc9;#f56c6c" dur="2s" repeatCount="indefinite" begin="-0.9s" />
        </circle>
        <circle cx="25.806451612903224" cy="66.466" r="3.20074" fill="#a2f0fb">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.9s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-0.9s" />
        </circle>
        <circle cx="35.48387096774193" cy="32.0524" r="3.03926" fill="#f56c6c">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.1s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#f56c6c;#fbacc9;#f56c6c" dur="2s" repeatCount="indefinite" begin="-1.1s" />
        </circle>
        <circle cx="35.48387096774193" cy="67.9476" r="2.96074" fill="#a2f0fb">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.1s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-1.1s" />
        </circle>
        <circle cx="45.16129032258064" cy="35.1828" r="3.27926" fill="#f56c6c">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.3s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#f56c6c;#fbacc9;#f56c6c" dur="2s" repeatCount="indefinite" begin="-1.3s" />
        </circle>
        <circle cx="45.16129032258064" cy="64.8172" r="2.72074" fill="#a2f0fb">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.3s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-1.3s" />
        </circle>
        <circle cx="54.838709677419345" cy="45.2492" r="3.51926" fill="#f56c6c">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.5s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#f56c6c;#fbacc9;#f56c6c" dur="2s" repeatCount="indefinite" begin="-1.5s" />
        </circle>
        <circle cx="54.838709677419345" cy="54.7508" r="2.48074" fill="#a2f0fb">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.5s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-1.5s" />
        </circle>
        <circle cx="64.51612903225805" cy="58.8802" r="3.44074" fill="#f56c6c">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.7s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#f56c6c;#fbacc9;#f56c6c" dur="2s" repeatCount="indefinite" begin="-1.7s" />
        </circle>
        <circle cx="64.51612903225805" cy="41.1198" r="2.55926" fill="#a2f0fb">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.7s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-1.7s" />
        </circle>
        <circle cx="74.19354838709677" cy="66.466" r="3.20074" fill="#f56c6c">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.9s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#f56c6c;#fbacc9;#f56c6c" dur="2s" repeatCount="indefinite" begin="-1.9s" />
        </circle>
        <circle cx="74.19354838709677" cy="33.534" r="2.79926" fill="#a2f0fb">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.9s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-1.9s" />
        </circle>
        <circle cx="83.87096774193547" cy="67.9476" r="2.96074" fill="#f56c6c">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.1s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#f56c6c;#fbacc9;#f56c6c" dur="2s" repeatCount="indefinite" begin="-2.1s" />
        </circle>
        <circle cx="83.87096774193547" cy="32.0524" r="3.03926" fill="#a2f0fb">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-3.1s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-2.1s" />
        </circle>
        <circle cx="93.54838709677418" cy="64.8172" r="2.72074" fill="#f56c6c">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.3s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#f56c6c;#fbacc9;#f56c6c" dur="2s" repeatCount="indefinite" begin="-2.3s" />
        </circle>
        <circle cx="93.54838709677418" cy="35.1828" r="3.27926" fill="#a2f0fb">
          <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-3.3s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-2.3s" />
        </circle>
      </svg>
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
  },
  methods: {
    open () {
      this.count++
    },
    close () {
      this.count--
    }
  }
}
</script>

<style lang="scss" scoped>
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
