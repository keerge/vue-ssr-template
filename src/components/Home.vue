<template>
  <div>
      home
      <div>
        {{user.name}}
        ---
        {{user.age}}
        ---
        {{user.desc}}
      </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  data() {
    return {

    }
  },
  preFetch({ store }) {
    return store.dispatch(`getUser`)
  },
  methods: {

  }
}
</script>
