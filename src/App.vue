<template>
  <div class="wrapper">
    <navbar/>
<main class="container-fluid">

  <router-view/>


</main>
<footerComp/>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue" 
import FooterComp from "@/components/FooterComp.vue"

// import FooterComp from '@/components/FooterComp.vue'
export default {
components: {

  navbar,
    FooterComp
}

}

</script>
<style src="./assets/Styles/style.css">

</style>
