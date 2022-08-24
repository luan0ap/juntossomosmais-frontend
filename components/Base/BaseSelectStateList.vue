<template>
  <v-list
    flat
    dense
    tag="ul"
  >
    <v-list-item
      v-for="{ label, value } in _states"
      :key="value"
      dense
      tag="li"
    >
      <v-list-item-content>
        <v-checkbox
          v-model="selected"
          :label="label"
          :value="value"
        />
      </v-list-item-content>
    </v-list-item>

    <v-list-item
      dense
      tag="li"
    >
      <v-list-item-content>
        <div>
          <v-btn
            text
            plain
            :ripple="false"
            class="pa-0"
            @click="isLoadMoreBtnInative = !isLoadMoreBtnInative"
          >
            {{ isLoadMoreBtnInative ? 'Ver Todos' : 'Ver menos' }}
          </v-btn>
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import states from '@/mixins/states'

export default {
  name: 'BaseSelectStateList',

  mixins: [states],

  props: {
    loadedContentLength: {
      validator (value) {
        return (typeof value === 'string' || typeof value === 'number') && Number(value) > 0
      },
      default: 5
    }
  },

  data () {
    return {
      selected: [],
      isLoadMoreBtnInative: true
    }
  },

  computed: {
    _states () {
      if (this.isLoadMoreBtnInative) {
        return this.states.slice(0, this.loadedContentLength)
      }

      return this.states
    }
  },

  watch: {
    selected (val) {
      this.$emit('input', val)
    }
  }
}
</script>
