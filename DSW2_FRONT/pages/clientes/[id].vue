<template>
    <div>
        <p>cliente {{ id }}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est explicabo officia eveniet? Alias nemo totam debitis. Necessitatibus, aliquam laborum repellat dolor provident amet dolore numquam modi minus a temporibus odit, eum nulla consequatur et excepturi. Animi, assumenda similique optio pariatur tempore suscipit est, incidunt autem sunt iste officiis quia in amet ipsa sint!</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style scoped>

</style>