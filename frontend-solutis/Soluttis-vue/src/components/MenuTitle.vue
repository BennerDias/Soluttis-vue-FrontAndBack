<template>
  <div id="titleDiv" class="d-flex align-items-center d-flex justify-content-center" >
    <h1>Soluttis</h1>
  </div>
</template>

<script setup>

</script>

<style>
input::placeholder {
  color: white;
}
.cardClients {
  display: flex;
  flex-direction: row;
  width: auto;
}

input {
  text-align: center;
  outline: none;
  box-shadow: none;
  border: none;
}

#titleDiv h1 {
  font-size: 18rem;
  font-family: Russo One;
  text-align: center;
  color: #fff;
  font-weight: normal;
}

#titleDiv {
  height: 100vh; /* Garante que a altura ocupe toda a tela */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 30%),
    linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 80%),
    url('https://images.pexels.com/photos/23355036/pexels-photo-23355036/free-photo-of-escritorio-depois-do-expediente-em-preto-e-branco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    no-repeat center center;
  background-size: cover; 
  background-position: center center; 
  background-attachment: fixed; 
}

#formdata {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65vh;
  height: 30vh;
  margin: auto;
  color: #fff;
  border-radius: 10px;
  border: 0.1px solid rgb(255, 255, 255, 0.5);
  position: relative;
  background-color: rgba(153, 153, 153, 0.5);
  backdrop-filter: blur(5px);
}

#formdata input {
  width: 80%;
  border: 0.1px solid rgb(255, 255, 255, 0.5);
  background-color: rgba(153, 153, 153, 0.5);
  backdrop-filter: blur(5px);
  height: 3.5vh;
  border-radius: 30px;
  margin-bottom: 1.5vh;
}

#formdata h2 {
  font-weight: normal;
  font-size: 2em;
  margin: auto;
}

#enviar {
  margin: 1rem;
  border-radius: 30px;
  border: none;
  background: linear-gradient(90deg, #00dffc 0%, #05444d 100%);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  color: #fff;
  text-transform: uppercase;
  width: 80%;
  height: 3rem;
  align-content: center;
  transition: all 300ms ease-out;
}

#enviar {
  transform: scale(0.95);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
}

#enviar:hover {
  transform: scale(1.02);
  color: #157dc2;
}
html, body {
    height: 100%;
    margin: 0;
    background-color: black;
    color: white; /* Opcional, para garantir que o texto seja visível */
}

#formdata input {
  color: white; /* Garante que o texto digitado seja branco */
}

/* Cor do texto do placeholder */
input::placeholder {
  color: white; /* Garante que o texto do placeholder seja branco */
}
</style>
