<template>
  <component
    v-on="$listeners"
    :is="tag"
    :id="id"
    :class="classes"
    :href="href"
    :target="target"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'btn',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    id: String,
    href: String,
    target: String,
    size: {
      type: String,
      default: 'md', // md
    },
    color: {
      type: String,
      default: 'black', // accent, primary, white, black
    },
    shape: {
      type: String,
      default: 'round', // rounded, circle
    },
    wide: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorClass() {
      return this.color ? `btn--${this.color}` : '';
    },
    sizeClass() {
      return this.size ? `btn--${this.size}` : '';
    },
    shapeClass() {
      return this.shape ? `btn--${this.shape}` : '';
    },
    wideClass() {
      return this.wide ? `btn--wide` : '';
    },
    classes() {
      let { sizeClass, colorClass, shapeClass, wideClass } = this;

      return `btn ${sizeClass} ${colorClass} ${shapeClass} ${wideClass}`.trim();
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/components/btn';
</style>
