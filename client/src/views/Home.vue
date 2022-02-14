<template>
  <div class="home" style="height:100vh">
    <v-layout>
      <v-flex xs5 class="pe-5">
        <Projects v-if="isLoggedIn"></Projects>
          <!-- <Panel title="Projects">
          <h1>Testing</h1>
          </Panel> -->
      </v-flex>
      <v-flex xs7 class="pl-5">
          <Panel title="Tasks">
          <h1>Testing</h1>
          </Panel>
      </v-flex>
    </v-layout>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';
import Projects from "../components/Projects.vue";
import router from '../router';
export default {
  name: "Home",

  components: {
    Projects,
    // HelloWorld,
  },
  mounted(){
    if(!this.isLoggedIn){
      return router.push('/login');
    }
  },
  computed:{
    ...mapGetters('authentication',[
      'isLoggedIn'
    ])
  }
};
</script>
