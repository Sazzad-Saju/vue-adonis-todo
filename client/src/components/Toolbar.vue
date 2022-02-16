<template>
    <v-app-bar
        absolute
        color="#1ebbd7"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        dark
      >
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title class="mx-4"><b>VUE ADONIS TODO</b></v-toolbar-title>
        <v-toolbar-items>
          <v-btn id="no-background-hover" v-if="isLoggedIn">
           <span class="material-icons me-2">playlist_add_check</span>
           Projects
          </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
        <v-btn id="no-background-hover" to='/register' v-if="!isLoggedIn">
          <v-icon class="me-2">account_box</v-icon>
          Register
        </v-btn>

        <v-btn id="no-background-hover" v-if="!isLoggedIn" to='/login'>
          <v-icon class="me-2">fingerprint</v-icon>
          Login
        </v-btn>

        <v-btn id="no-background-hover" v-if="isLoggedIn" @click="logout">
          <v-icon class="me-2">exit_to_app</v-icon>
          Logout
        </v-btn>
        <v-btn id="no-background-hover" @click="about">
          <v-icon class="me-2">mdi-heart</v-icon>
          About
        </v-btn>
        </v-toolbar-items>
      </v-app-bar>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    name: 'Toolbar',
    computed: {
      ...mapGetters('authentication',[
        'isLoggedIn',
      ]),
    },
    methods:{
      ...mapActions('authentication',[
        'logout',
        'about',
      ]),
    },
};
</script>

<style scoped>
#no-background-hover {
   background-color: transparent;
   box-shadow: none;
}
</style>