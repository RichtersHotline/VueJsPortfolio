<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a href="#landing" class="navbar-brand"><img src="https://richtershotline.github.io/Pimages/Images/Logo.png" class="img-fluid" alt="logo" loading="lazy"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse show navbar-collapse " id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#landing">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#resume">Resume</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#project">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#reachme">Reach Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
</template>
<script>


export default {
    name:"NavBar",

}

</script>


<style scoped>
.navbar {


    top:0;
    z-index:9999;
    }
</style>

