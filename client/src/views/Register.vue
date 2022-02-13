<template>
    <v-container class="register">
        <v-layout row wrap>
            <v-flex xs6 offset-xs4>
            <h1 >Register</h1>
            <v-text-field label="Email" placeholder="Email" :value="registerEmail" @input="setRegisterEmail"></v-text-field>
            <v-text-field label="Password" placeholder="Password" type="password" :value="registerPassword" @input="setRegisterPassword">
            </v-text-field>

            <!-- when there is register error -->
            <v-alert type="error" :value="registerError"> {{registerError}} </v-alert>

            <v-btn color="#1ebbd7" dark @click="register">
                <v-icon>account_circle</v-icon>
                Register
            </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
    
    
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
export default{
    // name: "Register",
    computed: {
        ...mapState('authentication', [
            'registerEmail',
            'registerPassword',
            'registerError',
        ]),
    },
    methods: {
        ...mapMutations('authentication', [
            'setRegisterEmail', 'setRegisterPassword',
        ]),
        ...mapActions('authentication',['register',
        ]),
    },
};
</script>

<style scoped>
    .register{
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