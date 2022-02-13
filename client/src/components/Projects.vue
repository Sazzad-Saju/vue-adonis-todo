<template>
    <Panel title="Projects">
        <v-layout row wrap class="ms-2" style="text-align:center">
            <v-flex xs7>
                <v-text-field placeholder="My project name...">
                </v-text-field>
            </v-flex>
            <v-flex xs4 class="ms-5 mt-4">
                <v-btn color="#1ebbd7" dark>
                    <v-icon class="me-2" dark>add_circle</v-icon>
                    Create
                </v-btn>
            </v-flex>
        </v-layout>
    </Panel>
</template>

<script>
    export default{

    }
</script>

<style scoped>
#center{
    display: flex;
    align-items: center;
}
</style>