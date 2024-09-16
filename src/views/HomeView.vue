<template>
  <div class="container-fluid">
    <section class="row" id="landing">
    <LandingPage/>
    </section>
    <section class="row" id="about">
    <AboutPage/>
    </section>
    <section class="row" id="resume">
      <EducationPage/>
      
    </section>
    <section class="row">
      <SkillsPage/>
    </section>
      <section class="row">
        <WorkExpPage/>
        
      </section>
    <section class="row">
    <ResumeComp/>
    </section>
    <section class="row" id="project">
    <ProjectsPage/>
    </section>
    
    <!-- <section class="row" id="testimonials">
    <MonialsPage/>
    </section> -->
    <section class="row" id="reachme">
      <ReachMePage/>
    </section>
    
      </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'
import AboutPage from "@/components/AboutPage.vue"
import SkillsPage from "@/components/SkillsPage.vue"
import EducationPage from "@/components/EducationPage.vue"
import WorkExpPage from "@/components/WorkExpPage.vue"
import ResumeComp from "@/components/ResumeComp.vue"
import ProjectsPage from "@/components/ProjectsPage.vue"
// import MonialsPage from "@/components/MonialsPage.vue"
import ReachMePage from "@/components/ReachMePage.vue"
export default {
  name: 'HomeView',
  components: {
    LandingPage,
    AboutPage,
    SkillsPage,
    EducationPage,
    WorkExpPage,
    ResumeComp,
    ProjectsPage,
    // MonialsPage,
    ReachMePage,

 
  }
}
</script>
