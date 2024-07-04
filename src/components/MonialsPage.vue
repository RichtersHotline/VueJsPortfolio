<template>
    <div class="container-fluid">
  <h1 class="text-center">Testimonials</h1>
  <div class="container-fluid text-center Monials ">
      <div class="row align-items-center g-0 MonialRow mx-auto" v-if="monials?.length">
         <p>* Hover mouse over names to see testimonials.</p>  
        <CardComp  v-for="monial in monials" :key="monial.Id" >
              
              <template #cardHeader>
          
                  <img :src="monial.MonialImg" class="card-img-top img-fluid" alt="Testimage" loading="lazy">
                
                </template>
              <template #cardBody>
                <div class="hovering">
               <h3 class="name">{{monial.MonialFName}} {{monial.MonialLName}} </h3>
               <p></p>
               <p class="quota">"{{monial.testimonialQuote}}"</p>
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

<style scoped>

        .card {
            opacity:1;
            margin-left:10px;
            margin:auto;
            outline:2px solid fuchsia;
            box-shadow:5px 5px 10px fuchsia;
            width:70%;
            margin-bottom:30px;
            
        }
        

        .card:hover {
            
            transform:none;
            opacity:1;


        }
@media only screen and (max-width: 720px) {
    .card {
        opacity:1;
        margin-left:10px;
        margin:auto;
        outline:2px solid fuchsia;
        box-shadow:5px 5px 10px fuchsia;
        width:100%;
        margin-bottom:30px;
        
    }
    img[alt="Testimage"] {
  
        object-fit:cover;
        object-position:center;
       width:100%;       
       height:auto;                  
    }
    .quota {

       text-align:center;
        font-size:9px;

    }

}


</style>