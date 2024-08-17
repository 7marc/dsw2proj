<template>
<div>

    <form>

        <h1>Cadastro de Máquina</h1>

  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Nome">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="marca">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="modelo">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="cliente">
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
                submitForm()
            {
                console.log("works");
            }
        }       
    }
</script>

<style scoped>

</style>
