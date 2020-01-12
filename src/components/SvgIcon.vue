<template>
  <svg
    v-on="$listeners"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="view"
  >
    <g :fill="fill">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    fill: {
      type: String,
      default: 'currentColor',
    },
    view: {
      type: [String, Boolean],
      default: '0 0 24 24',
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  display: inline-block;
  vertical-align: middle;
}
</style>
