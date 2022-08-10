<template>
  <v-card
    outlined
    class="text-center pa-2 d-flex flex-column align-center"
  >
    <v-avatar
      color="white"
      size="80"
    >
      <v-img
        :lazy-src="defaultThumbnail"
        aspect-radio="1/1"
        :src="thumbnail"
        :alt="fullName"
      />
    </v-avatar>

    <v-card-title
      tag="h4"
      class="d-block"
    >
      {{ fullName }}
    </v-card-title>

    <v-card-text
      tag="span"
      class="subtitle-1 py-0"
    >
      {{ streetFullDescription }}
    </v-card-text>

    <v-card-text
      tag="span"
      class="subtitle-2 py-3"
    >
      {{ city }}<br>
      {{ state }} - CEP: {{ postCode }}
    </v-card-text>
  </v-card>
</template>

<script>
import defaultThumbnail from '@/assets/img/default-thumbnail.svg'

const firstNumberSequence = /(\d+)/

export default {
  name: 'UserCard',

  props: {
    firstName: {
      type: String,
      required: true
    },

    lastName: {
      type: String,
      default: ''
    },

    street: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    state: {
      type: String,
      required: true
    },

    postCode: {
      type: [String, Number],
      required: true
    },

    to: {
      type: String,
      default: '/'
    },

    thumbnail: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      defaultThumbnail
    }
  },

  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    },

    streetFullDescription () {
      const [, houseCode, streetName] = this.street.split(firstNumberSequence)
      return `${streetName}${houseCode ? `, ${houseCode}` : ''}`
    }
  }
}
</script>
