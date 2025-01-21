<template>
    <div style="display: flex; flex-direction: column; min-height: 100vh; background-color: #1c1d1f; color: white;">
      <div style="padding: 30px; text-align: center;">
        <h1 style="font-size: 32px;">Gestão de Cadastros</h1>
        <p style="font-size: 16px;">Visualize e gerencie as informações de clientes cadastrados no sistema.</p>
      </div>
  
      <div style="  flex: 1; display: flex; flex-direction: column; align-items: center; margin-top: 20px; width: 100%; ;">
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
              <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
              <i class="pi pi-search" />
            </div>
          </template>
  
          <template #empty>
            No customers found.
          </template>
  
          <template #loading>
            Loading customers data. Please wait.
          </template>
  
          <p-column field="nome" header="Nome" style="min-width: 12rem">
            <template #body="{ data }">
              {{ data.nome }}
            </template>
          </p-column>
  
          <p-column field="email" header="Email" style="min-width: 12rem">
            <template #body="{ data }">
              {{ data.email }}
            </template>
          </p-column>
  
          <p-column field="telefone" header="Telefone" style="min-width: 12rem">
            <template #body="{ data }">
              {{ data.telefone }}
            </template>
          </p-column>
  
          <p-column field="empresa" header="Empresa" style="min-width: 12rem">
            <template #body="{ data }">
              {{ data.empresa }}
            </template>
          </p-column>
        </p-data-table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { InputText } from "primevue/inputtext";
  
  const clientes = ref([]);
  const filters = ref({
    global: { value: "" }
  });
  const loading = ref(false);
  
  // Função para buscar os dados
  const fetchClientes = async () => {
    loading.value = true;
    try {
      const resposta = await fetch("http://localhost:5000/api/forms");
      if (!resposta.ok) {
        throw new Error("Erro ao buscar os dados");
      }
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
  html, body {
    height: 100%;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.761);
    color: white;
  }
  
  .p-datatable {
    background-color: #1c1d1f !important; /* Fundo escuro para o DataTable */
    color: white; /* Texto branco */
    border: none; /* Sem bordas para uma aparência mais clean */
  }
  
  .p-datatable-header {
    background-color: #333; /* Fundo do cabeçalho da tabela */
    color: white;
  }
  
  .p-datatable-table {
    background-color: #1c1d1f !important; /* Fundo das linhas da tabela */
  }
  
  .p-datatable-thead > tr > th {
    background-color: #333 !important; /* Fundo escuro para os cabeçalhos das colunas */
    color: white;
  }
  
  .p-datatable-tbody > tr > td {
    background-color: #1c1d1f !important; /* Fundo escuro para as células */
    color: white;
  }
  
  .p-inputtext {
    background-color: #333; /* Fundo escuro para os inputs de pesquisa */
    color: white;
    border: 1px solid #444;
  }
  
  .p-inputtext:focus {
    border-color: #ffcc00;
  }

  </style>
  