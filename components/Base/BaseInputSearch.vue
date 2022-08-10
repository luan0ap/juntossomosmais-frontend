<template>
  <v-text-field
    :value="value"
    clearable
    outlined
    rounded
    prepend-inner-icon="mdi-magnify"
    type="search"
    placeholder="Buscar aqui"
    @input="debounceFn"
  />
</template>

<script>
import { debounce } from '@/utils'

export default {
  name: 'BaseInputSearch',

  props: {
    value: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      debounceFn: null
    }
  },

  created () {
    this.debounceFn = debounce((val) => {
      this.$emit('input', val)
    }, 2000)
  },

  methods: {
    debounce
  }
}
</script>
