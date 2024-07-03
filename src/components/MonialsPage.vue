<template>
  <div class="container-fluid">
<h1 class="text-center">Testimonials</h1>
<div class="container-fluid text-center">
    <div class="row align-items-center g-0" v-if="monials?.length">
        <CardComp v-for="monial in monials" :key="monial.Id">
            <template #cardHeader>
                <img :src="monial.MonialImg" class="card-img-top img-fluid" alt="Eduimage" loading="lazy">
            </template>
            <template #cardBody>
             <h3>{{monial.MonialFName}}</h3>

            </template>
     
    </CardComp>

    </div>
    <LoadingSpinner v-else>
                          
    </LoadingSpinner>
  </div>
  </div>
</template>

<script setup>
import LoadingSpinner from "./LoadingSpinner.vue"
import CardComp from "./CardComp.vue"
import {computed, onMounted} from "vue"
import {useStore} from "vuex"
const store = useStore()
const monials = computed(() => store.state.monials)


onMounted(() => {
   
    store.dispatch("getMonials")
    // repeat()

})
</script>

<style>

</style>