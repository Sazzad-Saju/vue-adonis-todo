<template>
    <Panel title="Tasks">
        <div class="tasks mt-4" v-for="task in tasks" :key="task.id">
            <!-- {{task.description}} -->
            <EditableRecord :isEditMode="task.isEditMode" :title="task.description" @onInput="setTaskDescription({task, description: $event,})" @onEdit="setEditMode(task)" @onSave="saveTask(task)" @onDelete="deleteTask(task)">
            <v-icon class="me-3" @click="checkCompleted(task)">
                {{task.completed ? 'check_box' : 'check_box_outline_blank'}}
            </v-icon>
            </EditableRecord>
        </div>
        <!-- prob -->
        <CreateRecord placeholder="I need to ..." :value="newTaskName" @onInput="setNewTaskName" @create="createTask"
        />
    </Panel>
</template>

<script>
import {mapMutations, mapActions, mapState } from 'vuex';
import CreateRecord from './CreateRecord';
import EditableRecord from './EditableRecord';

export default{
    components:{
        CreateRecord,
        EditableRecord,
    },
    computed:{
        ...mapState('tasks',[
            'tasks',
            'newTaskName',
        ]),
    },
    methods:{
        ...mapActions('tasks',[
            'createTask',
            'deleteTask',
            'saveTask',
        ]),
        ...mapMutations('tasks',[
            'setNewTaskName',
            'setTaskDescription',
            'setEditMode',
            'toggleCompleted',
        ]),
        checkCompleted(task){
            this.toggleCompleted(task);
            this.saveTask(task);
        },
    },
};
</script>

<style>
.task{
    font-size: 14px;
}
</style>