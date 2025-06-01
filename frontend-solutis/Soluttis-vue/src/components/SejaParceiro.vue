<template>
    <section id="SejaParceiro">
        <div id="boxParceiros">
          <div id="SejaParceiroBox" class="d-flex">
              <img class="p-2 flex-fill" src="/images/parceiros.jpg"  alt="">
              <div id="clienteDados" class="p-2 flex-fill d-flex align-items-end d-flex justify-content-end">
                  <form id="formdata" @submit.prevent="dataReceived" style="color: white; font-weight: bold;">
                      <h2>Fale conosco</h2>
                      <input type="text" v-model="FormData.nome" placeholder="Nome">
                      <input type="text" v-model="FormData.email" placeholder="Email">
                      <input type="number" v-model="FormData.telefone" placeholder="Telefone">
                      <input type="text" v-model="FormData.empresa" placeholder="Nome da Empresa ou CNPJ">
                      <button type="submit" id="enviar">Enviar</button>
                  </form>
              </div>
          </div>
        </div>
    <div class="cardClients">
      <CardCliente v-for="(cliente, index) in clientes" :key="index" v-bind="cliente" />
    </div>
    </section>
</template>

<script setup>
    
import { ref } from 'vue';
import Swal from 'sweetalert2'

const sucessoModal = () => {
  Swal.fire({
  title: "Formulário enviado!",
  text: "Aguarde que em breve entraremos em contato!",
  icon: "success"
});
}
const errorModal = () => {
  Swal.fire({
  title: "Não foi possível realizar o envio do formulário!",
  text: "Favor preencher todos os dados!",
  icon: "error"
});
}

async function formSubmit(){
  try {
    const resposta = await fetch('http://localhost:5000/api/forms', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer SEU_TOKEN_AQUI' 
      },
      body: JSON.stringify({
        nome: FormData.value.nome,
        email: FormData.value.email,
        telefone: FormData.value.telefone,
        empresa: FormData.value.empresa,
      }),
    });

    // Verifica se a requisição foi bem-sucedida
    if (!resposta.ok) {
      errorModal();
      throw new Error('Erro na requisição: ' + resposta.status);
      
    }
    sucessoModal();
  } catch (erro) {
   
    console.error('Erro ao fazer a requisição', erro);
  }

}
// Definindo os dados do formulário e a lista de clientes com `ref` (reactividade)
const FormData = ref({
  nome: '',
  email: '',
  telefone: '',
  empresa:''
});

const clientes = ref([]);

// Função chamada no envio do formulário
const dataReceived = () => {
    formSubmit();

  // Limpa os campos do formulário após o envio
  FormData.value.nome = '';
  FormData.value.email = '';
  FormData.value.telefone = '';
  FormData.value.empresa = '';
};

</script>

<style>
#boxParceiros{
  margin: 0 auto;
  width: 110vh;
  background-color:rgb(29, 29, 29);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 3vh;
}
#SejaParceiro img {
  border-radius: 15px;
  width: 40%;
  height: 600px;
}
#SejaParceiroSection {
  width: 100%;

}
#SejaParceiroBox{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgb(29, 29, 29);
    box-shadow: 10px 10px 20px rgba(0.5, 0, 0, 0.6);
    border-radius: 15px;
}
#formdata{
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgb(29, 29, 29);
}
#formdata input {
  color: #ffffff;
  font-weight: lighter;
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: rgb(46, 46, 46);
}

#formdata h2 {
  font-size: 2.5rem;
  font-weight: bolder;
  margin-bottom: 2vh;
}
#enviar {
  border-radius: 5px;
}
#formdata input:focus {
  box-shadow: 0 0 5px #037382;
}
</style>