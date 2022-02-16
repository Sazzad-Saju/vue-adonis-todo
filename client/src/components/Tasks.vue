<template>
    <Panel title="Tasks">
        <div class="tasks mt-2" v-for="task in tasks" :key="task.id">
            <!-- {{task.description}} -->
            <EditableRecord :isEditMode="task.isEditMode" :title="task.description" @onInput="setTaskDescription({task, description: $event,})" @onEdit="setEditMode(task)" @onSave="saveTask(task)" @onDelete="deleteTask(task)"
            />
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
        ]),
    },
};
</script>

<style>
.task{
    font-size: 14px;
}
</style>