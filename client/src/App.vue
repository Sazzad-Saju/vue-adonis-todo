<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="655"
      >
        <v-container >
          <v-main>
            <router-view />
          </v-main>
        </v-container>
      </v-sheet>
    </v-card>
    <Toolbar/>
  </v-app>
</template>



<script>
import Toolbar from './components/Toolbar.vue';
export default {
  components:{
    Toolbar,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
