<template>
    <div>
      <h1>Clientes</h1>
      <ul>
        <!-- Itera sobre a lista de clientes e exibe cada um -->
        <li v-for="cliente in clientes" :key="cliente.id">
          {{ cliente.nome }} - {{ cliente.telefone }}
        </li>
        <button type="button" class="btn btn-danger" >Deletar</button>
      </ul>
      <!-- Mensagem de erro se algo der errado -->
      <div v-if="errorMessage" class="error">
        {{ errorMessage }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Defina uma referência reativa para armazenar os dados dos clientes
  const clientes = ref([]);
  // Referência reativa para armazenar mensagens de erro
  const errorMessage = ref('');
  
  onMounted(async () => 
  {
    try 
    {
      const response = await fetch('http://localhost:3000/clientes');
      if (response.ok) 
      {
        clientes.value = await response.json();
      } 
      else 
      {
        errorMessage.value = `Erro ao buscar clientes1: ${response.statusText}`;
      }
    } 
    catch (error) 
    {
      errorMessage.value = `Erro ao buscar clientes2: ${error.message}`;
    }
  });

  </script>

  
  <style scoped>
  .error 
  {
    color: red;
    font-weight: bold;
  }
  </style>
  