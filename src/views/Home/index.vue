<template>
  <div>
      index~~~{{content}}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  computed: {
    ...mapGetters({
      content: 'index_content'
    })
  },
  preFetch({ store }) {
    return store.dispatch(`getContent`)
  },
  data() {
    return {

    }
  }
}
</script>
