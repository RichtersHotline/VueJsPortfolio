<template>
    <div class="card" style="width: 18rem;">
    <div class="header">
<slot name="cardHeader"></slot>

    </div>
     <div class="card-body">
    <slot name="cardBody"></slot>
     </div>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>

h3.card-title {

    font-weight:lighter;
}
.card-body {

    background-color:#332234;
    color:#9E8BA0;
    


}
.card-text {
    background-color:#1f121f;
/*  #271727;  */
}
.card {
    opacity:0.5;
    transition:2s;
   
}
.card:hover {

    transform:scale(1.1,1.1);
opacity:1;


}

</style>