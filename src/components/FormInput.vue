<template>
  <div :class="ctrlClasses">
    <label class="form-ctrl--label" :for="name">{{ label }}</label>
    <div v-if="hint" class="form-ctrl--hint color--grey" v-tooltip="hint">
      <svg-icon width="16" height="16">
        <icon-help-circle />
      </svg-icon>
    </div>
    <div class="form-ctrl--field-wrap">
      <input
        :class="inputClasses"
        :type="type"
        :name="name"
        v-model="inputValue"
        @change="change"
      />
      <div v-if="$slots['append-icon']" class="form-ctrl--append-icon">
        <slot name="append-icon"></slot>
      </div>
    </div>
    <div class="form-ctrl--message">
      <span v-if="error" class="form-ctrl--error">
        {{ typeof error === 'string' ? error : 'The field is incorrect' }}
      </span>
    </div>
  </div>
</template>

<script>
// App Components
import SvgIcon from '@/components/SvgIcon';
import IconHelpCircle from '@/components/icons/IconHelpCircle';

export default {
  name: 'form-input',
  components: {
    SvgIcon,
    IconHelpCircle,
  },
  props: {
    value: String,
    name: String,
    type: {
      type: String,
      default: 'text',
    },
    label: String,
    size: {
      type: String,
      default: 'sm', // sm
    },
    shape: {
      type: String,
      default: 'round', // round
    },
    wide: {
      type: Boolean,
      default: false,
    },
    hint: {
      type: [String, Boolean],
    },
    error: {
      type: [String, Boolean],
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
    wideClass() {
      return this.wide ? `form-ctrl--wide` : '';
    },
    sizeClass() {
      return this.size ? `form-ctrl--${this.size}` : '';
    },
    shapeClass() {
      return this.shape ? `form-ctrl--${this.shape}` : '';
    },
    ctrlClasses() {
      let { sizeClass, shapeClass, wideClass, error } = this;
      let errorClass = error ? '_error' : '';

      return `form-ctrl form-ctrl--input ${sizeClass} ${shapeClass} ${wideClass} ${errorClass}`.trim();
    },
    inputClasses() {
      return `form-ctrl--field`.trim();
    },
  },
  methods: {
    change(e) {
      this.$emit('change', e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/components/form-input';
</style>
