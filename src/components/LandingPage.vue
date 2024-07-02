<template>
    <div class="container-fluid BG">
        <div class="row align-items-center respon">
          <div class="col">
              <img src="https://richtershotline.github.io/Pimages/Images/PortBalc3.jpg" class="img-fluid mt-3 mb-4" loading="lazy" alt="LandingPagePhoto">
            </div>
              <div class="col text-center" v-if="jobTitle?.length">
                
                  <h1>Keenan Timmie</h1>
                  <h2 class="fst-italic text-center" >{{jobTitle[1]?.jobName}}</h2>
                 
              </div>
              <LoadingSpinner v-else>
          
              </LoadingSpinner>
          <div class="col">
            
          </div>
        </div>
    
      </div>
</template>

<script setup>
import {computed, onMounted} from "vue"
import {useStore} from "vuex"
import LoadingSpinner from "./LoadingSpinner.vue"
const store = useStore()
const jobTitle = computed(() => store.state.jobTitle)


onMounted(() => {
   
    store.dispatch("getJobTitle")
    // repeat()

})
</script>

<style>

</style>