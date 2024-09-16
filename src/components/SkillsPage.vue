<template>
      <h1 class="text-center mt-4">My Skills</h1> 

  <div class="container-fluid Skills">
    <div class="SkillsCon mt-4">
        <div class="container-fluid Skimages mb-4">
            <div class="row mx-auto text-center Skimages ml-1">
              <div class="col mt-3" v-if="skills?.length">
                <img src="https://richtershotline.github.io/Pimages/Images/732212.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                <p>{{skills[0].Skill}}</p>
                
                <p>{{skills[0].SkillLevel}}</p>
              </div>
              <LoadingSpinner v-else>
                          
              </LoadingSpinner>
             
              <div class="col mt-3 " v-if="skills?.length">
                <img src="https://richtershotline.github.io/Pimages/Images/photoshop.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                <p>{{skills[4].Skill}}</p>
                <p>{{skills[4].SkillLevel}}</p>

              </div>
              <LoadingSpinner v-else>
                          
              </LoadingSpinner>

              <div class="col mt-3" v-if="skills?.length">
                <img src="https://richtershotline.github.io/Pimages/Images/css-3.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                <p>{{skills[1].Skill}}</p>
                <p>{{skills[1].SkillLevel}}</p>


              </div>
              <LoadingSpinner v-else>
                          
              </LoadingSpinner>
              <div class="col mt-3" v-if="skills?.length">
                <img src="https://richtershotline.github.io/Pimages/Images/excel.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                <p>{{skills[7].Skill}}</p>
                <p>{{skills[7].SkillLevel}}</p>


              </div>
              <LoadingSpinner v-else>
                          
              </LoadingSpinner>
            </div>
            <h2 class="text-center">Tech Skills</h2>

            <div class="row mx-auto text-center mt-5 pb-5 Skimages">
                <div class="col" v-if="skills?.length">
                  <img src="https://richtershotline.github.io/Pimages/Images/vue.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                  <p>{{skills[9].Skill}}</p>
                  <p>{{skills[9].SkillLevel}}</p>


                </div>
                <LoadingSpinner v-else>
                          
                </LoadingSpinner>
                <div class="col" v-if="skills?.length">
                  <img src="https://richtershotline.github.io/Pimages/Images/javascript.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                  <p>{{skills[3].Skill}}</p>
                  <p>{{skills[3].SkillLevel}}</p>


                </div>
                <LoadingSpinner v-else>
                          
                </LoadingSpinner>
                <div class="col" v-if="skills?.length">
                  <img src="https://richtershotline.github.io/Pimages/Images/bootstrap.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                  <p>{{skills[2].Skill}}</p>
                  <p>{{skills[2].SkillLevel}}</p>

                      
                </div>
                <LoadingSpinner v-else>
                          
                </LoadingSpinner>
                <div class="col" v-if="skills?.length">
                  <img src="https://richtershotline.github.io/Pimages/Images/python.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                  <p>{{skills[8].Skill}}</p>
                  <p>{{skills[8].SkillLevel}}</p>

                </div>
                <LoadingSpinner v-else>
                          
                </LoadingSpinner>
              </div>
          </div>
    </div>
    <div class="SkillsCon mt-4">
        <div class="container-fluid Skimages mb-4">
            <div class="row mx-auto text-center Skimages">
              <div class="col mt-3" v-if="skills?.length">
                <img src="https://richtershotline.github.io/Pimages/Images/leadership.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                <p>{{skills[10].Skill}}</p>
                
                <p>{{skills[10].SkillLevel}}</p>
              </div>
              <LoadingSpinner v-else>
                          
              </LoadingSpinner>
             
              <div class="col mt-3 " v-if="skills?.length">
                <img src="https://richtershotline.github.io/Pimages/Images/ProblemSolve.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                <p>{{skills[11].Skill}}</p>
                <p>{{skills[11].SkillLevel}}</p>

              </div>
              <LoadingSpinner v-else>
                          
              </LoadingSpinner>

              <div class="col mt-3" v-if="skills?.length">
                <img src="https://richtershotline.github.io/Pimages/Images/meticulous.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                <p>{{skills[12].Skill}}</p>
                <p>{{skills[12].SkillLevel}}</p>


              </div>
              <LoadingSpinner v-else>
                          
              </LoadingSpinner>
              <div class="col mt-3" v-if="skills?.length">
                <img src="https://richtershotline.github.io/Pimages/Images/speaker.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                <p>{{skills[13].Skill}}</p>
                <p>{{skills[13].SkillLevel}}</p>


              </div>
              <LoadingSpinner v-else>
                          
              </LoadingSpinner>
            </div>
            <h2 class="text-center">Soft Skills</h2>

            <div class="row mx-auto text-center mt-5 pb-5 Skimages">
                <div class="col" v-if="skills?.length">
                  <img src="https://richtershotline.github.io/Pimages/Images/reward.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                  <p>{{skills[14].Skill}}</p>
                  <p>{{skills[14].SkillLevel}}</p>


                </div>
                <LoadingSpinner v-else>
                          
                </LoadingSpinner>

              </div>
          </div>
    </div>
  </div>
</template>


<script setup>
 import {computed, onMounted} from "vue"
import {useStore} from "vuex"
 import LoadingSpinner from "./LoadingSpinner.vue"

const store = useStore()
 const skills = computed(() => store.state.skills)


onMounted(() => {
   
    store.dispatch("getSkills")
    // repeat()

 })
</script>

<style>

</style>