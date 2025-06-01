<template>
  <MenuNavegacao  @logado-toggled="logado = $event" ></MenuNavegacao>
  <MenuTitle v-if="logado==false"></MenuTitle>
  <quemSomos style="margin-top: 150px;" v-if="logado==false"></quemSomos>
  <SociosComp v-if="logado==false"></SociosComp>
  <ParceirosComp v-if="logado==false"></ParceirosComp>
  <SejaParceiro v-if="logado==false"></SejaParceiro>
  <CardsClientes v-if="logado"/>
  <footer>
    R. Salvador, 40, Anexo Rua Terezina Quadra 05 Lote 5/9 SALA 1304 Cond Essenciale Premier.
    Bairro Alto da Glória, Goiânia - GO.
  </footer>
</template>

<script setup>
  import MenuNavegacao from '@/components/MenuNavegacao.vue'
  import MenuTitle from '@/components/MenuTitle.vue'
  import quemSomos from '@/components/quemSomos.vue'
  import ParceirosComp from '@/components/ParceirosComp.vue'
  import SociosComp from '@/components/SociosComp.vue'
  import CardsClientes from './components/ListaDeClientes.vue'
  import {ref} from 'vue'  
  import SejaParceiro from './components/SejaParceiro.vue'

let logado = ref(false);


</script>

<style>
html, body {
    height: 100%;
    margin: 0;
    background-color: black;
    color: white; /* Opcional, para garantir que o texto seja visível */
}
footer{
  text-align: center;
}
header{
  display: flex;
}
h2{
  margin: 2rem;
  text-align: center;
  font-variant: small-caps;
  font-size: 3rem;
}
</style>
