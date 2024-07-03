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
            <a href="https://mega.nz/file/iToDgYDC#H4ZJWphJm7sya2HiHvVHAQBd_8_dPz5kaajy3sLSrTE" target="_blank" download ="KCV">
                <ButtonComp/>
                </a>
               



          </div>
        </div>
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