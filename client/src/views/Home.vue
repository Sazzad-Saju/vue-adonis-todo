<template>
  <div class="home" style="height:100vh">
    <v-layout>
      <v-flex xs5 class="pe-5">
        <Projects></Projects>
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
import Projects from "../components/Projects.vue";

export default {
  name: "Home",

  components: {
    Projects,
    // HelloWorld,
  },
};
</script>
