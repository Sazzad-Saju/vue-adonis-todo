<template>
    <v-layout row wrap>
        <v-flex xs9>
            <!-- {{title}} -->
            <span v-if="!isEditMode">{{title}}</span>
            <v-text-field v-if="isEditMode" :value="title" @input="$emit('onInput',$event)" autofocus @keyup.enter="$emit('onSave')">
                {{title}}
            </v-text-field>
        </v-flex>
        <v-flex xs3>
            <v-icon v-if="!isEditMode" @click="$emit('onEdit')" onMouseOver="this.style.color='#1ebbd7'" onMouseOut="this.style.color='#999999'">edit</v-icon>
            <v-icon v-if="isEditMode" @click="$emit('onSave')" onMouseOver="this.style.color='#1ebbd7'" onMouseOut="this.style.color='#999999'">check</v-icon>
            <v-icon @click="$emit('onDelete')" onMouseOver="this.style.color='#1ebbd7'" onMouseOut="this.style.color='#999999'" class="ms-3">delete</v-icon>
        </v-flex>
    </v-layout>
</template>

<script>
export default{
    props:[
        'isEditMode',
        'title',
    ],
};
</script>