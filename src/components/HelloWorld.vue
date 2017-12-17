<template>
  <div class="hello">
    <h1>{{ msg }} title : {{title}}</h1>
   12
   <a v-for="item in menu" :key="item" :href="item.link">
     {{item.title}}
   </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    ...mapGetters({
      menu: 'getMenu'
    })
  },
  preFetch({ store }) {
    return store.dispatch(`getMenu`)
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
