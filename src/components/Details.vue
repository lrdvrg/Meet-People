<template>
  <div>
    <cabecera></cabecera>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h2>Te presentamos a<h2 class="text-capitalize">{{d.name.first}} {{d.name.last}}...</h2></h2>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
           <div class="col-4">
               <div class="card w-200" style="width: 38rem; height: 22rem;" v-if="d">
                    <div class="card-body">
                        <h5 class="card-title text-capitalize">{{d.name.first}} {{d.name.last}}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{d.dob.age}} años</li>
                        <li class="list-group-item">{{d.email}}</li>
                        <li class="list-group-item">{{d.cell}}</li>
                        <li class="list-group-item text-capitalize">{{d.location.city}}, {{d.location.state}}</li>
                    </ul>
                    <div class="card-body">
                        <router-link class="btn btn-outline-warning btn-block" :to="{name:'Lista'}">Volver atras</router-link>  
                    </div>
                </div>
           </div>
           <div class="col">
               <div class="card w-200" style="width: 18rem; height: 22rem;">
                      <img class="card-img-top" :src="d.picture.large" alt="Card image cap">
                </div>
           </div>
        </div>
    </div>

  </div>
</template>

<script>
import Cabecera from '@/components/Cabecera'
import axios from 'axios'
import router from '../router'


export default {
  name: 'Lista',
  components:{
      Cabecera
  },
  data () {
    return {
        loading: false,
        d: {}
    }
  },
  async created() {
      let userData = this.$route.params.data
      let userId= this.$route.params.id
      if (userData){
        this.d = this.$route.params.data;   
          
      } else {
          this.loading=true
          let res = await axios.get(`/Details/${userId}`)
            this.d = res.data
            this.loading = false	
            
      }

}
}
</script>

<style>

</style>
