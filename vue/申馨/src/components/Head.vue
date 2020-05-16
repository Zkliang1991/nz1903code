<template>
    <div class="head">
        <van-nav-bar
        :title="title"
        :left-arrow="show"
        @click-left="onClickLeft"
    >
        <template #right>
            <van-icon  v-if="!login"  name="friends-o" size="38" @click="gotologin"/>
            <van-icon v-if="!search"   name="search" size="38" @click="gotosearch"/>
        </template>
    </van-nav-bar>
    </div>
    
</template>

<script>
export default {
    props:{
        title:String,
        show:Boolean,
        login:Boolean,
        search:Boolean
    },
    methods:{
        onClickLeft(){
            
            this.show?this.$router.go(-1):1;
        },
        gotologin(){
            this.$router.push({name:"login"})
        },
        gotosearch(){
            this.$router.push({name:"search"})
        }
    }
}
</script>
<style lang="scss" scoped>
</style>