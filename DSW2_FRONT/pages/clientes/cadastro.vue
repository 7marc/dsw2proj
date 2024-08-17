
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
               message: 'jesus halp me'
            }
        },
            methods:
        {
                submitForm()
            {
                console.log("yeah this shit works");
            }
        }       
    }
</script>

<style scoped>

</style>
