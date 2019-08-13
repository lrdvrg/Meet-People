<template>
  <div>
    <cabecera></cabecera>
    <br>
    <div class="jumbotron">
        <h1 class="display-4">Meet People</h1>
        <p class="lead">Conoce personas aleatoriamente.</p>
        <hr class="my-4">
        <p>¡Una lista aleatoria de personas!</p>
        <button class="btn btn-success btn-lg boton-lista" @click="$router.push('lista')" role="button">¡Generar lista!</button>
    </div>

  </div>
</template>

<script>
import Cabecera from '@/components/Cabecera'

export default {
  name: 'Lista',
  components:{
      Cabecera
  },
  data () {
    return {

    }
  }
}
</script>

<style>
    .boton-lista{
        color: white;
        text-decoration-color: white;
    }
</style>
