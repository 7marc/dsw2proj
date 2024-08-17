<!--

<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price | currency }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default 
{
  data() {
    return {
      items: [
        { name: 'Item 1', description: 'Description 1', price: 10 },
        { name: 'Item 2', description: 'Description 2', price: 20 },
        { name: 'Item 3', description: 'Description 3', price: 30 }
      ]
    }
  },
  filters: {
    currency(value) 
    {
      return '$${parseFloat(value).toFixed(2)}';
    }
  }
}
</script>

-->


<template>

  <div>
      <header>
          <nav>
              <NuxtLink to="/">DSW2</NuxtLink>
              <ul>
                  <li><NuxtLink to="/about">About</NuxtLink></li>                
                  <li><NuxtLink to="/clientes">Clientes</NuxtLink></li>
                  <li><NuxtLink to="/maquinas">Maquinas</NuxtLink></li>  
              </ul>
          </nav>
      </header>
  </div>
  
  
    <div>
      <h2>Home</h2>
      <p>mucho texto</p>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  
  </style>
  