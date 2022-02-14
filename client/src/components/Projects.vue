<template>
    <Panel title="Projects">
        <div class="projList mt-4 mb-4 ms-5" v-for="project in projects" :key="project.id">
            <v-layout row wrap>
                <v-flex xs9>
                    <!-- {{project.title}} -->
                    <span v-if="!project.isEditMode">{{project.title}}</span>
                    <v-text-field v-if="project.isEditMode" :value="project.title" @input="setProjectTitle({project, title: $event,})" autofocus @keyup.enter="saveProject(project)">
                        {{project.title}}
                    </v-text-field>
                </v-flex>
                <v-flex xs3>
                    <v-icon v-if="!project.isEditMode" @click="setEditMode(project)" onMouseOver="this.style.color='#1ebbd7'" onMouseOut="this.style.color='#999999'">edit</v-icon>
                    <v-icon v-if="project.isEditMode" @click="saveProject(project)" onMouseOver="this.style.color='#1ebbd7'" onMouseOut="this.style.color='#999999'">check</v-icon>
                    <v-icon @click="deleteProject(project)" onMouseOver="this.style.color='#1ebbd7'" onMouseOut="this.style.color='#999999'" class="ms-3">delete</v-icon>
                </v-flex>
            </v-layout>
        </div>
        <v-layout row wrap class="ms-2 mt-3 mb-3" style="text-align:center">
            <v-flex xs7>
                <v-text-field placeholder="My project name..." :value="newProjectName" @input="setNewProjectName" @keyup.enter="createProject"> 
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
                'setEditMode',
                // 'unsetEditMode',
                'setProjectTitle'
            ]),
            ...mapActions('projects',[
                'createProject',
                'fetchProjects',
                'saveProject',
                'deleteProject'
            ]),
        },
    };
</script>

<style scoped>
#center{
    display: flex;
    align-items: center;
}
.projList{
    font-size: 18px;
}
</style>