<template>
<div class="container-fluid">
    <h1 class="text-center">Links</h1> 
    <div class="container text-center">
        <div class="row align-items-center Resume">
          <div class="col d-flex flex-column">
            <h2>Behance Profile</h2>
            <a href="https://www.behance.net/keenantimmie" target="_blank">
            <ButtonComp/>
            </a>
            

        </div>
          <div class="col d-flex flex-column">
            <h2>Github</h2>
            <a href="https://github.com/RichtersHotline" target="_blank">
                <ButtonComp/>
                </a>
                

          </div>
          <div class="col d-flex flex-column">
            <h2>CV Download</h2>
            <a href="https://mega.nz/file/lwgw0Tra#KpOhYfpkMHvTLW38wyXuX1ZTndI60LSNL5ccMu2xDyU" target="_blank" download ="KCV">
                <ButtonComp/>
                </a>
               



          </div>
        </div>
        <h1 class="text-center mt-4">Case Studies</h1>
        <p class="text-center">An archive of notes and plans about my hackathons</p>
        <h2>Archive</h2>
        <a href="https://www.dropbox.com/scl/fi/i9ewhgrcqy4nmlkdkjv2v/Case-Study.zip?rlkey=k2outm3f9s687it0yawjhlyib&st=boos5l32&dl=0" target="_blank" download ="KCV">
          <button class="Archive" type="button">Download</button>
                </a>
      </div>

</div>
</template>

<script>
import ButtonComp from "@/components/ButtonComp.vue"
export default {

    components: {
        ButtonComp

}
}
</script>

<style>

</style>