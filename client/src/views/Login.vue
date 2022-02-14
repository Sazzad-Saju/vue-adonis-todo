<template>
    <v-container class="login">
        <v-layout row wrap>
            <v-flex xs6 offset-xs4>
            <h1>Login</h1>
            <v-text-field label="Email" placeholder="Email" :value="loginEmail" @input="setloginEmail"></v-text-field>
            <v-text-field label="Password" placeholder="Password" type="password" :value="loginPassword" @input="setloginPassword" @keyup.enter="login">
            </v-text-field>

            <!-- when there is register error -->
            <v-alert type="error" :value="loginError"> {{loginError}} </v-alert>

            <v-btn color="#1ebbd7" dark @click="login">
                <v-icon>fingerprint</v-icon>
                Login
            </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
    
    
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
export default{
    computed: {
        ...mapState('authentication', [
            'loginEmail',
            'loginPassword',
            'loginError',
        ]),
    },
    methods: {
        ...mapMutations('authentication', [
            'setloginEmail', 'setloginPassword',
        ]),
        ...mapActions('authentication',['login',
        ]),
    },
};
</script>

<style scoped>
    .login{
        padding-top: 100px; 
        text-align: center;
        position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
        /* margin-bottom: 100px; */
        /* style="padding-top:80px; padding-down:100px;  text-align: center;" */
    }
</style>