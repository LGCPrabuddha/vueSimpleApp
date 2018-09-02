<template>
  <div class="container">
    <div class="row">
      <form class="form-horizontal">
        <fieldset>
          <legend>Music App</legend>
          <app-searcharea @newDataset="results = $event"></app-searcharea>
        </fieldset>
      </form>
    </div>
    <div class="row">
      <div class="col-md-12">
        <app-resultsharea></app-resultsharea>
        {{results}}
      </div>
    </div>
  </div>
</template>

<script>
  import searchArea from './SearchArea.vue'
  import resultshArea from './ResultArea.vue'

  export default {

    data(){
      return{
        results:[]
      }
    },

    components:{
      'app-searcharea':searchArea,
      'app-resultsharea':resultshArea,
    }
  }
</script>

<style>
</style>
