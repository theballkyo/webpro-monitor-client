<template>
  <div>
    <div class="clearfix">
      <div class="float-left">
        <strong>{{ barNow }}</strong>
      </div>
      <div class="float-right">
        <small class="text-muted">{{ text }}</small>
      </div>
    </div>
    <div class="progress progress-xs">
      <div :class="'progress-bar bg-' + [bgColor]" role="progressbar" :style="{width: barPercent + '%'}" :aria-valuenow="barNow" :aria-valuemin="barMin" :aria-valuemax="barMax"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    barMin: {
      type: Number,
      default: 0
    },
    barMax: {
      type: Number,
      default: 100
    },
    barNow: {
      // type: Number,
      default: 40
      // required: true
    },
    bgColor: {
      default: 'yellow'
    }
  },
  computed: {
    barPercent () {
      // console.log(this.barNow)
      // return this.barMin
      return ((this.barNow - this.barMin) * 100) / (this.barMax - this.barMin)
    }
  },
  mounted () {
    // console.log(this.barNow)
    // console.log(this.barPercent)
  }
}
</script>
