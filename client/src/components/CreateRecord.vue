<template>
  <!-- <div class="home" style="height:100vh">
      <h1>Hello Mr</h1>
  </div> -->
          <v-layout row wrap class="ms-2 mt-3 mb-3" style="text-align:center">
            <v-flex xs7>
                <v-text-field :placeholder="placeholder" :value="value" @input="$emit('onInput',$event)" @keyup.enter="$emit('create')"> 
                </v-text-field>
            </v-flex>
            <v-flex xs4 class="ms-5 mt-4">
                <v-btn @click="$emit('create')" color="#1ebbd7" dark>
                    <v-icon class="me-2" dark>add_circle</v-icon>
                    Create
                </v-btn>
            </v-flex>
        </v-layout>
  
</template>

<script>

export default {
  name: "CreateRecord",
  props:[
      'placeholder',
      'value',
  ]
};
</script>
