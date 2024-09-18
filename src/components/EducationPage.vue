<template>
        <div class="container-fluid">
        <div class="EduCon">
            <div class="row align-items-center Education">
              <h1 class="text-center pt-4">Education</h1>

             <p class="Info">*Please hover/tap on/over names to see additional details</p>
        
                    <div class="Cards text-center mx-auto" v-if="education?.length">
                        
                        <CardComp v-for="Edu in education" :key="Edu.Id">
                            
                        <template #cardHeader>
                        <img :src="Edu.SchoolImg" class="card-img-top img-fluid" alt="Eduimage" loading="lazy">
                        
                    </template>
                       <template #cardBody>
                        <div class="EducationCon">
                        <h3>{{Edu.School}}</h3>
                        <p class="card-text">{{Edu.Duration}}</p>
                        <p class="Desc">{{Edu.EduDesc}}</p>
                      </div>
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

<style scoped>
.card {
  opacity:0.5;
  transition:2s;
  margin-left:10px;
  margin:auto;
  outline:2px solid fuchsia;
  box-shadow:5px 5px 10px fuchsia;
  width:25rem;
}
.EducationCon {
  transition: transform 1s ease;
position:relative;

}
.Info {

  text-align:center;

}
.EducationCon:hover {

  transform: scale(1.01);


}
.EducationCon:hover .Desc {
display:block;
transition: 5s; 

}
.Desc {

  display:none;
  transition: 2s;
}

@media only screen and (max-width: 720px) {
  .card {
    opacity:0.5;
    transition:2s;
    margin-top:10px !important;
    margin:auto;
    outline:2px solid fuchsia;
    box-shadow:5px 5px 10px fuchsia;
    width:12rem !important;
}
.Education {
position:relative;
right:-1vh;
}
}
</style>

