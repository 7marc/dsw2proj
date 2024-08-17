<template>
  <div>
    <h1>Clientes</h1>
    <ul>
      <NuxtLink to="/clientes/cadastro" type="button" class="btn btn-info" @click="submitForm">Cadastrar</NuxtLink>
      <li v-for="cliente in clientes" :key="cliente.id">
        {{ cliente.nome }} - {{ cliente.telefone }}
        <button type="button" class="btn btn-primary" @click="submitForm">Editar</button>
        <button type="button" class="btn btn-danger" @click="submitForm">Deletar</button>    
      </li>
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

// Função que será executada quando o componente for montado
onMounted(async () => {
  try {
    // Realiza a requisição à API para obter os clientes
    const response = await fetch('http://localhost:3000/api/clientes');

    // Verifica se a resposta é bem-sucedida
    if (response.ok) {
      // Converte a resposta para JSON e armazena em clientes
      clientes.value = await response.json();
    } else {
      // Define a mensagem de erro se a resposta não for bem-sucedida
      errorMessage.value = `Erro ao buscar clientes 1: ${response.statusText}`;
    }
  } catch (error) {
    // Define a mensagem de erro se ocorrer uma exceção
    errorMessage.value = `Erro ao buscar clientes 2: ${error.message}`;
  }
});
</script>

<style scoped>
/* Estilo opcional para a mensagem de erro */
.error {
  color: red;
  font-weight: bold;
}
</style>
