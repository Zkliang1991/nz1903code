<template>
  <div id="app">
      <!-- <transition :name="className" mode="out-in"> -->
        <router-view ></router-view>
      <!-- </transition> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      className:"fade"
    }
  },
  watch:{
    "$route":function(to,from){
        this.className = "fade"
    }
  },
  
}
</script>


<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
