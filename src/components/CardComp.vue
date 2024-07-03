<template>
    <div class="card">
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

    background-color:#310335;

    color:#9E8BA0;
    height:50%;


}
.card-text {
    background-color:#864386;
}
.card {
    opacity:0.5;
    transition:2s;
    margin-left:10px;
    margin:auto;
    outline:2px solid fuchsia;
    box-shadow:5px 5px 10px fuchsia;
    width:18rem;
}
.card:hover {

    transform:scale(1.1,1.1);
opacity:1;


}
@media only screen and (max-width: 720px) {

    .card {
        opacity:1;

        margin:auto;
        outline:2px solid fuchsia;
        box-shadow:5px 5px 10px fuchsia;
        width:100%;
        margin-bottom:30px;
    }

}
</style>