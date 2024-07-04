<template>
    <footer class="container-fluid">
  <div class="row">
  <p class="text-center">Keenan Timmie's portfolio &copy; <span>{{cYear}}</span>
  
  </p>
  
  </div>
  
    </footer>
  
  </template>
  
  <script>
  export default {
  data() {
  
      return {
    cYear: new Date().getUTCFullYear()
  
  
      }
  
  
  
  },
  
  
  }
  </script>
  
  <style>
  
  </style>