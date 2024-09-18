<template>
    <div class="container-fluid">
        <div class="ProCon">
    <h1 class="text-center pt-4">Projects</h1>
    <div class="row align-items-center  g-0 ms-4 me-4 d-flex text-center Projects d-flex justify-content-center " v-if="projects?.length">
        
        <CardComp v-for="tasks in projects" :key="tasks.Id">
            <template #cardHeader>
                <img :src="tasks.ProjectThumb" class="card-img-top img-fluid" alt="Proimage" loading="lazy">
                
                
            </template>
            
            <template #cardBody>
                <h3 class="mb-4">{{tasks.ProjectName}}</h3>
                <p>{{tasks.ProjectTagline}}</p>
                <p class="Task">{{tasks.ProjectDesc}}</p>

               <div class="Buttons mx-auto">
                <a :href=tasks.ProjectRepo target="_blank">
                    
                    <button type="button"  class="btnPro">Repo</button>

                </a>
                <a :href=tasks.ProjectLive target="_blank">
                    
                    <button type="button"  class="btnPro">Live</button>

                </a>
             
               </div>
            </template> 




        </CardComp>
        
    </div>
    <LoadingSpinner v-else>
                          
    </LoadingSpinner>
</div>
</div>
</template>

<script setup>
import CardComp from "./CardComp.vue"
 import {computed, onMounted} from "vue"
import {useStore} from "vuex"
 import LoadingSpinner from "./LoadingSpinner.vue"

const store = useStore()
 const projects = computed(() => store.state.projects)


onMounted(() => {
   
    store.dispatch("getProjects")

 })
</script>

<style scoped>
.card {
    opacity:0.3;
    margin-left:10px;
    margin:auto;
    outline:2px solid fuchsia;
    box-shadow:5px 5px 10px fuchsia;
    width:18rem;
    margin-bottom:30px;
    
}

.card:hover {
    
    transform:scale(1.05,1.05);
    opacity:1

}

</style>