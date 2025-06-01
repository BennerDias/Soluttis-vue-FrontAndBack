<template>
  <div style="display: flex; flex-direction: column; min-height: 100vh; background-color: #1c1d1f; color: white;">
    <div style="padding: 30px; text-align: center;">
      <h1 style="font-size: 32px;">Gestão de Cadastros</h1>
      <p style="font-size: 16px;">Visualize e gerencie as informações de clientes cadastrados no sistema.</p>
    </div>

    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; margin-top: 20px; width: 100%;">
      <p-data-table
        class="p-datatable-dark"
        v-model:filters="filters"
        :value="clientes"
        paginator
        :rows="10"
        dataKey="nome"
        filterDisplay="row"
        :loading="loading"
        :globalFilterFields="['nome', 'email', 'telefone', 'empresa']"
      >
        <template #header>
          <div class="flex justify-end">
            <InputText v-model="filters['global'].value" placeholder="Buscar" id="filter"/>
            <i class="pi pi-search" />
          </div>
        </template>

        <template #empty>No customers found.</template>
        <template #loading>Loading customers data. Please wait.</template>

        <p-column field="nome" header="Nome" style="min-width: 12rem">
          <template #body="{ data }">{{ data.nome }}</template>
        </p-column>

        <p-column field="email" header="Email" style="min-width: 12rem">
          <template #body="{ data }">{{ data.email }}</template>
        </p-column>

        <p-column field="telefone" header="Telefone" style="min-width: 12rem">
          <template #body="{ data }">{{ data.telefone }}</template>
        </p-column>

        <p-column field="empresa" header="Empresa" style="min-width: 12rem">
          <template #body="{ data }">{{ data.empresa }}</template>
        </p-column>

        <p-column header="Ações" style="min-width: 10rem">
          <template #body="{ data }">
            <button @click="abrirModalEdicao(data)" class="btn btn-sm btn-primary">Editar</button>
            <button @click="excluirCliente(data.id)" class="btn btn-sm btn-danger">Excluir</button>
          </template>
        </p-column>
      </p-data-table>
    </div>

    <!-- Modal de edição -->
    <Dialog v-model:visible="modalVisivel" modal header="Editar Cliente" :style="{ width: '600px' }">
      <div class="flex items-center justify-center">
        <div class="p-field" style="align-content: center; ">
          <label style="width: 100px;" for="nome">Nome:</label>
          <InputText style="width: auto; margin: 0 auto; " id="nome" v-model="clienteEditando.nome" />
        </div>
        <div class="p-field">
          <label style="width: 100px;" for="email">Email:</label>
          <InputText style="width: auto; margin: 0 auto;" id="email" v-model="clienteEditando.email" />
        </div>
        <div class="p-field">
          <label style="width: 100px;" for="telefone">Telefone:</label>
          <InputText style="width: auto; margin: 0 auto;" id="telefone" v-model="clienteEditando.telefone" />
        </div>
        <div class="p-field">
          <label style="width: 100px;" for="empresa">Empresa:</label>
          <InputText style="width: auto; margin: 0 auto;" id="empresa" v-model="clienteEditando.empresa" />
        </div>

        <div class="p-dialog-footer" style="display: flex; justify-content: flex-end; gap: 10px;">
          <Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="modalVisivel = false" />
          <Button label="Salvar" icon="pi pi-check" class="p-button-primary" @click="salvarEdicao" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from 'primevue/inputtext';


const clientes = ref([]);
const filters = ref({ global: { value: "" } });
const loading = ref(false);

// Controle do modal e cliente selecionado
const modalVisivel = ref(false);
const clienteEditando = ref({
  id: "",
  nome: "",
  email: "",
  telefone: "",
  empresa: ""
});

// Abrir modal e preencher os campos
const abrirModalEdicao = (cliente) => {
  clienteEditando.value = { ...cliente };
  modalVisivel.value = true;
};

// Salvar alterações com validação simples
const salvarEdicao = async () => {
  const { nome, email, telefone, empresa } = clienteEditando.value;

  if (!nome || !email || !telefone || !empresa) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  try {
    const resposta = await fetch(`http://localhost:5000/api/forms/${clienteEditando.value.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clienteEditando.value)
    });

    if (!resposta.ok) throw new Error("Erro ao editar o cliente");

    alert("Cliente editado com sucesso!");
    modalVisivel.value = false;
    fetchClientes();
  } catch (erro) {
    console.error("Erro ao editar o cliente:", erro);
  }
};

const excluirCliente = async (id) => {
  if (!confirm("Tem certeza que deseja excluir este cliente?")) return;

  try {
    const resposta = await fetch(`http://localhost:5000/api/forms/${id}`, {
      method: "DELETE"
    });

    if (!resposta.ok) throw new Error("Erro ao excluir cliente");

    alert("Cliente excluído com sucesso!");
    fetchClientes();
  } catch (erro) {
    console.error("Erro na exclusão:", erro);
  }
};

const fetchClientes = async () => {
  loading.value = true;
  try {
    const resposta = await fetch("http://localhost:5000/api/forms");
    if (!resposta.ok) throw new Error("Erro ao buscar os dados");
    const dados = await resposta.json();
    clientes.value = dados;
  } catch (erro) {
    console.error("Erro na requisição:", erro);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchClientes);
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.761);
  color: white;
}

.p-datatable {
  background-color: #1c1d1f !important;
  color: white;
  border: none;
}
#filter{
  background-color: #1c1d1f!important;
  color: white;
  border: none;
}
input#filter::placeholder {
  color: white;
  opacity: 1;
}


.p-datatable-header {
  background-color: #333;
  color: white;
}

.p-datatable-table {
  background-color: #1c1d1f !important;
}

.p-datatable-thead > tr > th {
  background-color: #333 !important;
  color: white;
}

.p-datatable-tbody > tr > td {
  background-color: #1c1d1f !important;
  color: white;
}

.p-inputtext {
  background-color: #333;
  color: white;
  border: 1px solid #444;
}

.p-inputtext:focus {
  border-color: #ffcc00;
}
</style>
