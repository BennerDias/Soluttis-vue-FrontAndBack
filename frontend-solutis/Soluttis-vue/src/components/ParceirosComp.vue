<template>
    <section id="parceiros" style ="color: white">
        <h2 id="title">
            Parceiros
        </h2>
        <div class="parceiros">
            <ParceirosCard></ParceirosCard>                     
        </div>
    </section>
</template>

<script setup>
  import ParceirosCard from '@/components/ParceirosCard.vue'


</script>

<style>
 html, body {
    height: 100%;
    margin: 0;
    background-color: black;
    color: white; /* Opcional, para garantir que o texto seja visível */
}
</style>