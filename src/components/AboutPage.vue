<template>
    <div class="container-fluid">
      <h1 class="text-center">About Me</h1> 
      <h2 class="text-center">A Story About Keenan Timmie...</h2> 
      <div class="abouttxt mx-auto" v-if="aboutMe?.length">
     <div class="AboutImg">
      <div class="container-fluid">
          <div class="row text-center mx-auto aligner" >
            
            <div class="col">
              
              <img src="https://richtershotline.github.io/Pimages/Images/PortBalc3.jpg" class="img-fluid mt-3 mb-4" loading="lazy" alt="LandingPagePhoto">
              <h2>Who I am</h2>
              <p>{{aboutMe[0]?.AboutMeText}}</p>

            </div>
            <div class="col">
              <img src="https://richtershotline.github.io/Pimages/Images/Mitchalls_Plain_sign_rock.jpg" class="img-fluid mt-3 mb-4" loading="lazy" alt="LandingPagePhoto">
              <h2>My Background</h2>
              <p>{{aboutMe[1]?.AboutMeText}}</p>
            </div>
            <div class="col">
              <img src="https://richtershotline.github.io/Pimages/Images/TrackAgain.jpg" class="img-fluid mt-3 mb-4" loading="lazy" alt="LandingPagePhoto">
              <h2>Who I could be...</h2>
              <p class="mb-4">{{aboutMe[2]?.AboutMeText}}</p>

            </div>
            
            
          </div>
          
         
  </div>
  
    </div>
    
    
  </div>
 
                       
  <h1 class="text-center">My Hobbies</h1> 
  <div class="container-fluid">
      <div class="row text-center Hobbies g-0">
        <div class="col" v-if="aboutMe?.length">
          <h2>Gaming</h2>
          <h4>{{aboutMe[3]?.HobbyFav}}</h4>
          <img :src="aboutMe[3]?.HobbyImg" class="img-fluid mt-3 mb-4" loading="lazy" alt="HobPhotos">>
        </div>
        <LoadingSpinner v-else>
                          
                        </LoadingSpinner>
        <div class="col" v-if="aboutMe?.length">
          <h2>Reading</h2>
          <h4>{{aboutMe[4]?.HobbyFav}}</h4>
          <img :src="aboutMe[4]?.HobbyImg" class="img-fluid mt-3 mb-4" loading="lazy" alt="HobPhotos">>
        </div>
        <LoadingSpinner v-else>
                          
                        </LoadingSpinner>
        <div class="col" v-if="aboutMe?.length">
          <h2>Studying History</h2>
          <h4>{{aboutMe[5]?.HobbyFav}}</h4>
          <img :src="aboutMe[5]?.HobbyImg" class="img-fluid mt-3 mb-4" loading="lazy" alt="HobPhotos">>
        </div>
        <LoadingSpinner v-else>
                          
                        </LoadingSpinner>
      </div>
      
    </div>
    <div class="container-fluid">
      <h1 class="text-center">Other Info...</h1>
      <div class="row mx-auto text-center Misc mt-4">
        <div class="col" v-if="aboutMe?.length">
          <h2 class="text-center">Spoken Languages</h2> 
          <h4>{{aboutMe[6]?.SpokenLang}}</h4>  
          <h4>{{aboutMe[7]?.SpokenLang}}</h4> 
          <h4>{{aboutMe[8]?.SpokenLang}}</h4>
        </div>
        <LoadingSpinner v-else>
                          
                        </LoadingSpinner>
        <div class="col">
          <h2 class="text-center">Date Of Birth</h2> 
          <h4>9 March 2002</h4>  
        </div>
        <div class="col">
          <h2 class="text-center" v-if="aboutMe?.length">Favourite Quote</h2> 
          <LoadingSpinner v-else>
                          
                        </LoadingSpinner>
     <h4 v-if="aboutMe?.length">{{aboutMe[9]?.Quote}}</h4>
     
        </div>
        
      </div>
      
      <div class="row mx-auto text-center Misc mt-4">
          <div class="col">
            <h2 class="text-center" v-if="aboutMe?.length">Favourite End</h2> 
            <LoadingSpinner v-else>
                          
                        </LoadingSpinner>
            <h4  v-if="aboutMe?.length">{{aboutMe[10]?.Dev}}</h4> 
            
          </div>
          
          <div class="col">
            <h2 class="text-center" v-if="aboutMe?.length">Favourite site</h2> 
            <LoadingSpinner v-else>
                          
                        </LoadingSpinner>
            <h4 v-if="aboutMe?.length">{{aboutMe[11]?.Site}}</h4>  
          </div>
          <div class="col" v-if="aboutMe?.length">
            <h2 class="text-center">Best Quality</h2> 
       <h4 v-if="aboutMe?.length">{{aboutMe[12]?.Quality}}</h4>
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
  const store = useStore()
  const aboutMe = computed(() => store.state.aboutMe)
  
  
  onMounted(() => {
     
      store.dispatch("getAbout")
  
  })
  </script>
  
  <style>
  
  </style>