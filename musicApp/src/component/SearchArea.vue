<template>
  <div class="form-group row">
    <label for="inputEmail" class="col-md-6 col-form-label">Search Music</label>
    <div class="col-md-6">
      <input type="text" class="form-control" placeholder="Type here" @input="keyPressed">
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    methods:{
      keyPressed(event){
        var key = event.target.value;
        //console.log(key)
        axios.get("https://api.spotify.com/v1/search?q="+ key +"&type=track")
          .then(response=>{
            //console.log("not error")
            console.log(response.data)
          })
          .catch(e=>{
            console.log("error")
            this.error.push(e)
          })
      }
    }
  }
</script>
<style></style>
