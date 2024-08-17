
<template>
    <div>

        <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Nome">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Telefone">
    </div>
  </div>
  <button type="submit" class="btn btn-primary" @click="submitForm">Cadastrar</button>

</form>

    </div>
</template>

<script>
    export default 
    {
        data() 
        {
            return {
               // name: ''
               message: 'hello world'
            }
        },
            methods: 
        {
                async submitForm()
            {
                try 
                {
                    const response = await $fetch('http://localhost:3000/clientes');
                    this.clientes = response.data;
                } 
                catch (error) 
                {
                    console.error('Error fetching clientes:', error);
                }
            }
        }       
    }

</script>

<style scoped>

</style>

 
