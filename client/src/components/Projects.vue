<template>
    <Panel title="Projects" style="text-align:center">
        <div v-for="project in projects" :key="project.id">
            {{project.title}}
        </div>
        <v-layout row wrap class="ms-2" style="text-align:center">
            <v-flex xs7>
                <v-text-field placeholder="My project name..." :value="newProjectName" @input="setNewProjectName"> 
                </v-text-field>
            </v-flex>
            <v-flex xs4 class="ms-5 mt-4">
                <v-btn @click="createProject" color="#1ebbd7" dark>
                    <v-icon class="me-2" dark>add_circle</v-icon>
                    Create
                </v-btn>
            </v-flex>
        </v-layout>
    </Panel>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
    export default{
        mounted(){
            this.fetchProjects();
        },
        computed:{
            ...mapState('projects',[
                'newProjectName',
                'projects'
            ])
        },
        methods:{
            ...mapMutations('projects',[
                'setNewProjectName',
            ]),
            ...mapActions('projects',[
                'createProject',
                'fetchProjects',
            ]),
        },
    };
</script>

<style scoped>
#center{
    display: flex;
    align-items: center;
}
</style>