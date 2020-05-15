<template>
    <van-nav-bar
        :title="title"
        :left-arrow="show"
        @click-left="onClickLeft"
    >
        <template #right>
            <van-icon v-if="!login" @click="gotoLogin" name="friends-o"  size="38" />
            <van-icon v-if="!search" @click="gotoSearch" name="search"  size="38" />
        </template>
    </van-nav-bar>
</template>

<script>
// :left-text="show?'返回':''"
export default {
    props:{
        title:String,
        show:Boolean,
        login:Boolean,
        search:Boolean
    },
    methods:{
        onClickLeft(){
            this.show?this.$router.go(-1):"NZ1903"
        },
        gotoLogin(){
            this.$router.push({name:"login"})
        },
        gotoSearch(){
            this.$router.push({name:"search"})
        }
    }
}
</script>
