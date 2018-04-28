<template>
    <div :class="'progress-circle ' + 'p' + percent + (percent > 50 ? ' over50 ' : '')">
        <span>{{display}}</span>
        <div class="left-half-clipper">
            <div class="first50-bar"></div>
            <div class="value-bar"></div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['percent', 'display']
}
</script>


<style>
@import "@/assets/css-circular-prog-bar.css";
</style>
