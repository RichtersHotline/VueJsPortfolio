<template>
<div class="Position">
    <a href="#landing">
  <button  type="button" class="Back2Top">Back tTo Top</button>
</a>
</div>
</template>

<script>
export default {
name:"Back2Top",

}
</script>

<style scoped>
.Back2Top {
   background-color:transparent;
   color:white;
   font-family: "Sedan SC", serif;
   font-style: normal;
   border:none;
    
   outline:2px solid fuchsia;
   box-shadow:1px 1px 5px fuchsia;
   background-color:#170217;
   color:#9E8BA0;
   width:90%;
 margin-inline:8px;
   padding:2px;
   transition:0.8s;


}
.Back2Top:hover {
    background-color:#251627;
    color:white;
 
 
 }
.Position {
  
    position:sticky;
    bottom:0;
    z-index:9999;
    display:flex;
    justify-content: flex-end;

}

</style>