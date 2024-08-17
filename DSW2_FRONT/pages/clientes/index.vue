<template>
  <div>
    <NuxtLink to="/">DSW2</NuxtLink>
    <h1>Clientes</h1>
    <ul>
      <NuxtLink to="/clientes/cadastro" type="button" class="btn btn-info" @click="submitForm">Cadastrar</NuxtLink>
      <li v-for="cliente in clientes" :key="cliente.id">
        {{ cliente.nome }} - {{ cliente.telefone }}
        <button type="button" class="btn btn-primary" @click="submitForm">Editar</button>
        <button type="button" class="btn btn-danger" @click="submitForm">Deletar</button>    
      </li>
    </ul>
    <div v-if="errorMessage" class="error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const clientes = ref([]);
const errorMessage = ref('');

onMounted(async () => {
  try {
    const response = await useFetch('http://localhost:3000/clientes');

    if (response.ok) 
    {
      clientes.value = await response.json();
    } 
    else 
    {
      errorMessage.value = `Erro ao buscar clientes 1: ${response.statusText}`;
    }
  } 
  catch (error)
  {
    errorMessage.value = `Erro ao buscar clientes 2: ${error.message}`;
  }
});
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
