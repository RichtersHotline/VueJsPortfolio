<template>
  <div class="container-fluid">
    <section class="row" id="landing">
    <LandingPage/>
    </section>
    <section class="row" id="about">
    <AboutPage/>
    </section>
    <section class="row" id="skills">
      <SkillsPage/>
      <section class="row" id="Education">
        <EducationPage/>
        
      </section>
      </section>
    <section class="row" id="resume">
    
    </section>
    
    <section class="row" id="project">
    
    </section>
    <section class="row" id="Experience">
      <ExpPage/>
      
    </section>
    <section class="row" id="testimonials">
    <MonialComp/>
    </section>
    <section class="row" id="reachme">
    
    </section>
      </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'
import AboutPage from "@/components/AboutPage.vue"
import SkillsPage from "@/components/SkillsPage.vue"
import EducationPage from "@/components/EducationPage.vue"
export default {
  name: 'HomeView',
  components: {
    LandingPage,
    AboutPage,
    SkillsPage,
    EducationPage
 
  }
}
</script>
