<template>
    <v-container class="register">
        <v-layout row wrap>
            <v-flex xs6 offset-xs4>
            <h1 >Register</h1>
            <v-text-field label="Email" placeholder="Email"></v-text-field>
            <v-text-field label="Password" placeholder="Password" type="password" autocomplete>
            </v-text-field>
            <v-btn color="#1ebbd7" dark>
                <v-icon>account_circle</v-icon>
                Register
            </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
    
    
</template>

<script>
export default{
    // name: "Register",
}
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