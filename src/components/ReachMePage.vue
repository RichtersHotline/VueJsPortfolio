<template>
  <div class="container-fluid">
  <h1 class="text-center mb-4">Reach Me</h1>
  <div class="container-fluid mx-auto text-center">
    <div class="row">
      <div class="col">
        <div class="ReachBG p-2 mb-2">
            <form action="https://formspree.io/f/mnnaqbgw" id="ContactMeForm" method="POST">
        <h2>Shoot me a message</h2>
        <h5>First Name</h5>
        <input type="text" name="FirstName" placeholder="First name..." class="User" id="ContactForm" required>
        <h5 class="p-2">Last Name</h5>
        <input type="text" name="LastName" placeholder="Last name..." class="User" id="ContactForm"  required>
        <h5 class="p-2">Mobile Number</h5>
        <input type="number" name="Phone" placeholder="Mobile Number" id="ContactForm" required>
        <h5 class="p-2">Email</h5>
        <input type="email" name="Email" placeholder="Email..." id="ContactForm" required >
        <h5 class="p-2">Your Message</h5>
        <textarea id="ContactForm" name="UserMessage" rows="5" cols="50" required></textarea>
        <button id="MsgSender" type="submit" class="mt-2">Submit Message</button>
    </form>

        </div>
        
      </div>
      <div class="col">
        <h2>Find me on</h2>
        <a href="https://www.linkedin.com/in/keenan-timmie-372273312/" target="_blank">
        <i class="bi bi-linkedin h1 ms-2"></i>
</a>

<a href="https://www.behance.net/keenantimmie" target="_blank">
    <i class="bi bi-behance h1 ms-2"></i>
</a>

<a href="https://github.com/RichtersHotline" target="_blank">
    <i class="bi bi-github h1 ms-2"></i>
</a>
<h2>My Info</h2>
<h5>Email Address</h5>
<p>KeenanTimmieWeb@gmail.com</p>
<h5>Location</h5>
<p>Colorado Park, Mitchell's Plain</p>
<h5>Mobile Number</h5>
<p>065 045 1767</p>

      </div>
      

    
    </div>
  </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

a {

text-decoration: none;   
}
img {


}

</style>