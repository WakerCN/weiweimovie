<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroller',
  data () {
    return {
      scroller: null
    }
  },
  props: {
    handleToScroll: {
      type: Function,
      default: function () {}
    },
    handleToTouchEnd: {
      type: Function,
      default: function () {}
    }
  },

  mounted () {
    var scroller = new BScroll('.wrapper', {
      tap: true,
      probeType: 1
    })
    this.scroller = scroller

    scroller.on('scroll', (pos) => {
      this.handleToScroll(pos)
    },
    scroller.on('touchEnd', (pos) => {
      this.handleToTouchEnd(pos)
    }))
  },

  methods: {
    handleToScrollTop (el) {
      this.scroller.scrollToElement(el)
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
