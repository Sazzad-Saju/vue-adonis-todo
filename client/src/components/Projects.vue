<template>
    <Panel title="Projects">
        <div class="projList mt-4 mb-4 ms-5" v-for="project in projects" :key="project.id">
            <EditableRecord :isEditMode="project.isEditMode" :title="project.title" @onInput="setProjectTitle({project, title: $event,})" @onEdit="setEditMode(project)" @onSave="saveProject(project)" @onDelete="deleteProject(project)" @onClick="projectClicked(project)"
            />
        </div>
        <!-- <CreateRecord/> -->
        <!-- reuse the following -->
        <CreateRecord 
        placeholder = "My project name..." @onInput="setNewProjectName" :value="newProjectName" @create="createProject"> </CreateRecord> 
        <!-- <v-layout row wrap class="ms-2 mt-3 mb-3" style="text-align:center">
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
        </v-layout> -->
    </Panel>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import CreateRecord from './CreateRecord';
import EditableRecord from './EditableRecord';
    export default{
        mounted(){
            this.fetchProjects();
        },
        components: {
            CreateRecord,
            EditableRecord,
        },
        computed:{
            ...mapState('projects',[
                'newProjectName',
                'projects'
            ])
        },
        methods:{
            projectClicked(project){
                this.setCurrentProject(project);
                this.fetchTasksForProject(project);
            },
            ...mapMutations('projects',[
                'setNewProjectName',
                'setEditMode',
                // 'unsetEditMode',
                'setProjectTitle',
                'setCurrentProject',
            ]),
            ...mapActions('projects',[
                'createProject',
                'fetchProjects',
                'saveProject',
                'deleteProject'
            ]),
            ...mapActions('tasks',[
                'fetchTasksForProject',
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