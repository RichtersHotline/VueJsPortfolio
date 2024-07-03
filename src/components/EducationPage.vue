<template>
        <div class="container-fluid">
        <div class="EduCon">
            <h1 class="text-center pt-4">Education</h1>
            <div class="row align-items-center p-2 ms-4 me-4">
             
        
                    <div class="Cards text-center mx-auto" v-if="education?.length">
                        
                        <CardComp v-for="Edu in education" :key="Edu.Id">
                            
                        <template #cardHeader>
                        <img :src="Edu.SchoolImg" class="card-img-top img-fluid" alt="Eduimage" loading="lazy">
                        
                    </template>
                       <template #cardBody>
                        <h3>{{Edu.School}}</h3>
                        <p class="card-text">{{Edu.Duration}}</p>
                       </template> 
                    </cardComp>
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
import LoadingSpinner from "./LoadingSpinner.vue"
import CardComp from "./CardComp.vue"

const store = useStore()
const education = computed(() => store.state.education)


onMounted(() => {
   
    store.dispatch("getEducation")
    // repeat()

})
</script>

<style>

</style>

