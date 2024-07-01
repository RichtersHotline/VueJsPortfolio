<template>
  <div class="container-fluid">
    <h1 class="text-center mt-4">My Skills</h1> 
    <div class="SkillsCon mt-4">
        <div class="container-fluid">
            <div class="row mx-auto text-center">
              <div class="col mt-3">
                <img src="https://richtershotline.github.io/Pimages/Images/732212.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
              </div>
              <div class="col mt-3">
                <img src="https://richtershotline.github.io/Pimages/Images/photoshop.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
              </div>
              <div class="col mt-3">
                <img src="https://richtershotline.github.io/Pimages/Images/css-3.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                    
              </div>
              <div class="col mt-3">
                <img src="https://richtershotline.github.io/Pimages/Images/excel.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
              </div>
            </div>
            <div class="row mx-auto text-center mt-5 pb-5" >
                <div class="col mt">
                  <img src="https://richtershotline.github.io/Pimages/Images/vue.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                </div>
                <div class="col">
                  <img src="https://richtershotline.github.io/Pimages/Images/javascript.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                </div>
                <div class="col">
                  <img src="https://richtershotline.github.io/Pimages/Images/bootstrap.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                      
                </div>
                <div class="col">
                  <img src="https://richtershotline.github.io/Pimages/Images/leadership.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                </div>
              </div>
          </div>

    </div>
<p>wfafwaf</p>
  </div>
</template>


<script setup>
// import {computed, onMounted} from "vue"
import {useStore} from "vuex"
// import LoadingSpinner from "./LoadingSpinner.vue"

const store = useStore()
// const skills = computed(() => store.state.skills)


onMounted(() => {
   
    store.dispatch("getSkills")
    // repeat()

})
</script>

<style>

</style>