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
    <Back2Top>
      
    </Back2Top>
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
import Back2Top from '@/components/Back2Top.vue'
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
    // Back to top button
    Back2Top
 
  }
}
</script>
