<template>
  <div class="container-fluid Exp">
    <h1 class="text-center mt-5">Work Experience</h1> 
    <div class="container-fluid text-center">
        <div class="row align-items-center text-center mx-auto d-flex flex-column">
          <div class="col" v-if="experiences?.length">
            <h2>{{experiences[0].jobN}}</h2>
            <h4>{{experiences[0].Company}}</h4>
            <h5>{{experiences[0].Length}}</h5>
            <p>{{experiences[0].JobDescription}}</p>

          </div>
          <LoadingSpinner v-else>
                          
          </LoadingSpinner>
          <div class="col" v-if="experiences?.length">
            <h2>{{experiences[1].jobN}}</h2>
            <h4>{{experiences[1].Company}}</h4>
            <h5>{{experiences[1].Length}}</h5>
            <p>{{experiences[1].JobDescription}}</p>
          </div>
          <LoadingSpinner v-else>
                          
          </LoadingSpinner>
        </div>
      </div>
  </div>

</template>

<script setup>

import {computed, onMounted} from "vue"
import {useStore} from "vuex"
const store = useStore()
const experiences = computed(() => store.state.experiences)


onMounted(() => {
   
    store.dispatch("getExperiences")

})
</script>

<style>

</style>

<style>

</style>