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
      v-if="showLoadMoreBtn"
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
            @click="loadMore"
          >
            Ver Todos
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

  data () {
    return {
      selected: [],
      loadedContentLength: 5
    }
  },

  computed: {
    _states () {
      return this.states.slice(0, this.loadedContentLength)
    },

    showLoadMoreBtn () {
      return this.states.length !== this._states.length
    }
  },

  watch: {
    selected (val) {
      this.$emit('update', val)
    }
  },

  methods: {
    loadMore () {
      this.loadedContentLength = this.states.length
    }
  }
}
</script>
