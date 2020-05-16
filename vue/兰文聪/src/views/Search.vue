<template>
	<div class="box">
		<van-search
			v-model="keyword"
			show-action
			placeholder="请输入搜索关键词"
			@search="onSearch"
		>
		<template #action>
			<div @click="anonSearch">搜索</div>
		</template>
		</van-search>
	</div>
</template>

<script>
export default {
	data(){
		return{
			keyword:""
		}
	},
	methods:{
		onSearch(val) {
			console.log(val);
			this.value='';
		},
		anonSearch(e) {
			console.log(this.keyword);
			this.value='';
		},
	}
}
</script>

<style lang="scss" scoped>
	
</style>