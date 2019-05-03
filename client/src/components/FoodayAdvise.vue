<template>
  <div class="hello" v-if='advise[0]'>
    <!-- <h1>{{ msg }}</h1> -->
    <h1>{{ advise[0].name }}</h1>
    <h2>Ingredients</h2>
    <ul v-if='advise[0]'>
      <li v-for="section in advise[0].ingredients" v-bind:key="section._id">
        <b>{{ section.label }}</b>
        <ul>
          <li v-for="item in section.content" v-bind:key="item._id">{{ item }}</li>
        </ul>
        <br/>
      </li>
    </ul>
    <h2>Methods</h2>
    <ul v-if='advise[0]'>
      <li v-for="section in advise[0].procedures" v-bind:key="section._id">
        <b>{{ section.label }}</b>
        <ul>
          <li v-for="procedure in section.content" :key="procedure._id">{{ procedure }}</li>
        </ul>
      </li>
    </ul>
     <!-- <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul> -->
  </div>
</template>

<script>
import {APIService} from '../APIService'
const apiService = new APIService()

export default {
  name: 'FoodayAdvise',
  created () {
    apiService.getFoodayAdvise().then((advise) => {
      this.$log.info('created is called')
      this.$log.info('data', advise)
      this.advise = advise
    })
  },
  mounted () {
    console.log('mounted')
  },
  data () {
    return {
      msg: 'Welcome to Fooday App',
      advise: {}

    }
  },
  methods: {
    getAdvise () {
      apiService.getFoodayAdvise().then((advise) => {
        console.log(advise.data)
        this.advise = advise.data
      })
    }
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
a {
  color: #42b983;
}
</style>
