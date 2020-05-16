<template>
  <van-nav-bar
  :title="title"
  left-text="返回"
  
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</template>
 
<script>
export default {
  props:{
        title:String,
        
    },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push({name:"mine"})
    },
  },

}
</script>
