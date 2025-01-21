<template>
  <div class="menu">
    <div id="logo" style="width: 250px;">
      <a href="#home"><img src="/logobranco.png" alt=""></a>
    </div>
  <ul class="menu-items" style="display: flex; list-style: none; margin: 0; padding: 0; font-weight: 600;">
  <li class="menu-item" style="margin-right: 15px;">
    <a href="#quemSomos" style="text-decoration: none; color: inherit;">Quem somos</a>
  </li>
  <li class="menu-item" style="margin-right: 15px;">
    <a href="#socios" style="text-decoration: none; color: inherit;">Sócios</a>
  </li>
  <li class="menu-item">
    <a href="#parceiros" style="text-decoration: none; color: inherit;">Parceiros</a>
  </li>
  <li class="menu-item">
    <a href="#SejaParceiro" style="text-decoration: none; color: inherit;">Seja um parceiro</a>
  </li>
</ul>
<div id="social-login-container" style="display: flex; align-items: center; gap: 15px; margin-right: 5.5vh;">
  <div id="social">
    <ul style="display: flex; list-style: none; margin: 0; padding: 0;">
      <li>
        <a target="_blank" href="https://www.instagram.com/soluttis/">
          <font-awesome-icon :icon="['fab', 'instagram']" class="instagram-icon" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B556296972862&text&type=phone_number&app_absent=0">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="whatsapp-icon" />
        </a>
      </li>
    </ul>
  </div>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      v-if="logado == false"
      style="margin-right: 15px;">
      Sign in
    </button>
    <button
      class="btn btn-danger w-150"
      @click="sair"
      v-if="logado"
      style="margin-right: 15px; width: 100px;">
      Sair
    </button>
    <ul class="dropdown-menu dropdown-menu-dark p-3" style="min-width: 300px;">
      <li>
        <div>
          <input type="text" v-model="usuario" placeholder="Login" class="form-control mb-2" style="background-color: black; border-color: gray;" />
        </div>
      </li>
      <li>
        <div>
          <input type="password" v-model="senha" placeholder="Password" class="form-control mb-2" style="background-color: black; border-color: gray;" />
        </div>
      </li>
      <li>
        <button class="btn btn-primary w-100" @click="loginHandle" v-if="!logado">Entrar</button>
        <button class="btn btn-danger w-100" @click="sair" v-if="logado">Sair</button>
      </li>
    </ul>
  </div>
</div>
  </div>
</template>

<script setup>
import {ref, defineEmits } from 'vue'

const usuario = ref()
const senha = ref()

let logado = ref(false);
const emit = defineEmits(['logado-toggled']);

function sair(){
  logado.value = false;
  emit('logado-toggled', logado.value);
}

async function loginHandle(){
  try {
    const resposta = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST', // Método HTTP (GET, POST, etc.)
      headers: {
        'Content-Type': 'application/json', // Tipo de conteúdo
        'Authorization': 'Bearer SEU_TOKEN_AQUI' // Se precisar de autenticação
      },
      body: JSON.stringify({
        username: usuario.value,
        password: senha.value,
      }),
    });

    // Verifica se a requisição foi bem-sucedida
    if (!resposta.ok) {
      throw new Error('Erro na requisição: ' + resposta.status);
    }

    // Converte a resposta para JSON
    const dados = await resposta.json();
    console.log(dados); // Exibe os dados retornados pela API
    logado.value = true;
    emit('logado-toggled', logado.value);
    usuario.value = '';
    senha.value = '';
    return dados;
  } catch (erro) {
    console.error('Erro ao fazer a requisição', erro);
  }

  
  console.log(logado.value)
}
</script>

<style>

.menu {
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  width: 100%;
  height: 8vh;
  background-color: #000;
  color: #fff;
}

#logo {
  margin-left: 5.5vh;
}
#logo img {
  width: 40px;
}

.menu-items {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.menu-items li {
  margin-right: 2rem; 
  cursor: pointer; 
}

#social {
  display: flex; 
}

#social ul {
  display: flex; 
  list-style: none;
  margin: 5.5vh;
  padding: 0;
}
a {
  text-decoration: none;
  color: white;
}
.whatsapp-icon {
    font-size: 1.5rem; 
    color: #25D366;  
    transition: transform 0.3s ease;
    }

    .whatsapp-icon:hover {
    transform: scale(1.2); 
    color: #128C7E;        
    }
    .instagram-icon {
    font-size: 1.5rem;      
    color: #E4405F;       
    transition: transform 0.3s ease, color 0.3s ease;
    cursor: pointer;
    }
    .instagram-icon:hover {
    transform: scale(1.2); 
    color: #C13584;        
    }
    .menu-items li {
  margin-right: 2rem; 
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.menu-items li:hover {
  transform: scale(1.1); /* Aumenta o tamanho levemente */
  color: #00d1ff; /* Muda a cor ao passar o mouse */
}

a {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

a:hover {
  color: #00d1ff; /* Muda a cor do texto ao passar o mouse */
}

#social-login-container {
  display: flex;
  align-items: center; /* Alinha os itens verticalmente ao centro */
  gap: 15px; /* Espaçamento entre ícones e botão */
  margin-right: 5.5vh; /* Ajuste o espaço direito conforme necessário */
}

#social ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

#social li {
  margin-left: 10px; /* Espaçamento entre os ícones */
}

.instagram-icon,
.whatsapp-icon {
  font-size: 1.5rem; /* Tamanho dos ícones */
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.instagram-icon:hover {
  transform: scale(1.2); /* Efeito ao passar o mouse */
  color: #c13584; /* Nova cor */
}

.whatsapp-icon:hover {
  transform: scale(1.2);
  color: #128c7e;
}

html, body {
    height: 100%;
    margin: 0;
    background-color: black;
    color: white; /* Opcional, para garantir que o texto seja visível */
}
#social-login-container input {
  color: white; /* Garante que o texto digitado seja branco */
}

/* Cor do texto do placeholder */
#social-login-container input::placeholder {
  color: white; /* Garante que o texto do placeholder seja branco */
}
</style>
