<template>
    <div class="white elevation-2" style="margin-top: 100px;">
        <v-toolbar flat danse dark color="#1ebbd7">
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div class="px-4 pt-2">
            <slot>No contend found</slot>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            title: String,
        }
    }
</script>