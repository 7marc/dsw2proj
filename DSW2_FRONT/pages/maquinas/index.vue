<template>
    <div>
      <h1>Maquinas</h1>
      <ul>
        <button type="button" class="btn btn-info" @click="submitForm">Cadastrar</button>
        <li v-for="maquina in maquinas" :key="maquina.id">
          {{ maquina.nome }} - {{ maquina.modelo }} {{ maquina.marca }}{{ maquina.clienteId }}
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
  

  const maquinas = ref([]);
  const errorMessage = ref('');
  
  onMounted(async () => {
    try 
    {
      const response = await fetch('http://localhost:3000/api/maquinas');
      if (response.ok) 
      {
        maquinas.value = await response.json();
      } else 
      {
        errorMessage.value = `Erro ao buscar Maquinas: ${response.statusText}`;
      }
    } 
    catch (error) 
    {
      errorMessage.value = `Erro ao buscar Maquinas: ${error.message}`;
    }
  });
  </script>
  
  <style scoped>
  .error {
    color: red;
    font-weight: bold;
  }
  </style>
  