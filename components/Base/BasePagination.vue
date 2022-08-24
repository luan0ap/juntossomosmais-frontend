<template>
  <v-pagination
    :value="value"
    circle
    class="base-pagination"
    color="inherit"
    :length="length"
    @input="$emit('input', $event)"
    @next="$emit('next')"
    @previous="$emit('previous')"
  />
</template>
<script>
export default {
  name: 'BasePagination',

  props: {
    value: {
      type: Number,
      default: 1
    },

    length: {
      validator (value) {
        return (typeof value === 'string' || typeof value === 'number') && Number(value) > 0
      },
      default: 3
    }
  },

  data () {
    return {}
  }
}
</script>
<style lang="scss">
.base-pagination {
  > .v-pagination {
      .v-pagination__item {
        border-radius: 0;
        box-shadow: none;
        border-bottom: 2px solid transparent;
      }

      .v-pagination__item--active {
        color: var(--v-primary-base);
        border-bottom: 2px solid var(--v-primary-base);
      }
    }
}
</style>
