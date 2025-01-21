<template>
    <div class="CardClient">
        <p>nome: {{nome}} </p>
        <p>email: {{email}}</p>
        <p>telefone: {{telefone}}</p>        
    </div>
</template>

<script>
export default {
  name: 'CardCliente',
  props: {
    nome: String,
    email: String,
    telefone: String
  }
};
</script>


<style>
.CardClient {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
  color: black;
}

</style>