<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 platzimusic
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist")

    <button v-on:click="Prueba">Mi boton de Pruebas</button>
</template>

<script>
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists:[],
      countries:[
        { name: 'Argentina', value: 'argentina' },
        { name: 'España', value: 'Spain' },
        { name: 'Colombia', value: 'colombia' },
      ],
      selectedCountry: 'argentina',
      loading: true
    }
  },
  components: {
    Artist,
    Spinner
  },
  methods:{
    Prueba: function(){
       const self = this
       this.loading = true
    getArtists(this.selectedCountry)
    .then(function (artists) {
      self.artists = artists
      self.loading = false
    })
    }
  },
  mounted: function () {
    //Este metodo es el que se ejecuta al momento de montarse la aplicacion..
    // const self = this
    // getArtists()
    // .then(function (artists) {
    //   self.artists = artists
    // })
  },
  watch: {
    selectedCountry(){
      this.Prueba();
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal
  color black !important

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983


button
 background #42b983

</style>
