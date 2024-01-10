<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>
<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './js/store';
import axios from 'axios';

export default {
  name:'App',
  components:{
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
}
</script>
<style lang="scss">
    @use './styles/general.scss';
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;700&display=swap');
    #app{
      font-family: 'Roboto Condensed', sans-serif;
    }
</style>