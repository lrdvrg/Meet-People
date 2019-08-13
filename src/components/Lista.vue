<template>
  <div>
    <cabecera></cabecera>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h2 class=" ">Estas son las personas que pudimos encontrar</h2>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
           <div class="col-2 mt-4 mr-2 ml-2" v-for="(d, index) in data" :key="index" v-bind="index">
               <div class="card" style="width: 18rem;">
                    <img :src="d.picture.large" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-capitalize">{{d.name.first}} {{d.name.last}}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{d.dob.age}} años</li>
                        <li class="list-group-item text-capitalize">{{d.location.city}}, {{d.location.state}}</li>
                    </ul>
                    <div class="card-body">
                        <router-link class="btn btn-outline-success btn-block" :to="{name:'Details', params: {id: d.index, data : data[index]}}">Conocer</router-link>  
                    </div>
                </div>
           </div>
            
        </div>
    </div>

  </div>
</template>

<script>
import Cabecera from '@/components/Cabecera'
import axios from 'axios'

export default {
  name: 'Lista',
  components:{
      Cabecera
  },
  data () {
    return {
        data: null
    }
  },
  methods:{
      getUsers(){
        axios.get('https://randomuser.me/api/?results=20&inc=name,gender,nat,dob,cell,email,location,picture,info').then(response => {
            this.data = response.data.results;
            console.log(this.data);
            
        }).catch(e=>console.log(e));
      }
  },
  mounted() {
    this.getUsers();
  }
}
</script>

<style>

</style>
