<template>
  <v-card
    outlined
  >
    <v-card-title tag="h4">
      <strong>{{ fullName }}</strong>
    </v-card-title>
  </v-card>
</template>

<script>
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
    }
  },

  data () {
    return {}
  },

  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>
